import type { JSX } from "solid-js";
import { MOZWORTH_DEBUT_VINYL_URL } from "../data/commerce";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export interface BuyVinylLinkProps {
  /** For analytics (song title, `Album: mozworth`, etc.) */
  analyticsLabel: string;
}

/** Outbound link to order the self-titled debut on vinyl (elasticStage). */
export default function BuyVinylLink(props: BuyVinylLinkProps): JSX.Element {
  return (
    <a
      href={MOZWORTH_DEBUT_VINYL_URL}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block px-5 py-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full text-center"
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
      Buy on Vinyl
    </a>
  );
}
