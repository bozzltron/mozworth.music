import { icalEvents } from "../data/tour";

/** Escape iCal text (commas, semicolons, backslashes) */
function escapeIcal(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

/** Format date for iCal DTSTART/DTEND. Uses America/Chicago for Austin. */
function toIcalDateTime(date: string, time?: string): string {
  const hour = time ? time.slice(0, 2) : "20";
  const min = time ? time.slice(3, 5) : "00";
  return `${date.replace(/-/g, "")}T${hour}${min}00`;
}

function toIcalDate(date: string): string {
  return date.replace(/-/g, "");
}

export async function GET({ request }: { request: Request }) {
  const baseUrl = new URL(request.url).origin;
  const now = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";

  const events = icalEvents.map((e) => {
    const uid = `mozworth-${e.date}-${e.venue.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}@mozworth.music`;
    const url = e.links[0]?.href || `${baseUrl}/tour`;
    const hasTime = !!e.time;
    const dtStart = hasTime ? toIcalDateTime(e.date, e.time) : toIcalDate(e.date);
    // For timed events, end 2 hours later; for all-day, end is next day (exclusive)
    const dtEnd =
      hasTime && e.time
        ? (() => {
            const [h, m] = e.time.split(":").map(Number);
            const endH = (h + 2) % 24;
            return `${e.date.replace(/-/g, "")}T${String(endH).padStart(2, "0")}${String(m).padStart(2, "0")}00`;
          })()
        : (() => {
            const [y, mo, d] = e.date.split("-").map(Number);
            const next = new Date(y, mo - 1, d + 1);
            return next.toISOString().slice(0, 10).replace(/-/g, "");
          })();

    const desc = escapeIcal(`mozworth at ${e.venue}\n\n${e.details}\n\nTickets: ${url}`);
    const loc =
      e.details
        .split("\n")
        .find((l) => /[A-Z][a-z]+,\s*TX|Austin|Virtual/i.test(l)) || "Austin, TX";

    return [
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${now}`,
      hasTime ? `DTSTART;TZID=America/Chicago:${dtStart}` : `DTSTART;VALUE=DATE:${dtStart}`,
      hasTime ? `DTEND;TZID=America/Chicago:${dtEnd}` : `DTEND;VALUE=DATE:${dtEnd}`,
      `SUMMARY:mozworth — ${e.venue}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:${escapeIcal(loc)}`,
      `URL:${url}`,
      "END:VEVENT",
    ].join("\r\n");
  });

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//mozworth.music//Tour//EN",
    "CALSCALE:GREGORIAN",
    "X-WR-CALNAME:mozworth Tour Dates",
    "X-WR-TIMEZONE:America/Chicago",
    ...events,
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="mozworth-tour.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
