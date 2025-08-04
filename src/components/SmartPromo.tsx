import { JSX } from "solid-js";
import CountdownTimer from "./CountdownTimer";

export default function SmartPromo(): JSX.Element {
  // July 15, 2025 at midnight (user's local time)
  const releaseDate = new Date('2025-07-15T00:00:00');

  return (
    <div class="bg-black/60 border border-white/30 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      <div class="w-full flex justify-center mb-4">
        <img
          src="/the_sky_is_falling.webp"
          alt="The Sky Is Falling single cover art"
          class="rounded-xl shadow-lg w-full max-w-[560px] object-cover"
          style="aspect-ratio: 1/1;"
        />
      </div>
      <div class="text-xl font-bold text-white text-center mb-2">
        New Single: The Sky Is Falling
      </div>
      
      <CountdownTimer
        releaseDate={releaseDate}
        title=""
        subtitle=""
        className="mb-4"
      />
      
      <div class="text-white text-center mb-4">
        FOX 7 Austin Studio Performance: July 31, 2025 (<a href="https://www.fox7austin.com/video/1683875" target="_blank" rel="noopener" class="underline hover:text-teal-300">Watch the segment</a>)
      </div>
      <div class="flex flex-wrap gap-3 justify-center">
        <a
          href="/songs/the-sky-is-falling"
          class="inline-block border border-white/30 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors hover:bg-white hover:text-black"
        >View Single</a>
      </div>
    </div>
  );
} 