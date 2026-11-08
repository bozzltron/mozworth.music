# Runbook: Announce a New Single

Use this when a new single is announced and streaming links do not exist yet. It sets up the home-page countdown, a pre-release song page, and the `/music` card. At release, work through the follow-up checklist at the end.

The reference implementation is `src/routes/songs/push.tsx` and `src/components/SmartPromo.tsx` as of the "Push" announcement (November 2026).

## Inputs

Collect these before editing. Do not invent missing content (especially lyrics or credits).

| Input | Example | Required |
| --- | --- | --- |
| Song title | `Push` | Yes |
| URL slug | `push` → `/songs/push` | Yes |
| Cover art (square `.webp`, 1:1) | `mozworth-push.webp` | Yes |
| Release date | `2026-11-24` | Yes |
| Pre-save link | `https://ffm.to/mozworth-push` | Yes |
| One-line description | `Texas-meets-surf rock, recorded live at 5th Street Studios.` | Yes |
| Album name | `The Mountain & The Wolf` | If known |
| Press release copy / URL | `friendmusicrecords.com` release | Optional |
| Lyrics | — | Optional |
| Credits | — | Optional |

## 1. Add the cover art

1. Copy the source `.webp` into `public/`. Use a lowercase kebab-case filename, for example `public/mozworth-push.webp`.
2. Confirm it is square (1:1) and reasonably sized (roughly 1400–2000 px).
3. Reference it in code as `/mozworth-push.webp`.
4. Never commit the source JPG/PNG. Only the `.webp` output belongs in the repo (see `AGENTS.md` → Asset & content workflows).

## 2. Create the pre-release song page

Create `src/routes/songs/<slug>.tsx`. Use `src/routes/songs/push.tsx` as the template. The pre-release page intentionally differs from a released song page in these ways:

- **Cover art, not the Bandcamp embed.** Render an `<img>` with `alt="<Title> by mozworth - single artwork"`. The Bandcamp iframe is added after release, when a track exists.
- **`ReleaseMeta` says "Out".** Use `prefix="Out"` and the release date: `<ReleaseMeta releaseDate="YYYY-MM-DD" prefix="Out" showConfetti={true} />`.
- **Pre-save is the primary CTA.** The button label is always **"Pre-save"** (do not append the song title). Link to the pre-save URL in a new tab and fire `pre_save_click` with the song title:
  ```tsx
  onClick={() => { if (window.gtag) window.gtag('event', 'pre_save_click', { song: '<Title>' }); }}
  ```
- **No streaming icons yet.** Pass `streamingLinks={[]}` to `BasePageLayout`. The platform links are added at release.
- **Keep `FollowButton` and `ShareButton`.** These work before release.
- **Tabs contain only real content.** For a minimal announcement use an `About` tab built from the press release and a `Credits` tab only if credits were supplied. When lyrics are supplied, replace the `About` tab with a `Lyrics` tab and render them in `<pre class="whitespace-pre-line font-sans">` so the line breaks survive. If the full press release copy is supplied, add a `Press Release` tab as well (see `src/routes/songs/push.tsx` for the format).
- **Pick a background gradient from the cover art.** Pass `backgroundClass` to `BasePageLayout` so the page matches the artwork.
- **Confetti is configured for release day.** `confetti={{ enabled: true, releaseDate: new Date('YYYY-MM-DD'), imageUrl: '/<file>.webp' }}`.

Metadata on the page:

- `StandardMetadata` title: `<Title> | mozworth`
- Description: one sentence that includes the release date.
- `url="https://mozworth.music/songs/<slug>/"`, `type="music.song"`
- `image="https://mozworth.music/<file>.webp"`, plus an `imageAlt`
- `publishDate="YYYY-MM-DD"`, `modifiedDate="<today>"`
- JSON-LD `MusicRecording` with `name`, `byArtist`, `inAlbum` (if known), `image`, `datePublished`, `dateModified`, and `url`

