# Deploying Your Portfolio to Vercel

## Prerequisites
1. Create a [Vercel account](https://vercel.com/signup) if you don't have one yet
2. Install Vercel CLI (optional for command line deployment):
   ```
   npm install -g vercel
   ```

## Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
   - Create a new GitHub repository
   - Initialize git in your project folder:
     ```
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/yourusername/your-repo.git
     git push -u origin main
     ```

2. Import your project on Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js
   - Configure project settings:
     - Set your project name
     - Set the build settings (should be auto-configured)
     - Framework preset: Next.js
   - Click "Deploy"

3. Custom Domain Setup:
   - After deployment, go to "Settings" → "Domains"
   - Add your custom domain (e.g., ahmadyusufarrafi.id)
   - Follow Vercel's instructions to update your DNS settings

## Option 2: Deploy via Vercel CLI

1. Log in to Vercel from your terminal:
   ```
   vercel login
   ```

2. Navigate to your project directory and run:
   ```
   vercel
   ```

3. Follow the CLI prompts:
   - Set up and deploy: Yes
   - Link to existing project: No
   - Set the project name
   - In which directory is your code located: ./
   - Want to override settings: No

## Post-Deployment Steps

1. **Test your site** thoroughly after deployment
2. **Set up analytics**:
   - Go to project settings → Analytics
   - Enable Vercel Analytics

3. **Enable preview deployments** for future updates:
   - Every push to your GitHub repo will create a preview deployment
   - Merged PRs will update your production site

4. **Configure environment variables** if needed:
   - Go to project settings → Environment Variables
   - Add any necessary environment variables

5. **Set up a custom domain**:
   - Purchase domain from a registrar like Namecheap or GoDaddy
   - Add domain in Vercel project settings
   - Update nameservers or add DNS records as instructed by Vercel

## Monitoring and Maintenance

- Use Vercel Dashboard to monitor:
  - Performance metrics
  - Deployments
  - Error logs
  - Visit analytics

- Set up Continuous Integration:
  - Every push to your main branch will automatically deploy to production
  - Create pull requests for features to get preview deployments

## Troubleshooting

If you encounter any issues during deployment:
- Check build logs in the Vercel dashboard
- Ensure all dependencies are correctly listed in package.json
- Verify your Next.js configuration is compatible with Vercel 