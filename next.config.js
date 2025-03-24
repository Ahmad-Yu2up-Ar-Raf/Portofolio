// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1280, 1600],
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'yusufffffffffff.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'yusuffff.my.id',
      },
    ],
  },



  webpack: (config, { isServer }) => {
    // Fix for webpack hot update issues
    if (!isServer) {
      config.optimization.runtimeChunk = 'single';
    }
    return config;
  },
};

module.exports = nextConfig;