## 3. Switch the home-page promo to the new single

Edit the constants at the top of `src/components/SmartPromo.tsx`:

```tsx
const SONG_TITLE = "<Title>";
const SONG_SLUG = "/songs/<slug>";
const COVER_ART_SRC = "/<file>.webp";
const TAGLINE = "<one-line description>";
/** Release day - midnight UTC (house convention) */
const RELEASE_DATE = "YYYY-MM-DDT00:00:00Z";
const RELEASE_DATE_LABEL = "Month D, YYYY";
const PRE_SAVE_URL = "<pre-save link>";
```

Then confirm the markup has:

- A "New single" badge
- Cover art linking to the song page
- Title and tagline ("… Out Month D, YYYY.")
- `<Countdown targetDate={RELEASE_DATE} />`
- A pre-save button pointing at `PRE_SAVE_URL`, opening in a new tab, with `pre_save_click` analytics
- A "Learn more about <Title> →" link to `SONG_SLUG`

The previous single's review/interview callout should be removed; the promo is now about the new release.

## 4. Add the `/music` card

Edit `src/routes/music.tsx`. Insert the new card as the **first** card in the release grid so the newest release leads.

- `aria-label="<Title> - Single releasing Month D, YYYY"`
- Cover image with descriptive `alt`
- Date line: `Month D, YYYY`
- Short description from the one-liner
- `release_click` analytics with the song title and destination

Do not remove the previous single's card. It stays below as the last release.

## 5. Metadata and cache

- Set the home page `modifiedDate` in `src/routes/index.tsx` to today.
- Set the song page `modifiedDate` and JSON-LD `dateModified` to today.
- Run `npm run update-sw-cache`. The new image and route enter the precache, so the cache key must bump.
- The sitemap is generated from the files in `src/routes/songs/`; no manual sitemap edit is needed.

## 6. Verify

```bash
npm run lint
npx tsc --noEmit
```

Then smoke test with `npm run dev`:

- `/` — cover art, title, countdown, pre-save button, and "Learn more" link all work. The pre-save link opens the `ffm.to` page in a new tab.
- `/songs/<slug>` — cover art loads, date says "Out …", pre-save button works, tabs switch, Follow and Share work.
- `/music` — the new card is first and links to the song page.
- `/[...404]` — still renders.
- View source on `/` and `/songs/<slug>` — canonical URL, Open Graph image, and JSON-LD are correct.
- Keyboard: tab through the pre-save CTA, tabs, Follow, and Share; focus is visible.
- Light theme: text and buttons remain legible.

## 7. Commit

Use Conventional Commits with a song or surface scope. One commit is fine for a single announcement:

```
feat(push): add pre-release page, home countdown, and music card
```

Or split by surface:

```
feat(songs): add <Title> pre-release page
feat(home): promote <Title> with countdown and pre-save
feat(music): feature <Title> as upcoming release
docs(runbook): add new-single release runbook
```

Commit the new `.webp`, the updated `app.config.ts` cache revision, and the source changes. Never commit source JPG/PNG files, `.output/`, or `.env.local`.

## Release-day follow-up

When the single is live, convert the pre-release page into a normal song page:

- Replace the pre-save CTA with streaming links. Add `streaming_click` analytics for each platform.
- Replace the cover `<img>` with the Bandcamp embed once the track is on Bandcamp.
- Add the `Leave a Note` and digital purchase CTAs if the track is sold on Bandcamp.
- Set the `isrc` in `StandardMetadata` when it is available.
- Change `ReleaseMeta` back to `prefix="Released"` and keep confetti enabled.
- Add or update `Lyrics` and `Credits` tabs with the final text.
- Add press coverage with `docs/runbooks/new-press.md`.
- Update the `/music` card copy and `aria-label` from "releasing" to "released".
- Point `SmartPromo` at the next single (or the latest release if there is no next single).
- Run `docs/runbooks/deployment.md` before pushing.
