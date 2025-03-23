// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1280, 1600],
    formats: ["image/webp", "image/avif"],
    domains: ["localhost", "yusufffffffffff.vercel.app"], // Remove https:// from domain

  },
};

module.exports = nextConfig;