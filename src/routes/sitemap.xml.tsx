// import { APIEvent } from "solid-start/server";
import fs from "fs/promises";
import path from "path";

// Helper to get all .tsx files in a directory (excluding index and 404)
async function getSlugs(dir: string) {
  const files = await fs.readdir(dir);
  return files
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.replace(/\.tsx$/, ""));
}

export async function GET({ request }: { request: Request }) {
  const baseUrl = new URL(request.url).origin;

  // Static pages
  const staticPages = [
    "",
    "about",
    "albums",
    "songs",
    "tour",
    "discography",
    "press"
  ];

  // Dynamic song and album slugs
  const songsDir = path.join(process.cwd(), "src/routes/songs");
  const albumsDir = path.join(process.cwd(), "src/routes/albums");
  const songSlugs = await getSlugs(songsDir);
  const albumSlugs = await getSlugs(albumsDir);

  // Build URLs with SEO sparkle
  const urls = [
    // Home page: weekly, highest priority
    `<url><loc>${baseUrl}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
    // All others: monthly, slightly lower priority
    ...staticPages.filter((p) => p !== "").map(
      (p) => `<url><loc>${baseUrl}/${p}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    ),
    ...songSlugs.map(
      (slug) => `<url><loc>${baseUrl}/songs/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    ),
    ...albumSlugs.map(
      (slug) => `<url><loc>${baseUrl}/albums/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
} 