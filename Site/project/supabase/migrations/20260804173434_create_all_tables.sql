/*
# Create all application tables

1. New Tables
  - `products` - Product catalog with categories
    - `id` (uuid, primary key)
    - `name` (text, not null)
    - `category` (text, not null) - seafood/meat/vegetable_powder/fruit_powder
    - `description` (text)
    - `image_url` (text)
    - `display_order` (integer, default 0)
    - `is_published` (boolean, default true)
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  - `gallery_items` - Image gallery
    - `id` (uuid, primary key)
    - `image_url` (text, not null)
    - `caption` (text)
    - `display_order` (integer, default 0)
    - `is_published` (boolean, default true)
    - `created_at` (timestamptz)

  - `blog_posts` - Blog articles with rich text
    - `id` (uuid, primary key)
    - `title` (text, not null)
    - `content` (text) - HTML rich text content
    - `excerpt` (text)
    - `featured_image` (text)
    - `status` (text, default 'draft') - draft/published
    - `published_at` (timestamptz)
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  - `enquiries` - Contact form submissions
    - `id` (uuid, primary key)
    - `name` (text, not null)
    - `email` (text, not null)
    - `phone` (text)
    - `subject` (text, not null)
    - `message` (text, not null)
    - `is_read` (boolean, default false)
    - `created_at` (timestamptz)

2. Security
  - RLS enabled on all tables
  - Public (anon+authenticated) can SELECT published products, gallery items, blog posts
  - Public can INSERT enquiries only
  - Only authenticated admin can do full CRUD on all tables
  - Only authenticated admin can SELECT enquiries

3. Notes
  - Single admin account model - one authenticated user manages everything
  - No user_id columns needed since admin is the only writer
  - Anon users can read published content and submit enquiries
*/

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL CHECK (category IN ('seafood', 'meat', 'vegetable_powder', 'fruit_powder')),
  description text,
  image_url text,
  display_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_published_products" ON products;
CREATE POLICY "public_read_published_products" ON products FOR SELECT
  TO anon, authenticated USING (is_published = true);

DROP POLICY IF EXISTS "admin_insert_products" ON products;
CREATE POLICY "admin_insert_products" ON products FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_products" ON products;
CREATE POLICY "admin_update_products" ON products FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_products" ON products;
CREATE POLICY "admin_delete_products" ON products FOR DELETE
  TO authenticated USING (true);

-- Admin also needs to see unpublished products
DROP POLICY IF EXISTS "admin_read_all_products" ON products;
CREATE POLICY "admin_read_all_products" ON products FOR SELECT
  TO authenticated USING (true);

-- Gallery items table
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  caption text,
  display_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_published_gallery" ON gallery_items;
CREATE POLICY "public_read_published_gallery" ON gallery_items FOR SELECT
  TO anon, authenticated USING (is_published = true);

DROP POLICY IF EXISTS "admin_insert_gallery" ON gallery_items;
CREATE POLICY "admin_insert_gallery" ON gallery_items FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_gallery" ON gallery_items;
CREATE POLICY "admin_update_gallery" ON gallery_items FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_gallery" ON gallery_items;
CREATE POLICY "admin_delete_gallery" ON gallery_items FOR DELETE
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_read_all_gallery" ON gallery_items;
CREATE POLICY "admin_read_all_gallery" ON gallery_items FOR SELECT
  TO authenticated USING (true);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text,
  excerpt text,
  featured_image text,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_published_posts" ON blog_posts;
CREATE POLICY "public_read_published_posts" ON blog_posts FOR SELECT
  TO anon, authenticated USING (status = 'published');

DROP POLICY IF EXISTS "admin_insert_posts" ON blog_posts;
CREATE POLICY "admin_insert_posts" ON blog_posts FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_posts" ON blog_posts;
CREATE POLICY "admin_update_posts" ON blog_posts FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_posts" ON blog_posts;
CREATE POLICY "admin_delete_posts" ON blog_posts FOR DELETE
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_read_all_posts" ON blog_posts;
CREATE POLICY "admin_read_all_posts" ON blog_posts FOR SELECT
  TO authenticated USING (true);

-- Enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_enquiries" ON enquiries;
CREATE POLICY "public_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_read_enquiries" ON enquiries;
CREATE POLICY "admin_read_enquiries" ON enquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_update_enquiries" ON enquiries;
CREATE POLICY "admin_update_enquiries" ON enquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_enquiries" ON enquiries;
CREATE POLICY "admin_delete_enquiries" ON enquiries FOR DELETE
  TO authenticated USING (true);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_published ON products(is_published, display_order);
CREATE INDEX IF NOT EXISTS idx_gallery_published ON gallery_items(is_published, display_order);
CREATE INDEX IF NOT EXISTS idx_blog_status ON blog_posts(status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_read ON enquiries(is_read, created_at DESC);
