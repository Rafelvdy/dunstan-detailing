# Dunstan Detailing

Website for Dunstan Detailing, a mobile car detailing service in Maidstone, Kent.
Next.js (App Router), React 19, Tailwind CSS v4, GSAP and Lenis for motion.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build; the homepage is fully static
```

## Where things live

| What | Where |
| --- | --- |
| Business details, contact, social links | `src/data/site.ts` |
| Services and prices | `src/data/services.ts` |
| Reviews | `src/data/reviews.ts` |
| Gallery photos, alt text and captions | `src/data/gallery.ts` |
| Page sections | `src/components/sections/` |
| Scroll and reveal animations | `src/components/motion/` |
| SEO structured data | `src/lib/jsonld.ts` |

Page copy that isn't in `src/data/` (About, "What makes us different?") is in `src/components/sections/About.tsx` and `src/components/layout/Footer.tsx`.

## Gallery images

Web-ready photos are in `public/images/gallery/`. To add or replace photos, put the
full-size originals in `assets-src/gallery/` (git-ignored), then run:

```bash
npm run optimize-images
```

This resizes them, writes `public/images/gallery/`, and regenerates the blur placeholders
in `src/data/gallery-meta.generated.json`. Add a matching entry (alt text and title) to
`src/data/gallery.ts`.

## Motion

Animations use GSAP ScrollTrigger and Lenis smooth scrolling, and are skipped for
visitors who prefer reduced motion.
