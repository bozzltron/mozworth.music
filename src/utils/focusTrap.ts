import { createEffect, onCleanup } from "solid-js";

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Traps keyboard focus within a modal container. Call when the modal is open.
 * - Tab from last element wraps to first
 * - Shift+Tab from first element wraps to last
 * - Escape calls onClose
 * - Restores focus to previous element on cleanup
 */
export function useFocusTrap(
  getContainer: () => HTMLElement | undefined,
  isOpen: () => boolean,
  onClose: () => void
): void {
  createEffect(() => {
    if (!isOpen()) return;
    const container = getContainer();
    if (!container) return;

    const prev = document.activeElement as HTMLElement | null;
    const focusable = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (first) {
      requestAnimationFrame(() => first.focus());
    }

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const active = document.activeElement;
      if (e.shiftKey) {
        if (active === first && last) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last && first) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener("keydown", handler);
    onCleanup(() => {
      container.removeEventListener("keydown", handler);
      try {
        prev?.focus();
      } catch {
        // Element may be detached
      }
    });
  });
}
