# Design Guidelines: Hemlata J R & Associates

## ICAI Color Compliance (MANDATORY)

**All colors used must be strictly ICAI-prescribed. No custom color palettes allowed.**

### Primary Colors (Official ICAI)
- **ICAI Blue**: #004062 (HSL: 200 100% 19%)
  - Pantone: PMS 7694 C
  - Used for: Headers, CTAs, primary buttons, key text highlights
  - Symbolizes: Creativity, innovation, knowledge, integrity, trust

- **ICAI Green**: #65AC4C (HSL: 103 40% 49%)  
  - Pantone: PMS 7489 C
  - Used for: Accent elements, success states, secondary highlights
  - From the tricolor element of CA India logo

### Neutral Colors (ICAI Compliant)
- **White**: #FFFFFF - Primary background (mandatory for logo placement)
- **Off-White**: #F8FAFB - Card backgrounds, subtle sections
- **Charcoal**: #1A2A3A - Primary text
- **Gray**: #6B7B8B - Secondary/muted text

---

## Design Approach

**Selected Approach**: Modern minimalism with ICAI compliance
- **Primary Reference**: Stripe's professional minimalism + Linear's clean typography
- **Rationale**: ICAI compliance requires restraint - we channel this into sophisticated minimalism
- **Tone**: Professional confidence through clarity, not decoration

## Core Design Principles

1. **Information Clarity**: Content hierarchy over visual embellishment
2. **Dignified Simplicity**: Professional without being boring
3. **Purposeful Space**: White space as a design feature
4. **Restrained Elegance**: Quality through refinement, not ornamentation

---

## Typography System

**Primary Font**: Inter (Google Fonts)
- Headings: 600-700 weight, tight letter-spacing (-0.02em)
- Body: 400 weight, comfortable line-height (1.6)
- Accents: 500 weight for subtle emphasis

**Hierarchy**:
- Hero/H1: text-5xl to text-7xl (72px max)
- Section Headers/H2: text-4xl to text-5xl
- Subsections/H3: text-xl to text-2xl
- Body Large: text-lg
- Body: text-base
- Small print/Labels: text-sm with uppercase tracking

**Line Length**: max-w-prose for reading comfort, max-w-2xl for headers

---

## Layout System

**Spacing Primitives**: 
- Section padding: py-24 to py-32 (desktop), py-16 (mobile)
- Component padding: p-6 to p-10
- Element gaps: gap-4 to gap-8
- Container max-width: max-w-7xl

**Grid Strategy**:
- Services: 4-column grid on desktop, 2 on tablet, single column mobile
- About/Team: 2-column layout with asymmetric sizing
- Articles: 2-column grid
- All grids collapse to single column on mobile

**Modern Layout Patterns**:
- Asymmetric hero layouts
- Generous whitespace
- Card-based content organization
- Floating stat cards
- Gradient overlays (using ICAI colors only at low opacity)

---

## Component Library

### Navigation
- Fixed/sticky header with backdrop blur
- Clean horizontal menu with subtle hover states
- Mobile: Collapsible with smooth animation
- Pill-shaped CTA button in header

### Hero Section
- **Layout**: Asymmetric 2-column grid
- **Content**: Firm name split across lines, tagline, description, dual CTAs
- **Visual**: Abstract branded element or professional imagery
- **Stats**: Floating stats card with key credentials
- **Background**: Subtle gradient using ICAI blue at low opacity

### Service Cards
- Clean cards with subtle border and rounded-2xl corners
- Icon in primary color, transitions to filled on hover
- Service title + brief description
- Tags showing key services
- Hover: Elevation effect
- **No** pricing, **no** promotional language (ICAI compliance)

### About/Team Section
- Partner details in structured format
- Qualification year, membership number, specialization areas
- Timeline format for firm history/milestones

### Articles/Resources
- Card-based layout with category tags
- Publication date, title, excerpt
- Clean typography, minimal styling

### Contact Form
- 2-column layout: Form + Contact details
- Rounded inputs with clear labels
- Service selection dropdown
- ICAI member badge prominently displayed

### Footer
- Dark inverted background
- Multi-column layout
- Link to ICAI.org prominently displayed
- Disclaimer about guideline compliance

---

## Animations

**Motion Guidelines**:
- Duration: 200-400ms
- Easing: ease-out for entrances
- Fade up on scroll into view
- Stagger delays for lists (50ms between items)
- Subtle hover transitions
- **No** elaborate animations or flashy effects

---

## ICAI Compliance (MANDATORY)

### Required Elements
- ICAI logo/CA India mark in appropriate locations
- Membership numbers displayed
- Firm Registration Number
- ICAI disclaimer in footer

### Prohibited Content
- Client testimonials (strictly prohibited)
- Promotional/advertising language
- Claims of "best," "leading," or superlative terms
- Comparison with other firms
- Auto-playing content or pop-ups
- Limited time offers

### Language Tone
- Factual, professional statements
- "We provide..." not "We're the best at..."
- Information-based content ("Pull" model)
- No marketing or sales language

---

## Accessibility

- Consistent focus states on all interactive elements
- Sufficient contrast ratios (WCAG AA minimum)
- Semantic HTML structure
- Form labels properly associated
- Keyboard navigation support throughout

---

## Dark Mode

Dark mode uses the same ICAI blue/green colors with adjusted luminosity:
- Background: Deep blue-tinted charcoal
- Cards: Slightly lighter shade
- Primary: Lighter blue for visibility
- Accent: Brighter green for contrast
