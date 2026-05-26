import { JSX } from "solid-js";
import { MOZWORTH_DEBUT_VINYL_URL } from "../data/commerce";

const ALBUM_ART_SRC = "/mozworth-debut.webp";
/** August 8, 2026 — The Austin Beer Garden (sync with src/data/tour.ts) */
const NEXT_SHOW_URL = "/tour";
const WAXZINE_INTERVIEW_URL = "https://www.waxzine.com/post/talking-daniel-johnston-the-austin-underground-and-the-mountain-and-the-wolf-with-mozworth";

const promoCtaButtonClass =
  "block w-full text-center border-2 border-white/30 light:border-gray-300 text-white light:text-gray-900 font-semibold px-6 py-2 rounded-full shadow transition-colors hover:bg-white hover:text-black light:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100";

function trackVinyl(source: "art" | "button") {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "commerce_click", {
      event_category: "vinyl",
      event_label: `smart_promo_debut_vinyl (${source})`,
      destination: "elasticstage",
    });
  }
}

function trackNextShowClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "rsvp_click", {
      event_category: "tour",
      event_label: "August 8 2026 AGBG SmartPromo (tour page)",
      destination: "tour",
    });
  }
}

export default function SmartPromo(): JSX.Element {
  return (
    <div class="bg-black/60 light:bg-white/80 border border-white/30 light:border-gray-200 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      <span class="inline-block px-3 py-1 text-xs font-semibold text-white bg-teal-600 rounded-full mb-3">New on vinyl</span>
      <a
        href={MOZWORTH_DEBUT_VINYL_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="block w-full mb-3 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100"
        aria-label="Buy mozworth debut album on vinyl at elasticStage — cover art opens store (new tab)"
        onClick={() => trackVinyl("art")}
      >
        <img
          src={ALBUM_ART_SRC}
          alt="mozworth self-titled debut album cover — now available on vinyl"
          class="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </a>
      <div class="text-xl font-bold text-white light:text-gray-900 text-center mb-1">Debut album on vinyl</div>
      <div class="text-white/80 light:text-gray-600 text-center mb-3 text-sm">
        The self-titled release is available to order on vinyl at elasticStage.
      </div>
      <div class="w-max max-w-full mx-auto min-w-0">
        <a
          href={MOZWORTH_DEBUT_VINYL_URL}
          target="_blank"
          rel="noopener noreferrer"
          class={promoCtaButtonClass}
          onClick={() => trackVinyl("button")}
          aria-label="Buy debut album on vinyl at elasticStage (opens in new tab)"
        >
          Shop vinyl
        </a>
      </div>
      <div class="w-full self-stretch mt-4 pt-4 border-t border-white/20 light:border-gray-200 text-sm text-white/70 light:text-gray-600 text-center flex flex-col gap-2">
        <p>
          <span class="font-medium text-white light:text-gray-800">Next show</span>
          <br />
          August 8 — The Austin Beer Garden w/ The Somebodies
        </p>
        <div class="w-max max-w-full mx-auto">
          <a
            href={NEXT_SHOW_URL}
            class={promoCtaButtonClass}
            aria-label="View August 8 show on tour dates page"
            onClick={() => trackNextShowClick()}
          >
            Tour dates
          </a>
        </div>
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
