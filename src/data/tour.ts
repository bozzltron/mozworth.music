/**
 * Tour dates data — single source of truth for /tour page and /tour.ics
 */

export interface TourLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface TourEvent {
  /** ISO date YYYY-MM-DD */
  date: string;
  /** Optional time "HH:MM" (24h) — default 20:00 when omitted */
  time?: string;
  /** Display label e.g. "Friday, April 25, 2026" */
  dateLabel: string;
  /** Venue/short title */
  venue: string;
  /** Full description (line breaks via \n) */
  details: string;
  links: TourLink[];
  isPast: boolean;
}

function event(
  date: string,
  dateLabel: string,
  venue: string,
  details: string,
  links: TourLink[],
  time?: string
): TourEvent {
  const isPast = new Date(date) < new Date();
  return { date, dateLabel, venue, details, links, isPast, time };
}

export const tourEvents: TourEvent[] = [
  // Placeholder for "Coming Soon"
  // Rendered separately on the page
  event(
    "2026-01-01",
    "2026",
    "2026 Tour Dates Coming Soon",
    "Check back for updates",
    [],
    undefined
  ),
  event(
    "2026-04-25",
    "Friday, April 25, 2026",
    "Hanover",
    "w/ Space Cushion & ItBegins\nStage Time TBD\n108 E Main St\nPflugerville, TX 78660",
    [{ label: "Bandsintown", href: "https://www.bandsintown.com/e/107888752", ariaLabel: "View event on Bandsintown (opens in new tab)" }]
  ),
  event(
    "2026-03-13",
    "Friday, March 13, 2026",
    "It's a van fest",
    "2:45pm\nBYOB Austin\nAustin, TX",
    [
      { label: "Bandsintown", href: "https://www.bandsintown.com/e/107849645", ariaLabel: "View event on Bandsintown (opens in new tab)" },
      { label: "Facebook", href: "https://www.facebook.com/share/1ALJeCufYh/", ariaLabel: "View event on Facebook (opens in new tab)" },
    ],
    "14:45"
  ),
  event(
    "2026-03-10",
    "Tuesday, March 10, 2026",
    "Shiner's Saloon",
    "7:30pm Fin Fin\n8:30pm Shrill Yell\n9:30pm mozworth\nAustin, TX",
    [{ label: "Bandsintown", href: "https://www.bandsintown.com/e/107849633", ariaLabel: "View event on Bandsintown (opens in new tab)" }],
    "19:30"
  ),
  event(
    "2026-01-04",
    "Sunday, January 4, 2026",
    "Stout Haus",
    "mozworth solo acoustic\n7:00pm\nAustin, TX",
    [
      { label: "Bandsintown", href: "https://www.bandsintown.com/e/107752868?&came_from=210&_ga=2.198202799.1431877457.1767487122-1718009698.1767487122", ariaLabel: "View event on Bandsintown (opens in new tab)" },
      { label: "Facebook", href: "https://www.facebook.com/share/1KYdDWVDrw/", ariaLabel: "View event on Facebook (opens in new tab)" },
    ],
    "19:00"
  ),
  event(
    "2025-10-11",
    "Saturday, October 11, 2025",
    "South Austin Beer Garden",
    "6:00pm\nAustin, TX",
    [
      { label: "Bandsintown", href: "https://bandsintown.com/e/107422298?came_from=297&utm_medium=web&utm_source=copy_link&utm_campaign=event_social_share", ariaLabel: "View event on Bandsintown (opens in new tab)" },
      { label: "Facebook", href: "https://www.facebook.com/share/1A8dT4SnNv/", ariaLabel: "View event on Facebook (opens in new tab)" },
    ],
    "18:00"
  ),
  event(
    "2025-08-01",
    "Friday, August 1, 2025",
    "The Sky Is Falling Single Release Party",
    "South Austin Beer Garden\n8pm - 10pm\nAustin, TX",
    [
      { label: "Bandsintown", href: "https://www.bandsintown.com/e/107046899?", ariaLabel: "View event on Bandsintown (opens in new tab)" },
      { label: "Facebook", href: "https://www.facebook.com/share/19L86HVi4U/", ariaLabel: "View event on Facebook (opens in new tab)" },
    ],
    "20:00"
  ),
  event(
    "2025-07-31",
    "Thursday, July 31, 2025",
    "Good Day Austin (TV Appearance)",
    "FOX 7 Austin (KTBC)\n9:50am Central Time\nAustin, TX",
    [{ label: "Watch", href: "https://www.fox7austin.com/video/1683875", ariaLabel: "Watch the FOX 7 Austin segment" }],
    "09:50"
  ),
  event(
    "2025-07-20",
    "Sunday, July 20, 2025",
    "mozworth Interview Airs",
    "KLBJ 93.7 FM\n7:00pm\nAustin, TX",
    [{ label: "Listen", href: "https://www.klbjfm.com/listen-live", ariaLabel: "Listen to KLBJ live" }],
    "19:00"
  ),
  event(
    "2025-06-06",
    "June 6, 2025",
    "South Austin Beer Garden",
    "9pm - 10pm\nAustin, TX",
    [
      { label: "Bandsintown", href: "https://www.bandsintown.com/e/106941100-mozworth-at-south-austin-beer-garden?came_from=251&utm_medium=web&utm_source=artist_page&utm_campaign=event" },
      { label: "Facebook", href: "https://www.facebook.com/share/1B8AZgXj5f/" },
    ],
    "21:00"
  ),
  event(
    "2025-05-16",
    "May 16, 2025",
    "Unplugged @ Brentwood Social Club",
    "4pm – 6pm\nAustin, TX",
    [
      { label: "Bandsintown", href: "https://www.bandsintown.com/e/106761310" },
      { label: "Facebook", href: "https://www.facebook.com/share/1AisQjQCHt/" },
    ],
    "16:00"
  ),
  event(
    "2025-03-09",
    "March 9, 2025",
    "Shiner's Saloon Songwriters Showcase 9pm",
    "w/ Fin Fin & Others\nAustin, TX",
    [
      { label: "Bandsintown", href: "https://www.bandsintown.com/e/106360770" },
      { label: "Facebook", href: "https://www.facebook.com/share/15zTxqmEy4/" },
    ],
    "21:00"
  ),
  event(
    "2024-12-20",
    "December 20, 2024",
    "The Meridian",
    "w/ The Somebodies\nBuda, TX",
    [
      { label: "Bandsintown", href: "https://www.bandsintown.com/e/106153715" },
      { label: "Facebook", href: "https://www.facebook.com/events/1367188184260258" },
    ]
  ),
  event(
    "2024-11-17",
    "November 17, 2024",
    "mozworth listening party",
    "Virtual",
    [{ label: "Bandsintown", href: "https://www.bandsintown.com/e/106122824-mozworth-at-live-stream?came_from=250&utm_medium=web&utm_source=artist_page&utm_campaign=event" }]
  ),
  event(
    "2024-10-25",
    "October 25, 2024",
    "Shiner's Saloon",
    "w/ Horshoes and Handgrinades\nAustin, TX",
    [{ label: "Bandsintown", href: "https://www.bandsintown.com/e/106028135-mozworth-at-shiner%27s-saloon?came_from=250&utm_medium=web&utm_source=artist_page&utm_campaign=event" }]
  ),
];

/** Events for iCal (exclude "Coming Soon" placeholder) */
export const icalEvents = tourEvents.filter((e) => e.venue !== "2026 Tour Dates Coming Soon");
