<?php
/**
 * benefits.php — benefit cards CRUD + toggle + reorder.
 *
 *   GET    benefits.php                → ordered list (content.read)
 *   POST   benefits.php                → create (content.write)
 *   PUT    benefits.php?id=<n>         → update (content.write)
 *   DELETE benefits.php?id=<n>         → delete (content.write)
 *   PUT    benefits.php?reorder=1      → { order: [id, ...] } (content.write)
 */

require_once __DIR__ . '/_lib.php';

$method = $_SERVER['REQUEST_METHOD'];

function benefit_row(array $row): array
{
    return [
        'id'          => (int) $row['id'],
        'title'       => $row['title'],
        'description' => $row['description'],
        'icon_name'   => $row['icon_name'],
        'sort_order'  => (int) $row['sort_order'],
        'is_active'   => (bool) $row['is_active'],
    ];
}

function benefit_payload(): array
{
    $body = array_merge($_POST, request_json());
    return [
        'title'       => clean_str($body['title'] ?? ''),
        'description' => clean_str($body['description'] ?? ''),
        'icon_name'   => clean_str($body['icon_name'] ?? '') ?: 'star',
        'is_active'   => isset($body['is_active']) ? (int) (bool) $body['is_active'] : null,
    ];
}

switch ($method) {
    case 'GET':
        if (isset($_GET['reorder'])) {
            json_response(['error' => 'reorder requires PUT'], 405);
        }
        require_admin('content.read');
        $rows = db()->query('SELECT * FROM benefits ORDER BY sort_order')->fetchAll(PDO::FETCH_ASSOC);
        json_response(['data' => array_map('benefit_row', $rows)]);

    case 'POST':
        $admin = require_admin('content.write');
        $p = benefit_payload();
        if ($p['title'] === '' || $p['description'] === '') {
            json_response(['error' => 'عنوان و توضیحات الزامی است.'], 422);
        }
        $sort = next_sort_order('benefits');
        db()->prepare('INSERT INTO benefits (title, description, icon_name, sort_order) VALUES (:t,:d,:i,:s)')
            ->execute(['t' => $p['title'], 'd' => $p['description'], 'i' => $p['icon_name'], 's' => $sort]);
        $id = (int) db()->lastInsertId();
        $stmt = db()->prepare('SELECT * FROM benefits WHERE id = :id');
        $stmt->execute(['id' => $id]);
        $row = $stmt->fetch();
        audit_write('benefits.create', 'benefit', $id, null, benefit_row($row));
        json_response(['data' => benefit_row($row)], 201);

    case 'PUT':
        $admin = require_admin('content.write');
        if (isset($_GET['reorder'])) {
            $ids = request_json()['order'] ?? [];
            if (!is_array($ids)) json_response(['error' => 'order must be an array'], 422);
            apply_reorder(array_map('intval', $ids), 'benefits');
            audit_write('benefits.reorder', 'benefit', null, null, ['order' => $ids]);
            json_response(['data' => ['ok' => true]]);
        }
        $id = (int) ($_GET['id'] ?? 0);
        $stmt = db()->prepare('SELECT * FROM benefits WHERE id = :id');
        $stmt->execute(['id' => $id]);
        $before = $stmt->fetch();
        if (!$before) json_response(['error' => 'Not found'], 404);

        $p = benefit_payload();
        if ($p['title'] === '' || $p['description'] === '') {
            json_response(['error' => 'عنوان و توضیحات الزامی است.'], 422);
        }
        $isActive = $p['is_active'] ?? (int) $before['is_active'];
        db()->prepare('UPDATE benefits SET title=:t, description=:d, icon_name=:i, is_active=:a WHERE id=:id')
            ->execute(['t' => $p['title'], 'd' => $p['description'], 'i' => $p['icon_name'], 'a' => $isActive, 'id' => $id]);
        $stmt->execute(['id' => $id]);
        $after = $stmt->fetch();
        audit_write('benefits.update', 'benefit', $id, benefit_row($before), benefit_row($after));
        json_response(['data' => benefit_row($after)]);

    case 'DELETE':
        $admin = require_admin('content.write');
        $id = (int) ($_GET['id'] ?? 0);
        $stmt = db()->prepare('SELECT * FROM benefits WHERE id = :id');
        $stmt->execute(['id' => $id]);
        $before = $stmt->fetch();
        if (!$before) json_response(['error' => 'Not found'], 404);
        db()->prepare('DELETE FROM benefits WHERE id = :id')->execute(['id' => $id]);
        audit_write('benefits.delete', 'benefit', $id, benefit_row($before), null);
        json_response(['data' => ['ok' => true]]);
}

json_response(['error' => 'Method not allowed'], 405);
