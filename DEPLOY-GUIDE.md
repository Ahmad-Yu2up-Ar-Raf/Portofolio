# Clean Deployment Guide

Follow these exact steps to deploy your site without errors:

## 1. Clean up your project locally

```bash
# Create a clean deployment branch
git checkout -b deploy-clean

# Make sure jsconfig.json exists
# If it's missing, create it as shown in step 2 below
```

## 2. Fix path aliases

Create or verify jsconfig.json:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## 3. Fix your package.json

Remove the turbopack flag:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 4. Simplify your Next.js config

Edit next.config.mjs to be minimal:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === "development",
    domains: ["localhost:3000"],
  },
  compress: true,
  poweredByHeader: false
};

export default nextConfig;
```

## 5. Fix missing files

Create any referenced components that might be missing:
- Make sure your `[id].jsx` file has a valid export
- Check for missing CSS files
- Verify all imports resolve correctly

## 6. Deploy directly from GitHub with Vercel

1. Push your clean branch: `git push origin deploy-clean`
2. In Vercel, select this branch for deployment
3. Use these exact settings:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: next build
   - Install Command: npm install

## 7. If errors persist

Create a fresh Next.js project with:
```bash
npx create-next-app@latest my-new-portfolio
```

Then copy over your components one by one to ensure everything works. 