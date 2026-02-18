/**
 * Global footer used across the site — thin black bar with copyright and nav.
 * Ensures consistent "back to home" and site navigation on every page.
 */
export default function GlobalFooter() {
  return (
    <footer class="relative z-10 w-full text-center text-xs text-gray-400 py-3 border-t border-white/10 bg-black" role="contentinfo">
      &copy; {new Date().getFullYear()} mozworth. All rights reserved.
      <nav aria-label="Footer navigation" class="inline ml-2">
        <a href="/" class="text-teal-300 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 mx-1">Home</a>
        <span class="mx-1" aria-hidden="true">|</span>
        <a href="/music" class="text-teal-300 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 mx-1">Music</a>
        <span class="mx-1" aria-hidden="true">|</span>
        <a href="/tour" class="text-teal-300 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 mx-1">Tour</a>
      </nav>
    </footer>
  );
}
