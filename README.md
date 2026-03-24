# mozworth.music

Official website for mozworth, an indie artist from Austin, Texas. Music, lyrics, tour dates, and streaming links.

## Quick Start

```bash
npm install
npm run dev
```

## Docs

- **[project.md](project.md)** – Project goals, tour/iCal
- **[architecture.md](architecture.md)** – Tech stack, components, design system

## Development Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run lint:fix     # ESLint auto-fix
```

## Image & Asset Scripts

### WebP Conversion (Promotional Flyers)

**Rule: Commit WebP only, not source JPG.**

Promotional flyers/posters: convert JPG → WebP and commit only the WebP. Source JPGs are gitignored.

```bash
# Default: converts public/Mozworth-Shiners_March10th-2026-V3.jpg → .webp
npm run convert:webp

# Custom file:
node scripts/convert-to-webp.js path/to/image.jpg
```

- Output: same filename with `.webp` extension
- Quality: 85
- UI should reference the `.webp` file

### Wallpapers

```bash
npm run generate:wallpapers   # Output: public/wallpapers/*.webp (1440×3200)
```

### Tour posters (/tour page)

Posters live in **`public/tour-posters/{YYYY-MM-DD}.webp`** and are wired per show via **`posterWebp`** on `TourEvent` in `src/data/tour.ts`.

Bandsintown/Facebook often block automated downloads (Cloudflare). **Recommended:** save the flyer from the event page manually, then:

```bash
npm run tour-poster:import -- 2026-04-25 ./path/to/flyer.jpg
```

Then add `posterWebp: "/tour-posters/2026-04-25.webp"` to that event (last argument to `event()` in `tour.ts`).

Re-sync known promo files from `public/` into `tour-posters/` (see `scripts/sync-tour-poster-assets.mjs`):

```bash
npm run tour-posters:sync
```

### PWA Icons

```bash
node scripts/generate-android-icons.js   # After updating public/logo.jpg
```

## Guidelines

### New Song Pages

1. Follow the song page pattern (see [architecture.md](architecture.md))
2. Keep streaming links current; add analytics `onClick` on platform links
3. Use WebP for images
4. Include Lyrics, Writing, Demo, Credits
5. Test responsive + accessibility

### Content

- Song data is component-based (no CMS)
- Use shared components (Callout, Modal, FollowButton) — no ad-hoc equivalents
- Lazy-load external embeds where possible

### Code

- SolidJS: createSignal, createMemo, proper TypeScript
- **Show + objects / modals:** use `<Show when={x()} keyed>` when passing a record, and keep `Modal` outside `transform`/`translateZ` ancestors — see [architecture.md — SolidJS & Modal pitfalls](architecture.md#solidjs--modal-pitfalls-regression-prevention)
- Accessibility: WCAG 2.1 AA, ARIA labels, semantic HTML, light/dark mode (respects system preference)
- Responsive: mobile-first, test on devices
- Spell "mozworth" lowercase
- Don't duplicate content across docs

### Page Updates

When updating a page: update `modifiedDate`, JSON-LD, and Open Graph meta.

## SEO & Analytics

- Open Graph, Twitter Cards, JSON-LD
- GA4: streaming clicks, follow modal, RSVP, etc.
- Canonical URLs, heading hierarchy
