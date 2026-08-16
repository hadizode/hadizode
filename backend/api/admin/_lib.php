<?php
/**
 * _lib.php — shared bootstrap for the new admin JSON API.
 *
 * Provides: session/auth guard, CSRF enforcement for mutating requests,
 * RBAC checks (roles joined in migration 001), audit-log writer, and
 * small request helpers.
 *
 * Endpoint files require this first, then call e.g.:
 *
 *     require_admin('orders.read');                       // 401/403 guard
 *     $orders = ...;
 *     $before = $oldRow;
 *     ...update...
 *     audit_write('orders.update', 'order', $id, $before, $after);
 *     json_response(['data' => $after]);
 *
 * SECURITY POSTURE
 *   - Auth is session-cookie based (SameSite=Lax, HttpOnly — set in
 *     config.php). No JWTs: same-origin panel, no localStorage token
 *     leakage surface.
 *   - Every mutating method must carry a valid CSRF token (header
 *     X-CSRF-Token or body field csrf_token). Token is returned by the
 *     me endpoint and rotated on login.
 *   - Permissions are enforced HERE only; the client hiding UI is
 *     convenience, never security.
 *   - audit_logs is append-only: this file is the sole writer; no
 *     endpoint ever UPDATEs or DELETEs it.
 */

require_once __DIR__ . '/../../config/config.php';
require_once __DIR__ . '/../../config/db.php';

/* ---------------------------------------------------------------------------
 * Hardening that works regardless of Apache config
 *
 * NOTE: this host runs "AllowOverride None" for /srv/http, so the .htaccess
 * files in this repo (including legacy ones) are NOT applied. Everything
 * security-critical must therefore live in PHP:
 * --------------------------------------------------------------------------- */

// Refuse to run if requested directly.
if (basename((string) ($_SERVER['SCRIPT_FILENAME'] ?? '')) === '_lib.php') {
    http_response_code(403);
    exit;
}

// Security headers the dead .htaccess files were supposed to set.
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: strict-origin-when-cross-origin');
header('Cache-Control: no-store');

/* ---------------------------------------------------------------------------
 * Request shape helpers
 * ------------------------------------------------------------------------- */

/** Client IP (direct connect only; this host is not behind a proxy). */
function client_ip(): string
{
    return $_SERVER['REMOTE_ADDR'] ?? '';
}

/**
 * Parsed JSON request body ([] on missing/invalid). Cached: php://input is
 * a rewindable-once stream, and the CSRF gate reads it before endpoints do.
 */
function request_json(): array
{
    static $cached = null;
    if ($cached !== null) {
        return $cached;
    }
    $raw = file_get_contents('php://input');
    if ($raw === false || $raw === '') {
        $cached = [];
        return $cached;
    }
    $data = json_decode($raw, true);
    $cached = is_array($data) ? $data : [];
    return $cached;
}

/** True when the current request mutates state. */
function is_mutating_method(): bool
{
    return in_array($_SERVER['REQUEST_METHOD'] ?? 'GET', ['POST', 'PUT', 'PATCH', 'DELETE'], true);
}

/**
 * Is a browser Origin header acceptable for the admin API?
 *
 * Allows: the backend's own scheme+host, the dev origins listed in
 * ALLOWED_ORIGINS (config.php — already includes http://localhost:5173 for
 * the Vite dev server), and any localhost/127.x loopback origin during
 * development. Foreign origins are always rejected.
 */
function admin_origin_allowed(string $origin): bool
{
    $host = $_SERVER['HTTP_HOST'] ?? '';
    $isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
        || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
    $scheme = $isHttps ? 'https' : 'http';

    // 1. Exact match of the backend's own origin.
    if ($host !== '' && $origin === $scheme . '://' . $host) {
        return true;
    }

    // 2. Explicit dev allowlist from config.php.
    if (in_array($origin, ALLOWED_ORIGINS, true)) {
        return true;
    }

    // 3. Loopback origins (any port) — dev machines only, never routable
    //    as an attacker's phishing origin from the outside.
    $parts = parse_url($origin);
    $originHost = strtolower((string) ($parts['host'] ?? ''));
    return $originHost === 'localhost'
        || $originHost === '127.0.0.1'
        || $originHost === '[::1]';
}

/* ---------------------------------------------------------------------------
 * Authentication
 * ------------------------------------------------------------------------- */

/** @return array{admin_id:int, username:string, permissions:string[], roles:string[]}|null */
function current_admin(): ?array
{
    if (empty($_SESSION['admin_id']) || empty($_SESSION['admin_permissions'])) {
        return null;
    }
    return [
        'admin_id'    => (int) $_SESSION['admin_id'],
        'username'    => (string) ($_SESSION['admin_user'] ?? ''),
        'permissions' => (array) $_SESSION['admin_permissions'],
        'roles'       => (array) ($_SESSION['admin_roles'] ?? []),
    ];
}

