import { JSX } from "solid-js";

const EVENT_URL = "https://www.bandsintown.com/e/107888752";
const WAXZINE_INTERVIEW_URL = "https://www.waxzine.com/post/talking-daniel-johnston-the-austin-underground-and-the-mountain-and-the-wolf-with-mozworth";

export default function SmartPromo(): JSX.Element {
  return (
    <div class="bg-black/60 light:bg-white/80 border border-white/30 light:border-gray-200 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      {/* April 25 - Hanover, Pflugerville */}
      <span class="inline-block px-3 py-1 text-xs font-semibold text-white bg-teal-600 rounded-full mb-3">Upcoming</span>
      <div class="text-xl font-bold text-white light:text-gray-900 text-center mb-1">
        Friday, April 25 • Hanovers Draught Haus
      </div>
      <div class="text-white/80 light:text-gray-600 text-center mb-3 text-sm">
        Space Cushion, ItBegins, mozworth • Stage time TBD • 108 E Main St, Pflugerville
      </div>
      <a
        href={EVENT_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block border-2 border-white/30 light:border-gray-300 text-white light:text-gray-900 font-semibold px-6 py-2 rounded-full shadow transition-colors hover:bg-white hover:text-black light:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100"
        onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "rsvp_click", { event_category: "tour", event_label: "April 25 Hanovers Draught Haus", destination: "bandsintown" });
          }
        }}
      >
        View Event
      </a>
      <p class="mt-4 pt-4 border-t border-white/20 light:border-gray-200 text-sm text-white/70 light:text-gray-600 text-center">
        Latest: <a href={WAXZINE_INTERVIEW_URL} target="_blank" rel="noopener noreferrer" class="text-teal-300 light:text-teal-600 hover:underline">Wax Zine interview</a> — Daniel Johnston, Austin underground & The Mountain & The Wolf
      </p>
    </div>
  );
}
