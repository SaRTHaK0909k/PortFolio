/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during the build process
  },
  images: {
    unoptimized: true, // Disables Next.js image optimization (useful for external images)
  },
  env: {
    // Environment variables for use in your Next.js project
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://neondb_owner:L8NTbQuAf0qK@ep-square-block-a5gwsapk.us-east-2.aws.neon.tech/neondb?sslmode=require',
  },
  webpack: (config) => {
    // Modify webpack configuration if needed
    return config;
  },
};

module.exports = nextConfig;
