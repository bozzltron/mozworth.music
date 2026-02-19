import { For } from "solid-js";

export interface StreamingLink {
  href: string;
  alt: string;
  iconSrc: string;
  ariaLabel: string;
  onClick?: () => void;
}

export default function StreamingIcons(props: { links: StreamingLink[]; iconClass?: string }) {
  // Dynamically set grid columns for desktop based on number of links
  const gridCols = `grid-cols-${props.links.length}`;
  return (
    <>
      <div
        class={`hidden sm:grid w-full gap-4 ${gridCols}`}
        style={{ 'grid-template-columns': `repeat(${props.links.length}, minmax(0, 1fr))` }}
      >
        <For each={props.links}>{link => (
          <a
            href={link.href}
            class="player-btn flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black rounded"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            onClick={link.onClick}
          >
            <img
              src={link.iconSrc}
              alt=""
              class={props.iconClass || "h-12 w-12 sm:h-7 sm:w-7 filter invert brightness-0 hover:brightness-75 hover:drop-shadow-[0_0_8px_#00d4b4] transition-transform duration-200 hover:scale-110 hover:-rotate-3"}
              style={props.iconClass ? { filter: 'brightness(0)' } : undefined}
            />
          </a>
        )}</For>
      </div>
      {/* Mobile: grid, 2 rows of 4 icons */}
      <div class="sm:hidden grid grid-cols-4 gap-4 w-full justify-center">
        <For each={props.links}>{link => (
          <a
            href={link.href}
            class="player-btn flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black rounded"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            onClick={link.onClick}
          >
            <img
              src={link.iconSrc}
              alt=""
              class={props.iconClass || "h-12 w-12 sm:h-7 sm:w-7 filter invert brightness-0 hover:brightness-75 hover:drop-shadow-[0_0_8px_#00d4b4] transition-transform duration-200 hover:scale-110 hover:-rotate-3"}
              style={props.iconClass ? { filter: 'brightness(0)' } : undefined}
            />
          </a>
        )}</For>
      </div>
    </>
  );
} 