import type { JSX } from "solid-js";
import { MOZWORTH_DEBUT_VINYL_URL } from "../data/commerce";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type BuyVinylSurface = "onDark" | "onLight";

export interface BuyVinylLinkProps {
  /** For analytics (song title, `Album: mozworth`, etc.) */
  analyticsLabel: string;
  /** Light info panels need darker teal + dark text on hover ring offset */
  surface?: BuyVinylSurface;
}

const primaryOnDark =
  "inline-block px-5 py-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black/50 w-full text-left";

const primaryOnLight =
  "inline-block px-5 py-2 rounded bg-teal-600 text-white font-semibold shadow hover:bg-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-stone-100 w-full text-left";

/** Primary CTA: self-titled debut vinyl (elasticStage). */
export default function BuyVinylLink(props: BuyVinylLinkProps): JSX.Element {
  const surface = props.surface ?? "onDark";
  return (
    <a
      href={MOZWORTH_DEBUT_VINYL_URL}
      target="_blank"
      rel="noopener noreferrer"
      class={surface === "onLight" ? primaryOnLight : primaryOnDark}
      onClick={() => {
        if (window.gtag) {
          window.gtag("event", "commerce_click", {
            event_category: "vinyl",
            event_label: props.analyticsLabel,
            destination: "elasticstage",
          });
        }
      }}
      aria-label="Buy self-titled debut album on vinyl at elasticStage (opens in new tab)"
    >
      Buy Vinyl
    </a>
  );
}
