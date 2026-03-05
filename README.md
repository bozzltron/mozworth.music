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
- Accessibility: WCAG 2.1 AA, ARIA labels, semantic HTML
- Responsive: mobile-first, test on devices
- Spell "mozworth" lowercase
- Don't duplicate content across docs

### Page Updates

When updating a page: update `modifiedDate`, JSON-LD, and Open Graph meta.

## SEO & Analytics

- Open Graph, Twitter Cards, JSON-LD
- GA4: streaming clicks, follow modal, RSVP, etc.
- Canonical URLs, heading hierarchy