/**
 * Load an admin's permission union + role names. Called at login; cached in
 * the session to avoid a join per request.
 *
 * @return array{permissions:string[], roles:string[]}
 */
function load_admin_access(int $adminId): array
{
    $stmt = db()->prepare(
        'SELECT rp.permission, r.name AS role_name
           FROM admin_roles ar
           JOIN roles r              ON r.id  = ar.role_id
           LEFT JOIN role_permissions rp ON rp.role_id = r.id
          WHERE ar.admin_id = :id'
    );
    $stmt->execute(['id' => $adminId]);

    $permissions = [];
    $roles = [];
    foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
        if ($row['permission'] !== null && $row['permission'] !== '') {
            $permissions[$row['permission']] = true;
        }
        $roles[$row['role_name']] = true;
    }
    return [
        'permissions' => array_keys($permissions),
        'roles'       => array_keys($roles),
    ];
}

/**
 * Guard: require a logged-in admin with the given permission.
 * Sends 401 (unauthenticated) or 403 (missing permission) and exits.
 */
function require_admin(?string $permission = null): array
{
    $admin = current_admin();
    if ($admin === null) {
        json_response(['error' => 'Not authenticated'], 401);
    }
    if ($permission !== null && !in_array($permission, $admin['permissions'], true)) {
        json_response(['error' => 'Forbidden: missing permission ' . $permission], 403);
    }
    return $admin;
}

/* ---------------------------------------------------------------------------
 * CSRF
 * ------------------------------------------------------------------------- */

function verify_csrf_or_die(): void
{
    // Token sources, in priority order:
    //   1. X-CSRF-Token header (token cached client-side after login/me)
    //   2. csrf_token in the JSON body or the form body
    //   3. X-CSRF-Cookie header (double-submit: reads back the CSRF cookie
    //      set by csrf_token(); SameSite=Lax cross-site requests can't do
    //      this, so it's as safe as header-based schemes)
    $token = $_SERVER['HTTP_X_CSRF_TOKEN']
        ?? request_json()['csrf_token']
        ?? $_POST['csrf_token']
        ?? $_SERVER['HTTP_X_CSRF_COOKIE']
        ?? null;
    if (!csrf_verify(is_string($token) ? $token : null)) {
        // 403, not 419: this PHP/Apache stack has no status line for the
        // non-standard 419 and rewrites it to 500. 403 is standard-clean.
        json_response(['error' => 'Invalid or missing CSRF token'], 403);
    }
}

/* ---------------------------------------------------------------------------
 * Bootstrap (runs on require)
 * ------------------------------------------------------------------------- */

// Legacy idle-timeout behaviour, carried over from backend/admin/auth.php.
if (!empty($_SESSION['admin_id'])) {
    if (!empty($_SESSION['last_active']) && (time() - $_SESSION['last_active']) > ADMIN_SESSION_IDLE_TIMEOUT) {
        session_unset();
        session_destroy();
        json_response(['error' => 'Session expired'], 401);
    }
    $_SESSION['last_active'] = time();
}

// Same-origin JSON API: deny cross-origin browser requests, with explicit
// allowances for dev environments. (Public API keeps its own CORS allowlist
// in apply_cors().)
//
// Why the allowances exist: during development the SPA is served by Vite on
// :5173 and calls reach PHP through Vite's proxy, so the browser Origin
// (http://127.0.0.1:5173 etc.) can never equal the backend Host. Same-origin
// comparison alone would 403 every dev login. The CSRF token check below
// remains the primary CSRF defense; this Origin layer is defense-in-depth.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !admin_origin_allowed($origin)) {
    json_response(['error' => 'Cross-origin requests are not allowed'], 403);
}

// CSRF gate: all mutating requests need a valid token before any endpoint
// code runs. Login is exempt only when the session is unauthenticated.
if (is_mutating_method() && !empty($_SESSION['admin_id'])) {
    verify_csrf_or_die();
}

/* ---------------------------------------------------------------------------
 * Audit log
 * ------------------------------------------------------------------------- */

/**
 * Append an audit entry. Never throws into the request: an audit failure is
 * logged to the PHP error log instead of breaking the triggering operation.
 */
