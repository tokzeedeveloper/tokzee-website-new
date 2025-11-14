# Better Friend - Static Website Setup

## ✅ Current Structure

This is now a **static website only** - no backend, no database, just frontend files.

```
better-friend/
├── client/              # Frontend source files
│   ├── src/            # React components, pages, styles
│   ├── public/         # Static assets (_redirects, _headers)
│   └── index.html      # Entry HTML file
├── dist/public/        # Build output (for Netlify)
├── attached_assets/    # Images and media files
├── netlify.toml        # Netlify configuration
└── dev.sh             # Development server script
```

**Backend removed:**
- ❌ `server/` folder deleted
- ❌ `shared/` folder deleted  
- ❌ `drizzle.config.ts` deleted
- ❌ Database and API routes removed

---

## 🚀 Development

### Option 1: Run the Development Script
```bash
./dev.sh
```

### Option 2: Run Vite Directly
```bash
npx vite --host 0.0.0.0 --port 5000
```

This starts the Vite dev server at:
- **Local**: http://localhost:5000
- **Replit Preview**: Available in the webview

**Note:** The "Start application" workflow button won't work because `package.json` still references the old backend. Use the commands above instead.

---

## 📦 Building for Production

### Build Command
```bash
npx vite build
```

### Output
- **Directory**: `dist/public/`
- **Contents**:
  - `index.html` - Main HTML file
  - `assets/` - Optimized CSS, JS, images
  - `_redirects` - Netlify redirects (SPA fallback)
  - `_headers` - Security headers
  - `favicon.png` - Site icon

---

## 🌐 Netlify Deployment

### Configuration (netlify.toml)
```toml
[build]
  publish = "dist/public"
  command = "vite build"
```

### Deploy Steps

**Option 1: Git-Based Deployment (Recommended)**
1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Static website updates"
   git push origin main
   ```
2. Netlify auto-deploys from GitHub
3. Site updates automatically on every push

**Option 2: Manual Deployment**
1. Build locally: `npx vite build`
2. Drag `dist/public/` folder to Netlify dashboard
3. Site updates immediately

### Build Settings on Netlify
- **Build command**: `vite build`
- **Publish directory**: `dist/public`
- **Node version**: 20

---

## 📁 What's Included

### Frontend Pages
- **Home** (`/`) - Hero section, features, CTA
- **Terms & Conditions** (`/terms`)
- **Privacy Policy** (`/privacy`)
- **Community Guidelines** (`/guidelines`)

### Features
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **SEO Optimized** - Meta tags, Open Graph, structured data
- ✅ **Google Analytics** - GA4 tracking (requires VITE_GA_MEASUREMENT_ID env var)
- ✅ **Security Headers** - HSTS, CSP, X-Frame-Options
- ✅ **Performance** - Optimized assets, code splitting
- ✅ **Accessibility** - Semantic HTML, ARIA labels
- ✅ **Pure Static** - No backend, no database, just frontend files

### Design
- **Color Scheme**: Yellow (#FFC400) + Black (Bumble-inspired)
- **Typography**: Modern sans-serif
- **Components**: Shadcn UI + Tailwind CSS
- **Dark Mode**: Not implemented (bright yellow theme)

### Contact Information
- **Address**: 48-B Ambamata Scheme, Udaipur, Rajasthan
- **Email**: support@betterfriend.live

---

## 🔧 Customization

### Update Content
- **Hero Section**: `client/src/components/HeroSection.tsx`
- **Footer**: `client/src/components/Footer.tsx`
- **Legal Pages**: `client/src/pages/Terms.tsx`, `Privacy.tsx`, `Guidelines.tsx`

### Update Styles
- **Colors**: `client/src/index.css` (CSS variables)
- **Theme**: `tailwind.config.ts`
- **Components**: `client/src/components/ui/`

### Update Images
- **Hero Image**: `attached_assets/Indian_video_calling_app_hero_*.png`
- **Favicon**: `client/public/favicon.png`

---

## 🐛 Troubleshooting

### "Start application" workflow fails
**Cause**: The workflow still tries to run the old backend server.  
**Solution**: Use `./dev.sh` or `npx vite` instead for development.

### Build fails
**Solution**: 
```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npx vite build
```

### Netlify deployment shows 404
**Cause**: Wrong publish directory.  
**Solution**: Verify `netlify.toml` has `publish = "dist/public"`

### SSL error on custom domain
**Cause**: DNS not configured or SSL not provisioned.  
**Solution**: See `NETLIFY_SSL_FINAL_FIX.md` for complete guide.

---

## 📊 Tech Stack

### Core
- **React 18** - UI library
- **Vite 5** - Build tool
- **TypeScript** - Type safety
- **Wouter** - Client-side routing

### Styling
- **Tailwind CSS 3** - Utility-first CSS
- **Shadcn UI** - Component library
- **Lucide Icons** - Icon system
- **Framer Motion** - Animations

### Tools
- **React Hook Form** - Forms (available if needed for future features)
- **Zod** - Schema validation

---

## 🎯 Next Steps

### Optional Enhancements
1. **Contact Form** - Use Formspree, Netlify Forms, or similar service (no backend needed)
2. **Blog Section** - Static generation or headless CMS (Contentful, Sanity)
3. **Dark Mode** - If desired (currently bright yellow/black theme only)
4. **Internationalization** - Multiple language support
5. **Newsletter Signup** - Email service integration (Mailchimp, ConvertKit)

### Performance
- [ ] Image optimization (already included)
- [ ] Code splitting (Vite handles this)
- [ ] Lazy loading (implement for images)
- [ ] Service worker (PWA features)

---

## 📞 Support

For website updates or issues:
- **Email**: support@betterfriend.live
- **Repository**: [Your GitHub repo URL]
- **Netlify Dashboard**: https://app.netlify.com

---

## 📝 License

© 2025 Better Friend. All rights reserved.
