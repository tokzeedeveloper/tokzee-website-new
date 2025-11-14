# Better Friend

## Overview

Better Friend is an anonymous audio and video calling platform that connects users with verified companions for meaningful conversations. This is a **static marketing website** featuring the home page, privacy policy, terms of service, and community guidelines.

The site is built as a pure frontend application with React and deployed to Netlify as a static site.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)

**UI Design System:**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Design inspired by "warm minimalism" with pastel aesthetics and generous whitespace
- Typography: Poppins for display/headlines, Inter for body text
- Custom color system with HSL values for light/dark mode support

**State Management:**
- Local component state with React hooks only (no server state)

**Key Features:**
- Component-based architecture with reusable UI elements (cards, badges, sections)
- Google Analytics integration for tracking page views and events
- SEO optimization with meta tags and structured data
- Responsive design with mobile-first approach

### Build & Deployment

**Build System:**
- Vite for static site generation
- Build output: `dist/public/` directory
- Optimized assets with code splitting and tree shaking

**Deployment:**
- Netlify static hosting
- Custom domain: betterfriend.live
- Automatic deployments from Git
- Security headers configured (_headers file)
- SPA fallback routing (_redirects file)

**Development:**
- Local dev server: `./dev.sh` or `npx vite --host 0.0.0.0 --port 5000`
- Hot module replacement (HMR)
- TypeScript type checking

### External Dependencies

**Third-Party Services:**
- Google Analytics (GA4) for user behavior tracking and analytics
  - Requires `VITE_GA_MEASUREMENT_ID` environment variable
  - Automatically initialized on app load
- Google Fonts (Poppins and Inter) for typography

**Key Libraries:**
- Radix UI primitives for accessible, unstyled components
- class-variance-authority and clsx for dynamic className composition
- Lucide React for icons

**Development Tools:**
- Replit-specific plugins for development environment
- TypeScript for static type checking
- PostCSS with Tailwind for CSS processing

**Security:**
- Security headers via Netlify (_headers file)
- HSTS, X-Frame-Options, CSP configured
- No authentication (static marketing site)

**Asset Management:**
- Static assets stored in `attached_assets/generated_images`
- Vite alias configuration for easy asset imports

---

## Additional Documentation

For detailed setup, deployment, and development instructions, see:
- **STATIC_SITE_SETUP.md** - Comprehensive guide to development, building, and Netlify deployment
- **NETLIFY_SSL_FINAL_FIX.md** - Troubleshooting guide for SSL/DNS configuration