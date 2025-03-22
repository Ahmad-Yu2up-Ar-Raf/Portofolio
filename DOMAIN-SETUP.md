# Domain Setup for Your Portfolio

This guide will help you set up your custom domain with Vercel for your portfolio website.

## Recommended Domain Options

1. **Primary Option: ahmadyusufarrafi.id**
   - Best for local Indonesian SEO
   - Clearly represents your full name
   - Professional appearance

2. **Alternatives If Unavailable:**
   - **ahmadyusufarrafi.com** - Best for global reach
   - **ahmad-yusuf.dev** - Developer-focused domain
   - **ayar.dev** - Short and memorable

## Step-by-Step Domain Setup with Vercel

### 1. Purchase Your Domain

**Option 1: Local Indonesian Domain Registrar**
- [Niagahoster](https://www.niagahoster.co.id/)
- [Domainesia](https://www.domainesia.com/)
- [Rumahweb](https://www.rumahweb.com/)

**Option 2: International Domain Registrars**
- [Namecheap](https://www.namecheap.com/)
- [Google Domains](https://domains.google/)
- [GoDaddy](https://www.godaddy.com/)

### 2. Connect to Vercel

1. Deploy your project to Vercel if you haven't already:
   ```
   npm run build
   vercel --prod
   ```

2. Add your domain:
   - Go to your Vercel dashboard
   - Select your project
   - Click "Settings" → "Domains"
   - Enter your domain (e.g., `ahmadyusufarrafi.id`)
   - Click "Add"

3. Configure DNS:
   - Vercel will provide you with nameserver or DNS records
   - Go to your domain registrar and update DNS settings
   - For most cases, use the Vercel nameservers for simplest setup

4. Verify and wait for propagation:
   - DNS changes can take 24-48 hours to fully propagate
   - Vercel will show a green checkmark when the domain is properly configured

### 3. SSL/HTTPS Setup

- Vercel automatically provisions SSL certificates
- No additional setup is required for HTTPS

### 4. Domain Best Practices

- Set up email forwarding through your domain registrar
- Consider creating a professional email like contact@ahmadyusufarrafi.id
- Test your domain on different devices and browsers after setup

## Post-Launch Steps

1. Submit your site to Google Search Console
2. Update all social media profiles with your new domain
3. Monitor your site's performance with Vercel Analytics 