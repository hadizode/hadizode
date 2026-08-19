<?php 
/** 
 * Public API — GET 
 * Single bootstrap endpoint the front-end calls once on load. Returns 
 * everything admin-editable: colors/settings, benefits, products, gallery, 
 * and the dynamic order-form definition (steps + fields). 
 * Read-only, no auth required, CORS restricted to known origins. 
 */ 
require_once __DIR__ . '/../config/config.php'; 
require_once __DIR__ . '/../config/db.php'; 
 
header('Content-Type: application/json; charset=utf-8'); 
apply_cors(); 
 
if ($_SERVER['REQUEST_METHOD'] !== 'GET') { 
    json_response(['error' => 'method not allowed'], 405); 
} 
 
$settingsRows = db()->query('SELECT setting_key, value, type FROM settings')->fetchAll(); 
$settings = []; 
foreach ($settingsRows as $row) { 
    $value = $row['value']; 
    if ($row['type'] === 'image' && $value) { 
        $value = MEDIA_UPLOAD_URL . $value; 
    } 
    $settings[$row['setting_key']] = $value; 
} 
 
$benefits = db()->query('SELECT id, title, description, icon_name FROM benefits WHERE is_active = 1 ORDER BY sort_order')->fetchAll(); 
 
$products = db()->query('SELECT id, name, description, details, price_min, image, slug FROM products WHERE is_active = 1 ORDER BY sort_order')->fetchAll(); 
foreach ($products as &$p) { 
    $p['image_url'] = $p['image'] ? MEDIA_UPLOAD_URL . $p['image'] : null; 
    unset($p['image']); 
} 
unset($p); 
 
$gallery = db()->query('SELECT id, title, description, image FROM gallery WHERE is_active = 1 ORDER BY sort_order, created_at DESC')->fetchAll(); 
foreach ($gallery as &$g) { 
    $g['image_url'] = MEDIA_UPLOAD_URL . $g['image']; 
    unset($g['image']); 
} 
unset($g); 
 
$steps = db()->query('SELECT id, title, subtitle FROM form_steps ORDER BY sort_order')->fetchAll(); 
$fieldsRaw = db()->query('SELECT * FROM form_fields WHERE is_active = 1 ORDER BY step_id, sort_order')->fetchAll(); 
 
$fieldsByStep = []; 
foreach ($fieldsRaw as $f) { 
    $fieldsByStep[$f['step_id']][] = [ 
        'key'           => $f['field_key'], 
        'label'         => $f['label'], 
        'type'          => $f['type'], 
        'icon'          => $f['icon_name'], 
        'options'       => $f['options'] ? json_decode($f['options'], true) : null, 
        'placeholder'   => $f['placeholder'], 
        'required'      => (bool) $f['is_required'], 
        'depends_on'    => $f['depends_on'] ?? null, 
        'depends_value' => $f['depends_value'] ?? null, 
    ]; 
} 
 
$form = []; 
foreach ($steps as $s) { 
    $form[] = [ 
        'title'    => $s['title'], 
        'subtitle' => $s['subtitle'], 
        'fields'   => $fieldsByStep[$s['id']] ?? [], 
    ]; 
} 
 
json_response([ 
    'settings' => $settings, 
    'benefits' => $benefits, 
    'products' => $products, 
    'gallery'  => $gallery, 
    'form'     => $form, 
]); 
