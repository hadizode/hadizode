<?php
/**
 * audit_logs.php — read-only access to the append-only audit trail.
 *
 *   GET audit_logs.php?entity=&actor=&from=&to=&cursor=&limit=
 *
 * Filters all optional. Keyset pagination on id (newest first).
 * No writes: the table is append-only by design (the app DB user should
 * never be granted UPDATE/DELETE on audit_logs).
 */

require_once __DIR__ . '/_lib.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_response(['error' => 'Method not allowed'], 405);
}

require_admin('audit.read');

$entity = clean_str($_GET['entity'] ?? '');
$actor  = clean_str($_GET['actor'] ?? '');
$from   = clean_str($_GET['from'] ?? '');
$to     = clean_str($_GET['to'] ?? '');
$cursor = (int) ($_GET['cursor'] ?? 0);
$limit  = min(max((int) ($_GET['limit'] ?? 50), 1), 200);

$where = [];
$params = [];

if ($entity !== '') {
    $where[] = 'entity_type = :entity';
    $params['entity'] = $entity;
}
if ($actor !== '') {
    $where[] = 'admin_user LIKE :actor';
    $params['actor'] = '%' . $actor . '%';
}
if ($from !== '') {
    $where[] = 'created_at >= :from';
    $params['from'] = $from . ' 00:00:00';
}
if ($to !== '') {
    $where[] = 'created_at <= :to';
    $params['to'] = $to . ' 23:59:59';
}
if ($cursor > 0) {
    $where[] = 'id < :cursor';
    $params['cursor'] = $cursor;
}

$whereSql = $where ? ('WHERE ' . implode(' AND ', $where)) : '';

$stmt = db()->prepare(
    "SELECT * FROM audit_logs $whereSql ORDER BY id DESC LIMIT " . ($limit + 1)
);
$stmt->execute($params);
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

$hasMore = count($rows) > $limit;
if ($hasMore) {
    array_pop($rows);
}

$out = [];
foreach ($rows as $row) {
    $out[] = [
        'id'          => (int) $row['id'],
        'admin_id'    => $row['admin_id'] === null ? null : (int) $row['admin_id'],
        'admin_user'  => $row['admin_user'],
        'action'      => $row['action'],
        'entity_type' => $row['entity_type'],
        'entity_id'   => $row['entity_id'],
        'old_value'   => $row['old_value'] === null ? null : json_decode((string) $row['old_value'], true),
        'new_value'   => $row['new_value'] === null ? null : json_decode((string) $row['new_value'], true),
        'ip_address'  => $row['ip_address'],
        'user_agent'  => $row['user_agent'],
        'created_at'  => $row['created_at'],
    ];
}

json_response([
    'data' => $out,
    'meta' => [
        'has_more'    => $hasMore,
        'next_cursor' => $hasMore && $out ? (int) end($out)['id'] : null,
    ],
]);
