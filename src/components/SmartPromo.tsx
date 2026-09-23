import { JSX } from "solid-js";
import Countdown from "./Countdown";

const ALBUM_ART_SRC = "/why-not.webp";
/** Latest interview link */
const WAXZINE_INTERVIEW_URL = "https://www.waxzine.com/post/talking-daniel-johnston-the-austin-underground-and-the-mountain-and-the-wolf-with-mozworth";
/** Why Not release date - midnight UTC */
const WHY_NOT_RELEASE_DATE = "2026-10-22T00:00:00Z";
/** Pre-save link */
const PRE_SAVE_URL = "https://distrokid.com/hyperfollow/mozworth/why-not";

export default function SmartPromo(): JSX.Element {
  return (
    <div class="bg-black/60 light:bg-white/80 border border-white/30 light:border-gray-200 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      <span class="inline-block px-3 py-1 text-xs font-semibold text-white bg-teal-600 rounded-full mb-3">New single</span>
      <a
        href="/songs/why-not"
        target="_blank"
        rel="noopener noreferrer"
        class="block w-full mb-3 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100"
        aria-label="Why Not single — opens in new tab"
      >
        <img
          src={ALBUM_ART_SRC}
          alt="Why Not single artwork"
          class="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </a>
      <div class="text-xl font-bold text-white light:text-gray-900 text-center mb-1">Why Not</div>
      <div class="text-white/80 light:text-gray-600 text-center mb-3 text-sm">
        New indie rock single from mozworth, out October 22, 2026.
      </div>
      <div class="w-full flex justify-center mb-4">
        <Countdown targetDate={WHY_NOT_RELEASE_DATE} />
      </div>
      <div class="w-full flex justify-center mb-4">
        <a
          href={PRE_SAVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => { if (window.gtag) window.gtag('event', 'pre_save_click', { song: 'Why Not', source: 'home_promo' }); }}
          class="inline-block px-5 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100 text-center"
        >
          Pre-save
        </a>
      </div>
      <p class="mt-4 text-sm text-white/70 light:text-gray-600 text-center">
        Latest interview:{" "}
        <a href={WAXZINE_INTERVIEW_URL} target="_blank" rel="noopener noreferrer" class="text-teal-300 light:text-teal-600 hover:underline">
          Wax Zine
        </a>
        {" — Daniel Johnston, Austin underground & The Mountain & The Wolf"}
      </p>
    </div>
  );
}