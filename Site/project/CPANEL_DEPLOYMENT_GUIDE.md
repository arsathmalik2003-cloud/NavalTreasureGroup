# Naval Treasure Group - cPanel Deployment & MySQL Setup Guide

This guide provides step-by-step instructions for deploying the **Naval Treasure Group International** web application and database on standard **cPanel hosting environments** (supporting both **PHP** and **Node.js**).

---

## 1. MySQL Database Setup (cPanel phpMyAdmin)

The project includes a ready-to-import MySQL / MariaDB schema file with complete table structures, indexes, and initial sample data:
- **File Location:** `cpanel-mysql-schema.sql` (in the root of the project directory)

### Steps to Import:
1. Log into your **cPanel Dashboard**.
2. Open **MySQL Databases** or **MySQL Database Wizard**:
   - Create a new database (e.g., `yourcpaneluser_ntg_db`).
   - Create a new database user (e.g., `yourcpaneluser_ntg_user`) with a strong password.
   - Assign the user **ALL PRIVILEGES** on the newly created database.
3. Open **phpMyAdmin** from cPanel:
   - Click on your new database on the left sidebar.
   - Click the **Import** tab at the top.
   - Click **Choose File** and select `cpanel-mysql-schema.sql`.
   - Click **Import / Go** at the bottom.
4. Verify that the following 5 tables are created:
   - `products` (with 6 default sample products)
   - `gallery_items` (with 4 sample marine/processing images)
   - `blog_posts` (with 2 sample sustainability & cold-chain articles)
   - `enquiries` (ready for incoming contact form submissions)
   - `admin_users` (default admin account: `admin@ntgseafoods.com` / `adminpassword123`)

---

## 2. Backend Deployment Options on cPanel

You can run your backend on cPanel using either **PHP** (universally supported on all cPanel hosts) or **Node.js** (via cPanel Node.js Selector).

### Option A: PHP REST API Backend (Zero-Config, Recommended for Shared Hosting)
We have included a production-ready PHP API inside the `cpanel-php-backend/` directory.

1. Upload the contents of `cpanel-php-backend/` to your cPanel hosting root or a `/api/` subdirectory inside `public_html/`.
2. Open `config.php` and update the database credentials:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'yourcpaneluser_ntg_db');
   define('DB_USER', 'yourcpaneluser_ntg_user');
   define('DB_PASS', 'your_secure_password_here');
   ```
3. Test your API endpoint in the browser:
   - `https://yourdomain.com/api.php?action=products` (should return JSON list of products)
   - CORS and JSON headers are automatically configured in `config.php` and `.htaccess`.

---

### Option B: Node.js Express / MySQL API Backend (For cPanel with Setup Node.js App)
We have included an Express + MySQL API inside the `cpanel-node-backend/` directory.

1. In cPanel, go to **Setup Node.js App** -> **Create Application**.
2. Choose Node.js version **18.x** or **20.x**.
3. Set **Application root** to `cpanel-node-backend`.
4. Set **Application startup file** to `server.js`.
5. Upload the files from `cpanel-node-backend/` and click **Run NPM Install** in cPanel.
6. Create a `.env` file inside the application folder using `.env.example`:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=yourcpaneluser_ntg_db
   DB_USER=yourcpaneluser_ntg_user
   DB_PASS=your_secure_password_here
   ```
7. Click **Restart** on the Node.js application in cPanel.

---

## 3. Next.js Frontend Deployment on cPanel

### Method 1: Standalone Node.js App (Full SSR & App Router on cPanel)
1. Build the Next.js app locally or on the server:
   ```bash
   npm install
   npm run build
   ```
2. In cPanel **Setup Node.js App**, set:
   - **Application root**: `public_html` (or your app directory)
   - **Application startup file**: `server.js` (we have included a production `server.js` wrapper in the project root)
3. In cPanel, add environment variables for your database/API URLs.
4. Click **Restart**. cPanel Passenger will automatically serve the Next.js application.

---

### Method 2: Static HTML/CSS/JS Export (For Standard Apache / LiteSpeed cPanel Hosting)
If your cPanel plan does not support persistent Node.js servers:
1. Open `next.config.js` and uncomment:
   ```javascript
   output: 'export',
   ```
2. Run the build command:
   ```bash
   npm run build
   ```
3. The static files will be generated in the `/out` directory.
4. Upload all contents of the `/out` directory directly into your cPanel `public_html/` folder.

---

## 4. Local Preview

To preview and test the application locally:
```bash
npm run dev
```
- Open `http://localhost:3000` in your web browser.
- All ocean-inspired animations, water ripples, caustics, and admin panel features are ready to test.
