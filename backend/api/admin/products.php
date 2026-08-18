<?php
/**
 * products.php — products CRUD + toggle + reorder.
 *
 *   GET    products.php                → ordered list (content.read)
 *   POST   products.php                → create (content.write)
 *   PUT    products.php?id=<n>         → update (content.write)
 *   DELETE products.php?id=<n>         → delete + orphan image cleanup (content.write)
 *   PUT    products.php?reorder=1      → { order: [id, ...] } (content.write)
 *
 * Image input: multipart `image` upload OR JSON/POST `image_filename`
 * referencing an existing file in the media library (see
 * resolve_image_input()). Empty image_filename on update keeps the current
 * image — unlike legacy, editing text never accidentally wipes the image.
 */

require_once __DIR__ . '/_lib.php';

$method = $_SERVER['REQUEST_METHOD'];

function product_row(array $row): array
{
    return [
        'id'          => (int) $row['id'],
        'name'        => $row['name'],
        'description' => $row['description'],
        'details'     => $row['details'] ?? null,
        'price_min'   => $row['price_min'] === null ? null : (int) $row['price_min'],
        'image'       => $row['image'],
        'image_url'   => $row['image'] ? MEDIA_UPLOAD_URL . $row['image'] : null,
        'slug'        => $row['slug'],
        'sort_order'  => (int) $row['sort_order'],
        'is_active'   => (bool) $row['is_active'],
        'created_at'  => $row['created_at'],
    ];
}

function product_payload(): array
{
    $body = array_merge($_POST, request_json());
    $price = clean_str((string) ($body['price_min'] ?? ''));
    return [
        'name'        => clean_str($body['name'] ?? ''),
        'description' => clean_str($body['description'] ?? ''),
        'details'     => clean_str((string) ($body['details'] ?? '')),
        'price_min'   => $price !== '' ? max(0, (int) $price) : null,
        'slug'        => clean_str($body['slug'] ?? ''),
        'is_active'   => isset($body['is_active']) ? (int) (bool) $body['is_active'] : null,
    ];
}

function fetch_product(int $id): ?array
{
    $stmt = db()->prepare('SELECT * FROM products WHERE id = :id');
    $stmt->execute(['id' => $id]);
    $row = $stmt->fetch();
    return $row ?: null;
}

switch ($method) {
    case 'GET':
        require_admin('content.read');
        $rows = db()->query('SELECT * FROM products ORDER BY sort_order, id')->fetchAll(PDO::FETCH_ASSOC);
        json_response(['data' => array_map('product_row', $rows)]);

    case 'POST':
        require_admin('content.write');
        $p = product_payload();
        if ($p['name'] === '') {
            json_response(['error' => 'نام محصول الزامی است.'], 422);
        }
        [$image, $imgErr] = resolve_image_input('image', MEDIA_UPLOAD_DIR);
        if ($imgErr) json_response(['error' => $imgErr], 422);

        $sort = next_sort_order('products');
        db()->prepare('INSERT INTO products (name, description, details, price_min, image, slug, sort_order) VALUES (:n,:d,:dt,:p,:i,:s,:so)')
            ->execute([
                'n' => $p['name'], 'd' => $p['description'] ?: null, 'dt' => $p['details'] ?: null,
                'p' => $p['price_min'], 'i' => $image, 's' => $p['slug'] ?: null, 'so' => $sort,
            ]);
        $row = fetch_product((int) db()->lastInsertId());
        audit_write('products.create', 'product', $row['id'], null, product_row($row));
        json_response(['data' => product_row($row)], 201);

    case 'PUT':
        require_admin('content.write');
        if (isset($_GET['reorder'])) {
            $ids = request_json()['order'] ?? [];
            if (!is_array($ids)) json_response(['error' => 'order must be an array'], 422);
            apply_reorder(array_map('intval', $ids), 'products');
            audit_write('products.reorder', 'product', null, null, ['order' => $ids]);
            json_response(['data' => ['ok' => true]]);
        }
        $id = (int) ($_GET['id'] ?? 0);
        $before = fetch_product($id);
        if (!$before) json_response(['error' => 'Not found'], 404);

        $p = product_payload();
        if ($p['name'] === '') {
            json_response(['error' => 'نام محصول الزامی است.'], 422);
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
            if (is_string($fn)) { // explicitly set (may be '' = remove image)
                if (trim($fn) === '') {
                    $image = null;
                } else {
                    [$picked, $imgErr] = resolve_image_input('image', MEDIA_UPLOAD_DIR);
                    if ($imgErr) json_response(['error' => $imgErr], 422);
                    $image = $picked;
                }
            }
        }

        $isActive = $p['is_active'] ?? (int) $before['is_active'];
        db()->prepare('UPDATE products SET name=:n, description=:d, details=:dt, price_min=:p, image=:i, slug=:s, is_active=:a WHERE id=:id')
            ->execute([
                'n' => $p['name'], 'd' => $p['description'] ?: null, 'dt' => $p['details'] ?: null, 'p' => $p['price_min'],
                'i' => $image, 's' => $p['slug'] ?: null, 'a' => $isActive, 'id' => $id,
            ]);
        // Only AFTER the row no longer points at the old file may we consider
        // deleting it — and only if nothing else references it (shared dir).
        if ($image !== $before['image']) {
            safe_unlink_media(MEDIA_UPLOAD_DIR, (string) $before['image']);
        }
        $after = fetch_product($id);
        audit_write('products.update', 'product', $id, product_row($before), product_row($after));
        json_response(['data' => product_row($after)]);

    case 'DELETE':
        require_admin('content.write');
        $id = (int) ($_GET['id'] ?? 0);
        $before = fetch_product($id);
        if (!$before) json_response(['error' => 'Not found'], 404);
        db()->prepare('DELETE FROM products WHERE id = :id')->execute(['id' => $id]);
        // File deletion only after the row is gone — and only if no other
        // content or library row still references it.
        safe_unlink_media(MEDIA_UPLOAD_DIR, (string) $before['image']);
        audit_write('products.delete', 'product', $id, product_row($before), null);
        json_response(['data' => ['ok' => true]]);
}

json_response(['error' => 'Method not allowed'], 405);
