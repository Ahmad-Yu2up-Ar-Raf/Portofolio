/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    // Allow unoptimized images for animation effects
    unoptimized: process.env.NODE_ENV === "development",
    // Configure higher quality defaults
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1280, 1600],
    formats: ["image/webp", "image/avif"],
    // If your images are on another domain, add it here
    domains: ["localhost:3000"],
  },
};

export default nextConfig;
