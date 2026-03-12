import ThemeToggle from "./ThemeToggle";

/**
 * Global footer used across the site — thin bar with copyright, nav, and theme toggle.
 * Ensures consistent "back to home" and site navigation on every page.
 */
export default function GlobalFooter() {
  return (
    <footer class="relative z-10 w-full text-center text-xs text-gray-400 light:text-gray-600 py-3 border-t border-white/10 light:border-gray-200 bg-black light:bg-stone-100" role="contentinfo">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span>&copy; {new Date().getFullYear()} mozworth. All rights reserved.</span>
        <ThemeToggle />
      </div>
      <nav aria-label="Footer navigation" class="inline ml-2 mt-1">
        <a href="/" class="text-teal-300 light:text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 mx-1">Home</a>
        <span class="mx-1" aria-hidden="true">|</span>
        <a href="/music" class="text-teal-300 light:text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 mx-1">Music</a>
        <span class="mx-1" aria-hidden="true">|</span>
        <a href="/tour" class="text-teal-300 light:text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 mx-1">Tour</a>
      </nav>
    </footer>
  );
}
