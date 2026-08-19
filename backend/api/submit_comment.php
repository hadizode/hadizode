<?php 
/** 
 * Submit Comment API - POST new comment or reply. 
 * 
 * Protections: CORS allow-list (no-op for simple JSON-less form bodies, but the 
 * allow-list still gates credentialed XHR), honeypot, per-IP rate limit, 
 * strict length/format validation, prepared statements. 
 */ 
require_once __DIR__ . '/../config/config.php'; 
require_once __DIR__ . '/../config/db.php'; 
 
header('Content-Type: application/json; charset=utf-8'); 
apply_cors(); 
 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { 
    json_response(['error' => 'method not allowed'], 405); 
} 
 
$input       = json_decode(file_get_contents('php://input'), true); 
if (!is_array($input)) $input = $_POST; 
 
// --- Honeypot: bots fill every field, humans never see this one --- 
if (!empty($input['website'])) { 
    json_response(['ok' => true, 'comment_id' => 0]); 
} 
 
// --- Basic per-IP rate limit (10 comments / 10 minutes) --- 
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown'; 
$rateFile = sys_get_temp_dir() . '/comment_rl_' . md5($ip) . '.json'; 
$now = time(); 
$hits = is_file($rateFile) ? (json_decode((string) file_get_contents($rateFile), true) ?: []) : []; 
$hits = array_values(array_filter($hits, fn($t) => $t > $now - 600)); 
if (count($hits) >= 10) { 
    json_response(['error' => 'تعداد درخواست‌های شما زیاد است، لطفاً بعداً دوباره تلاش کنید.'], 429); 
} 
$hits[] = $now; 
file_put_contents($rateFile, json_encode($hits)); 
 
$postId     = (int) ($input['post_id'] ?? 0); 
$content    = mb_substr(clean_str($input['content'] ?? ''), 0, 5000); 
$parentId   = isset($input['parent_id']) ? (int) $input['parent_id'] : null; 
$authorName = mb_substr(clean_str($input['author_name'] ?? ''), 0, 100); 
$authorEmail = mb_substr(clean_str($input['author_email'] ?? ''), 0, 255); 
 
if ($postId <= 0) { 
    json_response(['error' => 'اطلاعات نامعتبر است'], 400); 
} 
if ($content === '') { 
    json_response(['error' => 'متن نظر نمی‌تواند خالی باشد.'], 422); 
} 
if (mb_strlen($content) < 2) { 
    json_response(['error' => 'متن نظر بسیار کوتاه است.'], 422); 
} 
if ($authorName !== '' && mb_strlen($authorName) < 2) { 
    json_response(['error' => 'نام نویسنده معتبر نیست.'], 422); 
} 
if ($authorEmail !== '' && filter_var($authorEmail, FILTER_VALIDATE_EMAIL) === false) { 
    json_response(['error' => 'ایمیل وارد شده معتبر نیست.'], 422); 
} 
 
// Check if post exists and is published 
$postCheck = db()->prepare('SELECT id FROM blog_posts WHERE id = :id AND is_published = 1'); 
$postCheck->execute(['id' => $postId]); 
if (!$postCheck->fetch()) { 
    json_response(['error' => 'مقاله یافت نشد'], 404); 
} 
 
// If replying, check parent comment exists 
if ($parentId !== null) { 
    $parentCheck = db()->prepare('SELECT id FROM blog_comments WHERE id = :id AND post_id = :post_id AND is_approved = 1'); 
    $parentCheck->execute(['id' => $parentId, 'post_id' => $postId]); 
    if (!$parentCheck->fetch()) { 
        json_response(['error' => 'نظر والد یافت نشد'], 404); 
    } 
} 
 
try { 
    $stmt = db()->prepare(' 
        INSERT INTO blog_comments (post_id, parent_id, author_name, author_email, content, is_approved, created_at) 
        VALUES (:post_id, :parent_id, :author_name, :author_email, :content, 0, NOW()) 
    '); 
    $stmt->execute([ 
        'post_id' => $postId, 
        'parent_id' => $parentId, 
        'author_name' => $authorName ?: null, 
        'author_email' => $authorEmail ?: null, 
        'content' => $content, 
    ]); 
     
    $commentId = (int) db()->lastInsertId(); 
     
    json_response(['ok' => true, 'comment_id' => $commentId]); 
} catch (PDOException $ex) { 
    error_log('Comment insert failed: ' . $ex->getMessage()); 
    json_response(['error' => 'خطا در ثبت نظر'], 500); 
} 
