import { JSX } from "solid-js";

const RSVP_URL = "https://do512.com/events/2026/3/10/fin-fin-shrill-yell-mozworth-tickets";

export default function SmartPromo(): JSX.Element {
  return (
    <div class="bg-black/60 border border-white/30 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      {/* March 10 show at Shiner's Saloon */}
      <div class="w-full flex justify-center mb-3">
        <img
          src="/Mozworth-Shiners_March10th-2026-V3.webp"
          alt="Local Indie Alt Rock: mozworth, Shrill Yell, Fin Fin at Shiner's Saloon, March 10th, 2026. Rooftop Patio Gig. Free entry."
          class="w-full max-w-[560px] rounded-xl shadow-lg object-cover"
        />
      </div>
      <div class="text-xl font-bold text-white text-center mb-1">
        Tuesday, March 10 • Shiner's Saloon
      </div>
      <div class="text-white/80 text-center mb-3 text-sm">
        Three local Austin bands combine their powers to create a night of indie rock amazingness. mozworth + Shrill Yell + Fin Fin • Rooftop Patio Gig • Free Entry
      </div>
      <a
        href={RSVP_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block border-2 border-white/30 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
        onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "rsvp_click", { event_category: "tour", event_label: "March 10 Shiner's Saloon", destination: "do512" });
          }
        }}
      >
        RSVP
      </a>
    </div>
  );
} 