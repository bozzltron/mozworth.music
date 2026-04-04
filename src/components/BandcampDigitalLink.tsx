import type { JSX } from "solid-js";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type BandcampDigitalSurface = "onDark" | "onLight";

export interface BandcampDigitalLinkProps {
  href: string;
  /** For analytics (song title, album label, etc.) */
  analyticsLabel: string;
  /** Johnston covers use free label; same Bandcamp track URL */
  pricing: "paid" | "free";
  /** Light article background (e.g. Story of an Artist) vs dark song panels */
  surface?: BandcampDigitalSurface;
}

const base =
  "inline-block px-5 py-2 rounded font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 w-full text-left";

const surfaceClasses: Record<BandcampDigitalSurface, string> = {
  onDark:
    "bg-transparent text-white border border-white/80 hover:bg-white hover:text-black focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50",
  onLight:
    "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white focus:ring-black focus:ring-offset-2 focus:ring-offset-stone-100",
};

/** Secondary CTA: Bandcamp digital purchase or free download (after Buy Vinyl). */
export default function BandcampDigitalLink(props: BandcampDigitalLinkProps): JSX.Element {
  const surface = props.surface ?? "onDark";
  const label = props.pricing === "free" ? "Free Download" : "Buy Digital";
  const ariaLabel =
    props.pricing === "free"
      ? `Free download on Bandcamp — ${props.analyticsLabel} (opens in new tab)`
      : `Buy digital on Bandcamp — ${props.analyticsLabel} (opens in new tab)`;

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      class={`${base} ${surfaceClasses[surface]}`}
      onClick={() => {
        if (window.gtag) {
          window.gtag("event", "commerce_click", {
            event_category: "bandcamp",
            event_label: props.analyticsLabel,
            pricing: props.pricing,
          });
        }
      }}
      aria-label={ariaLabel}
    >
      {label}
    </a>
  );
}
