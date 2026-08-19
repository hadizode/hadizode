<?php 
/** 
 * Blog API - GET blog posts with their approved comments (incl. replies). 
 * 
 * - Comments are fetched in ONE query for all posts (no N+1), and only the 
 *   columns the front-end needs are selected — author_email is intentionally 
 *   never exposed by this public endpoint. 
 * - view_count is incremented at most once per browser (per-browser cookie 
 *   throttle), and never by a logged-in admin, so the counter stays honest. 
 */ 
require_once __DIR__ . '/../config/config.php'; 
require_once __DIR__ . '/../config/db.php'; 
 
header('Content-Type: application/json; charset=utf-8'); 
apply_cors(); 
 
if ($_SERVER['REQUEST_METHOD'] !== 'GET') { 
    json_response(['error' => 'method not allowed'], 405); 
} 
 
// --- View counting throttle: at most one view per browser per post. --- 
$isHttps     = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') 
    || (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https'); 
$isAdminSession = !empty($_SESSION['admin_id']); 
 
if (!$isAdminSession && !isset($_COOKIE['blog_viewed'])) { 
    setcookie('blog_viewed', ',', time() + 86400 * 365, '/', '', $isHttps, false); 
    $_COOKIE['blog_viewed'] = ','; 
} 
$viewed = $isAdminSession 
    ? [] 
    : array_values(array_filter(array_map('intval', explode(',', (string) ($_COOKIE['blog_viewed'] ?? ''))))); 
 
$posts = db()->query(' 
    SELECT p.id, p.title, p.slug, p.excerpt, p.content, p.image, p.category, 
           p.view_count, p.created_at, p.updated_at, p.is_published, 
           a.username as author_name 
    FROM blog_posts p 
    LEFT JOIN admins a ON p.author_id = a.id 
    WHERE p.is_published = 1 
    ORDER BY p.created_at DESC 
')->fetchAll(); 
 
// Single query for the approved comments of ALL published posts (no N+1). 
$commentsByPost = []; 
if ($posts) { 
    $comments = db()->query(' 
        SELECT c.id, c.post_id, c.parent_id, c.author_name, c.content, c.created_at 
        FROM blog_comments c 
        INNER JOIN blog_posts p ON p.id = c.post_id AND p.is_published = 1 
        WHERE c.is_approved = 1 
        ORDER BY c.created_at ASC 
    '); 
    foreach ($comments as $c) { 
        $commentsByPost[$c['post_id']][] = $c; 
    } 
} 
 
$newViews = []; 
foreach ($posts as &$post) { 
    $post['image_url'] = $post['image'] ? MEDIA_UPLOAD_URL . $post['image'] : null; 
    unset($post['image']); 
    $post['comments'] = $commentsByPost[$post['id']] ?? []; 
 
    $postId = (int) $post['id']; 
    if (!$isAdminSession && !in_array($postId, $viewed, true) && !in_array($postId, $newViews, true)) { 
        $newViews[] = $postId; 
        $post['view_count']++; // reflect this visitor's view in the current response 
    } 
} 
unset($post); 
 
if ($newViews) { 
    $placeholders = implode(',', array_fill(0, count($newViews), '?')); 
    db()->prepare("UPDATE blog_posts SET view_count = view_count + 1 WHERE id IN ($placeholders)") 
        ->execute($newViews); 
 
    if (isset($_COOKIE['blog_viewed'])) { 
        $merged = array_unique(array_merge($viewed, $newViews)); 
        $cookieValue = implode(',', $merged) . ','; 
        if (strlen($cookieValue) < 3000) { // keep the cookie within sane limits 
            setcookie('blog_viewed', $cookieValue, time() + 86400 * 365, '/', '', $isHttps, false); 
        } 
    } 
} 
 
json_response($posts); 
