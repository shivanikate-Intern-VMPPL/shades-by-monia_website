# SHADES BY MONIA — Luxury Interior Design Studio

A production-ready, award-winning (Awwwards-level) website for **SHADES BY MONIA**, a luxury interior architecture and design studio. Engineered with cinematic motion, editorial typography, calm restraint, and high performance.

Inspired by top-tier editorial design standards (reference: Maison Interior), fully bespoke and tailored to the **Shades by Monia** brand identity.

---

## 🏛️ Brand System & Design Tokens

### 1. Color Palette
- **Neutral Primary Background**: `#F7F4EE` (soft warm off-white)
- **Neutral Secondary / Surfaces**: `#EFEAE0` (warm secondary tone)
- **Deep Black**: `#0D0D0D` (used for typography and high-contrast dark sections)
- **Elevated Dark**: `#141414` / `#1A1A1A`
- **Gold Metallic Gradient**:
  - Light Accent: `#F2DD93`
  - Core Brand Gold: `#D9A441`
  - Deep Bronze Gold: `#B97A2B`
  - Used strictly as a rare accent for lines, buttons, circular brush stroke, and active states.

### 2. Typography
- **Headings / Editorial Display**: `Quagera` (with Google Font fallbacks: `Cormorant Garamond` & `Marcellus`). Fluid clamp scaling (`headline-huge`, `headline-large`).
- **Body / Interface**: `HDColton-Regular` (with clean sans fallbacks: `Montserrat` & `Jost`).
- **Section Tags & Labels**: Small uppercase monospace labels with wide letter-spacing (`tracking-[0.2em]`, e.g. `// OUR PHILOSOPHY`).

---

## ⚡ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom editorial fluid design tokens
- **Smooth Scroll**: Lenis
- **Animations & Scroll Effects**:
  - GSAP & ScrollTrigger (scrubbed text reveal, parallax, velocities)
  - Framer Motion (route wipes, micro-interactions, spring cursor, mobile drawer)
  - Canvas Confetti (celebratory transmission on form submission)
- **Icons**: Lucide Icons & Custom SVG Brand Monograms
- **Performance & SEO**:
  - Automated dynamic `sitemap.xml` & `robots.txt`
  - Comprehensive Open Graph & Twitter Cards
  - JSON-LD Structured Data Schema (`HomeAndConstructionBusiness`, `ProfessionalService`)
  - Respects `prefers-reduced-motion`

---

## 🗺️ Site Map & Features

1. **Home (`/`)**:
   - **Preloader**: Black screen, SVG circular stroke drawing of the gold brush ring, "sm" monogram fade-in, 0 ➔ 100% counter, curtain reveal.
   - **Hero**: Full-screen atmospheric interior background with Ken Burns zoom and scroll parallax, split-text headline *"Considered Spaces for Modern Living"*, *"DISCOVER STUDIO"* magnetic button, and animated scroll indicator.
   - **Marquee Strip**: Infinite ticker with bespoke typography and gold brush separators.
   - **Philosophy**: `// OUR PHILOSOPHY` tag with scrubbed word-by-word reveal fading from subtle stone grey to deep black on scroll.
   - **Selected Works**: Asymmetric 2-column grid with image reveal, scale-down hover, and interactive desktop `"VIEW"` cursor.
   - **What We Offer (Services)**: Sticky stacked card layout where disciplines slide over each other with animated stat counters (*75+ layouts refined*, *180+ projects delivered*, *300+ pieces curated*).
   - **Five-Step Process**: Interactive accordion (*01 Discovery & Brief* through *05 Installation & Completion*) with timelines, *"How we do it"*, and *"What to expect"*.
   - **Stats ("What Our Clients Value")**: Rolling digit counter animation for Years in Practice, Global Capitals, Projects Delivered, and Client Satisfaction %.
   - **Client Reflections (Testimonials)**: Auto-scrolling carousel with pause-on-hover and client portraits.
   - **People Behind the Practice (Team)**: Grayscale-to-color hover zoom with trait reveal (*Considered*, *Rigorous*, *Tactile*, *Fluent*).
   - **Questions Worth Asking (FAQ)**: Smooth numbered accordion (01–06) with *"Ask Your Question"* CTA.
   - **Final CTA**: Full-bleed cinematic residence background with gold magnetic action button.
   - **Footer**: Brand mark, live London studio local-time clock, global studio locations, social links, legal pages, and massive faded `"SHADES"` wordmark.
