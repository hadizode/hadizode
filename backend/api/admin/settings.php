<?php
/**
 * settings.php — grouped site settings (colors, hero, general, collaboration).
 *
 *   GET  settings.php           → grouped settings with labels/types (settings.read)
 *   PUT  settings.php           → { values: { key: value } } (settings.write)
 *
 * Color values are validated as 6-digit hex before saving — an invalid value
 * would propagate straight into the public site's CSS variables (parity
 * with legacy settings.php validation).
 * Image-type settings receive a FILENAME (upload goes through media.php);
 * no binary payloads land here.
 */

require_once __DIR__ . '/_lib.php';

$GROUP_LABELS = [
    'colors'        => 'رنگ‌ها',
    'general'       => 'اطلاعات عمومی سایت',
    'hero'          => 'بخش معرفی (Hero)',
    'collaboration' => 'بخش همکاری',
];
const ALLOWED_TYPES = ['text', 'textarea', 'color', 'image', 'url', 'number'];

$method = $_SERVER['REQUEST_METHOD'];

/* -------------------------------------------------------------------------
 * Read — grouped
 * ---------------------------------------------------------------------- */
if ($method === 'GET') {
    require_admin('settings.read');

    $rows = db()->query(
        'SELECT id, setting_key, value, type, group_name, label, sort_order
           FROM settings ORDER BY group_name, sort_order'
    )->fetchAll(PDO::FETCH_ASSOC);

    $grouped = [];
    foreach ($rows as $row) {
        $g = $row['group_name'];
        if (!isset($grouped[$g])) {
            $grouped[$g] = [
                'name'  => $g,
                'label' => $GROUP_LABELS[$g] ?? $g,
                'items' => [],
            ];
        }
        $grouped[$g]['items'][] = $row;
    }

    json_response([
        'data' => [
            'groups'    => array_values($grouped),
            'media_url' => MEDIA_UPLOAD_URL,
        ],
    ]);
}

/* -------------------------------------------------------------------------
 * Update — partial, per-key validation
 * ---------------------------------------------------------------------- */
if ($method === 'PUT') {
    $admin = require_admin('settings.write');
    $body = request_json();
    $values = $body['values'] ?? null;
    if (!is_array($values) || !$values) {
        json_response(['error' => 'values آرایه‌ای از کلید/مقدار الزامی است.'], 422);
    }

    $pdo = db();
    $existing = [];
    foreach ($pdo->query('SELECT setting_key, value, type FROM settings')->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $existing[$row['setting_key']] = $row;
    }

    $errors = [];
    $changed = [];
    foreach ($values as $key => $value) {
        if (!isset($existing[$key])) {
            continue; // unknown keys are ignored, not fatal
        }
        $row = $existing[$key];
        $value = clean_str((string) $value);

        if ($row['type'] === 'color' && !is_valid_hex_color($value)) {
            $errors[$key] = 'رنگ باید با فرمت #RRGGBB باشد.';
            continue;
        }

        $changed[$key] = ['old' => $row['value'], 'new' => $value, 'type' => $row['type']];
    }

    if ($errors) {
        json_response(['error' => 'برخی مقادیر نامعتبر است.', 'fields' => $errors], 422);
    }

    $update = $pdo->prepare('UPDATE settings SET value = :v WHERE setting_key = :k');
    foreach ($changed as $key => $c) {
        if ((string) $c['old'] === (string) $c['new']) {
            continue;
        }
        $update->execute(['v' => $c['new'], 'k' => $key]);
    }

    if ($changed) {
        $oldMap = [];
        $newMap = [];
        foreach ($changed as $key => $c) {
            $oldMap[$key] = $c['old'];
            $newMap[$key] = $c['new'];
        }
        audit_write('settings.update', 'settings', null, $oldMap, $newMap);
    }

    json_response(['data' => ['updated' => array_keys($changed)]]);
}

json_response(['error' => 'Method not allowed'], 405);
