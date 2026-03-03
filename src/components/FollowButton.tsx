import { createSignal, For } from "solid-js";
import Modal from "./Modal";
import { followLinks, type FollowLink } from "../data/followLinks";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global { interface Window { gtag?: (...args: any[]) => void } }

interface FollowButtonProps {
  /** Button styling - light text for dark backgrounds, dark for light */
  variant?: "light" | "dark";
  /** Optional song name for analytics */
  songTitle?: string;
  /** Compact style for nav (no margin, rounded-full) */
  compact?: boolean;
  /** Omit top margin (use when parent has flex gap) */
  noMargin?: boolean;
}

function FollowLinkItem(props: { link: FollowLink; songTitle?: string }) {
  const handleClick = () => {
    if (window.gtag) {
      window.gtag("event", "follow_click", {
        event_category: "follow",
        event_label: props.link.label,
        ...(props.songTitle && { song: props.songTitle }),
      });
    }
  };

  const isExternal = props.link.href.startsWith("http");
  return (
    <a
      href={props.link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-gray-100"
      aria-label={props.link.ariaLabel}
      onClick={handleClick}
    >
      <img
        src={props.link.iconSrc}
        alt=""
        class="h-6 w-6 shrink-0 opacity-80"
      />
      <span class="text-sm font-medium text-gray-900">{props.link.label}</span>
    </a>
  );
}

export default function FollowButton(props: FollowButtonProps) {
  const [isOpen, setIsOpen] = createSignal(false);
  const variant = props.variant ?? "dark";

  const textAlign = props.compact ? "text-center" : "text-left";
  const baseLight = `inline-block w-full px-5 py-2 ${textAlign} font-semibold text-white shadow-sm transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 border-2 border-transparent border-white bg-transparent`;
  const baseDark = `inline-block w-full px-5 py-2 ${textAlign} font-semibold text-black shadow-sm transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 border-2 border-black bg-transparent`;
  const rounded = props.compact ? "rounded-full" : "rounded";
  const margin = props.compact || props.noMargin ? "" : "mt-2 ";
  const buttonClass =
    variant === "light"
      ? `${margin}${baseLight} ${rounded}`
      : `${margin}${baseDark} ${rounded}`;

  const handleOpen = () => {
    setIsOpen(true);
    if (window.gtag) {
      window.gtag("event", "follow_modal_open", {
        event_category: "engagement",
        event_label: "Follow mozworth",
        ...(props.songTitle && { song: props.songTitle }),
      });
    }
  };

  const wrapperClass = props.compact ? "w-full" : props.noMargin ? "w-full" : "mt-2 w-full";
  return (
    <div class={wrapperClass}>
      <noscript>
        <p class="mb-1 text-sm font-semibold text-gray-700">
          Follow mozworth:
        </p>
        <div class="flex flex-wrap gap-2 text-sm">
          <For each={[followLinks.streaming[0], followLinks.social[0], followLinks.newsletter[0]]}>
            {(link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                class="text-teal-600 underline hover:text-teal-700"
              >
                {link.label}
              </a>
            )}
          </For>
          <a href="/support" class="text-teal-600 underline hover:text-teal-700">
            All platforms
          </a>
        </div>
      </noscript>
      <button
        type="button"
        class={buttonClass}
        onClick={handleOpen}
        aria-haspopup="dialog"
        aria-expanded={isOpen()}
        aria-label="Follow mozworth on streaming and social platforms"
      >
        Follow
      </button>
      <Modal
        isOpen={isOpen()}
        onClose={() => setIsOpen(false)}
        title="Follow mozworth"
        titleId="follow-modal-title"
        describedby="follow-modal-desc"
        maxWidth="2xl"
      >
        <p id="follow-modal-desc" class="sr-only">
          Choose where to follow mozworth for updates on new releases and tour dates.
        </p>
        <div class="space-y-4">
          <p class="text-sm text-gray-600">
            Get updates on new releases, tour dates, and more.
          </p>
          <nav aria-label="Newsletter and updates">
            <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Newsletter
            </h3>
            <div>
              <For each={followLinks.newsletter}>
                {(link) => (
                  <FollowLinkItem link={link} songTitle={props.songTitle} />
                )}
              </For>
            </div>
          </nav>
          <nav aria-label="Streaming platforms">
            <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Streaming
            </h3>
            <div class="grid grid-cols-2 gap-1 sm:grid-cols-4">
              <For each={followLinks.streaming}>
                {(link) => (
                  <FollowLinkItem link={link} songTitle={props.songTitle} />
                )}
              </For>
            </div>
          </nav>
          <nav aria-label="Social platforms">
            <h3 class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Social
            </h3>
            <div class="grid grid-cols-2 gap-1 sm:grid-cols-4">
              <For each={followLinks.social}>
                {(link) => (
                  <FollowLinkItem link={link} songTitle={props.songTitle} />
                )}
              </For>
            </div>
          </nav>
        </div>
      </Modal>
    </div>
  );
}
