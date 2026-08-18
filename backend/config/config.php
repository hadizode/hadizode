<?php 
/** 
 * config.php — central configuration. 
 * EDIT the DB_* values and confirm ALLOWED_ORIGINS before going live. 
 */ 
 
// error_reporting(E_ALL); 
ini_set('display_errors', '1');   // نمایش خطاها برای دیباگ 
// ini_set('display_startup_errors', '1'); 
ini_set('log_errors', '1'); 
 
// --------------------------------------------------------------------------- 
// Database credentials — EDIT for your hosting environment 
// --------------------------------------------------------------------------- 
define('DB_HOST', 'localhost'); 
define('DB_NAME', 'north'); 
define('DB_USER', 'me'); 
define('DB_PASS', 'goodyear'); 
define('DB_CHARSET', 'utf8mb4'); 
 
// --------------------------------------------------------------------------- 
// Paths / URLs — one shared media library used by products, gallery, hero 
// images, etc. Kept OUTSIDE the PHP-executing folders' logic (still under 
// /assets so it's servable, but .htaccess below disables script execution 
// inside it). 
// --------------------------------------------------------------------------- 
define('MEDIA_UPLOAD_DIR', realpath(__DIR__ . '/../../assets/media') ?: __DIR__ . '/../../assets/media'); 
define('MEDIA_UPLOAD_URL', '/assets/media/'); 
 
define('ORDER_UPLOAD_DIR', realpath(__DIR__ . '/../../assets/orders') ?: __DIR__ . '/../../assets/orders'); 
define('ORDER_UPLOAD_URL', '/assets/orders/'); 
 
define('ALLOWED_IMAGE_MIME', ['image/jpeg', 'image/png', 'image/webp']); 
define('ALLOWED_IMAGE_EXT', ['jpg', 'jpeg', 'png', 'webp']); 
define('MAX_UPLOAD_BYTES', 5 * 1024 * 1024); // 5 MB 
 
// Front-end origin(s) allowed to call the public API — EDIT to your real domain(s). 
// Fixed: this constant name must match everywhere it's referenced (a previous 
// bug used the misspelled ALLOWD_ORIGINS in one file, which fatally broke it). 
define('ALLOWED_ORIGINS', [ 
    'https://example.com', 
    'https://www.example.com', 
    'http://localhost:5173', // vite dev server 
]); 
 
// --------------------------------------------------------------------------- 
// Session hardening 
// --------------------------------------------------------------------------- 
if (session_status() === PHP_SESSION_NONE) { 
    $isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') 
        || (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https'); 
 
    session_set_cookie_params([ 
        'lifetime' => 0, 
        'path'     => '/', 
        'domain'   => '', 
        'secure'   => $isHttps, 
        'httponly' => true, 
        'samesite' => 'Lax', 
    ]); 
    session_name('ADMINSESSID'); 
    session_start(); 
} 
 
define('ADMIN_SESSION_IDLE_TIMEOUT', 30 * 60); 
 
// --------------------------------------------------------------------------- 
// CSRF helpers 
// --------------------------------------------------------------------------- 
function csrf_token(): string 
{ 
    if (empty($_SESSION['csrf_token'])) { 
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32)); 
    } 
    set_csrf_cookie($_SESSION['csrf_token']); 
    return $_SESSION['csrf_token']; 
} 

/**
 * Mirror the CSRF token into a readable cookie (double-submit defense).
 *
 * The session token is the primary source of truth; the cookie lets a
 * page prove possession via X-CSRF-Cookie without relying on JS-held token
 * state that can go stale across page reloads / parallel tabs. It is NOT
 * HttpOnly (CSRF tokens are not secrets vs. XSS by spec), but it IS
 * SameSite=Lax so cross-site requests cannot read or submit it.
 */
