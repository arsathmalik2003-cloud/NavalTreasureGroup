<?php
/**
 * NAVAL TREASURE GROUP INTERNATIONAL - cPanel PHP MySQL Configuration
 * Edit these database credentials according to your cPanel MySQL Database setup.
 */

// cPanel MySQL Credentials
define('DB_HOST', 'localhost');
define('DB_NAME', 'yourcpaneluser_ntg_db');     // Replace with your cPanel database name
define('DB_USER', 'yourcpaneluser_ntg_user');   // Replace with your cPanel database user
define('DB_PASS', 'your_secure_password_here'); // Replace with your MySQL password

// Enable CORS for frontend requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

/**
 * Get MySQL Database Connection using PDO
 */
function getDBConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];
        return new PDO($dsn, DB_USER, DB_PASS, $options);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'error' => 'Database Connection Error: ' . $e->getMessage()
        ]);
        exit();
    }
}
