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
  // Compression for better performance
  compress: true,
  // Improve page load time
  poweredByHeader: false,
  // Improve page speed with asset optimization
  swcMinify: true,
  // Configure strict headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        // Cache static assets for better performance
        source: '/(.*)\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
