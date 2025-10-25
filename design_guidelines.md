# Tokzee App - Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by dostt.in's warm minimalism - clean layouts with soft pastel aesthetics, generous breathing room, and visual storytelling. The design emphasizes calmness, safety, and authentic human connection through large impactful typography, decorative subtle motifs, and image-forward sections.

**Core Principles**:
- Generous whitespace: Let content breathe with ample spacing
- Typography as hero: Large, bold type for emotional impact
- Soft & approachable: Pastel color palette creating warmth
- Image-driven storytelling: Visual narratives over text-heavy explanations
- Decorative subtlety: Gentle geometric patterns and motifs as accents

---

## Typography

**Font Stack**: 
- **Display**: Poppins (Google Fonts) - Headlines, hero sections, large quotes
- **Body**: Inter (Google Fonts) - All UI, body text, supporting content

**Hierarchy**:
- **Hero Headline**: Poppins, 5xl-7xl, font-bold, tracking-tight, leading-tight
- **Section Headers**: Poppins, 4xl-5xl, font-bold, leading-tight
- **Large Quote Text**: Poppins, 3xl-4xl, font-semibold, leading-snug (testimonials)
- **Subsection Headers**: Poppins, 2xl-3xl, font-semibold
- **Body Text**: Inter, lg-xl, font-normal, leading-relaxed
- **Small Text**: Inter, base, font-medium
- **Button Text**: Inter, base-lg, font-semibold

---

## Layout System

**Spacing Primitives**: Tailwind units of **4, 8, 12, 16, 20, 24, 32, 40, 48** for generous rhythm
- Micro-spacing: 4, 8 (tight relationships)
- Component spacing: 12, 16, 20 (within components)
- Section padding: 24, 32, 40, 48 (vertical section separation - use generously)

**Container Strategy**:
- Full-width sections with inner `max-w-7xl mx-auto px-8 lg:px-12`
- Content sections: `max-w-6xl`
- Text-focused areas: `max-w-3xl`
- Extra breathing room on all sides

**Vertical Rhythm**: 
- Desktop: py-32 to py-48 for major sections
- Mobile: py-20 to py-24 for sections
- Never force viewport heights - let content flow naturally

---

## Component Library

### Navigation
- **Desktop**: Horizontal bar with backdrop blur, sticky on scroll, py-6
- Logo left, minimal centered links (3-4 max), CTA right
- Links: text-base font-medium, generous px-6 spacing
- **Mobile**: Slide-out drawer, large touch targets (h-14)
- Primary CTA: rounded-full, px-8 py-3

### Hero Section
- **Layout**: Full-width, py-32 md:py-48, minimum 85vh height
- Large background image: Authentic people in warm video call moments, soft lighting, diverse representation
- Image treatment: Subtle warm overlay (pastel-toned gradient), slight blur for text contrast
- Content: Centered, max-w-4xl
- Headline: Ultra-large (text-5xl md:text-7xl), bold, short impactful phrase (3-5 words)
- Subheadline: text-xl md:text-2xl, max-w-2xl, mt-8
- CTA buttons: mt-12, primary + secondary, both rounded-full, backdrop-blur-md with semi-transparent backgrounds
- Decorative element: Subtle geometric pattern overlay (dots/circles) in corner

### Why Choose Tokzee Section
- **Layout**: py-32, max-w-6xl
- Large section header: text-4xl md:text-5xl, mb-20, centered
- 3-column grid on desktop (grid-cols-1 md:grid-cols-3), gap-12
- Feature cards: Minimal design, no borders, p-0
- Icon top: w-16 h-16, pastel-toned container (rounded-2xl, p-4)
- Title: text-2xl font-semibold, mt-6, mb-4
- Description: text-lg leading-relaxed
- Cards maintain breathing room with generous mb-12 on mobile

### Visual Storytelling Section
- **Layout**: Full-width alternating 2-column sections (image + text)
- First section: Image left, text right
- Second section: Text left, image right
- Images: Large (w-full h-96 md:h-[600px]), rounded-3xl, object-cover
- Text container: max-w-xl, pl-12 md:pl-20 (when right), pr-12 md:pr-20 (when left)
- Each section: py-24, shows one key feature/benefit with headline (text-3xl md:text-4xl), body text (text-lg), small supporting elements
- Images show: Real users in calls, safety features in action, connection moments

### How It Works
- **Layout**: py-32, max-w-5xl centered
- Section header: text-4xl md:text-5xl, mb-24, centered
- 3-step horizontal timeline on desktop, vertical on mobile
- Each step: Large decorative number (text-8xl font-bold, ultra-light opacity as background), step title (text-2xl font-semibold), description (text-lg), supporting icon
- Steps connected by decorative dotted lines (desktop only)
- Clean, minimal styling with generous spacing (gap-16)

### Statistics Section
- **Layout**: Full-width with subtle pastel background treatment, py-32
- 4-column grid (grid-cols-2 md:grid-cols-4), gap-12
- Each stat: Large number (text-5xl md:text-6xl font-bold), small label below (text-base uppercase tracking-wider)
- Centered alignment, minimal decoration
- Decorative subtle pattern background (geometric shapes, very low opacity)

