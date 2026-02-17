import { JSX } from "solid-js";

/**
 * Callout - Prominent content box for highlights and announcements.
 *
 * Canonical style: border-2 border-teal-500, bg-teal-500/10, rounded-xl
 * Use for: "Up next" show on homepage, "Check back" placeholder on tour, etc.
 *
 * @see .cursorrules Design System > Callout Component
 */
const CALLOUT_BASE =
  "border-2 border-teal-500 bg-teal-500/10 rounded-xl p-6 transition-all duration-200";

interface CalloutProps {
  children: JSX.Element;
  /** When provided, renders as anchor with hover styles */
  href?: string;
  /** Additional classes (merged with base) */
  class?: string;
  /** Click handler (e.g. for analytics) */
  onClick?: (e: MouseEvent) => void;
}

export default function Callout(props: CalloutProps): JSX.Element {
  const baseClass = `${CALLOUT_BASE} ${props.class ?? ""}`;
  const hoverClass = "hover:bg-teal-500/20 hover:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black";

  if (props.href) {
    return (
      <a
        href={props.href}
        class={`${baseClass} ${hoverClass} block w-full text-white font-semibold text-center text-lg`}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  }

  return <div class={baseClass}>{props.children}</div>;
}
