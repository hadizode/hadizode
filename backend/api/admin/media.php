<?php
/**
 * media.php — central media library (images used across products, gallery,
 * hero, blog).
 *
 *   GET    media.php                 → list, newest first, with usage refs (media.read)
 *   POST   media.php                 → multipart upload, field: image (media.write)
 *   PUT    media.php?id=<n>          → { alt_text } (media.write)
 *   DELETE media.php?id=<n>          → delete DB row + file, blocked when in use (media.write)
 *
 * Improvement over legacy: delete is blocked when the file is referenced by
 * products/gallery/blog/settings, with a usage report; the legacy panel
 * happily deleted files that were still live on the public site.
 */

require_once __DIR__ . '/_lib.php';

$method = $_SERVER['REQUEST_METHOD'];

function media_row(array $row, array $usage = []): array
{
    return [
        'id'            => (int) $row['id'],
        'filename'      => $row['filename'],
        'original_name' => $row['original_name'],
        'alt_text'      => $row['alt_text'],
        'url'           => MEDIA_UPLOAD_URL . $row['filename'],
        'created_at'    => $row['created_at'],
        'used_by'       => $usage,
        'in_use'        => count($usage) > 0,
    ];
}

function fetch_media(int $id): ?array
{
    $stmt = db()->prepare('SELECT * FROM media WHERE id = :id');
    $stmt->execute(['id' => $id]);
    $row = $stmt->fetch();
    return $row ?: null;
}

switch ($method) {
    case 'GET':
        require_admin('media.read');
        $rows = db()->query('SELECT * FROM media ORDER BY created_at DESC, id DESC')->fetchAll(PDO::FETCH_ASSOC);
        $out = [];
        foreach ($rows as $row) {
            $out[] = media_row($row, media_usage($row['filename']));
        }
        json_response(['data' => $out]);

    case 'POST':
        require_admin('media.write');
        if (empty($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
            json_response(['error' => 'انتخاب تصویر الزامی است.'], 422);
        }
        try {
            $filename = handle_image_upload($_FILES['image'], MEDIA_UPLOAD_DIR);
        } catch (Throwable $ex) {
            error_log('Media upload error: ' . $ex->getMessage());
            json_response(['error' => $ex->getMessage()], 422);
        }
        $alt = clean_str($_POST['alt_text'] ?? request_json()['alt_text'] ?? '');
        db()->prepare('INSERT INTO media (filename, original_name, alt_text) VALUES (:f,:o,:a)')
            ->execute(['f' => $filename, 'o' => clean_str((string) $_FILES['image']['name']), 'a' => $alt]);
        $row = fetch_media((int) db()->lastInsertId());
        audit_write('media.upload', 'media', $row['id'], null, ['filename' => $filename, 'alt_text' => $alt]);
        json_response(['data' => media_row($row)], 201);

    case 'PUT':
        require_admin('media.write');
        $id = (int) ($_GET['id'] ?? 0);
        $before = fetch_media($id);
        if (!$before) json_response(['error' => 'Not found'], 404);

        $alt = clean_str(request_json()['alt_text'] ?? '');
        db()->prepare('UPDATE media SET alt_text = :a WHERE id = :id')->execute(['a' => $alt, 'id' => $id]);
        $after = fetch_media($id);
        audit_write('media.update', 'media', $id, ['alt_text' => $before['alt_text']], ['alt_text' => $alt]);
        json_response(['data' => media_row($after, media_usage($after['filename']))]);

    case 'DELETE':
        require_admin('media.write');
        $id = (int) ($_GET['id'] ?? 0);
        $before = fetch_media($id);
        if (!$before) json_response(['error' => 'Not found'], 404);

        // Exclude THIS row: the row about to be deleted must not
        // self-block the usage check (would make every delete a 409).
        $usage = media_usage($before['filename'], $id);
        if ($usage) {
            json_response([
                'error' => 'این تصویر هنوز در استفاده است و حذف نمی‌شود: '
                    . implode('، ', array_map(
                        static fn ($u) => $u['entity'] . ' #' . $u['id'],
                        $usage
                    )),
                'usage' => $usage,
            ], 409);
        }

        db()->prepare('DELETE FROM media WHERE id = :id')->execute(['id' => $id]);
        // Row is gone; only unlink if nothing else now references the file.
        safe_unlink_media(MEDIA_UPLOAD_DIR, $before['filename']);
        audit_write('media.delete', 'media', $id, ['filename' => $before['filename']], null);
        json_response(['data' => ['ok' => true]]);
}

json_response(['error' => 'Method not allowed'], 405);
