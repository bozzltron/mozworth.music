import fs from "fs/promises";
import path from "path";

const ROUTES_DIR = path.join(process.cwd(), "src/routes");
const PUBLIC_DIR = path.join(process.cwd(), "public");

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

async function getRouteMtime(...parts: string[]): Promise<Date> {
  try {
    const filePath = path.join(ROUTES_DIR, ...parts) + ".tsx";
    const stat = await fs.stat(filePath);
    return stat.mtime;
  } catch {
    return new Date();
  }
}

async function getPublicMtime(...parts: string[]): Promise<Date> {
  try {
    const filePath = path.join(PUBLIC_DIR, ...parts);
    const stat = await fs.stat(filePath);
    return stat.mtime;
  } catch {
    return new Date();
  }
}

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

async function getSlugs(dir: string): Promise<string[]> {
  try {
    const files = await fs.readdir(dir);
    return files
      .filter((file) => file.endsWith(".tsx"))
      .map((file) => file.replace(/\.tsx$/, ""));
  } catch {
    return [];
  }
}

export async function GET({ request }: { request: Request }) {
  const baseUrl = new URL(request.url).origin;

  const [
    rootMtime,
    musicMtime,
    discographyMtime,
    tourMtime,
    pressMtime,
    supportMtime,
    backgroundsMtime,
    songSlugs,
    albumSlugs,
  ] = await Promise.all([
    getRouteMtime("index"),
    getRouteMtime("music"),
    getRouteMtime("discography"),
    getRouteMtime("tour"),
    getRouteMtime("press"),
    getRouteMtime("support"),
    getRouteMtime("backgrounds"),
    getSlugs(path.join(ROUTES_DIR, "songs")),
    getSlugs(path.join(ROUTES_DIR, "albums")),
  ]);

  const wallpaperMtimes = await Promise.all([
    getPublicMtime("wallpapers", "logo-black.webp"),
    getPublicMtime("wallpapers", "logo-white.webp"),
    getPublicMtime("wallpapers", "story-of-an-artist-closeup.webp"),
    getPublicMtime("wallpapers", "sandpiper-closeup.webp"),
    getPublicMtime("wallpapers", "the-sky-is-falling-closeup.webp"),
    getPublicMtime("wallpapers", "walking-the-cow-closeup.webp"),
    getPublicMtime("wallpapers", "mozworth-debut-closeup.webp"),
    getPublicMtime("wallpapers", "goodbye-colorado-closeup.webp"),
    getPublicMtime("wallpapers", "postcard-closeup.webp"),
  ]);

  const urls: SitemapUrl[] = [
    { loc: `${baseUrl}/`, lastmod: formatDate(rootMtime), changefreq: "weekly", priority: "1.0" },
    { loc: `${baseUrl}/music`, lastmod: formatDate(musicMtime), changefreq: "monthly", priority: "0.9" },
    { loc: `${baseUrl}/discography`, lastmod: formatDate(discographyMtime), changefreq: "monthly", priority: "0.9" },
    { loc: `${baseUrl}/tour`, lastmod: formatDate(tourMtime), changefreq: "daily", priority: "0.9" },
    { loc: `${baseUrl}/press`, lastmod: formatDate(pressMtime), changefreq: "monthly", priority: "0.8" },
    { loc: `${baseUrl}/support`, lastmod: formatDate(supportMtime), changefreq: "monthly", priority: "0.8" },
    { loc: `${baseUrl}/backgrounds`, lastmod: formatDate(backgroundsMtime), changefreq: "monthly", priority: "0.8" },
  ];

  for (const slug of songSlugs) {
    const mtime = await getRouteMtime("songs", slug);
    urls.push({ loc: `${baseUrl}/songs/${slug}`, lastmod: formatDate(mtime), changefreq: "monthly", priority: "0.7" });
  }

  for (const slug of albumSlugs) {
    const mtime = await getRouteMtime("albums", slug);
    urls.push({ loc: `${baseUrl}/albums/${slug}`, lastmod: formatDate(mtime), changefreq: "monthly", priority: "0.7" });
  }

  const wallpaperFiles = [
    "logo-black.webp", "logo-white.webp",
    "story-of-an-artist-closeup.webp", "sandpiper-closeup.webp",
    "the-sky-is-falling-closeup.webp", "walking-the-cow-closeup.webp",
    "mozworth-debut-closeup.webp", "goodbye-colorado-closeup.webp",
    "postcard-closeup.webp",
  ];
  for (let i = 0; i < wallpaperFiles.length; i++) {
    urls.push({
      loc: `${baseUrl}/wallpapers/${wallpaperFiles[i]}`,
      lastmod: formatDate(wallpaperMtimes[i]),
      changefreq: "monthly",
      priority: "0.5",
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
    urls
      .map((u) => `<url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`)
      .join("\n")
  }\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
} 