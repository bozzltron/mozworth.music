# mozworth.music – Run Book

This document defines the standard development workflow for this project. Follow this process for all changes — features, fixes, content updates, and maintenance.

> **Note:** Most changes on this site are small (content updates, single tour dates, copy edits) and **do not require a formal plan doc**. Use the lightweight path: gather context → make change → test → lint/type-check → commit. Reserve plan docs for multi-file features, new components, or architecture changes.

---

## 1. Receive Requirements

- Clarify the **scope** and **acceptance criteria** with the stakeholder (usually the artist).
- Identify which **data modules** (`src/data/`) and **routes** (`src/routes/`) are affected.
- Note any **asset requirements** (images, posters, wallpapers, press screenshots).
- Confirm if this involves **tour dates** (affects `/tour` and `/tour/ics`), **song pages**, **album pages**, or **PWA capabilities**.

---

## 2. Context Gathering

- Read the relevant files in `src/data/` — this is the **single source of truth**.
- Check `architecture.md` for component patterns and design system constraints.
- Check `project.md` for product rules (e.g., Daniel Johnston covers = free digital, vinyl-first CTA).
- Review existing similar features in `src/components/` and `src/routes/` for consistency.
- Check `package.json` scripts for any asset-processing commands needed.
- **SolidJS best practices:** See `architecture.md#solidjs--modal-pitfalls-regression-prevention` for the two critical pitfalls (`<Show keyed>`, Modal containment). For general SolidJS patterns, refer to the [SolidJS docs](https://docs.solidjs.com/) — particularly `createSignal`, `createMemo`, `createEffect`, control flow (`<Show>`, `<For>`, `<Switch>`), and context.

---

## 3. Write a Plan Doc (for Significant Features Only)

Create a plan in `docs/plans/` (create directory if needed) **only when**:
- The change touches **multiple routes or data files**
- It involves **new components or modified shared components**
- It affects **PWA, iCal, or asset pipelines**
- It's a **design system change** (colors, typography, spacing)

For routine updates (single tour date, copy edit, metadata tweak), skip the plan doc and proceed directly to execution.

**Plan template:**
```markdown
# Plan: <Short Title>

## Goal
<One-sentence outcome>

## Scope
- Files to modify: `src/data/tour.ts`, `src/routes/tour.tsx`, etc.
- New files: `src/components/NewComponent.tsx`
- Assets: `public/tour-posters/2026-XX-XX.webp`

## Steps
1. Update tour data in `src/data/tour.ts`
2. Import poster via `npm run tour-poster:import -- 2026-XX-XX ./flyer.jpg`
3. Update tour route to display new field
4. Verify `/tour/ics` output

## Acceptance Criteria
- [ ] Tour page shows new date
- [ ] iCal feed is RFC 5545 valid
- [ ] Poster displays on tour page
- [ ] Lint passes
- [ ] Manual smoke test passes

## Design Principles Check
- [ ] Vinyl CTA prioritized over digital
- [ ] mozworth is lowercase everywhere
- [ ] Teal primary, purple CTA accents
- [ ] Mobile-first responsive
- [ ] WCAG 2.1 AA compliance
```

---

## 4. Remove Old Completed Plan Docs

- After a plan is fully implemented and merged, **delete** its file from `docs/plans/`.
- Keep only active/in-progress plans.

---

## 5. Enrich the Plan with Requirements

- Add specific **data field names**, **component props**, **Tailwind classes**, and **analytics event names**.
- Reference exact **TypeScript types** from `src/data/` (e.g., `TourEvent`, `Song`, `Album`).
- Note any **EXIF copyright embedding** needed for images (`npm run convert:webp` handles this).

---

## 6. Double-Check Plan Accuracy

- Verify all file paths exist.
- Confirm TypeScript types match the plan.
- Ensure no conflicting changes in flight (check `git status`).
- Validate that asset scripts will produce the expected output paths.

---

## 7. Double-Check Alignment with Design Principles

Before writing code, confirm:

| Principle | Check |
|-----------|-------|
| **Asset copyright** | EXIF metadata embedded? Visible © mozworth notice? |
| **Prevent page crash** | ErrorBoundary coverage? Defensive null checks? Stable CSS? |
| **Tour/iCal sync** | Single source in `src/data/tour.ts`? Future-only in iCal? |
| **Physical first** | Buy Vinyl CTA is filled/primary; Bandcamp digital is secondary? |
| **Daniel Johnston covers** | Free digital ($0 name-your-price)? "Free Download" copy? |
| **Design system** | Teal primary, purple CTA, yellow highlights? Gradients per song/album? |
| **Accessibility** | ARIA labels, semantic HTML, focus management, color contrast? |
| **Naming** | "mozworth" lowercase in all code, copy, metadata? |

---

## 8. Execute the Plan

### Code Changes
- Edit `src/data/` first — it's the canonical source.
- Use existing components (`Callout`, `Modal`, `FollowButton`, `StreamingIcons`, `TabbedContent`) — **no ad-hoc equivalents**.
- Follow the **song page pattern** (see `architecture.md`).
- Use `<Show when={x()} keyed>` for object values (SolidJS pitfall).
- Render `<Modal>` outside transformed ancestors (or use a portal).

### Asset Processing
| Task | Command |
|------|---------|
| Convert image to WebP + EXIF copyright | `npm run convert:webp -- <path>` |
| Import tour poster | `npm run tour-poster:import -- YYYY-MM-DD ./flyer.jpg` |
| Sync known tour posters | `npm run tour-posters:sync` |
| Generate wallpapers | `npm run generate:wallpapers` |
| Capture press screenshots | `npm run screenshot:press` |
| Update PWA service worker cache | `npm run update-sw-cache` |

---

## 9. Run Dev Server & Test in Real Time

```bash
npm run dev
```

**Manual smoke test checklist (minimum):**
- [ ] Homepage (`/`) — loads, PWA install prompt works
- [ ] Song page (`/songs/...`) — tabs, streaming links, metadata, JSON-LD
- [ ] Album page (`/albums/...`) — same as song page
- [ ] Tour page (`/tour`) — dates, posters, lineup, RSVP links
- [ ] iCal feed (`/tour/ics`) — valid RFC 5545, future-only, correct LOCATION/timezone
- [ ] 404 page (`/[...404]`) — renders, links work
- [ ] Follow modal — opens, links have analytics
- [ ] Light/dark mode — respects system preference, toggles work
- [ ] Mobile viewport — no horizontal scroll, touch targets ≥44px
- [ ] Offline — service worker caches assets, page loads offline

---

## 10. After Each Phase/Milestone

### Code Review Against Design Principles
- Re-verify the table in **Step 7**.
- Check for **regressions** in previously working pages.
- Ensure no duplicate content across docs (`README.md`, `architecture.md`, `project.md`, `RUNBOOK.md`).

### Run Lint & Fix

```bash
npm run lint
npm run lint:fix   # if needed
```

### TypeScript Check

```bash
npx tsc --noEmit
```

### Update Docs & Clean Docs
- Update `modifiedDate` on any changed page.
- Update JSON-LD and Open Graph meta (see `src/utils/metadata.tsx`).
- Update `README.md` only if commands or workflows changed.
- Update `architecture.md` only if component inventory or design system changed.
- Update `project.md` only if product goals changed.
- **Do not duplicate** content across docs.

---

## 11. Commit

Follow **Conventional Commits** with scope:

```
type(scope): description
```

**Types:** `feat`, `fix`, `chore`, `refactor`, `docs`, `copy`, `fixup`
**Scopes observed:** `tour`, `follow`, `support`, `cta`, `vinyl`, `commerce`, `songs`, `home`, `press`, `backgrounds`, `music`

Examples:
- `feat(tour): add 2026-04-25 show at ABGB`
- `fix(vinyl): prioritize vinyl CTA on song pages`
- `copy(songs): update lyrics for "Texas Time"`
- `chore(pwa): update service worker cache config`

**Commit only:**
- Source code changes
- Generated WebP assets (`public/tour-posters/*.webp`, `public/wallpapers/*.webp`, `public/press-screenshots/*.webp`)
- Updated `manifest.json` if PWA config changed
- **Never commit** source JPGs/PNGs (gitignored), `.env.local`, `.output/`, `dist/`, `.vinxi/`, `node_modules/`

---

## 12. Final Holistic Review (When Plan Is Complete)

### Solution Quality
- [ ] Best solution for **project goals** (project.md)
- [ ] Best solution for **tech stack** (SolidJS, SolidStart, Tailwind 4, Vinxi)
- [ ] Follows **design principles** (architecture.md)

### Metadata Accuracy & Consistency
- [ ] All `modifiedDate` fields updated
- [ ] JSON-LD `MusicRecording`/`MusicAlbum` valid
- [ ] Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Twitter Cards: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Canonical URLs correct
- [ ] Heading hierarchy (h1 → h2 → h3) semantic

### Google Analytics (GA4)
- [ ] Streaming link clicks fire `event: 'streaming_click'` with `platform` param
- [ ] Follow modal opens fire `event: 'follow_modal_open'`
- [ ] RSVP clicks fire `event: 'rsvp_click'` with `venue`, `date`
- [ ] Leave Note submits fire `event: 'leave_note_submit'`
- [ ] GA4 gated to `mozworth.music` hostname (in `entry-server.tsx`)
- [ ] `anonymize_ip: true` set

### Tour iCal Validation
- [ ] Feed at `/tour/ics` returns `text/calendar`
- [ ] RFC 5545 compliant (validate with `icalendar.org` or Apple Calendar)
- [ ] Future events only (past events excluded)
- [ ] `LOCATION` includes venue address
- [ ] `DTSTART`/`DTEND` in 24-hour UTC
- [ ] `UID` stable per event (date + venue slug)
- [ ] Bandsintown/Facebook links in `DESCRIPTION`

---

## 13. Final Commit & Push

```bash
git add -A
git commit -m "feat(scope): complete <feature> — final review"
git push origin main
```

---

## Appendix: Quick Reference

### Key Files
| Purpose | File |
|---------|------|
| Tour data (source of truth) | `src/data/tour.ts` |
| Song metadata | `src/data/songs/*.ts` |
| Album metadata | `src/data/albums/*.ts` |
| Follow links | `src/data/followLinks.ts` |
| Wallpapers manifest | `src/data/wallpapers.ts` |
| Daniel Johnston covers | `src/data/johnstonCovers.ts` |
| Metadata utils | `src/utils/metadata.tsx` |
| iCal generation | `src/routes/tour/ics.tsx` |
| PWA manifest | `public/manifest.json` |
| Service worker config | `vite.config.ts` → `vite-plugin-pwa` |

### Common Commands
```bash
npm run dev                    # Dev server
npm run build                  # Production build
npm run lint                   # Lint check
npm run lint:fix               # Auto-fix lint
npx tsc --noEmit               # Type check
npm run convert:webp -- <file> # Image → WebP + EXIF
npm run tour-poster:import -- YYYY-MM-DD ./flyer.jpg
npm run generate:wallpapers
npm run screenshot:press
npm run update-sw-cache
```

### Gotchas to Avoid
- ❌ Don't put `<Modal>` inside a `transform`/`translateZ` ancestor
- ❌ Don't use `<Show when={obj}>` without `keyed` for objects
- ❌ Don't commit source images (only `.webp` outputs)
- ❌ Don't duplicate content across markdown docs
- ❌ Don't use "Buy Digital" for Daniel Johnston covers — use "Free Download"
- ❌ Don't make digital CTA primary over vinyl
- ❌ Don't skip `modifiedDate` / JSON-LD / OG updates on page changes
- ❌ Don't write "Mozworth" or "MOZWORTH" — always `mozworth`