2. **Works (`/works`)**:
   - Filter chips (*All*, *Residential*, *Commercial*, *Living*, *Bedroom*, *Kitchen*) with instant layout filtering.
   - Individual Project Pages (`/works/[slug]`):
     - Full-bleed hero with metadata bar (Location, Completed, Area, Client).
     - Services engaged & material color palette chips.
     - Editorial gallery with captions.
     - Interactive before-and-after drag slider.
     - Next Project preview link with hover expansion.
3. **Studio (`/studio`)**:
   - Founder story of Monia.
   - Brand story and logo concept breakdown:
     - The Golden Circular Brush Stroke (harmony, completeness, handcrafted artistry).
     - The "sm" Monogram (personal signature and designer-led identity).
     - The Refined Typography (luxury and enduring proportion).
   - Core studio values & Press/Award honors strip.
4. **Services (`/services`)**:
   - Deep architectural breakdown of Interior Architecture, Full Interior Design, and Furniture & Art Curation.
   - Scope of stewardship, tangible deliverables, and ideal project engagement profiles.
   - Five-step process integration.
5. **Insights (`/insights`)**:
   - Editorial articles on negative space, Roman travertine, lighting design, and antique furniture curation.
   - Article detail page (`/insights/[slug]`) with top pinned reading progress bar.
6. **Contact (`/contact`)**:
   - Split layout with London atelier details, appointment map placeholder, and social links.
   - Refined project enquiry form with floating labels, gold focus underlines, validation, celebratory confetti, and a working `/api/contact` API route.
   - Floating private WhatsApp concierge button.
7. **Legal (`/privacy`, `/terms`) & 404 Sanctuary Page**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or 20.x or 22.x
- npm, pnpm, or yarn

### Installation
```bash
# Navigate to the project directory
cd shades-by-monia

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Compile and optimize production build
npm run build

# Start production server
npm run start
```

---

## 🎨 How to Customize & Replace Content

### 1. Logo Replacement
The studio logos are located in `public/assets/`:
- `public/assets/logo-light.png`: Transparent logo with gold brush and dark typography (for light backgrounds).
- `public/assets/logo-dark.png`: Transparent logo with gold brush and white/cream typography (for dark hero & footer).
- `public/assets/logo-original.jpg`: The original high-resolution master asset provided by the client.

To update or replace the logo, simply drop your new PNG files with matching names into `public/assets/`.

### 2. Custom Brand Fonts (`Quagera` & `HDColton-Regular`)
A dedicated slot has been created:
- Drop `Quagera.woff2` (or `.woff`) into `public/fonts/Quagera.woff2`
- Drop `HDColton-Regular.woff2` (or `.woff`) into `public/fonts/HDColton-Regular.woff2`
The CSS `@font-face` definitions are already wired up in `src/app/globals.css`. Once dropped in, the site will automatically use them!

### 3. Contact Details & Social Links
Edit `src/data/site.ts`:
- Replace `[PHONE]`, `[EMAIL]`, `[ADDRESS]`, and `[INSTAGRAM URL]` with your studio's live details.

### 4. Projects & Portfolio Content
All portfolio works, images, before/after pairs, and captions are cleanly organized in `src/data/projects.ts`. Add, edit, or remove items in this array to update both the `/works` archive and individual `/works/[slug]` pages.

### 5. Services & Process
Edit `src/data/services.ts` to tweak deliverables, stat numbers, or process durations.

### 6. Team & Testimonials
Edit `src/data/studio.ts` to update team members, biographies, traits, awards, and client reviews.

### 7. Editorial Articles
Edit `src/data/insights.ts` to publish new essays or design monographs.

---

## ☁️ Deployment to Vercel

1. Push this folder to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Next.js settings will be auto-detected:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click **"Deploy"**. Your luxury studio website will be live worldwide on Vercel's Edge Network with optimal Core Web Vitals.

---

© 2026 Shades by Monia. Crafted with architectural precision.
