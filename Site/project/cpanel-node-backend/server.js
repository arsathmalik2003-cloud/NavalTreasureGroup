/**
 * NAVAL TREASURE GROUP INTERNATIONAL - cPanel Node.js Express / MySQL REST API
 * Supports CRUD operations for products, gallery_items, blog_posts, enquiries, and auth.
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'ntg_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 as healthy');
    res.json({ success: true, database: 'connected' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ----------------------------------------------------------------------------
// PRODUCTS ENDPOINTS
// ----------------------------------------------------------------------------
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products ORDER BY display_order ASC');
    res.json({ data: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const { id, name, category, description, image_url, display_order, is_published } = req.body;
    const prodId = id || `prod-${Date.now()}`;
    const query = `
      INSERT INTO products (id, name, category, description, image_url, display_order, is_published)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      name=VALUES(name), category=VALUES(category), description=VALUES(description),
      image_url=VALUES(image_url), display_order=VALUES(display_order), is_published=VALUES(is_published)
    `;
    await pool.query(query, [
      prodId,
      name || '',
      category || 'seafood',
      description || null,
      image_url || null,
      display_order || 0,
      is_published !== undefined ? (is_published ? 1 : 0) : 1,
    ]);
    res.json({ success: true, id: prodId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM products WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------------------------------------------------------------
// GALLERY ITEMS ENDPOINTS
// ----------------------------------------------------------------------------
app.get('/api/gallery', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM gallery_items ORDER BY display_order ASC');
    res.json({ data: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/gallery', async (req, res) => {
  try {
    const { id, image_url, caption, display_order, is_published } = req.body;
    const galId = id || `gal-${Date.now()}`;
    const query = `
      INSERT INTO gallery_items (id, image_url, caption, display_order, is_published)
      VALUES (?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      image_url=VALUES(image_url), caption=VALUES(caption),
      display_order=VALUES(display_order), is_published=VALUES(is_published)
    `;
    await pool.query(query, [
      galId,
      image_url || '',
      caption || null,
      display_order || 0,
      is_published !== undefined ? (is_published ? 1 : 0) : 1,
    ]);
    res.json({ success: true, id: galId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/gallery/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM gallery_items WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------------------------------------------------------------
// BLOG POSTS ENDPOINTS
// ----------------------------------------------------------------------------
app.get('/api/blog', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM blog_posts ORDER BY created_at DESC');
    res.json({ data: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/blog', async (req, res) => {
  try {
    const { id, title, content, excerpt, featured_image, status, published_at } = req.body;
    const blogId = id || `blog-${Date.now()}`;
    const query = `
      INSERT INTO blog_posts (id, title, content, excerpt, featured_image, status, published_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      title=VALUES(title), content=VALUES(content), excerpt=VALUES(excerpt),
      featured_image=VALUES(featured_image), status=VALUES(status), published_at=VALUES(published_at)
    `;
    await pool.query(query, [
      blogId,
      title || '',
      content || null,
      excerpt || null,
      featured_image || null,
      status || 'draft',
      published_at || null,
    ]);
    res.json({ success: true, id: blogId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/blog/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM blog_posts WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------------------------------------------------------------
// ENQUIRIES ENDPOINTS
// ----------------------------------------------------------------------------
app.get('/api/enquiries', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM enquiries ORDER BY created_at DESC');
    res.json({ data: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/enquiries', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const enqId = `enq-${Date.now()}`;
    const query = `
      INSERT INTO enquiries (id, name, email, phone, subject, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    await pool.query(query, [name, email, phone || null, subject, message]);
    res.status(201).json({ success: true, id: enqId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/enquiries/:id/read', async (req, res) => {
  try {
    await pool.query('UPDATE enquiries SET is_read = ? WHERE id = ?', [
      req.body.is_read ? 1 : 0,
      req.params.id,
    ]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/enquiries/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM enquiries WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`[cPanel Node.js API] Server running on port ${PORT}`);
});
