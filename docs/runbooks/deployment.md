# Runbook: Deploy to Production

Use this before every push to `main`. The project deploys from `main`. Deploy hosting is handled outside this repo (see `AGENTS.md`). The checks below are the gate.

Work through the steps in order. Do not push while a step fails.

## 1. Check accessibility

There is no automated accessibility test. Check these by hand on every page you changed:

- Keyboard: Tab through the page; focus is visible and the order makes sense. Modals trap focus and close with Escape.
- Images and embeds: every `<img>` has `alt`, and every `<iframe>` has a `title`.
- Buttons and links: icon-only controls have `aria-label`. Link text makes sense out of context.
- Contrast: check text on the dark and light themes (`light:` classes) meets WCAG 2.1 AA.
- Headings: one `h1` per page, and `h1` → `h2` → `h3` without skipping levels.
- Motion: confetti and animations respect `prefers-reduced-motion`.

Details: `RUNBOOK.md` §7 (accessibility row) and §9 (smoke test checklist).

### Lighthouse (run against production after deploy)

Run the audits on the live site for the home page, `/tour`, and a song page. Save the JSON reports outside the repo:

```bash
npx --yes lighthouse https://mozworth.music/ --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new --no-sandbox" --quiet --output=json --output-path=<report-dir>/home.json
```

Lighthouse 12 removed the PWA category. Check installability by hand in Chrome DevTools (Application tab: manifest, service worker, icons, offline).

Known open items (as of 2026-10-30): the head meta tags render in `<body>` (needs `@solidjs/meta`), the home-page background photo is 1.8 MB and is the largest paint, and two Google tags (`GTM-TKFS52TF`, `GT-WV86TPST`) load from outside this repo.

## 2. Check metadata

For every page you changed:

- `modifiedDate` is today on the page and in JSON-LD `dateModified`.
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) and Twitter Card tags are present and match the page.
- Canonical URL is correct.
- JSON-LD (`MusicRecording`, `MusicAlbum`, etc.) is valid.

Details: `RUNBOOK.md` §10 and §12 (metadata accuracy). Metadata helpers live in `src/utils/metadata.tsx`.

## 3. Update the iCal feed if dates changed

If any tour date was added, changed, or removed:

1. Update `src/data/tour.ts`. It is the single source for both `/tour` and `/tour/ics` (`src/routes/tour/ics.ts`).
2. Check `/tour/ics` in `npm run dev`:
   - returns `text/calendar`
   - includes only future events
   - has the venue address in `LOCATION` and 24-hour times
   - has a stable `UID` per event
3. Validate with icalendar.org or Apple Calendar.

If no dates changed, skip this step.

### Chronological date check

Run this any time you add or change a tour date or press item:

1. **Weekday matches date.** Each tour event's label that names a weekday (for example `"Saturday, December 5, 2026"`) must match its ISO date. Labels without a weekday are fine. Run from the repo root:

   ```bash
   node -e '
   const src = require("fs").readFileSync("src/data/tour.ts", "utf8");
   const re = /event\(\s*"(\d{4}-\d{2}-\d{2})",\s*"([^"]+)"/g;
   let m, bad = 0;
   while ((m = re.exec(src))) {
     const [, iso, label] = m;
     if (label.startsWith("2026 Tour")) continue;
     const wd = new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" });
     const named = label.match(/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/);
     if (named && named[1] !== wd) { bad++; console.log("MISMATCH", iso, label, "->", wd); }
   }
   console.log("weekday mismatches:", bad);
   '
   ```

   The output must end with `weekday mismatches: 0`.

2. **Tour data order.** The `/tour` page sorts events itself (`sortedTourEventsForPage()` in `src/data/tour.ts`), so the order in the file doesn't change what visitors see. Still, insert new events in date order so the file is easy to scan.

3. **Press order.** `pressItems` in `src/data/press.ts` must stay newest first. The `/press` page does not sort, so the array order is what visitors see. Check that each new item's date is at or before the item above it.

4. **Past events.** The "Past" label is computed from today's date. Don't set it by hand.

## 4. Check Google Analytics

GA4 loads only on the `mozworth.music` hostname, with `anonymize_ip: true`, from `src/entry-server.tsx`. Do not move it to the client.

For any new or changed link or button, confirm the event fires with its parameters:

- Streaming links: `streaming_click` with the platform
- Follow modal: `follow_modal_open`
- RSVP: `rsvp_click` with `venue` and `date`
- Leave a Note: `leave_note_submit`

Details: `RUNBOOK.md` §12 (Google Analytics).

## 5. Update the PWA cache

If you changed anything the service worker caches (JS, CSS, HTML, images, or the manifest), run:

```bash
npm run update-sw-cache
```

This regenerates the cache manifest and bumps the cache key, so users get the new version on their next load. If you changed only data or copy that isn't cached, you can skip it, but running it is harmless.

Commit the updated cache files with your changes.

## 6. Review against design principles

Check the changes against the table in `RUNBOOK.md` §7:

- Asset copyright, page crash protection, tour/iCal sync, physical-first CTAs
- Daniel Johnston covers are free digital downloads
- Teal primary, purple CTA, gradients per song or album
- "mozworth" is always lowercase

Also check for regressions on pages you did not change. `RUNBOOK.md` §10 has the full review.

## 7. Address concerns

Fix every problem found in steps 1–6 before continuing. If a fix changes behavior, repeat the checks for that page.

If you can't fix something before release, write down what it is and who owns it, and tell the stakeholder before pushing.

## 8. Run lint and build

```bash
npm run lint
npx tsc --noEmit
npm run build
```

- `lint` and `tsc` must pass with 0 errors. The existing solid-plugin warnings are known; don't add new ones in files you touched.
- `build` must finish without errors. It is the closest local check to what the host will run.

## 9. Commit and push to main

Commit with Conventional Commits and a scope (see `RUNBOOK.md` §11):

```bash
git status
git add <files>          # list files explicitly; don't commit source images or .env files
git commit -m "type(scope): description"
git push origin main
```

- Only commit source changes, generated `.webp` assets, and `public/manifest.json` when PWA config changed.
- Never commit source JPG/PNG files, `.env.local`, `.output/`, `dist/`, `.vinxi/`, or `node_modules/`.
- After the push, confirm `git status -sb` shows `main...origin/main` with nothing ahead.
