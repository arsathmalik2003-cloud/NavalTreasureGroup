/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the line below if you want to export static HTML/CSS/JS for cPanel standard hosting (without Node.js):
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
