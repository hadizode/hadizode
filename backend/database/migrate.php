<?php
/**
 * migrate.php — versioned schema migration runner (CLI only).
 *
 * Applies backend/database/migrations/NNN_*.sql files in order; each file's
 * basename is recorded in the schema_migrations table so it is never
 * re-applied. Run:
 *
 *     php backend/database/migrate.php
 *
 * Migrations must be additive (CREATE TABLE IF NOT EXISTS / INSERT IGNORE)
 * so a partially-applied file can be fixed and re-run manually.
 */

if (PHP_SAPI !== 'cli') {
    http_response_code(403);
    die('CLI only.');
}

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db.php';

$pdo = db();

// Ensure the tracking table exists before reading state.
$pdo->exec(
    'CREATE TABLE IF NOT EXISTS schema_migrations (
        version    VARCHAR(40) NOT NULL PRIMARY KEY,
        applied_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
);

$applied = array_fill_keys(
    $pdo->query('SELECT version FROM schema_migrations')->fetchAll(PDO::FETCH_COLUMN),
    true
);

$dir = __DIR__ . '/migrations';
$files = glob($dir . '/*.sql') ?: [];
sort($files);

if (!$files) {
    echo "No migration files found.\n";
    exit(0);
}

/** Split a SQL dump into executable statements (skips -- comments). */
function split_statements(string $sql): array
{
    $statements = [];
    $buffer = '';
    foreach (preg_split('/\r\n|\r|\n/', $sql) as $line) {
        if (preg_match('/^\s*--/', $line)) {
            continue;
        }
        $buffer .= $line . "\n";
        if (str_ends_with(trim($line), ';')) {
            $stmt = trim($buffer);
            if ($stmt !== '' && $stmt !== ';') {
                $statements[] = rtrim($stmt, ';');
            }
            $buffer = '';
        }
    }
    $tail = trim($buffer);
    if ($tail !== '' && $tail !== ';') {
        $statements[] = rtrim($tail, ';');
    }
    return $statements;
}

$ran = 0;
foreach ($files as $file) {
    $version = basename($file, '.sql');
    if (isset($applied[$version])) {
        echo "SKIP  $version (already applied)\n";
        continue;
    }

    echo "APPLY $version ... ";
    $sql = file_get_contents($file);
    if ($sql === false) {
        fwrite(STDERR, "cannot read $file\n");
        exit(1);
    }

    // NOTE: no explicit transaction — MySQL auto-commits DDL statements,
    // wrapping them in BEGIN/COMMIT raises "no active transaction". The
    // tracking INSERT happens last, so a failed file is simply re-runnable.
    try {
        foreach (split_statements($sql) as $stmt) {
            $pdo->exec($stmt);
        }
        $ins = $pdo->prepare('INSERT INTO schema_migrations (version) VALUES (:v)');
        $ins->execute(['v' => $version]);
        echo "OK\n";
        $ran++;
    } catch (Throwable $e) {
        fwrite(STDERR, "FAILED: {$e->getMessage()}\n");
        fwrite(STDERR, "(migration not recorded; statements are idempotent — fix and re-run)\n");
        exit(1);
    }
}

echo $ran === 0 ? "Schema is up to date.\n" : "Applied $ran migration(s).\n";
