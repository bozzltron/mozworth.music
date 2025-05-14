export default function NotFound() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-black">
      <a href="/" aria-label="Go to home page">
        <img src="/logo.jpg" alt="mozworth logo" class="w-64 h-64 object-contain mb-8 focus:outline-none focus:ring-4 focus:ring-teal-400 rounded transition-shadow" />
      </a>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Page Not Found</h2>
      <blockquote class="text-xl md:text-2xl text-white italic text-center max-w-xl">
        “Am I taking the right path?”
        <a
          href="/songs/goodbye-colorado"
          class="block mt-2 text-base not-italic text-teal-300 hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
        >
          — Goodbye Colorado
        </a>
      </blockquote>
    </div>
  );
}
