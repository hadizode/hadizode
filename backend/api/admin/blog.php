<?php
/**
 * blog.php — blog posts CRUD + publish toggle.
 *
 *   GET    blog.php                → list with comment counts (content.read)
 *   GET    blog.php?id=<n>         → single post (content.read)
 *   POST   blog.php                → create, published by default (content.write)
 *   PUT    blog.php?id=<n>         → update; is_published toggles if provided (content.write)
 *   DELETE blog.php?id=<n>         → delete + comments + orphan image (content.write)
 *
 * Note: the public site routes posts by numeric id (/blog/:id); slug is
 * stored for future SEO use and is not required to be unique by the UI.
 *
 * Image input: multipart `image` upload OR `image_filename` referencing an
 * existing media-library file.
 */

require_once __DIR__ . '/_lib.php';

$method = $_SERVER['REQUEST_METHOD'];

function blog_row(array $row, int $commentCount, int $pendingCount): array
{
    return [
        'id'           => (int) $row['id'],
        'title'        => $row['title'],
        'slug'         => $row['slug'],
        'excerpt'      => $row['excerpt'],
        'content'      => $row['content'],
        'image'        => $row['image'],
        'image_url'    => $row['image'] ? MEDIA_UPLOAD_URL . $row['image'] : null,
        'category'     => $row['category'],
        'author_id'    => $row['author_id'] === null ? null : (int) $row['author_id'],
        'view_count'   => (int) $row['view_count'],
        'is_published' => (bool) $row['is_published'],
        'created_at'   => $row['created_at'],
        'updated_at'   => $row['updated_at'] ?? null,
        'comment_count' => $commentCount,
        'pending_comments' => $pendingCount,
    ];
}

function fetch_post(int $id): ?array
{
    $stmt = db()->prepare('SELECT * FROM blog_posts WHERE id = :id');
    $stmt->execute(['id' => $id]);
    $row = $stmt->fetch();
    return $row ?: null;
}

function comment_counts(int $postId): array
{
    $stmt = db()->prepare('SELECT COUNT(*) FROM blog_comments WHERE post_id = :id');
    $stmt->execute(['id' => $postId]);
    $total = (int) $stmt->fetchColumn();
    $stmt = db()->prepare('SELECT COUNT(*) FROM blog_comments WHERE post_id = :id AND is_approved = 0');
    $stmt->execute(['id' => $postId]);
    $pending = (int) $stmt->fetchColumn();
    return [$total, $pending];
}

function blog_payload(): array
{
    $body = array_merge($_POST, request_json());
    return [
        'title'    => clean_str($body['title'] ?? ''),
        'slug'     => clean_str($body['slug'] ?? ''),
        'excerpt'  => clean_str($body['excerpt'] ?? ''),
        'content'  => clean_str((string) ($body['content'] ?? '')),
        'category' => clean_str($body['category'] ?? ''),
        'is_published' => isset($body['is_published']) ? (int) (bool) $body['is_published'] : null,
    ];
}

