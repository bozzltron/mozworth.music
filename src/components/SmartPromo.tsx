import { JSX } from "solid-js";

const RSVP_URL = "https://www.vancerts.com/rsvp";

export default function SmartPromo(): JSX.Element {
  return (
    <div class="bg-black/60 border border-white/30 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      {/* March 13 - It's A Van Music Festival */}
      <div class="w-full flex justify-center mb-3">
        <img
          src="/itsavan.webp"
          alt="It's A Van Music Festival Austin - March 13, 2026. 80+ acts, mozworth at 2:45pm. Free, outside, BYOB."
          class="w-full max-w-[560px] rounded-xl shadow-lg object-cover"
        />
      </div>
      <div class="text-xl font-bold text-white text-center mb-1">
        Friday, March 13 • It's A Van Music Festival
      </div>
      <div class="text-white/80 text-center mb-3 text-sm">
        mozworth plays 2:45pm • 80+ confirmed acts • Free • Outside • BYOB • 517 N IH 35, Austin
      </div>
      <a
        href={RSVP_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block border-2 border-white/30 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
        onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "rsvp_click", { event_category: "tour", event_label: "March 13 It's A Van", destination: "vancerts" });
          }
        }}
      >
        RSVP
      </a>
    </div>
  );
} 