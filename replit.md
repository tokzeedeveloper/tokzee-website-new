# Tokzee App

## Overview

Tokzee is an anonymous audio and video calling platform that connects users with verified "SuperHosts" for meaningful conversations. The application provides a safe, encrypted environment for private conversations with features including verified profiles, end-to-end encryption, and 24/7 availability across 50+ countries.

The platform is built as a full-stack web application with a React frontend and Express backend, featuring a marketing website with pages for home, privacy policy, terms of service, and community guidelines.

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
- TanStack Query (React Query) for server state management
- Local component state with React hooks

**Key Features:**
- Component-based architecture with reusable UI elements (cards, badges, sections)
- Google Analytics integration for tracking page views and events
- SEO optimization with meta tags and structured data
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system
- HTTP server creation for potential WebSocket upgrades

**Development Setup:**
- Vite middleware integration for HMR in development
- Custom logging middleware for API request tracking
- Static file serving for production builds

**Data Layer:**
- Drizzle ORM configured for PostgreSQL
- Neon serverless database adapter
- In-memory storage implementation (MemStorage) as fallback/development mode
- Session management with connect-pg-simple

**API Design:**
- RESTful API structure (prefix: `/api`)
- JSON request/response format
- Centralized error handling

### External Dependencies

**Database:**
- PostgreSQL via Neon serverless (@neondatabase/serverless)
- Drizzle ORM for type-safe database queries
- Database schema includes users table with UUID primary keys

**Third-Party Services:**
- Google Analytics (GA4) for user behavior tracking and analytics
- Google Fonts (Poppins and Inter) for typography

**Key Libraries:**
- Radix UI primitives for accessible, unstyled components
- React Hook Form with Zod for form validation
- date-fns for date manipulation
- class-variance-authority and clsx for dynamic className composition
- Embla Carousel for image carousels

**Development Tools:**
- Replit-specific plugins for development environment
- TypeScript for static type checking
- PostCSS with Tailwind for CSS processing

**Authentication & Security:**
- Session-based authentication infrastructure (storage configured)
- Password hashing (schema includes password field)
- CORS and security headers (to be implemented)

**Asset Management:**
- Static assets stored in `attached_assets/generated_images`
- Vite alias configuration for easy asset imports