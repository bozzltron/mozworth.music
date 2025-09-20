import { JSX } from "solid-js";
import CountdownTimer from "./CountdownTimer";

export default function SmartPromo(): JSX.Element {
  // September 15, 2025 at midnight (user's local time)
  const releaseDate = new Date('2025-09-15T00:00:00');

  return (
    <div class="bg-black/60 border border-white/30 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      {/* Sandpiper Promotion */}
      <div class="w-full flex justify-center mb-4">
        <a href="/songs/sandpiper" aria-label="Go to Sandpiper page">
          <img
            src="/sandpiper.webp"
            alt="Sandpiper single cover art"
            class="rounded-xl shadow-lg w-full max-w-[560px] object-cover focus:outline-none focus:ring-2 focus:ring-teal-400"
            style={{ 'aspect-ratio': '1 / 1' }}
          />
        </a>
      </div>
      <div class="text-xl font-bold text-white text-center mb-2">
        New Single: Sandpiper
      </div>
      <div class="text-white/80 text-center mb-3 text-sm max-w-prose">
        The second summer release following, and a companion to, <a href="/songs/the-sky-is-falling" class="underline hover:text-teal-300">The Sky Is Falling</a>.
      </div>
      
      <CountdownTimer
        releaseDate={releaseDate}
        title=""
        subtitle=""
        class="mb-4"
        confettiImageUrl="/sandpiper.webp"
      />
      
      <div class="flex flex-wrap gap-3 justify-center mb-6">
        <a
          href="/songs/sandpiper"
          class="inline-block border border-white/30 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors hover:bg-white hover:text-black"
        >View Single</a>
      </div>

      {/* Interview Promotion */}
      <div class="w-full border-t border-white/20 pt-4">
        <div class="text-xl font-bold text-white text-center mb-2">
          New Interview: Illustrate Magazine
        </div>
        <div class="text-white/80 text-center mb-3 text-sm max-w-prose">
          An in-depth conversation covering musical journey, influences, and creative process.
        </div>
        <div class="flex flex-wrap gap-3 justify-center">
          <a
            href="/press"
            class="inline-block border border-white/30 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors hover:bg-white hover:text-black"
          >
            Read Interview
          </a>
        </div>
      </div>
    </div>
  );
} 