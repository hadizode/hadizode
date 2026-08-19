<?php
/**
 * dashboard.php — aggregated KPIs + trend series for the admin dashboard.
 *
 *   GET dashboard.php                 → counts + 30-day order trend
 *
 * Read-only; requires 'dashboard.read'.
 */

require_once __DIR__ . '/_lib.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_response(['error' => 'Method not allowed'], 405);
}

require_admin('dashboard.read');

$pdo = db();

$counts = [];
foreach (['gallery', 'products', 'blog_posts'] as $table) {
    $counts[$table] = (int) $pdo->query("SELECT COUNT(*) FROM $table")->fetchColumn();
}
$counts['orders']      = (int) $pdo->query('SELECT COUNT(*) FROM orders')->fetchColumn();
$counts['orders_new']  = (int) $pdo->query("SELECT COUNT(*) FROM orders WHERE status = 'new'")->fetchColumn();
$counts['pending_comments'] = (int) $pdo->query(
    'SELECT COUNT(*) FROM blog_comments WHERE is_approved = 0'
)->fetchColumn();

// Order status distribution.
$statusRows = $pdo->query(
    'SELECT status, COUNT(*) AS n FROM orders GROUP BY status'
)->fetchAll(PDO::FETCH_ASSOC);
$byStatus = [];
foreach ($statusRows as $row) {
    $byStatus[$row['status']] = (int) $row['n'];
}

// Orders per day, last 30 days (uses idx_created).
$trendRows = $pdo->query(
    "SELECT DATE(created_at) AS day, COUNT(*) AS n
       FROM orders
      WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 29 DAY)
      GROUP BY DATE(created_at)"
)->fetchAll(PDO::FETCH_ASSOC);

$trendByDay = [];
foreach ($trendRows as $row) {
    $trendByDay[$row['day']] = (int) $row['n'];
}
$trend = [];
for ($i = 29; $i >= 0; $i--) {
    $day = date('Y-m-d', strtotime("-$i days"));
    $trend[] = ['date' => $day, 'count' => $trendByDay[$day] ?? 0];
}

// Five most recent orders for the dashboard table.
$recent = $pdo->query(
    'SELECT id, status, tracking_code, created_at
       FROM orders ORDER BY id DESC LIMIT 5'
)->fetchAll(PDO::FETCH_ASSOC);

json_response(['data' => [
    'counts'           => $counts,
    'orders_by_status' => $byStatus,
    'orders_trend_30d' => $trend,
    'recent_orders'    => $recent,
]]);
