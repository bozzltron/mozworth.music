import { JSX } from "solid-js";
import CountdownTimer from "./CountdownTimer";

export default function SmartPromo(): JSX.Element {
  // January 22, 2026 at midnight (user's local time)
  const releaseDate = new Date('2026-01-22T00:00:00');

  return (
    <div class="bg-black/60 border border-white/30 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      {/* Story of an Artist Promotion */}
      <div class="w-full flex justify-center mb-4">
        <img
          src="/storyofanartist.webp"
          alt="Story of an Artist cover art"
          class="rounded-xl shadow-lg w-full max-w-[560px] object-cover focus:outline-none focus:ring-2 focus:ring-teal-400"
          style={{ 'aspect-ratio': '1 / 1' }}
        />
      </div>
      <div class="text-xl font-bold text-white text-center mb-2">
        Coming Soon: Story of an Artist
      </div>
      <div class="text-white/80 text-center mb-3 text-sm max-w-prose">
        The second installment from mozworth celebrating Daniel's birthday and Hi, How Are You Day.
      </div>
      
      <CountdownTimer
        releaseDate={releaseDate}
        title=""
        subtitle=""
        class="mb-4"
        confettiImageUrl="/storyofanartist.webp"
      />
      
      <div class="flex flex-wrap gap-3 justify-center">
        <a
          href="/songs/story-of-an-artist"
          class="inline-block border border-white/30 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors hover:bg-white hover:text-black"
        >Learn More</a>
      </div>
    </div>
  );
} 