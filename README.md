# Klassmec Technical Services – Nuxt 3 Website

A full-featured, animated, mobile-responsive company website built with **Nuxt 3**, **TypeScript**, **Composition API**, and **Tailwind CSS**.

## 🎨 Design Highlights

- **Primary Color**: Forest Green (`#1b5c2a`) – extracted from the Klassmec brand
- **Accent Color**: Gold (`#c8961e`) – matching the company's logo
- **Typography**: Playfair Display (headings) + DM Sans (body)
- **Animations**: Intersection Observer-powered scroll reveals, hero slideshow, testimonial carousel, tab transitions

## 📋 Sections

1. **Hero** – Full-screen image carousel with animated text, stats bar, and CTAs
2. **About Us** – Image collage, company history timeline, core qualities
3. **Vision, Mission & Core Values** – Dark-themed section with value cards
4. **Services** – Tabbed interface with 4 service categories and detail lists
5. **Industries We Serve** – 7 industry cards with imagery
6. **Clients** – Client grid, animated ticker/marquee, testimonial carousel
7. **Selected Projects** – Project switcher with image + details panel
8. **Leadership & Competitive Advantage** – Team cards + competitive edge grid
9. **Contact** – Contact form with validation + contact info panel
10. **Footer** – Brand footer with navigation and contact details

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

### Static Generation

```bash
npm run generate
```

## 🗂️ Project Structure

```
klassmec/
├── assets/
│   └── css/
│       └── main.css          # Global styles + Tailwind config
├── components/
│   ├── NavBar.vue             # Sticky responsive navigation
│   ├── HeroSection.vue        # Image carousel hero
│   ├── AboutSection.vue       # Company history & collage
│   ├── VisionSection.vue      # Vision, Mission & Values
│   ├── ServicesSection.vue    # Tabbed services
│   ├── IndustriesSection.vue  # Industry cards
│   ├── ClientsSection.vue     # Client showcase + testimonials
│   ├── ProjectsSection.vue    # Project portfolio
│   ├── TeamSection.vue        # Leadership + competitive edge
│   ├── ContactSection.vue     # Contact form + info
│   ├── FooterSection.vue      # Site footer
│   └── ScrollTopButton.vue    # Floating scroll-to-top
├── pages/
│   └── index.vue              # Main page (assembles all components)
├── app.vue                    # Root app
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.js         # Tailwind + brand colors
└── package.json
```

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `nuxt` | Core framework |
| `@nuxtjs/tailwindcss` | Tailwind integration |
| `@vueuse/nuxt` | Vue composables |

## 🎨 Brand Colors

```css
/* Primary Green */
--color-forest-700: #1b5c2a;
--color-forest-800: #194b25;
--color-forest-950: #0a2212;

/* Accent Gold */
--color-gold-500: #c8961e;
--color-gold-400: #e6b32e;
```

## 📝 Notes

- Images sourced from **Unsplash** (free to use)
- Contact form is UI-only (no backend) — connect to your preferred form handler
- All images lazy-loaded and responsive
- Fully keyboard accessible
- RC Number: **465809**
