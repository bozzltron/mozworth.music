import { Show, type JSX } from "solid-js";
import type { TourEvent } from "../data/tour";
import {
  buildSingleTourEventCalendar,
  googleCalendarTemplateUrl,
  icsFilenameForEvent,
} from "../utils/tourIcs";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fallback when `window` is unavailable (SSR) or missing. */
const CANONICAL_ORIGIN = "https://mozworth.music";

function resolveOrigin(): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return CANONICAL_ORIGIN;
}

const triggerClass =
  "tour-link list-none w-full sm:w-auto text-center inline-block border border-white/30 light:border-gray-300 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm text-white light:text-gray-900 transition-all duration-200 hover:bg-white hover:text-black light:hover:bg-gray-100 cursor-pointer select-none flex items-center justify-center gap-2 [&::-webkit-details-marker]:hidden";

const optionClass =
  "tour-link w-full text-center inline-block border border-white/30 light:border-gray-300 rounded-full px-4 py-2 text-sm text-white light:text-gray-900 transition-all duration-200 hover:bg-white hover:text-black light:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100";

export interface AddToCalendarProps {
  event: TourEvent;
}

/**
 * Disclosure with Google Calendar link + .ics download. Works without JS for Google (link inside details).
 * .ics supports Apple Calendar, Outlook, and most clients; Google link helps Android users on Google Calendar.
 */
export default function AddToCalendar(props: AddToCalendarProps): JSX.Element {
  const googleHref = () => googleCalendarTemplateUrl(props.event, resolveOrigin());

  const downloadIcs = () => {
    const body = buildSingleTourEventCalendar(props.event, resolveOrigin());
    const blob = new Blob([body], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = icsFilenameForEvent(props.event);
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    if (window.gtag) {
      window.gtag("event", "calendar_download", {
        event_category: "tour",
        event_label: props.event.venue,
        event_date: props.event.date,
      });
    }
  };

  return (
    <Show when={!props.event.isPast}>
      <details class="w-full sm:w-auto group">
        <summary
          class={triggerClass}
          aria-label={`Add ${props.event.venue} on ${props.event.dateLabel} to your calendar`}
        >
          Add to calendar
          <span class="text-xs opacity-70 transition-transform group-open:rotate-180" aria-hidden>
            ▾
          </span>
        </summary>
        <div
          class="mt-2 flex flex-col gap-2 rounded-lg border border-white/20 light:border-gray-200 bg-black/30 light:bg-gray-100/80 p-3"
          role="group"
          aria-label="Choose a calendar app"
        >
          <a
            href={googleHref()}
            target="_blank"
            rel="noopener noreferrer"
            class={optionClass}
            aria-label="Open this show in Google Calendar (new tab)"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "calendar_google_click", {
                  event_category: "tour",
                  event_label: props.event.venue,
                  event_date: props.event.date,
                });
              }
            }}
          >
            Google Calendar
          </a>
          <button
            type="button"
            class={`${optionClass} font-semibold`}
            aria-label="Download a calendar file for Apple Calendar, Outlook, or other apps"
            onClick={downloadIcs}
          >
            Download .ics file
          </button>
          <p class="text-xs text-white/60 light:text-gray-500 text-left leading-snug">
            The .ics file opens in Apple Calendar on iPhone, and in Outlook or other desktop calendars. If nothing
            happens, try Google Calendar above or subscribe to all dates from the top of the tour page.
          </p>
        </div>
      </details>
    </Show>
  );
}
