<?php
/**
 * orders.php — CRUD for submitted orders (JSON API).
 *
 *   GET    orders.php?status=&q=&cursor=&limit=   → list (orders.read)
 *   GET    orders.php?id=<n>                       → single order (orders.read)
 *   PATCH  orders.php?id=<n>                       → { status } (orders.write)
 *   DELETE orders.php?id=<n>                       → delete + attachment (orders.write)
 *
 * Responses use the shared envelope { data, meta }. List pagination is
 * keyset (cursor = last seen id) which scales with the index idx_status /
 * idx_created on the orders table.
 *
 * The legacy panel (backend/admin/orders.php) keeps working against the
 * same rows during the migration window.
 */

require_once __DIR__ . '/_lib.php';

$method = $_SERVER['REQUEST_METHOD'];

/** field_key -> display label map for rendering submitted JSON payloads. */
function order_field_labels(): array
{
    $labels = [];
    foreach (db()->query('SELECT field_key, label FROM form_fields')->fetchAll(PDO::FETCH_ASSOC) as $f) {
        $labels[$f['field_key']] = $f['label'];
    }
    return $labels;
}

/* -------------------------------------------------------------------------
 * List / single — GET
 * ---------------------------------------------------------------------- */
if ($method === 'GET') {
    require_admin('orders.read');
    $pdo = db();

    // Single order by id.
    if (isset($_GET['id'])) {
        $stmt = $pdo->prepare('SELECT * FROM orders WHERE id = :id LIMIT 1');
        $stmt->execute(['id' => (int) $_GET['id']]);
        $order = $stmt->fetch();
        if (!$order) {
            json_response(['error' => 'Order not found'], 404);
        }
        $order['form_data'] = json_decode((string) $order['form_data'], true);
        // Human-readable labels so the detail view renders like legacy.
        $order['field_labels'] = order_field_labels();
        if (!empty($order['image'])) {
            $order['image_url'] = ORDER_UPLOAD_URL . $order['image'];
        }
        json_response(['data' => $order]);
    }

    // Filtered, paginated list.
    $status = clean_str($_GET['status'] ?? '');
    $q      = clean_str($_GET['q'] ?? '');
    $cursor = (int) ($_GET['cursor'] ?? 0);
    $limit  = min(max((int) ($_GET['limit'] ?? 25), 1), 100);

    $where = [];
    $params = [];

    if (in_array($status, ['new', 'in_progress', 'done', 'cancelled'], true)) {
        $where[] = 'status = :status';
        $params['status'] = $status;
    }
    if ($cursor > 0) {
        $where[] = 'id < :cursor';        // newest-first keyset pagination
        $params['cursor'] = $cursor;
    }
    if ($q !== '') {
        // Search the flexible JSON payloads (tracking code / values).
        $where[] = '(tracking_code LIKE :q OR JSON_SEARCH(form_data, "one", :q2) IS NOT NULL)';
        $params['q']  = '%' . $q . '%';
        $params['q2'] = '%' . $q . '%';
    }

    $whereSql = $where ? ('WHERE ' . implode(' AND ', $where)) : '';

    $stmt = $pdo->prepare(
        "SELECT id, status, tracking_code, ip_address, created_at,
                JSON_UNQUOTE(JSON_EXTRACT(form_data, '$.name'))  AS customer_name,
                JSON_UNQUOTE(JSON_EXTRACT(form_data, '$.phone')) AS customer_phone
           FROM orders
           $whereSql
          ORDER BY id DESC
          LIMIT " . ($limit + 1)
    );
    $stmt->execute($params);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $hasMore = count($rows) > $limit;
    if ($hasMore) {
        array_pop($rows);
    }

    json_response([
        'data' => $rows,
        'meta' => [
            'has_more'   => $hasMore,
            'next_cursor'=> $hasMore && $rows ? (int) end($rows)['id'] : null,
        ],
    ]);
}

/* -------------------------------------------------------------------------
 * Status update — PATCH
 * ---------------------------------------------------------------------- */
if ($method === 'PATCH') {
    $admin = require_admin('orders.write');
    $id = (int) ($_GET['id'] ?? 0);
    if ($id <= 0) {
        json_response(['error' => 'Missing order id'], 422);
    }

    $body = request_json();
    $newStatus = clean_str($body['status'] ?? '');
    if (!in_array($newStatus, ['new', 'in_progress', 'done', 'cancelled'], true)) {
        json_response(['error' => 'Invalid status'], 422);
    }

    $pdo = db();
    $stmt = $pdo->prepare('SELECT * FROM orders WHERE id = :id LIMIT 1');
    $stmt->execute(['id' => $id]);
    $before = $stmt->fetch();
    if (!$before) {
        json_response(['error' => 'Order not found'], 404);
    }

    if ($before['status'] === $newStatus) {
        $before['form_data'] = json_decode((string) $before['form_data'], true);
        $before['field_labels'] = order_field_labels();
        if (!empty($before['image'])) {
            $before['image_url'] = ORDER_UPLOAD_URL . $before['image'];
        }
        json_response(['data' => $before]);
    }

    $up = $pdo->prepare('UPDATE orders SET status = :status WHERE id = :id');
    $up->execute(['status' => $newStatus, 'id' => $id]);

    $after = $before;
    $after['status'] = $newStatus;

    // Audit without leaking the full private form payload — status change
    // only, both sides recorded.
    audit_write(
        'orders.update',
        'order',
        $id,
        ['status' => $before['status']],
        ['status' => $newStatus]
    );

    $after['form_data'] = json_decode((string) $after['form_data'], true);
    $after['field_labels'] = order_field_labels();
    if (!empty($after['image'])) {
        $after['image_url'] = ORDER_UPLOAD_URL . $after['image'];
    }
    json_response(['data' => $after]);
}

/* -------------------------------------------------------------------------
 * Delete — DELETE (removes the attached image file too)
 * ---------------------------------------------------------------------- */
if ($method === 'DELETE') {
    require_admin('orders.write');
    $id = (int) ($_GET['id'] ?? 0);
    if ($id <= 0) {
        json_response(['error' => 'Missing order id'], 422);
    }

    $pdo = db();
    $stmt = $pdo->prepare('SELECT * FROM orders WHERE id = :id LIMIT 1');
    $stmt->execute(['id' => $id]);
    $before = $stmt->fetch();
    if (!$before) {
        json_response(['error' => 'Order not found'], 404);
    }

    // Delete the DB row FIRST, then best-effort unlink the attachment —
    // a filesystem hiccup must never leave the order row behind (legacy
    // panel does the same ordering). The attachment lives in ORDER_UPLOAD_DIR
    // and belongs to this order exclusively.
    $pdo->prepare('DELETE FROM orders WHERE id = :id')->execute(['id' => $id]);
    if (!empty($before['image'])) {
        unlink_upload(ORDER_UPLOAD_DIR, (string) $before['image']);
    }

    // Audit: record identifiers only, never the private form payload.
    audit_write(
        'orders.delete',
        'order',
        $id,
        ['status' => $before['status'], 'tracking_code' => $before['tracking_code']],
        null
    );

    json_response(['data' => ['ok' => true]]);
}

json_response(['error' => 'Method not allowed'], 405);