function audit_write(
    string $action,
    string $entityType,
    int|string|null $entityId,
    mixed $oldValue = null,
    mixed $newValue = null
): void {
    try {
        $admin = current_admin();
        $stmt = db()->prepare(
            'INSERT INTO audit_logs
                (admin_id, admin_user, action, entity_type, entity_id,
                 old_value, new_value, ip_address, user_agent)
             VALUES
                (:admin_id, :admin_user, :action, :entity_type, :entity_id,
                 :old_value, :new_value, :ip, :ua)'
        );
        $stmt->execute([
            'admin_id'    => $admin['admin_id'] ?? null,
            'admin_user'  => $admin['username'] ?? null,
            'action'      => $action,
            'entity_type' => $entityType,
            'entity_id'   => $entityId === null ? null : (string) $entityId,
            'old_value'   => $oldValue === null ? null : json_encode($oldValue, JSON_UNESCAPED_UNICODE),
            'new_value'   => $newValue === null ? null : json_encode($newValue, JSON_UNESCAPED_UNICODE),
            'ip'          => client_ip(),
            'ua'          => substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 255),
        ]);
    } catch (Throwable $e) {
        error_log('audit_write failed: ' . $e->getMessage());
    }
}

/* ---------------------------------------------------------------------------
 * Login rate limiting (in addition to the per-account lockout columns)
 * ------------------------------------------------------------------------- */

/**
 * Simple per-IP sliding window: max $max attempts per $windowSec seconds.
 * Backed by a temp file; no external cache service required at this scale.
 */
function login_rate_limited(string $ip, int $max = 10, int $windowSec = 900): bool
{
    if ($ip === '') {
        return false;
    }
    $file = sys_get_temp_dir() . '/nsw_login_rl_' . md5($ip);
    $now = time();
    $hits = [];
    if (is_file($file)) {
        $data = json_decode((string) file_get_contents($file), true);
        $hits = is_array($data) ? array_filter($data, static fn ($t) => $t > $now - $windowSec) : [];
    }
    $hits[] = $now;
    file_put_contents($file, json_encode(array_values($hits)), LOCK_EX);
    return count($hits) > $max;
}

/** Record a failed/successful login in the audit trail. */
function audit_auth(string $action, int|string|null $adminId, string $username): void
{
    try {
        $stmt = db()->prepare(
            'INSERT INTO audit_logs
                (admin_id, admin_user, action, entity_type, entity_id, ip_address, user_agent)
             VALUES
                (:admin_id, :admin_user, :action, "auth", NULL, :ip, :ua)'
        );
        $stmt->execute([
            'admin_id'   => $adminId,
            'admin_user' => $username,
            'action'     => $action,
            'ip'         => client_ip(),
            'ua'         => substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 255),
        ]);
    } catch (Throwable $e) {
        error_log('audit_auth failed: ' . $e->getMessage());
    }
}

/* ---------------------------------------------------------------------------
 * Sortable-list helpers shared by the content modules
 * ------------------------------------------------------------------------- */

/** Tables whose rows expose an integer sort_order column. */
const REORDERABLE_TABLES = ['benefits', 'products', 'gallery', 'form_fields', 'form_steps'];

/** Set sort_order = index for each id (0-based). Whitelisted tables only. */
function apply_reorder(array $ids, string $table): void
{
    if (!in_array($table, REORDERABLE_TABLES, true)) {
        json_response(['error' => 'Unsupported table'], 400);
    }
    if (!$ids) {
        return;
    }
    $stmt = db()->prepare("UPDATE `$table` SET sort_order = :s WHERE id = :id");
    foreach (array_values($ids) as $i => $id) {
        $stmt->execute(['s' => $i, 'id' => (int) $id]);
    }
}

/** Next sort_order value for a table (optionally scoped by a column). */
function next_sort_order(string $table, string $scopeCol = '', int|string $scopeVal = 0): int
{
    if (!in_array($table, REORDERABLE_TABLES, true)) {
        json_response(['error' => 'Unsupported table'], 400);
    }
    if ($scopeCol !== '') {
        $stmt = db()->prepare("SELECT COALESCE(MAX(sort_order),0) FROM `$table` WHERE `$scopeCol` = :v");
        $stmt->execute(['v' => $scopeVal]);
        return (int) $stmt->fetchColumn() + 1;
    }
    $stmt = db()->prepare("SELECT COALESCE(MAX(sort_order),0) FROM `$table`");
    $stmt->execute();
    return (int) $stmt->fetchColumn() + 1;
}

/** Valid 6-digit hex color (the format the public site CSS variables expect). */
function is_valid_hex_color(?string $value): bool
{
    return is_string($value) && preg_match('/^#[0-9a-fA-F]{6}$/', trim($value)) === 1;
}

