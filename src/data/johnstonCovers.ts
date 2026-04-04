/**
 * Daniel Johnston covers — project rule: digital stays free (Bandcamp name-your-price $0).
 * Keys are URL path segments under /songs/:slug
 */
export const JOHNSTON_COVER_SLUGS = new Set<string>(["walking-the-cow", "story-of-an-artist"]);

export function isJohnstonCoverSlug(slug: string): boolean {
  return JOHNSTON_COVER_SLUGS.has(slug);
}
