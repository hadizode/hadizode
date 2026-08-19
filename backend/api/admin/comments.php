<?php
/**
 * comments.php — blog comment moderation.
 *
 *   GET    comments.php                 → list with post titles (content.read)
 *   PUT    comments.php?id=<n>          → { is_approved: 0|1 } (content.write)
 *   DELETE comments.php?id=<n>          → delete (content.write)
 *
 * Filters: ?status=pending|approved|all (default: pending — the moderation
 * queue, since that's what the dashboard links to).
 */

require_once __DIR__ . '/_lib.php';

$method = $_SERVER['REQUEST_METHOD'];

function comment_row(array $row): array
{
    return [
        'id'           => (int) $row['id'],
        'post_id'      => (int) $row['post_id'],
        'post_title'   => $row['post_title'] ?? null,
        'parent_id'    => $row['parent_id'] === null ? null : (int) $row['parent_id'],
        'author_name'  => $row['author_name'] !== null && $row['author_name'] !== '' ? $row['author_name'] : 'ناشناس',
        'author_email' => $row['author_email'],
        'content'      => $row['content'],
        'is_approved'  => (bool) $row['is_approved'],
        'created_at'   => $row['created_at'],
    ];
}

switch ($method) {
    case 'GET':
        require_admin('content.read');
        $status = clean_str($_GET['status'] ?? 'pending');

        $where = '';
        if ($status === 'pending') {
            $where = 'WHERE c.is_approved = 0';
        } elseif ($status === 'approved') {
            $where = 'WHERE c.is_approved = 1';
        } elseif ($status !== 'all') {
            json_response(['error' => 'Invalid status filter'], 422);
        }

        $rows = db()->query(
            "SELECT c.*, p.title AS post_title
               FROM blog_comments c
               LEFT JOIN blog_posts p ON c.post_id = p.id
              $where
              ORDER BY c.created_at DESC, c.id DESC"
        )->fetchAll(PDO::FETCH_ASSOC);

        json_response(['data' => array_map('comment_row', $rows)]);

    case 'PUT':
        require_admin('content.write');
        $id = (int) ($_GET['id'] ?? 0);
        $body = request_json();
        if (!isset($body['is_approved'])) {
            json_response(['error' => 'is_approved الزامی است.'], 422);
        }
        $approved = (int) (bool) $body['is_approved'];

        $stmt = db()->prepare('SELECT * FROM blog_comments WHERE id = :id');
        $stmt->execute(['id' => $id]);
        $before = $stmt->fetch();
        if (!$before) json_response(['error' => 'Not found'], 404);

        db()->prepare('UPDATE blog_comments SET is_approved = :a WHERE id = :id')
            ->execute(['a' => $approved, 'id' => $id]);

        $row = comment_row($before);
        audit_write(
            $approved ? 'comments.approve' : 'comments.reject',
            'blog_comment',
            $id,
            ['is_approved' => (bool) $before['is_approved']],
            ['is_approved' => (bool) $approved]
        );
        $row['is_approved'] = (bool) $approved;
        json_response(['data' => $row]);

    case 'DELETE':
        require_admin('content.write');
        $id = (int) ($_GET['id'] ?? 0);
        $stmt = db()->prepare('SELECT * FROM blog_comments WHERE id = :id');
        $stmt->execute(['id' => $id]);
        $before = $stmt->fetch();
        if (!$before) json_response(['error' => 'Not found'], 404);

        db()->prepare('DELETE FROM blog_comments WHERE id = :id')->execute(['id' => $id]);
        audit_write('comments.delete', 'blog_comment', $id,
            ['author' => $before['author_name'], 'content_preview' => mb_substr((string) $before['content'], 0, 80)],
            null);
        json_response(['data' => ['ok' => true]]);
}

json_response(['error' => 'Method not allowed'], 405);
