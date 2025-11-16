# Tokzee - Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by Linear's precision + Stripe's professional clarity, creating a modern platform that balances expert credibility with approachable design. Clean layouts with vibrant purple accents, generous whitespace, and trust-building visual elements. Emphasis on verification, professionalism, and seamless expert connections.

**Core Principles**:
- Professional clarity: Clean, confident layouts that build trust
- Purple as power color: Strategic use of vibrant purple for key actions and brand moments
- Expert-focused storytelling: Highlight credentials, verification, and expertise
- Breathing room: Generous spacing creates premium feel
- Typography hierarchy: Bold statements with clear information architecture

---

## Typography

**Font Stack**: 
- **Display**: Inter (Google Fonts) - All headlines, hero sections, emphasis
- **Body**: Inter (Google Fonts) - All UI, body text, supporting content

**Hierarchy**:
- **Hero Headline**: text-6xl md:text-7xl, font-bold, tracking-tight, leading-none
- **Section Headers**: text-4xl md:text-5xl, font-bold, leading-tight
- **Subsection Headers**: text-2xl md:text-3xl, font-semibold
- **Expert Names/Credentials**: text-xl md:text-2xl, font-semibold
- **Body Text**: text-lg, font-normal, leading-relaxed
- **Small Text/Labels**: text-sm md:text-base, font-medium
- **Button Text**: text-base md:text-lg, font-semibold

---

## Layout System

**Spacing Primitives**: Tailwind units of **4, 6, 8, 12, 16, 20, 24, 32**
- Micro-spacing: 4, 6 (tight relationships)
- Component spacing: 8, 12, 16 (within components)
- Section padding: 20, 24, 32 (vertical section separation)

**Container Strategy**:
- Full-width sections with inner `max-w-7xl mx-auto px-6 lg:px-12`
- Content sections: `max-w-6xl`
- Text-focused areas: `max-w-4xl`

**Vertical Rhythm**: 
- Desktop: py-24 to py-32 for major sections
- Mobile: py-16 to py-20 for sections

---

## Component Library

### Navigation
- **Desktop**: Horizontal bar, backdrop-blur-lg, sticky, py-4, border-b
- Logo left, centered links (Platform, Experts, Pricing, About), CTA right
- Links: text-base font-medium, px-6
- **Mobile**: Slide-out drawer, h-16 touch targets
- Primary CTA: rounded-full, px-6 py-3, purple background

### Hero Section
- **Layout**: Full-width, py-32 md:py-48, min-h-[85vh]
- Large background image with dark gradient overlay
- Content: Centered, max-w-5xl
- Headline: text-6xl md:text-7xl, font-bold, "Connect with Verified Experts" style messaging
- Subheadline: text-xl md:text-2xl, max-w-3xl, mt-6, emphasizing instant expertise access
- CTA buttons: mt-12, primary (purple) + secondary (white outline), both rounded-full, backdrop-blur-md
- Trust indicators below CTAs: "500+ Verified Experts" "Available 24/7" badges, flex gap-8, mt-8

### Expert Categories Section
- **Layout**: py-24, max-w-7xl
- Section header: text-4xl md:text-5xl, mb-16, "Expert Categories" or "Find Your Expert"
- 4-column grid (grid-cols-2 md:grid-cols-4), gap-6
- Category cards: rounded-2xl, p-8, border, hover:shadow-lg transition
- Icon top: w-12 h-12, purple-tinted
- Category name: text-xl font-semibold, mt-4
- Expert count: text-sm, mt-2, muted
- 8-12 categories total (Business, Tech, Health, Legal, Finance, Career, etc.)

### How It Works
- **Layout**: py-24, max-w-6xl
- Header: text-4xl md:text-5xl, mb-20, centered
- 3-step process: grid-cols-1 md:grid-cols-3, gap-12
- Each step: Large number badge (w-16 h-16, rounded-full, purple background), title (text-2xl font-semibold, mt-6), description (text-lg, mt-4)
- Steps: "Choose Expert" → "Book Session" → "Connect Instantly"
- Phone mockup images showing interface for each step

### Verification & Trust Section
- **Layout**: Full-width with light background, py-24
- Split layout: Image left (showing verification process), content right
- Image: w-full md:w-1/2, h-96 md:h-[500px], rounded-3xl
- Content: max-w-xl, md:pl-16
- Header: text-4xl md:text-5xl, mb-8
- Trust points: 4 items with checkmark icons
- Each point: Icon (w-8 h-8, purple), text (text-lg, font-medium)
- Points: ID Verification, Background Checks, Review System, Secure Platform

### Featured Experts Section
- **Layout**: py-24, max-w-7xl
- Header: text-4xl md:text-5xl, mb-16
- 3-column grid (grid-cols-1 md:grid-cols-3), gap-8
- Expert cards: rounded-2xl, p-6, border, hover:shadow-xl transition
- Avatar: w-24 h-24, rounded-full, border-4 purple
- Name: text-xl font-semibold, mt-4
- Expertise: text-base, purple-tinted
- Verification badge: Small verified icon
- Rating: Stars + review count (text-sm)
- Availability: "Available Now" status badge
- Quick book button: rounded-full, w-full, mt-4

