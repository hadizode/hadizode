<?php
/**
 * auth.php — JSON auth endpoints for the new admin panel.
 *
 *   GET  auth.php?action=me      → current session info + CSRF token
 *   POST auth.php?action=login   → { username, password }
 *   POST auth.php?action=logout  → destroys session (CSRF-checked by _lib)
 *   POST auth.php?action=csrf    → reissues CSRF token for the session
 *
 * Login is CSRF-exempt (the session guard in _lib.php only enforces CSRF
 * for already-authenticated sessions) but IP-rate-limited and protected
 * by the per-account lockout columns.
 */

require_once __DIR__ . '/_lib.php';

$action = clean_str($_GET['action'] ?? 'me');
$method = $_SERVER['REQUEST_METHOD'];

switch ($action) {
    case 'me':
        $admin = current_admin();
        json_response([
            'data' => $admin === null ? null : [
                'admin_id'    => $admin['admin_id'],
                'username'    => $admin['username'],
                'roles'       => $admin['roles'],
                'permissions' => $admin['permissions'],
                'csrf_token'  => csrf_token(),
            ],
        ]);

    case 'login':
        if ($method !== 'POST') {
            json_response(['error' => 'Method not allowed'], 405);
        }
        $body = array_merge($_POST, request_json());
        $username = clean_str($body['username'] ?? '');
        $password = (string) ($body['password'] ?? '');

        if ($username === '' || $password === '') {
            json_response(['error' => 'نام کاربری و رمز عبور را وارد کنید.'], 422);
        }

        if (login_rate_limited(client_ip())) {
            json_response(['error' => 'تلاش بیش از حد مجاز. چند دقیقه دیگر دوباره تلاش کنید.'], 429);
        }

        $stmt = db()->prepare(
            'SELECT id, username, password_hash, failed_logins, locked_until
               FROM admins WHERE username = :u LIMIT 1'
        );
        $stmt->execute(['u' => $username]);
        $admin = $stmt->fetch();

        $isLocked = $admin && !empty($admin['locked_until'])
            && strtotime((string) $admin['locked_until']) > time();

        if ($isLocked) {
            json_response(['error' => 'حساب کاربری به دلیل تلاش‌های ناموفق مکرر موقتا قفل شده است.'], 423);
        }

        if ($admin && password_verify($password, $admin['password_hash'])) {
            db()->prepare('UPDATE admins SET failed_logins = 0, locked_until = NULL WHERE id = :id')
                ->execute(['id' => $admin['id']]);

            session_regenerate_id(true);
            $access = load_admin_access((int) $admin['id']);

            $_SESSION['admin_id']          = $admin['id'];
            $_SESSION['admin_user']        = $admin['username'];
            $_SESSION['admin_permissions'] = $access['permissions'];
            $_SESSION['admin_roles']      = $access['roles'];
            $_SESSION['last_active']       = time();
            // Rotate CSRF token on privilege change.
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));

            audit_auth('auth.login', (int) $admin['id'], (string) $admin['username']);

            json_response(['data' => [
                'admin_id'    => (int) $admin['id'],
                'username'    => $admin['username'],
                'roles'       => $access['roles'],
                'permissions' => $access['permissions'],
                'csrf_token'  => csrf_token(),
            ]]);
        }

        if ($admin) {
            $failed = (int) $admin['failed_logins'] + 1;
            $lockUntil = $failed >= 5 ? date('Y-m-d H:i:s', time() + 300) : null;
            db()->prepare('UPDATE admins SET failed_logins = :f, locked_until = :l WHERE id = :id')
                ->execute(['f' => $failed, 'l' => $lockUntil, 'id' => $admin['id']]);
        }
        audit_auth('auth.login_failed', $admin['id'] ?? null, $username);
        json_response(['error' => 'نام کاربری یا رمز عبور اشتباه است.'], 401);

    case 'logout':
        if ($method !== 'POST') {
            json_response(['error' => 'Method not allowed'], 405);
        }
        if (!empty($_SESSION['admin_id'])) {
            audit_auth('auth.logout', (int) $_SESSION['admin_id'], (string) ($_SESSION['admin_user'] ?? ''));
            session_unset();
            session_destroy();
            session_regenerate_id(true);
        }
        json_response(['data' => ['ok' => true]]);

    case 'csrf':
        if ($method !== 'POST') {
            json_response(['error' => 'Method not allowed'], 405);
        }
        // Reached only for authenticated sessions (CSRF gate passed).
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        json_response(['data' => ['csrf_token' => csrf_token()]]);

    default:
        json_response(['error' => 'Unknown action'], 404);
}
