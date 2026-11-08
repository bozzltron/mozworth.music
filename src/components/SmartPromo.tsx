import { JSX } from "solid-js";
import Countdown from "./Countdown";

/** Current single promo — update these constants when a new single is announced. */
const SONG_TITLE = "Push";
const SONG_SLUG = "/songs/push";
const COVER_ART_SRC = "/mozworth-push.webp";
const TAGLINE = "Texas-meets-surf rock, recorded live at 5th Street Studios.";
/** Release day - midnight UTC */
const RELEASE_DATE = "2026-11-24T00:00:00Z";
const RELEASE_DATE_LABEL = "November 24, 2026";
const PRE_SAVE_URL = "https://ffm.to/mozworth-push";

export default function SmartPromo(): JSX.Element {
  return (
    <div class="bg-black/60 light:bg-white/80 border border-white/30 light:border-gray-200 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      <span class="inline-block px-3 py-1 text-xs font-semibold text-white bg-teal-700 rounded-full mb-3">New single</span>
      <a
        href={SONG_SLUG}
        class="block w-full mb-3 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100"
        aria-label={`${SONG_TITLE} single — learn more`}
      >
        <img
          src={COVER_ART_SRC}
          alt={`${SONG_TITLE} single artwork`}
          class="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </a>
      <div class="text-xl font-bold text-white light:text-gray-900 text-center mb-1">{SONG_TITLE}</div>
      <div class="text-white/80 light:text-gray-600 text-center mb-3 text-sm">
        {TAGLINE} Out {RELEASE_DATE_LABEL}.
      </div>
      <div class="w-full flex justify-center mb-4">
        <Countdown targetDate={RELEASE_DATE} />
      </div>
      <a
        href={PRE_SAVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => { if (window.gtag) window.gtag('event', 'pre_save_click', { song: SONG_TITLE }); }}
        class="inline-block px-5 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100 w-full text-center mb-3"
      >
        Pre-save
      </a>
      <a href={SONG_SLUG} class="text-teal-300 light:text-teal-600 hover:underline text-sm font-semibold">
        Learn more about {SONG_TITLE} →
      </a>
    </div>
  );
}
