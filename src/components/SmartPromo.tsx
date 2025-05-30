import { JSX } from "solid-js";

export default function SmartPromo(): JSX.Element {
  return (
    <div class="bg-black/60 border border-white/30 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      <div class="w-full flex justify-center mb-4">
        <img
          src="/mozworth-live.webp"
          alt="mozworth live promo"
          class="rounded-xl shadow-lg w-full max-w-[560px] object-cover"
          style="aspect-ratio: 16/9;"
        />
      </div>
      <div class="text-xl font-bold text-white text-center mb-2">
        Live at South Austin Beer Garden
      </div>
      <div class="text-white text-center mb-2">
        June 6, 2025 &bull; 8pm &ndash; 10pm<br />10700 Menchaca Rd, Austin, TX
      </div>
      <div class="flex flex-wrap gap-3 justify-center">
        <a
          href="https://www.bandsintown.com/e/106941100-mozworth-at-south-austin-beer-garden?came_from=251&utm_medium=web&utm_source=artist_page&utm_campaign=event"
          class="inline-block border border-white/30 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors hover:bg-white hover:text-black"
          target="_blank"
          rel="noopener"
        >RSVP on Bandsintown</a>
        <a
          href="https://www.facebook.com/share/1B8AZgXj5f/"
          class="inline-block border border-white/30 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors hover:bg-white hover:text-black"
          target="_blank"
          rel="noopener"
        >RSVP on Facebook</a>
      </div>
    </div>
  );
} 