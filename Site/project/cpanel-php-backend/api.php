<?php
/**
 * NAVAL TREASURE GROUP INTERNATIONAL - cPanel PHP REST API Router
 * Supports CRUD endpoints for products, gallery_items, blog_posts, and enquiries.
 */

require_once __DIR__ . '/config.php';

$pdo = getDBConnection();

$action = isset($_GET['action']) ? $_GET['action'] : '';
$method = $_SERVER['REQUEST_METHOD'];

// Helper function for JSON responses
function sendResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit();
}

try {
    switch ($action) {
        // --------------------------------------------------------------------
        // PRODUCTS ENDPOINT
        // --------------------------------------------------------------------
        case 'products':
            if ($method === 'GET') {
                $stmt = $pdo->query("SELECT * FROM products ORDER BY display_order ASC");
                sendResponse(['data' => $stmt->fetchAll()]);
            } elseif ($method === 'POST') {
                $input = json_decode(file_get_contents('php://input'), true);
                $id = !empty($input['id']) ? $input['id'] : uniqid('prod-');
                $stmt = $pdo->prepare("INSERT INTO products (id, name, category, description, image_url, display_order, is_published) VALUES (?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE name=VALUES(name), category=VALUES(category), description=VALUES(description), image_url=VALUES(image_url), display_order=VALUES(display_order), is_published=VALUES(is_published)");
                $stmt->execute([
                    $id,
                    $input['name'] ?? '',
                    $input['category'] ?? 'seafood',
                    $input['description'] ?? null,
                    $input['image_url'] ?? null,
                    intval($input['display_order'] ?? 0),
                    !empty($input['is_published']) ? 1 : 0
                ]);
                sendResponse(['success' => true, 'id' => $id]);
            } elseif ($method === 'DELETE') {
                $id = $_GET['id'] ?? '';
                $stmt = $pdo->prepare("DELETE FROM products WHERE id = ?");
                $stmt->execute([$id]);
                sendResponse(['success' => true]);
            }
            break;

        // --------------------------------------------------------------------
        // GALLERY ITEMS ENDPOINT
        // --------------------------------------------------------------------
        case 'gallery':
            if ($method === 'GET') {
                $stmt = $pdo->query("SELECT * FROM gallery_items ORDER BY display_order ASC");
                sendResponse(['data' => $stmt->fetchAll()]);
            } elseif ($method === 'POST') {
                $input = json_decode(file_get_contents('php://input'), true);
                $id = !empty($input['id']) ? $input['id'] : uniqid('gal-');
                $stmt = $pdo->prepare("INSERT INTO gallery_items (id, image_url, caption, display_order, is_published) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE image_url=VALUES(image_url), caption=VALUES(caption), display_order=VALUES(display_order), is_published=VALUES(is_published)");
                $stmt->execute([
                    $id,
                    $input['image_url'] ?? '',
                    $input['caption'] ?? null,
                    intval($input['display_order'] ?? 0),
                    !empty($input['is_published']) ? 1 : 0
                ]);
                sendResponse(['success' => true, 'id' => $id]);
            } elseif ($method === 'DELETE') {
                $id = $_GET['id'] ?? '';
                $stmt = $pdo->prepare("DELETE FROM gallery_items WHERE id = ?");
                $stmt->execute([$id]);
                sendResponse(['success' => true]);
            }
            break;

        // --------------------------------------------------------------------
        // BLOG POSTS ENDPOINT
        // --------------------------------------------------------------------
        case 'blog':
            if ($method === 'GET') {
                $stmt = $pdo->query("SELECT * FROM blog_posts ORDER BY created_at DESC");
                sendResponse(['data' => $stmt->fetchAll()]);
            } elseif ($method === 'POST') {
                $input = json_decode(file_get_contents('php://input'), true);
                $id = !empty($input['id']) ? $input['id'] : uniqid('blog-');
                $stmt = $pdo->prepare("INSERT INTO blog_posts (id, title, content, excerpt, featured_image, status, published_at) VALUES (?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE title=VALUES(title), content=VALUES(content), excerpt=VALUES(excerpt), featured_image=VALUES(featured_image), status=VALUES(status), published_at=VALUES(published_at)");
                $stmt->execute([
                    $id,
                    $input['title'] ?? '',
                    $input['content'] ?? null,
                    $input['excerpt'] ?? null,
                    $input['featured_image'] ?? null,
                    $input['status'] ?? 'draft',
                    !empty($input['published_at']) ? $input['published_at'] : null
                ]);
                sendResponse(['success' => true, 'id' => $id]);
            } elseif ($method === 'DELETE') {
                $id = $_GET['id'] ?? '';
                $stmt = $pdo->prepare("DELETE FROM blog_posts WHERE id = ?");
                $stmt->execute([$id]);
                sendResponse(['success' => true]);
            }
            break;

        // --------------------------------------------------------------------
        // ENQUIRIES ENDPOINT
        // --------------------------------------------------------------------
        case 'enquiries':
            if ($method === 'GET') {
                $stmt = $pdo->query("SELECT * FROM enquiries ORDER BY created_at DESC");
                sendResponse(['data' => $stmt->fetchAll()]);
            } elseif ($method === 'POST') {
                $input = json_decode(file_get_contents('php://input'), true);
                $id = uniqid('enq-');
                $stmt = $pdo->prepare("INSERT INTO enquiries (id, name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?, ?)");
                $stmt->execute([
                    $id,
                    $input['name'] ?? '',
                    $input['email'] ?? '',
                    $input['phone'] ?? null,
                    $input['subject'] ?? '',
                    $input['message'] ?? ''
                ]);
                sendResponse(['success' => true, 'id' => $id], 201);
            } elseif ($method === 'PUT') {
                // Mark as read
                $input = json_decode(file_get_contents('php://input'), true);
                $id = $input['id'] ?? '';
                $stmt = $pdo->prepare("UPDATE enquiries SET is_read = ? WHERE id = ?");
                $stmt->execute([!empty($input['is_read']) ? 1 : 0, $id]);
                sendResponse(['success' => true]);
            } elseif ($method === 'DELETE') {
                $id = $_GET['id'] ?? '';
                $stmt = $pdo->prepare("DELETE FROM enquiries WHERE id = ?");
                $stmt->execute([$id]);
                sendResponse(['success' => true]);
            }
            break;

        default:
            sendResponse(['error' => 'Unknown endpoint action'], 404);
            break;
    }
} catch (Exception $e) {
    sendResponse(['error' => 'API Error: ' . $e->getMessage()], 500);
}
