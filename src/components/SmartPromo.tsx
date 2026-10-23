import { JSX } from "solid-js";
import Countdown from "./Countdown";

/** Latest music review link */
const NO_TRANSMISSION_REVIEW_URL = "https://notransmission.com/mozworth-sound-ready-to-break-something-open-on-why-not/";
/** Why Not release date - midnight UTC */
const WHY_NOT_RELEASE_DATE = "2026-10-22T00:00:00Z";

export default function SmartPromo(): JSX.Element {
  return (
    <div class="bg-black/60 light:bg-white/80 border border-white/30 light:border-gray-200 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      <span class="inline-block px-3 py-1 text-xs font-semibold text-white bg-teal-600 rounded-full mb-3">New single</span>
      <iframe
        src="https://bandcamp.com/EmbeddedPlayer/track=2084037407/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
        seamless
        class="w-full aspect-square mb-3"
        title="Why Not by mozworth"
      />
      <div class="text-xl font-bold text-white light:text-gray-900 text-center mb-1">Why Not</div>
      <div class="text-white/80 light:text-gray-600 text-center mb-3 text-sm">
        New indie rock single from mozworth, released October 22, 2026.
      </div>
      <a href="/songs/why-not" class="text-teal-300 light:text-teal-600 hover:underline mb-4 text-sm font-semibold">Learn more about Why Not →</a>
      <div class="w-full flex justify-center mb-4">
        <Countdown targetDate={WHY_NOT_RELEASE_DATE} />
      </div>
      <p class="mt-4 text-sm text-white/70 light:text-gray-600 text-center">
        Latest review:{" "}
        <a href={NO_TRANSMISSION_REVIEW_URL} target="_blank" rel="noopener noreferrer" class="text-teal-300 light:text-teal-600 hover:underline">
          No Transmission
        </a>
        {" — “Why Not”"}
      </p>
    </div>
  );
}