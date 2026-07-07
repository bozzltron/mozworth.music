import { A } from "@solidjs/router";

import { StandardMetadata } from "../utils/metadata";

export default function NotFound() {
  return (
    <>
      <StandardMetadata
        title="Page Not Found | mozworth"
        description="The page you're looking for doesn't exist on mozworth.music. Head back home to explore music, tour dates, and more."
        url="https://mozworth.music/404"
        type="website"
        image="https://mozworth.music/mozworth-10-11-2025.webp"
        imageAlt="mozworth"
        author="mozworth"
        modifiedDate="2025-05-01"
      />
      <div class="min-h-screen flex flex-col items-center justify-center bg-black">
        <A href="/" aria-label="Go to home page">
          <img src="/logo.jpg" alt="mozworth logo" class="w-64 h-64 object-contain mb-8 focus:outline-none focus:ring-4 focus:ring-teal-400 rounded transition-shadow" />
        </A>
        <h1 class="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Page Not Found</h1>
        <blockquote class="text-xl md:text-2xl text-white italic text-center max-w-xl">
          "Am I taking the right path?"
          <A
            href="/songs/goodbye-colorado"
            class="block mt-2 text-base not-italic text-teal-300 hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
          >
            — Goodbye Colorado
          </A>
        </blockquote>
      </div>
    </>
  );
}