function set_csrf_cookie(string $token): void 
{ 
    if (headers_sent()) { 
        return; // legacy admin pages render HTML before csrf_field(); don't warn 
    } 
    $isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') 
        || (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https'); 
    setcookie('CSRF', $token, [ 
        'expires'  => 0, 
        'path'     => '/', 
        'domain'   => '', 
        'secure'   => $isHttps, 
        'httponly' => false, 
        'samesite' => 'Lax', 
    ]); 
} 
 
function csrf_field(): string 
{ 
    return '<input type="hidden" name="csrf_token" value="' . htmlspecialchars(csrf_token(), ENT_QUOTES, 'UTF-8') . '">'; 
} 
 
function csrf_verify(?string $token): bool 
{ 
    return !empty($token) && !empty($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token); 
} 
 
// --------------------------------------------------------------------------- 
// Small helpers 
// --------------------------------------------------------------------------- 
function e(string $value): string 
{ 
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8'); 
} 
 
function json_response($data, int $status = 200): void 
{ 
    http_response_code($status); 
    header('Content-Type: application/json; charset=utf-8'); 
    echo json_encode($data, JSON_UNESCAPED_UNICODE); 
    exit; 
} 
 
function clean_str(?string $value): string 
{ 
    return trim((string) $value); 
} 
 
/** CORS helper shared by every public API endpoint. */ 
function apply_cors(): void 
{ 
    $origin = $_SERVER['HTTP_ORIGIN'] ?? ''; 
    if (in_array($origin, ALLOWED_ORIGINS, true)) { 
        header('Access-Control-Allow-Origin: ' . $origin); 
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); 
        header('Access-Control-Allow-Headers: Content-Type'); 
    } 
    header('Vary: Origin'); 
 
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { 
        http_response_code(204); 
        exit; 
    } 
} 
 
/** Random, collision-safe filename for any user-uploaded image. */ 
function random_filename(string $originalName): string 
{ 
    $ext = strtolower(pathinfo($originalName, PATHINFO_EXTENSION)); 
    return bin2hex(random_bytes(16)) . '.' . $ext; 
} 
 
/** Verify + move an uploaded image; returns the stored filename or throws. */ 
function handle_image_upload(array $file, string $targetDir): string 
{ 
    if ($file['error'] !== UPLOAD_ERR_OK) { 
        throw new RuntimeException('آپلود فایل با خطا مواجه شد.'); 
    } 
    if ($file['size'] > MAX_UPLOAD_BYTES) { 
        throw new RuntimeException('حجم فایل بیش از حد مجاز است (حداکثر ۵ مگابایت).'); 
    } 
    $finfo    = new finfo(FILEINFO_MIME_TYPE); 
    $realMime = $finfo->file($file['tmp_name']); 
    $ext      = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION)); 
 
    if (!in_array($realMime, ALLOWED_IMAGE_MIME, true) || !in_array($ext, ALLOWED_IMAGE_EXT, true)) { 
        throw new RuntimeException('فرمت تصویر مجاز نیست (فقط jpg, png, webp).'); 
    } 
 
    if (!is_dir($targetDir) && !mkdir($targetDir, 0755, true)) { 
        throw new RuntimeException('پوشه آپلود در دسترس نیست.'); 
    } 
 
    $newName = random_filename($file['name']); 
    $target  = rtrim($targetDir, '/') . '/' . $newName; 
 
    if (!move_uploaded_file($file['tmp_name'], $target)) { 
        throw new RuntimeException('ذخیره فایل با خطا مواجه شد.'); 
    } 
    return $newName; 
}

/**
 * Silently remove an uploaded file. Never throws: a missing file or a
 * failed unlink is not a request-fatal condition (parity with the legacy
 * panel's `@unlink` call sites).
 */
function unlink_upload(string $dir, string $filename): bool
{
    if ($filename === '') {
        return false;
    }
    $path = rtrim($dir, '/') . '/' . basename($filename);
    return is_file($path) ? @unlink($path) : false;
} 
