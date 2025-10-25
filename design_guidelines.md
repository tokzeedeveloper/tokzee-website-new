# Tokzee App - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern communication platforms like Discord, Telegram, and Zoom's marketing sites, combined with the warmth of social connection apps like Bumble BFF. The design emphasizes approachability, trust, and human connection while maintaining professional credibility.

**Core Principles**:
- Warmth meets professionalism: Balance friendly, inviting aesthetics with trustworthy, secure messaging
- Human-first: Prioritize emotional connection over technical features
- Breathing room: Generous spacing to reduce cognitive load and emphasize key messages
- Progressive disclosure: Guide users through value propositions sequentially

---

## Typography

**Font Stack**: 
- **Primary**: Inter (Google Fonts) - For UI elements, body text, navigation
- **Display**: Poppins (Google Fonts) - For headlines and hero sections

**Hierarchy**:
- **Hero Headline**: Poppins, 4xl-6xl (responsive), font-bold, tracking-tight
- **Section Headers**: Poppins, 3xl-4xl, font-bold
- **Subsection Headers**: Inter, xl-2xl, font-semibold
- **Body Text**: Inter, base-lg, font-normal, leading-relaxed
- **Small Text**: Inter, sm, font-medium
- **CTA Buttons**: Inter, base-lg, font-semibold, uppercase tracking-wide

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16, 20, 24, 32** for consistent rhythm
- Micro-spacing: 2, 4 (tight element relationships)
- Component spacing: 6, 8, 12 (within components)
- Section padding: 16, 20, 24, 32 (vertical section separation)

**Container Strategy**:
- Full-width sections with inner `max-w-7xl mx-auto px-6 lg:px-8`
- Content-focused sections: `max-w-6xl`
- Text-heavy content: `max-w-4xl`

**Responsive Breakpoints**:
- Mobile-first approach
- Key breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

---

## Component Library

### Navigation
- **Desktop**: Horizontal navigation bar, sticky on scroll with backdrop blur
- Logo left-aligned, navigation links center, CTA button right-aligned
- **Mobile**: Hamburger menu with slide-out drawer, large touch targets (min h-12)
- Navigation links: `py-2 px-4`, hover underline animation
- Primary CTA button in navigation with pill shape (rounded-full)

### Hero Section
- **Layout**: Full-width section, py-20 md:py-32
- Centered content with `max-w-4xl`
- Hero headline with gradient text effect (via utility classes)
- Supporting tagline below headline: `text-lg md:text-xl`, `max-w-2xl mx-auto`, muted text
- Dual CTA buttons: Primary (solid) + Secondary (outline), `mt-8 space-x-4`
- **Hero Image**: Large, impactful background image showing diverse people in authentic conversation moments (blurred, warm-toned treatment). Position behind content with overlay gradient for text readability
- Buttons on hero should have blurred backdrop backgrounds (backdrop-blur-md with semi-transparent background)

### Feature Sections

**"Why Tokzee App" Section**:
- 3-column grid on desktop (grid-cols-1 md:grid-cols-3)
- Each feature card: icon (Heroicons, size w-12 h-12), title (text-xl font-semibold), description (text-base)
- Cards with subtle border, rounded-xl, p-8
- Icon positioned top-left of card

**"How It Works" Section**:
- 3-step process with numbered indicators
- Horizontal layout on desktop, vertical on mobile
- Large step numbers (text-6xl, font-bold, opacity-20) as background decoration
- Step cards: p-12, rounded-2xl, with connecting lines/arrows between steps (desktop only)

**"Trust & Safety" Section**:
- 2x2 grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Icon-first design with shield/lock iconography
- Compact cards: p-6, minimal borders
- Icons with accent treatment (ring effect)

### Statistics Section
- Full-width section with subtle background treatment
- 4-column grid (stack on mobile)
- Large numbers: `text-4xl md:text-5xl font-bold`
- Small labels below: `text-sm uppercase tracking-wider`
- Spacing: py-20

