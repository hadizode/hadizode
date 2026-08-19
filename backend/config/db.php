<?php 
require_once __DIR__ . '/config.php'; 
 
function db(): PDO 
{ 
    static $pdo = null; 
 
    if ($pdo instanceof PDO) { 
        return $pdo; 
    } 
 
    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s', DB_HOST, DB_NAME, DB_CHARSET); 
 
    try { 
        $pdo = new PDO($dsn, DB_USER, DB_PASS, [ 
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, 
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, 
            PDO::ATTR_EMULATE_PREPARES   => false, 
        ]); 
        return $pdo; 
    } catch (PDOException $ex) { 
        error_log('DB connection failed: ' . $ex->getMessage()); 
        http_response_code(500); 
        die('Service temporarily unavailable. Please try again later.'); 
    } 
} 
