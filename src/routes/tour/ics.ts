import { compareTourEventChronological, icalEvents, isTourDatePast } from "../../data/tour";
import { buildTourFeedCalendar } from "../../utils/tourIcs";

export async function GET({ request }: { request: Request }) {
  const baseUrl = new URL(request.url).origin;
  const now = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";

  const futureEvents = [...icalEvents]
    .filter((e) => !isTourDatePast(e.date))
    .sort(compareTourEventChronological);

  const ics = buildTourFeedCalendar(futureEvents, baseUrl, now);

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="mozworth-tour.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
