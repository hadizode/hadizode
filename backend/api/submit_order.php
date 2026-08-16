<?php 
/** 
 * Public API — POST (multipart/form-data) 
 * Accepts a new order. Fields are validated against the CURRENT admin-defined 
 * form_fields set (never trust the client's field list), then stored as a 
 * single JSON blob per submission so the schema can keep changing without 
 * migrations. 
 * 
 * Protections: CORS allow-list, honeypot, per-IP rate limit, prepared 
 * statements, real image-type check + random filename for uploads. 
 */ 
require_once __DIR__ . '/../config/config.php'; 
require_once __DIR__ . '/../config/db.php'; 
 
header('Content-Type: application/json; charset=utf-8'); 
apply_cors(); 
 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { 
    json_response(['error' => 'method not allowed'], 405); 
} 
 
// --- Honeypot --- 
if (!empty($_POST['website'])) { 
    json_response(['ok' => true, 'order_id' => 0, 'tracking_code' => 'OK']); 
} 
 
// --- Basic per-IP rate limit (5 requests / 5 minutes) --- 
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown'; 
$rateFile = sys_get_temp_dir() . '/order_rl_' . md5($ip) . '.json'; 
$now = time(); 
$hits = is_file($rateFile) ? (json_decode((string) file_get_contents($rateFile), true) ?: []) : []; 
$hits = array_values(array_filter($hits, fn($t) => $t > $now - 300)); 
if (count($hits) >= 5) { 
    json_response(['error' => 'too many requests, please try again later'], 429); 
} 
$hits[] = $now; 
file_put_contents($rateFile, json_encode($hits)); 
 
// --- Load the CURRENT field definitions from the DB (source of truth) --- 
$fields = db()->query('SELECT * FROM form_fields WHERE is_active = 1')->fetchAll(); 
 
$errors = []; 
$data = []; 
$storedImageName = null; 
 
foreach ($fields as $f) { 
    $key  = $f['field_key']; 
    $type = $f['type']; 
 
    // Check if field should be visible based on depends_on/depends_value 
    $isVisible = true; 
    if (!empty($f['depends_on']) && !empty($f['depends_value'])) { 
        $triggerValue = $_POST[$f['depends_on']] ?? ''; 
        if ($triggerValue === '') { 
            $isVisible = false; 
        } else { 
            $allowedValues = array_map('trim', explode(',', $f['depends_value'])); 
            $isVisible = in_array($triggerValue, $allowedValues, true); 
        } 
    } 
 
    // Skip validation for hidden fields (even if required) 
    if (!$isVisible) { 
        continue; 
    } 
 
    if ($type === 'file') { 
        if (!empty($_FILES[$key]) && $_FILES[$key]['error'] !== UPLOAD_ERR_NO_FILE) { 
            try { 
                $storedImageName = handle_image_upload($_FILES[$key], ORDER_UPLOAD_DIR); 
            } catch (Throwable $ex) { 
                $errors[] = $ex->getMessage(); 
            } 
        } elseif ($f['is_required']) { 
            $errors[] = $f['label'] . ' الزامی است.'; 
        } 
        continue; 
    } 
 
    $raw = clean_str($_POST[$key] ?? ''); 
 
    if ($f['is_required'] && $raw === '') { 
        $errors[] = $f['label'] . ' الزامی است.'; 
        continue; 
    } 
    if ($raw === '') continue; 
 
    if (mb_strlen($raw) > 2000) { 
        $errors[] = $f['label'] . ' بیش از حد طولانی است.'; 
        continue; 
    } 
 
    if (in_array($type, ['select', 'segmented'], true) && $f['options']) { 
        $allowedValues = array_column(json_decode($f['options'], true) ?: [], 'value'); 
        if (!in_array($raw, $allowedValues, true)) { 
            $errors[] = $f['label'] . ' معتبر نیست.'; 
            continue; 
        } 
        // Store label instead of value for select/segmented fields 
        $optionsMap = array_column(json_decode($f['options'], true) ?: [], 'label', 'value'); 
        $raw = $optionsMap[$raw] ?? $raw; 
    } 
 
    if ($key === 'phone' && !preg_match('/^09[0-9]{9}$/', $raw)) { 
        $errors[] = 'شماره تلفن معتبر وارد کنید.'; 
        continue; 
    } 
 
    if ($type === 'number' && $raw !== '' && (!is_numeric($raw) || $raw < 0 || $raw > 100000)) { 
        $errors[] = $f['label'] . ' معتبر نیست.'; 
        continue; 
    } 
 
    $data[$key] = $raw; 
} 
 
if ($errors) { 
    json_response(['error' => implode(' ', $errors)], 422); 
} 
 
$stmt = db()->prepare('INSERT INTO orders (form_data, image, ip_address, tracking_code) VALUES (:d, :i, :ip, :tc)'); 
$stmt->execute([ 
    'd'  => json_encode($data, JSON_UNESCAPED_UNICODE), 
    'i'  => $storedImageName, 
    'ip' => $ip, 
    'tc' => null, // Will be updated after insert 
]); 
 
$orderId = (int) db()->lastInsertId(); 
$trackingCode = str_pad((string) $orderId, 5, '0', STR_PAD_LEFT); 
 
// Update the order with the tracking code 
db()->prepare('UPDATE orders SET tracking_code = :tc WHERE id = :id')->execute([ 
    'tc' => $trackingCode, 
    'id' => $orderId, 
]); 
 
json_response(['ok' => true, 'order_id' => $orderId, 'tracking_code' => $trackingCode]); 