switch ($method) {
    case 'GET':
        require_admin('content.read');
        $pdo = db();

        // Single post.
        if (isset($_GET['id'])) {
            $post = fetch_post((int) $_GET['id']);
            if (!$post) json_response(['error' => 'Not found'], 404);
            [$total, $pending] = comment_counts($post['id']);
            json_response(['data' => blog_row($post, $total, $pending)]);
        }

        // List with comment counts in one grouped query.
        $counts = [];
        $countRows = $pdo->query(
            'SELECT post_id, COUNT(*) AS total,
                    SUM(CASE WHEN is_approved = 0 THEN 1 ELSE 0 END) AS pending
               FROM blog_comments GROUP BY post_id'
        )->fetchAll(PDO::FETCH_ASSOC);
        foreach ($countRows as $r) {
            $counts[(int) $r['post_id']] = [(int) $r['total'], (int) $r['pending']];
        }

        $posts = $pdo->query('SELECT * FROM blog_posts ORDER BY created_at DESC, id DESC')->fetchAll(PDO::FETCH_ASSOC);
        $out = [];
        foreach ($posts as $p) {
            [$total, $pending] = $counts[(int) $p['id']] ?? [0, 0];
            $out[] = blog_row($p, $total, $pending);
        }
        json_response(['data' => $out]);

    case 'POST':
        $admin = require_admin('content.write');
        $p = blog_payload();
        if ($p['title'] === '') json_response(['error' => 'عنوان مقاله الزامی است.'], 422);

        [$image, $imgErr] = resolve_image_input('image', MEDIA_UPLOAD_DIR);
        if ($imgErr) json_response(['error' => $imgErr], 422);

        $published = $p['is_published'] ?? 1; // legacy creates published by default
        db()->prepare(
            'INSERT INTO blog_posts (title, slug, excerpt, content, image, category, author_id, is_published, created_at)
             VALUES (:t,:s,:e,:c,:i,:cat,:aid,:pub,NOW())'
        )->execute([
            't' => $p['title'], 's' => $p['slug'] ?: null, 'e' => $p['excerpt'] ?: null,
            'c' => $p['content'] ?: null, 'i' => $image, 'cat' => $p['category'] ?: null,
            'aid' => $admin['admin_id'], 'pub' => $published,
        ]);
        $post = fetch_post((int) db()->lastInsertId());
        [$total, $pending] = comment_counts($post['id']);
        audit_write('blog.create', 'blog_post', $post['id'], null, blog_row($post, $total, $pending));
        json_response(['data' => blog_row($post, $total, $pending)], 201);

    case 'PUT':
        require_admin('content.write');
        $id = (int) ($_GET['id'] ?? 0);
        $before = fetch_post($id);
        if (!$before) json_response(['error' => 'Not found'], 404);

        // Dedicated publish toggle — only flips is_published, no title needed.
        if (isset($_GET['toggle'])) {
            $body = request_json();
            if (!isset($body['is_published'])) {
                json_response(['error' => 'is_published الزامی است.'], 422);
            }
            $published = (int) (bool) $body['is_published'];
            db()->prepare('UPDATE blog_posts SET is_published = :pub WHERE id = :id')
                ->execute(['pub' => $published, 'id' => $id]);
            $after = fetch_post($id);
            [$bTotal, $bPending] = comment_counts($id);
            audit_write('blog.toggle_publish', 'blog_post', $id,
                ['is_published' => (bool) $before['is_published']],
                ['is_published' => (bool) $published]);
            json_response(['data' => blog_row($after, $bTotal, $bPending)]);
        }

        $p = blog_payload();
        if ($p['title'] === '') json_response(['error' => 'عنوان مقاله الزامی است.'], 422);

        $image = $before['image'];
        if (isset($_FILES['image']['name']) && $_FILES['image']['name'] !== '') {
            [$newImg, $imgErr] = resolve_image_input('image', MEDIA_UPLOAD_DIR);
            if ($imgErr) json_response(['error' => $imgErr], 422);
            if ($newImg) {
                $image = $newImg;
            }
        } else {
            $fn = $_POST['image_filename'] ?? request_json()['image_filename'] ?? null;
            if (is_string($fn)) {
                if (trim($fn) === '') {
                    $image = null;
                } else {
                    [$picked, $imgErr] = resolve_image_input('image', MEDIA_UPLOAD_DIR);
                    if ($imgErr) json_response(['error' => $imgErr], 422);
                    $image = $picked;
                }
            }
        }

        $published = $p['is_published'] ?? (int) $before['is_published'];

        db()->prepare(
            'UPDATE blog_posts SET title=:t, slug=:s, excerpt=:e, content=:c, image=:i, category=:cat, is_published=:pub
              WHERE id=:id'
        )->execute([
            't' => $p['title'], 's' => $p['slug'] ?: null, 'e' => $p['excerpt'] ?: null,
            'c' => $p['content'], 'i' => $image, 'cat' => $p['category'] ?: null,
            'pub' => $published, 'id' => $id,
        ]);
        // Only AFTER the row no longer points at the old file may we consider
        // deleting it — and only if nothing else references it (shared dir).
        if ($image !== $before['image']) {
            safe_unlink_media(MEDIA_UPLOAD_DIR, (string) $before['image']);
        }
        $after = fetch_post($id);
        [$bTotal, $bPending] = comment_counts($id);
        audit_write('blog.update', 'blog_post', $id,
            ['title' => $before['title'], 'is_published' => (bool) $before['is_published']],
            ['title' => $after['title'], 'is_published' => (bool) $after['is_published']]);
        json_response(['data' => blog_row($after, $bTotal, $bPending)]);

    case 'DELETE':
        require_admin('content.write');
        $id = (int) ($_GET['id'] ?? 0);
        $before = fetch_post($id);
        if (!$before) json_response(['error' => 'Not found'], 404);

        db()->prepare('DELETE FROM blog_comments WHERE post_id = :id')->execute(['id' => $id]);
        db()->prepare('DELETE FROM blog_posts WHERE id = :id')->execute(['id' => $id]);
        // File deletion only after the row is gone — and only if no other
        // content or library row still references it (shared media dir).
        safe_unlink_media(MEDIA_UPLOAD_DIR, (string) $before['image']);
        audit_write('blog.delete', 'blog_post', $id, ['title' => $before['title'], 'comments_deleted' => true], null);
        json_response(['data' => ['ok' => true]]);
}

json_response(['error' => 'Method not allowed'], 405);
