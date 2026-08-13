-- ============================================================================
-- NAVAL TREASURE GROUP - cPanel MySQL / MariaDB Schema
-- ============================================================================
-- Compatible with cPanel MySQL 5.7+ / MariaDB 10+
-- Import this file via cPanel -> phpMyAdmin -> Import tab
-- ============================================================================

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
SET NAMES utf8mb4;

-- ----------------------------------------------------------------------------
-- Table structure for table `products`
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `products` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(100) NOT NULL DEFAULT 'seafood',
  `description` TEXT NULL DEFAULT NULL,
  `image_url` TEXT NULL DEFAULT NULL,
  `display_order` INT(11) NOT NULL DEFAULT 0,
  `is_published` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_category` (`category`),
  KEY `idx_display_order` (`display_order`),
  KEY `idx_is_published` (`is_published`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table structure for table `gallery_items`
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `gallery_items` (
  `id` VARCHAR(36) NOT NULL,
  `image_url` TEXT NOT NULL,
  `caption` TEXT NULL DEFAULT NULL,
  `display_order` INT(11) NOT NULL DEFAULT 0,
  `is_published` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_gallery_order` (`display_order`),
  KEY `idx_gallery_published` (`is_published`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table structure for table `blog_posts`
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `blog_posts` (
  `id` VARCHAR(36) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `content` LONGTEXT NULL DEFAULT NULL,
  `excerpt` TEXT NULL DEFAULT NULL,
  `featured_image` TEXT NULL DEFAULT NULL,
  `status` VARCHAR(50) NOT NULL DEFAULT 'draft',
  `published_at` TIMESTAMP NULL DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_blog_status` (`status`),
  KEY `idx_blog_published_at` (`published_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table structure for table `enquiries`
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `enquiries` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(100) NULL DEFAULT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `is_read` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_enquiry_read` (`is_read`),
  KEY `idx_enquiry_date` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table structure for table `admin_users`
-- ----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` VARCHAR(36) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` VARCHAR(50) NOT NULL DEFAULT 'admin',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_admin_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SAMPLE DATA (INITIAL SEED DATA)
-- ============================================================================

-- Seed sample products
INSERT IGNORE INTO `products` (`id`, `name`, `category`, `description`, `image_url`, `display_order`, `is_published`) VALUES
('prod-001', 'Premium Frozen Tiger Prawns', 'seafood', 'Sustainably farmed, blast-frozen tiger prawns with exceptional texture and flavor. Ideal for high-end hospitality and food processing.', 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80', 10, 1),
('prod-002', 'Wild-Caught Tuna Loins', 'seafood', 'Sashimi-grade yellowfin tuna loins harvested from deep ocean fisheries under strict MSC sustainability standards.', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80', 20, 1),
('prod-003', 'Prime Beef Cuts & Trim', 'meat', 'Halal-certified imported pasture-raised beef cuts suitable for commercial distribution, restaurants, and wholesale trade.', 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80', 30, 1),
('prod-004', 'Dehydrated Spinach Powder', 'vegetable_powder', '100% natural dehydrated spinach leaf powder manufactured via low-temperature spray drying to preserve chlorophyll and essential nutrients.', 'https://images.unsplash.com/photo-1622484215805-797f2ee0c776?auto=format&fit=crop&w=800&q=80', 40, 1),
('prod-005', 'Organic Mango Juice Powder', 'fruit_powder', 'Fine soluble mango powder derived from tropical sun-ripened fruits. Perfect for beverage manufacturing and nutritional blends.', 'https://images.unsplash.com/photo-1553272725-086100aecf5e?auto=format&fit=crop&w=800&q=80', 50, 1),
('prod-006', 'Atlantic Salmon Fillets', 'seafood', 'Premium trimmed Atlantic salmon fillets with rich Omega-3 content and consistent marbling. Individually quick frozen (IQF).', 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', 60, 1);

-- Seed sample gallery items
INSERT IGNORE INTO `gallery_items` (`id`, `image_url`, `caption`, `display_order`, `is_published`) VALUES
('gal-001', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80', 'Deep sea fishing vessel operating in international waters under sustainable guidelines.', 10, 1),
('gal-002', 'https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=1200&q=80', 'State-of-the-art cold chain storage facility ensuring -25°C blast freeze retention.', 20, 1),
('gal-003', 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=80', 'Fresh seafood grading and quality inspection prior to export packaging.', 30, 1),
('gal-004', 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80', 'Export-grade Atlantic salmon processed under HACCP and ISO 22000 standards.', 40, 1);

-- Seed sample blog posts
INSERT IGNORE INTO `blog_posts` (`id`, `title`, `content`, `excerpt`, `featured_image`, `status`, `published_at`) VALUES
('blog-001', 'The Future of Sustainable Global Seafood Trade', '<h3>Rising Standards in Sourcing</h3><p>As international demand for marine protein grows, responsible fisheries and traceable cold-chain logistics have become the foundation of global seafood trade...</p>', 'How traceability and MSC certification are reshaping international seafood supply chains.', 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80', 'published', CURRENT_TIMESTAMP),
('blog-002', 'Maintaining 100% Quality in Cold Chain Sourcing', '<h3>Why -25°C Matters</h3><p>Maintaining temperature consistency from vessel deck to destination port ensures maximum texture, flavor, and shelf-life preservation...</p>', 'An inside look at our temperature-controlled logistics from origin ports to destination warehouses.', 'https://images.unsplash.com/photo-1553603227-2358aabe821e?auto=format&fit=crop&w=1200&q=80', 'published', CURRENT_TIMESTAMP);

-- Seed default admin user (email: admin@ntgseafoods.com, default password: adminpassword123 - bcrypt hash)
INSERT IGNORE INTO `admin_users` (`id`, `email`, `password_hash`, `role`) VALUES
('adm-default', 'admin@ntgseafoods.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'super_admin');
