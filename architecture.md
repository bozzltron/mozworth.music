# mozworth.music – Architecture

## Technology Stack

- **Framework**: SolidJS with SolidStart (SSR)
- **Styling**: TailwindCSS 4.x
- **Build**: Vite with Vinxi
- **PWA**: Vite PWA plugin
- **Node**: >=22

## File Organization

```
src/
├── components/     # Reusable UI
├── routes/         # File-based routing
│   ├── songs/
│   ├── albums/
│   └── api/
├── data/           # Static data (tour, followLinks, wallpapers)
└── utils/          # Metadata, helpers
```

## Component Structure

- **BasePageLayout** – Wrapper for song/album pages
- **TabbedContent** – Desktop tabs, mobile scrolling sections
- **StreamingIcons** – Platform links with analytics
- **ReleaseMeta** – Release date + anniversary confetti
- **Callout** – Prominent box for highlights; canonical style: `border-2 border-teal-500 bg-teal-500/10 rounded-xl p-6`
- **Modal** – Shared modal with focus trap, ESC, ARIA
- **FollowButton** – Opens modal with newsletter, streaming, social, support links
- **SmartPromo** – Homepage event/promo (e.g. show poster + RSVP)

## Song Page Pattern

- Cover art (Bandcamp embed)
- Metadata: title, artist, album link, release date
- Action buttons: Leave Note, Purchase, Follow, Share
- Streaming icons
- Tabbed content: Lyrics, Writing, Demo, Credits, Reviews, Performances

## Design System

- **Primary**: Teal (#14b8a6, #0f766e)
- **Background**: Dynamic gradients per song/album
- **Text**: White primary, gray-400 secondary
- **Accents**: Purple CTAs, yellow highlights
- **Mobile**: Single column, stacked
- **Desktop**: Two-column, fixed sidebar + tabs
- **PWA**: Offline support, service worker

## Content Patterns

- Song routes: `/songs/[song-name]`
- JSON-LD structured data for SEO
- Analytics on streaming clicks
- StreamingLink: `{ href, alt, iconSrc, ariaLabel, onClick? }`

## Special Features

- **Anniversary confetti** – `?anniversary=true` to force
- **Leave Note** – Modal feedback on songs
- **Phone backgrounds** – `npm run generate:wallpapers` → `public/wallpapers/` (1440×3200)
- **PWA icons** – `node scripts/generate-android-icons.js` after updating `public/logo.jpg`
