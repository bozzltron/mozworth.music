# mozworth.music – Project Goals

mozworth is an indie artist from Austin, Texas. This site showcases music, lyrics, song stories, and streaming links.

## Goals

1. **Asset copyright**  
   All downloadable or distributable assets (wallpapers, images, etc.) must be copyrighted to mozworth — embed metadata (EXIF/IPTC) where applicable and include visible or contextual notices (e.g., "© mozworth").

2. **Prevent page crash**  
   Robust error handling, defensive coding, and stable CSS. Use ErrorBoundary, avoid uncaught exceptions, ensure styles work across browsers and color schemes.

3. **Tour and iCal sync**  
   `src/data/tour.ts` is the single source of truth for both `/tour` and `/tour/ics`. Update tour dates in one place; both stay in sync.

### Tour Page & Calendar

- **iCal feed**: `https://mozworth.music/tour/ics` — webcal:// for iOS/desktop; Android users can add the https URL in Google Calendar → Settings → From URL.
- **Scope**: Future events only (past events excluded).
- **Format**: RFC 5545 compliant; venue addresses in LOCATION; 24-hour time internally.
- **Event links**: Each event links to Bandsintown and Facebook. Per-event "Add to calendar" is delegated to those platforms — no per-event calendar buttons on mozworth.music.
- **Lineup**: Display as "Lineup:" with one act per line. Venue name prominent.

**TourEvent fields:** `date`, `dateLabel`, `venue`, `details` (12h display), `links`, `time` (24h, iCal only), `address` (LOCATION), `isPast`.
