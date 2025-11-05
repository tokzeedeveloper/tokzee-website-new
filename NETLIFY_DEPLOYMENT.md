# Better Friend - Netlify Deployment Guide

This guide will help you deploy the Better Friend marketing website to Netlify.

## Prerequisites

1. A Netlify account (sign up at https://netlify.com)
2. Your Google Analytics 4 Measurement ID (optional, for analytics tracking)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider and select your repository

3. **Configure Build Settings**
   - **Build command**: `vite build`
   - **Publish directory**: `dist/public`
   - **Node version**: 20.x (automatically detected from netlify.toml)

4. **Set Environment Variables** (Optional but recommended)
   - Go to Site settings → Environment variables
   - Add the following variable:
     - Key: `VITE_GA_MEASUREMENT_ID`
     - Value: Your Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX)

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete (~2-3 minutes)
   - Your site will be live at a Netlify URL (e.g., `https://random-name-123.netlify.app`)

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Build the site locally**
   ```bash
   vite build
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist/public
   ```

## Custom Domain Setup

1. Go to your Netlify site dashboard
2. Click "Domain settings" → "Add custom domain"
3. Enter `www.betterfriend.live`
4. Follow the instructions to configure your DNS settings

### DNS Configuration for betterfriend.live

Add these DNS records at your domain registrar:

```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     [your-site-name].netlify.app
```

## Environment Variables

The following environment variable is used in this project:

- **VITE_GA_MEASUREMENT_ID**: Google Analytics 4 Measurement ID
  - Required: No (optional for analytics)
  - Example: `G-XXXXXXXXXX`
  - Get yours at: https://analytics.google.com/

## Files Created for Netlify Deployment

- **`netlify.toml`**: Main configuration file
  - Defines build settings
  - Sets up redirects for client-side routing
  - Configures security headers
  - Sets cache headers for assets

- **`client/public/_redirects`**: Fallback redirect configuration
  - Ensures all routes redirect to index.html for client-side routing

- **`.env.example`**: Example environment variables file
  - Copy to `.env` for local development

## Troubleshooting

### 404 Errors on Page Refresh
- ✅ **Fixed**: The `_redirects` file and netlify.toml configuration ensure all routes work correctly with client-side routing (Wouter)

### Build Fails
- Check that Node version is 20.x
- Verify all dependencies are installed: `npm install`
- Test local build: `vite build`

### Analytics Not Working
- Verify `VITE_GA_MEASUREMENT_ID` is set in Netlify environment variables
- Check browser console for any errors
- Ensure the measurement ID starts with `G-`

### Images Not Loading
- Verify images are in `attached_assets/` directory
- Check Vite alias configuration in `vite.config.ts`
- Images should be imported using `@assets/` prefix

## Project Structure

```
.
├── client/               # Frontend source code
│   ├── src/             # React components and pages
│   ├── public/          # Static assets
│   └── index.html       # HTML template
├── attached_assets/     # Images and media files
├── dist/                # Build output (generated)
│   └── public/          # Published to Netlify
├── netlify.toml         # Netlify configuration
└── .env.example         # Environment variables template
```

## Important Notes

1. **This is a static site deployment** - No backend/Express server is deployed to Netlify
2. **All routes work** - Client-side routing is properly configured
3. **SEO optimized** - All meta tags and Open Graph tags are included
4. **Analytics ready** - Google Analytics 4 is integrated
5. **Company info** - Footer includes: "48-B Ambamata Scheme, Udaipur, Rajasthan"

## Support

For issues with Netlify deployment, check:
- Netlify Docs: https://docs.netlify.com
- Netlify Support: https://www.netlify.com/support/

For issues with the Better Friend website:
- Contact: 48-B Ambamata Scheme, Udaipur, Rajasthan, India