### Testimonials
- **Layout**: py-32, max-w-6xl
- Section header: text-4xl md:text-5xl, mb-20, centered
- 2-column grid (grid-cols-1 md:grid-cols-2), gap-16
- Card design: Minimal, no borders, p-12, rounded-2xl with subtle pastel background
- Large quote text first: text-3xl md:text-4xl font-semibold Poppins, leading-snug, decorative opening quote mark (text-7xl, ultra-light opacity)
- Attribution below: text-lg, mt-8, name + age/location in lighter weight
- 4-6 testimonials total

### Language Support
- **Layout**: py-32, max-w-6xl
- Grid of language cards: grid-cols-2 md:grid-cols-3 lg:grid-cols-4, gap-8
- Each card: rounded-2xl, p-8, text-center, minimal border or subtle pastel background
- Language name: text-xl font-semibold
- Speaker count below: text-base
- Badge/indicator for availability: small pill shape
- "Request Language" CTA below grid: rounded-full button

### Trust & Safety Section
- **Layout**: py-32, max-w-6xl
- Large centered header: text-4xl md:text-5xl, mb-20
- 2x2 grid (grid-cols-1 md:grid-cols-2), gap-12
- Each trust point: Icon (w-14 h-14, shield/lock themed), title (text-2xl font-semibold), description (text-lg)
- Clean layout with generous padding within each section
- Decorative trust badge/seal element in background

### Final CTA Section
- **Layout**: Full-width, py-40, centered content
- Large headline: text-4xl md:text-5xl, max-w-3xl centered
- Supporting text: text-xl, mt-6, max-w-2xl centered
- Download buttons: mt-12, flex gap-4, include platform icons
- Decorative geometric pattern background (subtle, pastel-toned)

### Footer
- **Layout**: py-20, 4-column grid on desktop (stack mobile)
- Sections: Brand (logo + tagline), Product Links, Company, Legal
- Company address: "48-B Ambamata Scheme, Udaipur, Rajasthan" in company column
- Social icons: w-6 h-6, horizontal row
- Newsletter signup: Simple input + button, rounded-full styling
- Copyright: text-sm, centered, mt-12, border-t separator above
- Generous spacing throughout (gap-12)

### Buttons
- **Primary**: rounded-full, px-10 py-4, text-lg font-semibold
- **Secondary**: rounded-full, px-10 py-4, border-2, text-lg font-semibold
- **On Images** (Hero/Image backgrounds): backdrop-blur-md with semi-transparent background, no hover/active states defined
- **Standard Buttons**: transition-all duration-200, with standard hover/active states
- **Download Buttons**: rounded-2xl, px-8 py-4, flex items-center gap-3, platform icon included

### Cards
- Border-radius: rounded-2xl (16px) standard, rounded-3xl (24px) for larger containers
- Minimal borders or borderless with subtle pastel background fills
- Shadows: Avoid heavy shadows, use subtle elevation (shadow-sm) sparingly
- Emphasis on clean, flat design with pastel color differentiation

---

## Images

### Hero Section
- **Image**: Large background (1920x1200 minimum), authentic video call moment - warm lighting, diverse people, genuine smiles, comfortable home setting
- Treatment: Soft warm overlay gradient (top darker for text, bottom lighter), subtle blur for depth
- Position: object-cover, background

### Visual Storytelling Sections (2-3 sections)
- **Images**: Large feature images (800x600 minimum) showing:
  1. Safety features in action (verification badges, reporting UI)
  2. Meaningful conversation moments (two people engaged in call)
  3. Language/cultural diversity (global connection representation)
- Treatment: rounded-3xl, minimal effects, natural authentic photography
- All images: Warm color palette, soft lighting, real people (not stock)

### How It Works
- Optional supporting imagery: Phone mockups showing interface, simple illustrations of process steps
- If used: Small supporting images (w-32 h-32), rounded-xl

### Testimonials
- User avatars: Circular, w-16 h-16, can use initials if no photos
- Positioned next to attribution

### General
- All images: lazy loading, descriptive alt text
- Consistent rounded corners (rounded-2xl or rounded-3xl)
- Focus on authentic, warm, diverse representation

---

## Decorative Elements

- **Geometric Motifs**: Subtle circles, dots, curved lines as background patterns (very low opacity)
- **Placement**: Corner accents in hero, background patterns in stats/CTA sections
- **Style**: Soft pastel tones matching overall palette, never overpowering
- **Quotation Marks**: Large decorative opening quotes in testimonials (text-7xl, ultra-light opacity)

---

## Animations

- **On Scroll**: Gentle fade-in with slight translateY for sections
- **Hover**: Subtle scale (scale-102) for cards, no aggressive transforms
- **Links**: Soft underline animation
- **Statistics**: Count-up animation on numbers when visible
- **Minimal**: No carousels, no auto-play, no distracting motion
- **Hero**: Very subtle parallax on background (optional, barely perceptible)

---

## Accessibility

- Semantic HTML5 throughout
- Single H1 per page, logical heading hierarchy
- ARIA labels on all interactive elements
- Focus visible states (ring-2 with pastel accent)
- Minimum touch target 44x44px
- Skip navigation link
- Color contrast WCAG AA compliant despite pastel palette