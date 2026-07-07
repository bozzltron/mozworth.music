# AGENTS.md

A guide for AI coding agents working on mozworth.music. This file follows the open [agents.md](https://agents.md/) format. For human-facing docs see `README.md`, `architecture.md`, and `project.md`.

## Project overview

`mozworth.music` is the official PWA website for **mozworth**, an indie artist from Austin, Texas. The site showcases music, lyrics, song stories, streaming links, tour dates, and press. There is no CMS — all content lives in TypeScript modules under `src/data/`. The site is installable, works offline, and runs in a standalone window when added to the home screen.

**Tech stack:** SolidJS 1.9 + SolidStart 1.1 (SSR), Vinxi 0.5, TailwindCSS 4 (via `@tailwindcss/vite`), `vite-plugin-pwa` (Workbox), `@solidjs/router` 0.15, TypeScript strict mode, `sharp`, `puppeteer`. Node >=22, package manager is npm.

## Setup & commands

All commands are defined in `package.json` scripts. Run from the repo root.

| Task | Command |
| --- | --- |
| Install dependencies | `npm install` |
| Dev server | `npm run dev` (runs `vinxi dev`) |
| Production build | `npm run build` (runs `vinxi build`) |
| Run production server | `npm run start` (runs `vinxi start`) |
| Preview static build | `npm run preview` |
| Lint | `npm run lint` (runs `eslint . --ext .js,.jsx,.ts,.tsx`) |
| Lint with autofix | `npm run lint:fix` |
| Convert JPG to WebP | `npm run convert:webp` (embeds EXIF copyright) |
| Generate phone wallpapers | `npm run generate:wallpapers` |
| Import a tour poster | `npm run tour-poster:import -- YYYY-MM-DD ./path/to/flyer.jpg` |
| Sync known promo posters | `npm run tour-posters:sync` |
| Capture press screenshots | `npm run screenshot:press` |
| Recapture press screenshots | `npm run screenshot:press:recapture` |
| Update PWA service-worker cache config | `npm run update-sw-cache` |

## Testing & validation

This project has **no automated test framework configured** (no vitest, jest, playwright, cypress) and no test files. There is also no dedicated `typecheck` script in `package.json`, despite `tsconfig.json` having `strict: true` and `noEmit: true`.

Before committing changes, run at minimum:

```bash
npm run lint
npx tsc --noEmit
```

Then perform a manual smoke test: `npm run dev` and click through the affected routes, including the 404 page (`/[...404]`), the tour page, and `/tour/ics`.

## Code style & conventions

- **TypeScript strict mode** is on (`tsconfig.json`: `strict: true`, `noEmit: true`, `isolatedModules: true`, `target`/`module: `ESNext`, `moduleResolution: `bundler`).
- **ESLint flat config** (`eslint.config.js`): `@eslint/js` recommended + `eslint-plugin-solid` recommended + `typescript-eslint` recommended. Globals: `globals.browser` for source, plus `globals.node` for `scripts/**/*.js`. Ignored: `.vinxi/`, `node_modules/`, `dist/`, `.output/`.
- **No Prettier, no EditorConfig, no Biome.** Formatting is enforced via ESLint only. Match the existing code style.
- **ESM project** (`"type": "module"`); Node scripts use the `.mjs` extension when explicit ESM is needed.
- **Path alias:** `~/*` maps to `./src/*`.
- **TailwindCSS 4** via the `@tailwindcss/vite` plugin. There is no `tailwind.config.js` and no `postcss.config.js`. The single CSS entry is `src/app.css` with `@import "tailwindcss"`.
- The artist name `mozworth` is always lowercase in code, copy, and metadata.

## Project structure

```
src/
├── routes/         # File-based routing (@solidjs/router)
├── components/     # Reusable UI components (20 files)
├── data/           # Static content — single source of truth (no CMS)
├── utils/          # date, focusTrap, metadata, tourIcs
├── contexts/       # ThemeContext
├── app.tsx         # Root: Router + ErrorBoundary + PWA
├── app.css         # Tailwind + theme variables
├── entry-client.tsx
└── entry-server.tsx  # SSR HTML shell, Apple splash links, GA4
public/             # Static assets (manifest.json, images, tour-posters/, wallpapers/, press-screenshots/)
scripts/            # Node ESM asset/processing scripts
```

Static data in `src/data/` is the canonical source — edit it there, not inline in routes. The tour data lives in `src/data/tour.ts` and feeds both `/tour` and the iCal feed at `/tour/ics` (RFC 5545).

## Commit conventions

This project uses **Conventional Commits** with an optional scope. Format: `type(scope): description`.

Types observed in `git log`: `feat`, `fix`, `chore`, `refactor`, `docs`, `copy`, `fixup`.

Scopes observed: `tour`, `follow`, `support`, `cta`, `vinyl`, `commerce`, `songs`, `home`, `press`, `backgrounds`, `music`.

There is no PR template, no `.github/` directory, and no branching convention — commits go directly to `main`.

## Asset & content workflows

- **WebP-only for promotional flyers.** Source JPGs are gitignored. Use `npm run convert:webp` (it also embeds EXIF copyright metadata). Commit only the `.webp` output.
- **Tour posters:** manual save is recommended because Bandsintown and Facebook block automated downloads via Cloudflare. Then run `npm run tour-poster:import -- YYYY-MM-DD ./path/to/flyer.jpg`. Use `npm run tour-posters:sync` to pull known promo files into `public/tour-posters/`.
- **Wallpapers:** `npm run generate:wallpapers` writes to `public/wallpapers/*.webp`; the manifest is `src/data/wallpapers.ts`.
- **Press screenshots:** `npm run screenshot:press` captures and stores in `public/press-screenshots/`. Use `:recapture` for specific items.
- **New song page:** follow the pattern in `src/routes/songs/`. Required metadata: `modifiedDate`, JSON-LD (`MusicRecording`), and Open Graph tags (see `src/utils/metadata.tsx` and the README guidelines).
- **iCal feed:** `/tour/ics` is RFC 5545 compliant, future-only, with venue addresses in the LOCATION field, 24-hour time internally.

## Gotchas & pitfalls

- **SolidJS `<Show>` with records:** use `<Show when={x()} keyed>` when passing an object/record, otherwise you receive the accessor function instead of the value. Documented in `architecture.md`.
- **Modals and `position: fixed`:** any ancestor with a non-`none` `transform` or `translateZ` becomes the modal's containing block. Render modals outside transformed ancestors or use a portal. Documented in `architecture.md`.
- **PWA service worker** uses `registerType: 'autoUpdate'` with in-app "A new version is available" notifications. After changing cached assets, run `npm run update-sw-cache`.
- **GA4 in `entry-server.tsx`:** the gtag `<script>` is injected via `innerHTML` (with an `eslint-disable` comment) and is gated to run only on the `mozworth.music` hostname. Do not move it client-side.
- **`entry-server.tsx` is large on purpose** — it contains one Apple splash-screen `<link>` per iPhone/iPad resolution. Don't "clean it up" by removing them.
- **`sharp` is a native dependency** and may need to be recompiled when Node major or CPU architecture changes.
- **Daniel Johnston covers must be free digital downloads** — name-your-price at $0, no minimum. This is a hard product rule from `project.md`.
- **Vinyl CTA is prioritized over digital** in all commerce surfaces. See `project.md`.

## Security & environment

- **Only environment variable:** `VITE_COMMENTS_INDEX_POD`, a public Solid POD URL used for the comments feature. It is not a secret.
- **Convention:** new client-side env vars must use the `VITE_` prefix so Vite exposes them.
- **External links** use `rel="noreferrer"`.
- **GA4** uses `anonymize_ip: true` and is hostname-gated to `mozworth.music`.
- **No authentication, no API keys, no secrets** in the repo. The committed `.env` contains only the public POD URL above; `.env*.local` is gitignored.
- **No deployment config** is committed. Build output lives in `.output/` (Nitro server) and can be deployed to Cloudflare/Vercel/Netlify/etc., but this is handled outside the repo.

## Further reading

- `README.md` — quick start, full command list, new-song-page guidelines.
- `architecture.md` — component inventory, design system, SolidJS/modal pitfalls, PWA capability evaluation.
- `project.md` — product goals: asset copyright, prevent page crashes, tour/iCal sync, physical-first sales, Daniel Johnston covers free.
