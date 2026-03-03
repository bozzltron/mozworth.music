import { Show, createEffect, onCleanup } from "solid-js";
import { useFocusTrap } from "../utils/focusTrap";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Optional title. When provided, shows a header with close button. Ignored when variant="media". */
  title?: string;
  /** Optional aria-labelledby for the dialog. Use with titleId when title is present. */
  titleId?: string;
  /** Optional aria-describedby for the dialog. */
  describedby?: string;
  /** Max width of the panel. Default: max-w-lg. Ignored when variant="media". */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** "default" = panel with header. "media" = full-bleed, no panel, for images/video. */
  variant?: "default" | "media";
  /** Content (no wrapper - caller controls inner structure) */
  children: import("solid-js").JSX.Element;
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
};

export default function Modal(props: ModalProps) {
  let containerRef: HTMLDivElement | undefined;

  useFocusTrap(
    () => containerRef,
    () => props.isOpen,
    props.onClose
  );

  createEffect(() => {
    if (!props.isOpen) return;
    document.body.style.overflow = "hidden";
    onCleanup(() => {
      document.body.style.overflow = "";
    });
  });

  const maxWidth = props.maxWidth ?? "lg";
  const maxWidthClass = maxWidthClasses[maxWidth];
  const isMedia = props.variant === "media";

  return (
    <Show when={props.isOpen}>
      <div
        ref={(el) => (containerRef = el)}
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        {...(props.titleId && { "aria-labelledby": props.titleId })}
        {...(props.describedby && { "aria-describedby": props.describedby })}
        onClick={props.onClose}
      >
        {/* Backdrop */}
        <div
          class="absolute inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden="true"
        />
        {/* Close button - for media variant, floating */}
        {isMedia ? (
          <button
            type="button"
            onClick={props.onClose}
            class="absolute right-4 top-4 z-20 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Close preview"
          >
            <span class="text-2xl leading-none" aria-hidden="true">
              ×
            </span>
          </button>
        ) : null}
        {/* Panel - centered, scrollable (default) or minimal (media) */}
        <div
          class={
            isMedia
              ? "relative max-h-[90vh] max-w-full"
              : `relative w-full ${maxWidthClass} max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-black/5`
          }
          onClick={(e) => e.stopPropagation()}
        >
          {!isMedia && (
            <>
              <div class="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-100 bg-white px-4 py-3 sm:px-6 sm:py-4">
                {props.title ? (
                  <h2
                    id={props.titleId}
                    class="text-lg font-bold text-gray-900 sm:text-xl"
                  >
                    {props.title}
                  </h2>
                ) : (
                  <span class="flex-1" aria-hidden="true" />
                )}
                <button
                  type="button"
                  onClick={props.onClose}
                  class="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
                  aria-label={props.title ? `Close ${props.title} dialog` : "Close dialog"}
                >
                  <span class="text-2xl leading-none" aria-hidden="true">
                    ×
                  </span>
                </button>
              </div>
              <div class="p-4 sm:p-6">{props.children}</div>
            </>
          )}
          {isMedia && props.children}
        </div>
      </div>
    </Show>
  );
}