/**
 * Find where a media filename is referenced, so files are never deleted out
 * from under something that still uses them. Counts:
 *   - the media library table itself (unless $excludeMediaId is passed,
 *     used by the media delete endpoint to avoid self-blocking)
 *   - every content row that points at the file
 *
 * Content rows live in the SHARED media dir, so one file can be referenced
 * by the media library AND several product/gallery/blog/settings rows at once.
 */
function media_usage(string $filename, ?int $excludeMediaId = null): array
{
    if ($filename === '') {
        return [];
    }
    $usage = [];
    $pdo = db();

    // Media library rows (the central library the user can pick from).
    $stmt = $pdo->prepare('SELECT id FROM media WHERE filename = :f');
    $stmt->execute(['f' => $filename]);
    foreach ($stmt->fetchAll(PDO::FETCH_COLUMN) as $mid) {
        if ($excludeMediaId !== null && (int) $mid === $excludeMediaId) {
            continue; // don't count the row about to be deleted
        }
        $usage[] = ['entity' => 'کتابخانه', 'id' => (int) $mid];
    }

    $stmt = $pdo->prepare('SELECT id FROM products WHERE image = :f');
    $stmt->execute(['f' => $filename]);
    foreach ($stmt->fetchAll(PDO::FETCH_COLUMN) as $id) {
        $usage[] = ['entity' => 'محصول', 'id' => (int) $id];
    }

    $stmt = $pdo->prepare('SELECT id FROM gallery WHERE image = :f');
    $stmt->execute(['f' => $filename]);
    foreach ($stmt->fetchAll(PDO::FETCH_COLUMN) as $id) {
        $usage[] = ['entity' => 'گالری', 'id' => (int) $id];
    }

    $stmt = $pdo->prepare('SELECT id FROM blog_posts WHERE image = :f');
    $stmt->execute(['f' => $filename]);
    foreach ($stmt->fetchAll(PDO::FETCH_COLUMN) as $id) {
        $usage[] = ['entity' => 'وبلاگ', 'id' => (int) $id];
    }

    $stmt = $pdo->prepare("SELECT setting_key FROM settings WHERE type = 'image' AND value = :f");
    $stmt->execute(['f' => $filename]);
    foreach ($stmt->fetchAll(PDO::FETCH_COLUMN) as $key) {
        $usage[] = ['entity' => 'تنظیمات', 'id' => $key];
    }

    return $usage;
}

/**
 * Delete a media file ONLY if no library row and no content row references
 * it. Returns true when the file was actually unlinked.
 *
 * ALWAYS call this AFTER the DB row that referenced $filename has been
 * deleted, so that row is not counted among remaining references.
 *
 * @param int|null $excludeMediaId media.php passes its own (already-deleted)
 * media id so the scan doesn't need to exclude anything special; other sites
 * pass null and let the media-library count stand normally.
 */
function safe_unlink_media(string $dir, string $filename, ?int $excludeMediaId = null): bool
{
    if ($filename === '') {
        return false;
    }
    if (count(media_usage($filename, $excludeMediaId)) > 0) {
        return false; // still referenced elsewhere — keep the file
    }
    $path = rtrim($dir, '/') . '/' . basename($filename);
    return is_file($path) ? @unlink($path) : false;
}

/**
 * Resolve an optional image input for create/update endpoints.
 *
 * Accepts EITHER:
 *   - a multipart file upload under the given field name (legacy parity), or
 *   - an <field>_filename value naming an existing file in the upload dir
 *     (the "pick from media library" path).
 *
 * @return array{0:?string filename, 1:?string error}
 */
function resolve_image_input(string $fieldName, string $targetDir): array
{
    // 1. New file upload.
    $file = $_FILES[$fieldName] ?? null;
    if (is_array($file) && ($file['name'] ?? '') !== '' && $file['error'] !== UPLOAD_ERR_NO_FILE) {
        try {
            $filename = handle_image_upload($file, $targetDir);
            return [$filename, null];
        } catch (Throwable $ex) {
            return [null, $ex->getMessage()];
        }
    }

    // 2. Existing filename (media library pick or keep-current).
    $raw = $_POST[$fieldName . '_filename']
        ?? request_json()[$fieldName . '_filename']
        ?? null;
    if (is_string($raw) && trim($raw) !== '') {
        $filename = basename(trim($raw));
        // Only accept a filename that actually exists in the target dir — this
        // prevents arbitrary-path tricks via a crafted filename.
        if (is_file(rtrim($targetDir, '/') . '/' . $filename)) {
            return [$filename, null];
        }
        return [null, 'فایل تصویر انتخابی در کتابخانه یافت نشد.'];
    }

    return [null, null]; // no image supplied
}
