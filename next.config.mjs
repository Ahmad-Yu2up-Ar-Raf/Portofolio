/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
},
};

export default nextConfig;