### Pricing Section
- **Layout**: py-24, max-w-6xl
- Header: text-4xl md:text-5xl, mb-16, centered
- 3-tier cards: grid-cols-1 md:grid-cols-3, gap-8
- Cards: rounded-2xl, p-8, border, featured tier has purple border-2 + shadow-xl
- Tier name: text-2xl font-bold
- Price: text-5xl font-bold, mt-4
- Per session/subscription details: text-base, mt-2
- Features list: mt-8, each with checkmark, text-base, mb-3
- CTA button: rounded-full, w-full, mt-8

### Statistics Banner
- **Layout**: Full-width purple background, py-16
- 4-column grid (grid-cols-2 md:grid-cols-4), gap-8, max-w-7xl centered
- Each stat: Large number (text-4xl md:text-5xl, font-bold, white), label (text-base, mt-2, white/80)
- Stats: Total Experts, Sessions Completed, User Rating, Countries

### Testimonials
- **Layout**: py-24, max-w-6xl
- Header: text-4xl md:text-5xl, mb-16, centered
- 2-column grid (grid-cols-1 md:grid-cols-2), gap-8
- Cards: rounded-2xl, p-8, border
- Quote: text-xl, leading-relaxed, mb-6
- User info: Avatar (w-12 h-12, rounded-full), name + title beside (text-base font-semibold, muted text-sm)
- 4-6 testimonials showcasing expert interactions

### Final CTA Section
- **Layout**: Full-width purple background, py-32, centered
- Headline: text-5xl md:text-6xl, font-bold, white, max-w-4xl centered
- Subtext: text-xl, white/90, mt-6, max-w-2xl centered
- Buttons: mt-12, flex gap-4, white background + white outline variants
- App store badges below: mt-8

### Footer
- **Layout**: py-16, 4-column grid desktop (stack mobile), border-t
- Sections: Product (Platform, Experts, Pricing), Company (About, Careers, Press), Legal (Privacy, Terms, Guidelines), Contact
- Company address: "48-B Ambamata Scheme, Udaipur, Rajasthan, India" in Contact column
- Social icons: w-6 h-6, purple-tinted
- Copyright: text-sm, centered, mt-12

### Buttons
- **Primary**: rounded-full, px-8 py-4, purple background, white text, text-lg font-semibold
- **Secondary**: rounded-full, px-8 py-4, border-2, text-lg font-semibold
- **On Images/Purple backgrounds**: backdrop-blur-md, semi-transparent background, no hover/active states defined
- **Standard Buttons**: transition-all duration-200 with standard hover/active states

---

## Images

**Large Hero Image**: Required
- Image: Professional video call in progress - expert on screen (business attire, professional setting), client side visible, clean interface UI visible
- Dimensions: 1920x1200 minimum
- Treatment: Dark gradient overlay (top to bottom), enabling white text contrast
- Style: Modern, professional, diverse representation, bright natural lighting

**Verification Section Image**:
- Image: Dashboard showing verification badges, ID check interface, professional credentials
- Dimensions: 800x600
- Treatment: rounded-3xl, subtle shadow
- Position: Left side of split layout

**How It Works Images**:
- 3 phone mockups showing: Expert selection screen, booking interface, active video call
- Dimensions: 400x800 each
- Treatment: rounded-2xl, modern device frames
- Position: Above or beside each step description

**Expert Profile Images**:
- High-quality professional headshots for featured experts section
- Dimensions: 300x300, square
- Treatment: rounded-full, professional photography

**All Images**: Consistent modern aesthetic, professional quality, diverse representation, natural lighting

---

## Static Pages

### Privacy Policy, Terms, Community Guidelines
- **Layout**: py-24, max-w-4xl, single column
- Page header: text-4xl md:text-5xl, font-bold, mb-12
- Last updated: text-sm, muted, mb-8
- Content sections: text-lg, leading-relaxed
- Section headers: text-2xl font-semibold, mt-12, mb-6
- Lists: ml-6, mb-4, marker:text-purple
- Links: purple, underline
- Sticky sidebar navigation (desktop): Table of contents, text-base, purple active states

---

## Animations

- **On Scroll**: Subtle fade-in for sections
- **Hover**: Cards scale-102, shadow expansion
- **Buttons**: Smooth background transitions
- **Statistics**: Count-up animation when visible
- **Minimal**: No auto-play, no distracting motion

---

## Accessibility

- Semantic HTML5, logical heading hierarchy (single H1)
- ARIA labels on interactive elements
- Focus visible: ring-2 ring-purple
- Minimum touch targets: 44x44px
- WCAG AA contrast compliance