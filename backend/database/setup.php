<?php 
/** 
 * setup.php — ONE-TIME installer. 
 * 
 * Security fixes vs the old database.php: 
 *   - Self-locks after a successful run (writes install.lock) so it can 
 *     never be re-run or abused once the site is live. 
 *   - .htaccess in this folder blocks direct access to schema.sql itself. 
 *   - Still shown once: a random admin password, then never again. 
 * 
 * HOW TO USE: 
 *   1. Set DB_* in config/config.php 
 *   2. Visit this file once in the browser 
 *   3. Copy the generated admin password and log in immediately to change it 
 *   4. The script locks itself automatically after step 2 succeeds. 
 */ 
 
require_once __DIR__ . '/../config/config.php'; 
 
$lockFile = __DIR__ . '/install.lock'; 
if (is_file($lockFile)) { 
    http_response_code(403); 
    die('Setup has already run. Delete database/install.lock manually if you really need to re-run it.'); 
} 
 
/** 
 * Execute a multi-statement SQL dump safely: statements are accumulated 
 * line-by-line and executed when a line ends with ";". This does not depend 
 * on the file ending with a newline or on ";\n" being present between 
 * statements, and it skips comment/blank lines between statements. 
 * NOTE: schema files must not contain string literals with ";" line endings. 
 */ 
function run_sql_file(PDO $pdo, string $path): void 
{ 
    $sql = file_get_contents($path); 
    if ($sql === false) { 
        throw new RuntimeException('Could not read ' . basename($path)); 
    } 
 
    $pending = ''; 
    foreach (explode("\n", $sql) as $rawLine) { 
        $line = rtrim($rawLine); 
        $trim = ltrim($line); 
        if ($trim === '' || str_starts_with($trim, '--')) { 
            continue; 
        } 
        $pending .= $trim . "\n"; 
        if (str_ends_with($trim, ';')) { 
            $statement = trim($pending); 
            $pending = ''; 
            if ($statement !== '' && $statement !== ';') { 
                $pdo->exec($statement); 
            } 
        } 
    } 
    // Any trailing statement without a final semicolon 
    $statement = trim($pending); 
    if ($statement !== '' && $statement !== ';') { 
        $pdo->exec($statement); 
    } 
} 
 
$dsn = sprintf('mysql:host=%s;charset=%s', DB_HOST, DB_CHARSET); 
 
try { 
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [ 
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
    ]); 
 
    $pdo->exec(sprintf( 
        'CREATE DATABASE IF NOT EXISTS `%s` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci', 
        str_replace('`', '', DB_NAME) 
    )); 
    $pdo->exec(sprintf('USE `%s`', str_replace('`', '', DB_NAME))); 
 
    // Core CMS tables, then blog tables, then the conditional-fields migration.
    // run_sql_file() uses only CREATE TABLE / INSERT / ALTER here, so re-running
    // after a partial failure is idempotent thanks to IF NOT EXISTS / INSERT IGNORE.
    run_sql_file($pdo, __DIR__ . '/schema.sql');
    run_sql_file($pdo, __DIR__ . '/blog_schema.sql');
    try {
        run_sql_file($pdo, __DIR__ . '/migration_conditional_fields.sql');
    } catch (Throwable $ex) {
        // Older MySQL (< 8.0.30 / no MariaDB equivalent) lacks IF NOT EXISTS on
        // ADD COLUMN — schema.sql already ships those columns, so ignore duplicates.
        if (!str_contains($ex->getMessage(), '1060')) {
            throw $ex;
        }
    }
 
    echo "<h2>Database + tables created successfully.</h2>"; 
 
    $count = (int) $pdo->query('SELECT COUNT(*) FROM admins')->fetchColumn(); 
    if ($count === 0) { 
        $username = 'admin'; 
        $password = bin2hex(random_bytes(6)); 
        $hash     = password_hash($password, PASSWORD_DEFAULT); 
 
        $stmt = $pdo->prepare('INSERT INTO admins (username, password_hash) VALUES (:u, :p)'); 
        $stmt->execute(['u' => $username, 'p' => $hash]); 
 
        echo "<h3>Default admin account created:</h3>"; 
        echo "<p>Username: <b>" . htmlspecialchars($username) . "</b><br>"; 
        echo "Password: <b>" . htmlspecialchars($password) . "</b></p>"; 
        echo "<p style='color:#b00'>Copy this password now, then log in and change it immediately.</p>"; 
    } else { 
        echo "<p>Admin account already exists — skipping default admin creation.</p>"; 
    } 

    // Numbered migrations (RBAC + audit + extended color settings, ...).
    // These run AFTER admin creation so 001 can assign every (new) admin the
    // super_admin role. Statements are CREATE IF NOT EXISTS / INSERT IGNORE,
    // and the tracking insert matches migrate.php, which stays usable later.
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS schema_migrations (
            version    VARCHAR(40) NOT NULL PRIMARY KEY,
            applied_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );
    $appliedMigrations = array_fill_keys(
        $pdo->query('SELECT version FROM schema_migrations')->fetchAll(PDO::FETCH_COLUMN),
        true
    );
    foreach (glob(__DIR__ . '/migrations/*.sql') ?: [] as $file) {
        $version = basename($file, '.sql');
        if (isset($appliedMigrations[$version])) continue;
        run_sql_file($pdo, $file);
        $pdo->prepare('INSERT IGNORE INTO schema_migrations (version) VALUES (:v)')
            ->execute(['v' => $version]);
        echo '<p>Applied migration: ' . htmlspecialchars($version) . "</p>";
    }
  
    // Create upload directories with .htaccess that blocks script execution. 
    foreach ([MEDIA_UPLOAD_DIR, ORDER_UPLOAD_DIR] as $dir) { 
        if (!is_dir($dir)) { 
            mkdir($dir, 0755, true); 
        } 
        $ht = rtrim($dir, '/') . '/.htaccess'; 
        if (!is_file($ht)) { 
            file_put_contents($ht, "php_flag engine off\n<FilesMatch \"\\.(php|phtml|php\\d)$\">\n  Require all denied\n</FilesMatch>\n"); 
        } 
    } 
 
    file_put_contents($lockFile, 'installed_at=' . date('c') . "\n"); 
 
    echo "<p><a href='../admin/login.php'>Go to admin login</a></p>"; 
    echo "<p style='color:#b00'>This installer is now locked and cannot be run again.</p>"; 
} catch (Throwable $ex) { 
    http_response_code(500); 
    echo '<pre>Setup failed: ' . htmlspecialchars($ex->getMessage()) . '</pre>'; 
} 
