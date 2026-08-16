<?php
/**
 * gallery.php — gallery items CRUD + toggle + reorder.
 *
 *   GET    gallery.php                → ordered list (content.read)
 *   POST   gallery.php                → create, image REQUIRED (content.write)
 *   PUT    gallery.php?id=<n>         → update (content.write)
 *   DELETE gallery.php?id=<n>         → delete + orphan image cleanup (content.write)
 *   PUT    gallery.php?reorder=1      → { order: [id, ...] } (content.write)
 *
 * Image input: multipart `image` upload OR `image_filename` referencing an
 * existing media-library file (see resolve_image_input()).
 */

require_once __DIR__ . '/_lib.php';

$method = $_SERVER['REQUEST_METHOD'];

function gallery_row(array $row): array
{
    return [
        'id'          => (int) $row['id'],
        'title'       => $row['title'],
        'description' => $row['description'],
        'image'       => $row['image'],
        'image_url'   => $row['image'] ? MEDIA_UPLOAD_URL . $row['image'] : null,
        'sort_order'  => (int) $row['sort_order'],
        'is_active'   => (bool) $row['is_active'],
        'created_at'  => $row['created_at'],
    ];
}

function gallery_payload(): array
{
    $body = array_merge($_POST, request_json());
    return [
        'title'       => clean_str($body['title'] ?? ''),
        'description' => clean_str($body['description'] ?? ''),
        'is_active'   => isset($body['is_active']) ? (int) (bool) $body['is_active'] : null,
    ];
}

function fetch_gallery_item(int $id): ?array
{
    $stmt = db()->prepare('SELECT * FROM gallery WHERE id = :id');
    $stmt->execute(['id' => $id]);
    $row = $stmt->fetch();
    return $row ?: null;
}

switch ($method) {
    case 'GET':
        require_admin('content.read');
        $rows = db()->query('SELECT * FROM gallery ORDER BY sort_order, created_at DESC')->fetchAll(PDO::FETCH_ASSOC);
        json_response(['data' => array_map('gallery_row', $rows)]);

    case 'POST':
        require_admin('content.write');
        $p = gallery_payload();
        if ($p['title'] === '') {
            json_response(['error' => 'عنوان الزامی است.'], 422);
        }
        [$image, $imgErr] = resolve_image_input('image', MEDIA_UPLOAD_DIR);
        if ($imgErr) json_response(['error' => $imgErr], 422);
        if (!$image) {
            json_response(['error' => 'انتخاب تصویر الزامی است.'], 422);
        }
        $sort = next_sort_order('gallery');
        db()->prepare('INSERT INTO gallery (title, description, image, sort_order) VALUES (:t,:d,:i,:s)')
            ->execute(['t' => $p['title'], 'd' => $p['description'], 'i' => $image, 's' => $sort]);
        $row = fetch_gallery_item((int) db()->lastInsertId());
        audit_write('gallery.create', 'gallery_item', $row['id'], null, gallery_row($row));
        json_response(['data' => gallery_row($row)], 201);

    case 'PUT':
        require_admin('content.write');
        if (isset($_GET['reorder'])) {
            $ids = request_json()['order'] ?? [];
            if (!is_array($ids)) json_response(['error' => 'order must be an array'], 422);
            apply_reorder(array_map('intval', $ids), 'gallery');
            audit_write('gallery.reorder', 'gallery_item', null, null, ['order' => $ids]);
            json_response(['data' => ['ok' => true]]);
        }
        $id = (int) ($_GET['id'] ?? 0);
        $before = fetch_gallery_item($id);
        if (!$before) json_response(['error' => 'Not found'], 404);

        $p = gallery_payload();
        if ($p['title'] === '') {
            json_response(['error' => 'عنوان الزامی است.'], 422);
        }

        $image = $before['image']; // keep by default
        if (isset($_FILES['image']['name']) && $_FILES['image']['name'] !== '') {
            [$newImg, $imgErr] = resolve_image_input('image', MEDIA_UPLOAD_DIR);
            if ($imgErr) json_response(['error' => $imgErr], 422);
            if ($newImg) {
                $image = $newImg;
            }
        } else {
            $fn = $_POST['image_filename'] ?? request_json()['image_filename'] ?? null;
            if (is_string($fn) && trim($fn) !== '') {
                [$picked, $imgErr] = resolve_image_input('image', MEDIA_UPLOAD_DIR);
                if ($imgErr) json_response(['error' => $imgErr], 422);
                $image = $picked;
            }
        }

        $isActive = $p['is_active'] ?? (int) $before['is_active'];
        db()->prepare('UPDATE gallery SET title=:t, description=:d, image=:i, is_active=:a WHERE id=:id')
            ->execute(['t' => $p['title'], 'd' => $p['description'], 'i' => $image, 'a' => $isActive, 'id' => $id]);
        // Only AFTER the row no longer points at the old file may we consider
        // deleting it — and only if nothing else references it (shared dir).
        if ($image !== $before['image']) {
            safe_unlink_media(MEDIA_UPLOAD_DIR, (string) $before['image']);
        }
        $after = fetch_gallery_item($id);
        audit_write('gallery.update', 'gallery_item', $id, gallery_row($before), gallery_row($after));
        json_response(['data' => gallery_row($after)]);

    case 'DELETE':
        require_admin('content.write');
        $id = (int) ($_GET['id'] ?? 0);
        $before = fetch_gallery_item($id);
        if (!$before) json_response(['error' => 'Not found'], 404);
        db()->prepare('DELETE FROM gallery WHERE id = :id')->execute(['id' => $id]);
        // File deletion only after the row is gone — and only if no other
        // content or library row still references it (shared media dir).
        safe_unlink_media(MEDIA_UPLOAD_DIR, (string) $before['image']);
        audit_write('gallery.delete', 'gallery_item', $id, gallery_row($before), null);
        json_response(['data' => ['ok' => true]]);
}

json_response(['error' => 'Method not allowed'], 405);