### Language Support Section
- Grid of language cards (grid-cols-2 md:grid-cols-4)
- Each card shows: Language name (text-lg font-semibold), speaker count, availability badge
- Cards: rounded-lg, p-6, border treatment
- "Request a Language" CTA button below grid

### Testimonials
- 3-column grid layout (single column on mobile)
- Cards with: Quote text (text-lg leading-relaxed), attribution (name, age), quotation marks as decorative element
- Cards: p-8, rounded-xl, min-h-64 for consistent heights
- Subtle elevation/shadow effect

### Footer
- Multi-section layout: 3-4 columns on desktop, stack on mobile
- **Sections**: Company info (logo + tagline), Quick Links, Legal Pages, Contact/Address
- Company Address: "48-B Ambamata Scheme, Udaipur, Rajasthan" in footer left column
- Social media icons: Heroicons, size w-6 h-6, horizontal list
- Copyright text: `text-sm`, centered on mobile, left-aligned on desktop
- Generous padding: py-16
- Top border separator

### Buttons
- **Primary CTA**: Rounded-full, px-8 py-4, text-base font-semibold
- **Secondary CTA**: Rounded-full, px-8 py-4, border-2, text-base font-semibold
- **Download Buttons**: Include platform icons (Google Play/App Store), rounded-lg, px-6 py-3, flex items-center gap-3
- All buttons: transition-all duration-200
- No hover/active states specified for blurred buttons on images

### Cards & Containers
- Consistent border-radius: rounded-xl (12px) for cards, rounded-2xl (16px) for larger containers
- Subtle borders: border with low opacity
- Elevation hierarchy: subtle shadows for depth (shadow-sm, shadow-md)

---

## Images

**Hero Section**: 
- Large background image (1920x1080 minimum) showing authentic human connection - people video calling, smiling, in comfortable home environments
- Image treatment: Subtle blur effect, warm color overlay with gradient (top-to-bottom darkness for text contrast)
- Position: Background, object-cover

**Section Imagery**:
- "How It Works": Optional illustrative images/icons showing the process (phone mockups, interface screenshots)
- "Trust & Safety": Icon-based, no photography needed
- "What Makes Us Different": Consider small complementary images (w-24 h-24) next to feature descriptions
- "User Testimonials": Optional user avatars (circular, w-12 h-12) - can use placeholder initials if no photos

**General Image Guidelines**:
- All images: rounded-lg or rounded-xl
- Lazy loading on all images
- Alt text on all images for accessibility

---

## Animations

**Minimal Animation Strategy**:
- **On Scroll**: Subtle fade-in for sections (opacity + translateY) using intersection observer
- **Hover States**: Simple scale transform (scale-105) for cards, underline for links
- **Navigation**: Smooth scroll behavior for anchor links
- **Hero**: Subtle parallax effect on background image (optional, very subtle)
- **Statistics**: Count-up animation on numbers when section enters viewport (optional)
- **NO**: Complex carousels, auto-playing elements, excessive motion

---

## Legal Pages (TnC, Privacy Policy, Community Guidelines)

**Layout**: 
- Single column, max-w-4xl centered
- Typography-focused with clear hierarchy
- H1 page title: text-4xl font-bold
- Section headings: text-2xl font-semibold, mt-12 mb-4
- Subsections: text-xl font-semibold, mt-8 mb-3
- Body text: text-base leading-relaxed
- Lists: Proper spacing (space-y-2), clear bullet points or numbering
- Last updated date at top: text-sm, muted
- Padding: py-16

**Navigation**: Sticky table of contents on desktop (left sidebar), mobile: expandable sections

---

## Accessibility & SEO

- Semantic HTML5 throughout (header, nav, main, section, article, footer)
- Proper heading hierarchy (single H1 per page, logical H2-H6 structure)
- ARIA labels on interactive elements
- Focus visible states on all interactive elements
- Skip navigation link for keyboard users
- Descriptive alt text on all images
- Meta descriptions under 160 characters
- Title tags: "Page Name - Tokzee App"