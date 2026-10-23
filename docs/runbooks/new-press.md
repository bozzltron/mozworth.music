# Runbook: Add New Press Coverage

Use this when a new article, review, interview, premiere, or TV segment about mozworth is published. Follow it in order.

## 1. Gather the article

- Note the **publication**, **article title**, **publish date** (as `Month D, YYYY`), and **URL**.
- Pick a **category**: `REVIEW`, `INTERVIEW`, `PREMIERE`, or `TV`.
- Note which song or album it covers. Song-specific coverage also goes on that song page (step 4).

## 2. Generate the full-page screenshot

The graphic on the press page is a full-page render of the article.

1. Add an entry to `PRESS_LINKS` in `scripts/screenshot-press.mjs` with `fullPage: true`. Use the same `id` as the press item, and put it first in the array:

   ```js
   { id: 14, link: "https://example.com/article/", fullPage: true },
   ```

2. Capture only that item:

   ```bash
   npm run screenshot:press:recapture -- --only=14
   ```

   > `screenshot:press:recapture` defaults to ids `2,4,9`. A `--only=` you pass after `--` replaces that default, so only the ids you list are captured.

3. Open `public/press-screenshots/<id>.webp` and check the render: the article is complete and it's not a cookie wall, captcha, or error page. If it's blocked, try a longer settle time (`settleAfterLoadMs`) and run it again.

Commit the `.webp` output with the press entry.

## 3. Add the press entry

Edit `src/data/press.ts` (the single source of truth for `/press`).

- Use the **next unused id**. The `id` must match the screenshot filename.
- Add the entry at the **top** of `pressItems`. The list is sorted newest first.
- Use `category` values from the `PressItem` type. The `/press` filter buttons are built from these values.
- `description` is one or two sentences in the form "Publication calls \"Title\" …" with a short quote. Keep quotes exact.
- `linkText` is "Read Full Review" for reviews, "Read Full Interview" for interviews, and "Read Full Article" for premieres and other articles.

## 4. Song page press section

For each song the coverage is about, open `src/routes/songs/<slug>.tsx`.

- **If the page has a `Press` tab** (for example Sandpiper): add a new `<div class="mb-6">` block to that tab with the publication name, date, quote, and link.
- **If the page has no `Press` tab** (for example Why Not): add a `press` JSX block and a `{ label: "Press", content: press }` entry to `tabs`. Put it before `Credits`. Use the same structure as the Sandpiper Press tab.
- Use one short quote, copied exactly from the article, in curly quotes. Attribute it to the publication.
- Link with `target="_blank" rel="noopener noreferrer"`.

## 5. Update metadata

- Set `modifiedDate` and the JSON-LD `dateModified` on each song page you changed to today.
- Don't change the home page or `/press` metadata unless the page's copy changed.

## 6. Verify

```bash
npm run lint
npx tsc --noEmit
```

Smoke test with `npm run dev`:
- `/press` — new card appears first, the screenshot shows, the category filter includes it, and the link opens the article
- Each affected song page — the Press tab has the quote and link, and the tab switches correctly

## 7. Commit

Use the `press` scope (or `songs` when only the song page changes), for example:

```
feat(press): add No Transmission review of Why Not
```

Commit the source changes, the updated `scripts/screenshot-press.mjs`, and the new `public/press-screenshots/<id>.webp`.
