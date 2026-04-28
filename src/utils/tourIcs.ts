/**
 * Shared iCalendar (RFC 5545) helpers for tour events — used by /tour/ics and AddToCalendar.
 * Times use TZID=America/Chicago to match Austin-area shows.
 */

import type { TourEvent } from "../data/tour";

/** Escape iCal TEXT (commas, semicolons, backslashes, newlines) */
export function escapeIcal(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

/** yyyymmddTHHmmss for DTSTART/DTEND with TZID */
export function toIcalDateTimeCompact(date: string, time?: string): string {
  const hour = time ? time.slice(0, 2) : "20";
  const min = time ? time.slice(3, 5) : "00";
  return `${date.replace(/-/g, "")}T${hour}${min}00`;
}

export function toIcalDateCompact(date: string): string {
  return date.replace(/-/g, "");
}

/** Calendar date YYYY-MM-DD plus whole-day delta (UTC date math; no TZ shift). */
export function addCalendarDays(dateIso: string, deltaDays: number): string {
  const [y, mo, d] = dateIso.split("-").map(Number);
  const ref = new Date(Date.UTC(y, mo - 1, d + deltaDays));
  const yy = ref.getUTCFullYear();
  const mm = String(ref.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(ref.getUTCDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

/**
 * End instant as compact local wall time +2h from start (same semantics as feed).
 * Correctly rolls past midnight.
 */
export function tourEventEndCompact(date: string, timeHm: string, durationHours: number): string {
  const [h, m] = timeHm.split(":").map(Number);
  let totalMinutes = h * 60 + m + durationHours * 60;
  const extraDays = Math.floor(totalMinutes / (24 * 60));
  totalMinutes = ((totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60);
  const eh = Math.floor(totalMinutes / 60);
  const em = totalMinutes % 60;
  const endDate = addCalendarDays(date, extraDays);
  return `${endDate.replace(/-/g, "")}T${String(eh).padStart(2, "0")}${String(em).padStart(2, "0")}00`;
}

export function tourEventUid(event: TourEvent): string {
  const slug = event.venue
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return `mozworth-${event.date}-${slug}@mozworth.music`;
}

export function primaryEventUrl(event: TourEvent, baseUrl: string): string {
  return event.links[0]?.href ?? `${baseUrl.replace(/\/$/, "")}/tour`;
}

export function tourEventLocationLine(event: TourEvent): string {
  return (
    event.address ??
    event.details
      .split("\n")
      .find((l) => /[A-Z][a-z]+,\s*TX|Austin|Virtual|FOX|KLBJ|Menchaca|Congress|Pflugerville|Buda|IH 35/i.test(l)) ??
    "Austin, TX"
  );
}

export function buildTourEventVEvent(event: TourEvent, baseUrl: string, dtStamp: string): string {
  const uid = tourEventUid(event);
  const url = primaryEventUrl(event, baseUrl);
  const hasTime = !!event.time;
  const dtStart = hasTime ? toIcalDateTimeCompact(event.date, event.time) : toIcalDateCompact(event.date);
  const dtEnd = hasTime && event.time
    ? tourEventEndCompact(event.date, event.time, 2)
    : addCalendarDays(event.date, 1).replace(/-/g, "");

  const desc = escapeIcal(`mozworth at ${event.venue}\n\n${event.details}\n\nTickets: ${url}`);
  const loc = escapeIcal(tourEventLocationLine(event));
  const summary = escapeIcal(`mozworth — ${event.venue}`);

  return [
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    hasTime ? `DTSTART;TZID=America/Chicago:${dtStart}` : `DTSTART;VALUE=DATE:${dtStart}`,
    hasTime ? `DTEND;TZID=America/Chicago:${dtEnd}` : `DTEND;VALUE=DATE:${dtEnd}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${desc}`,
    `LOCATION:${loc}`,
    `URL:${url}`,
    "END:VEVENT",
  ].join("\r\n");
}

export function wrapVCalendar(veventBlocks: readonly string[], calName: string): string {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//mozworth.music//Tour//EN",
    "CALSCALE:GREGORIAN",
    `X-WR-CALNAME:${escapeIcal(calName)}`,
    "X-WR-TIMEZONE:America/Chicago",
    ...veventBlocks,
    "END:VCALENDAR",
  ].join("\r\n");
}

export function buildTourFeedCalendar(events: readonly TourEvent[], baseUrl: string, dtStamp: string): string {
  const blocks = events.map((e) => buildTourEventVEvent(e, baseUrl, dtStamp));
  return wrapVCalendar(blocks, "mozworth Tour Dates");
}

export function buildSingleTourEventCalendar(event: TourEvent, baseUrl: string, dtStamp?: string): string {
  const stamp = dtStamp ?? new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const block = buildTourEventVEvent(event, baseUrl, stamp);
  return wrapVCalendar([block], `mozworth — ${event.venue}`);
}

/**
 * Google Calendar “create event” URL. Uses ctz=America/Chicago so wall times match the .ics feed.
 * @see https://support.google.com/calendar/thread/81344786
 */
export function googleCalendarTemplateUrl(event: TourEvent, baseUrl: string): string {
  const primary = primaryEventUrl(event, baseUrl);
  const text = `mozworth — ${event.venue}`;
  const details = `mozworth at ${event.venue}\n\n${event.details}\n\n${primary}`;
  const location = tourEventLocationLine(event);

  let datesParam: string;
  if (event.time) {
    const start = toIcalDateTimeCompact(event.date, event.time);
    const end = tourEventEndCompact(event.date, event.time, 2);
    datesParam = `${start}/${end}`;
  } else {
    const endDay = addCalendarDays(event.date, 1).replace(/-/g, "");
    datesParam = `${toIcalDateCompact(event.date)}/${endDay}`;
  }

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text,
    dates: datesParam,
    details,
    location,
    ctz: "America/Chicago",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function icsFilenameForEvent(event: TourEvent): string {
  const slug = event.venue
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  return `mozworth-${event.date}${slug ? `-${slug}` : ""}.ics`;
}
