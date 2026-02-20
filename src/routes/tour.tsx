import RotatingBackground from "../components/RotatingBackground";
import Callout from "../components/Callout";
import GlobalFooter from "../components/GlobalFooter";
import { StandardMetadata } from "../utils/metadata";
import { tourEvents, type TourEvent } from "../data/tour";

function TourDateBlock({ event }: { event: TourEvent }) {
  const linkClass =
    "tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black";
  return (
    <div
      class={`tour-date w-full mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4 md:gap-6 ${
        event.isPast ? "border border-white/30 opacity-70" : "border-2 border-white/80 bg-white/5"
      }`}
    >
      <div class="min-w-[200px] text-left font-bold">{event.dateLabel}</div>
      <div class="venue-info flex-1 text-left text-base">
        <p class="font-semibold text-white mb-1">{event.venue}</p>
        <p style="white-space: pre-line" class="text-white/90">{event.details}</p>
      </div>
      <div class="tour-links w-full md:w-auto md:min-w-[140px] flex flex-col md:flex-row flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
        {event.links.map((link) => (
          <a
            href={link.href}
            class={linkClass}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel || link.label}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Tour() {
  const comingSoon = tourEvents.find((e) => e.venue === "2026 Tour Dates Coming Soon");
  const events = tourEvents.filter((e) => e.venue !== "2026 Tour Dates Coming Soon");

  return (
    <>
      <StandardMetadata
        title="Tour Dates & Live Shows | mozworth | Austin Indie Rock"
        description="View upcoming mozworth tour dates and live performances in Austin, Texas and beyond. Indie rock and alternative rock shows from this Austin-based band. Find concert dates and ticket information."
        url="https://mozworth.music/tour/"
        type="website"
        keywords="indie rock shows Austin, alternative rock concerts Austin, Austin indie rock bands, mozworth tour dates, Austin live music, indie rock Austin Texas"
        modifiedDate="2026-02-01"
      />
      <div class="flex flex-col min-h-screen">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50">Skip to main content</a>
        <main id="main-content" class="flex-1 flex items-center justify-center relative bg-black">
          <RotatingBackground />

          <div class="relative container mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-10 md:rounded-[10px] bg-black/70 text-white" style="transform: translateZ(0);">
            <h1 class="text-3xl font-bold mb-8 text-center">Tour Dates</h1>
            <p class="text-white/80 mb-6 text-center">Indie alternative rock shows in Austin, Texas and beyond</p>

            <a
              href="/tour/ics"
              class="mb-6 inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
              aria-label="Subscribe to mozworth tour calendar (downloads iCal file)"
            >
              <span aria-hidden="true">📅</span>
              Subscribe to calendar
            </a>

            {comingSoon && (
              <Callout class="w-full mb-6 flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div class="min-w-[200px] text-left font-bold">2026</div>
                <div class="venue-info flex-1 text-left text-base">
                  <p style="white-space: pre-line">{comingSoon.details}</p>
                </div>
                <div class="tour-links min-w-[140px] flex flex-wrap gap-2 justify-center md:justify-end" />
              </Callout>
            )}

            {events.map((event) => (
              <TourDateBlock key={`${event.date}-${event.venue}`} event={event} />
            ))}
          </div>
        </main>
        <GlobalFooter />
      </div>
    </>
  );
}
