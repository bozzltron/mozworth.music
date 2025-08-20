import { createSignal, onCleanup, onMount } from "solid-js";
import { photographyBackgrounds } from "../data/photography";

interface RotatingBackgroundProps {
  images?: string[];
  intervalMs?: number;
  class?: string;
  fadeMs?: number; // fade duration for crossfade
}

function preloadImage(url: string): void {
  try {
    const img = new Image();
    img.src = url;
  } catch {
    // no-op in non-browser environments
  }
}

export default function RotatingBackground(props: RotatingBackgroundProps) {
  const allImages = (props.images && props.images.length > 0)
    ? props.images
    : photographyBackgrounds;
  const intervalMs = props.intervalMs ?? 180_000; // default: 3 minutes
  const fadeMs = props.fadeMs ?? 1500; // a little slower than 1s

  const [showA, setShowA] = createSignal(true);
  // Provide SSR-friendly defaults so the first paint has a background
  const [imageAUrl, setImageAUrl] = createSignal<string>(allImages[0] ?? "");
  const [imageBUrl, setImageBUrl] = createSignal<string>(allImages[1] ?? allImages[0] ?? "");

  // Track orientation so we can "push back" portrait images a bit
  type Orientation = "portrait" | "landscape" | "square";
  const [imageAOrientation, setImageAOrientation] = createSignal<Orientation>("landscape");
  const [imageBOrientation, setImageBOrientation] = createSignal<Orientation>("landscape");
  // Cache orientations by URL so we can skip portrait images from rotation
  const orientations = new Map<string, Orientation>();

  function detectOrientation(url: string, assign: (o: Orientation) => void): void {
    try {
      const img = new Image();
      img.onload = () => {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (w === 0 || h === 0) return;
        let o: Orientation;
        if (Math.abs(w - h) < 4) o = "square";
        else if (h > w) o = "portrait";
        else o = "landscape";
        orientations.set(url, o);
        assign(o);
      };
      img.src = url;
    } catch {
      // ignore
    }
  }

  // Find the next index whose orientation is not portrait (if known). If none found, fallback to given start.
  function findNextNonPortrait(startIndex: number): number {
    if (allImages.length === 0) return startIndex;
    let attempts = 0;
    let idx = ((startIndex % allImages.length) + allImages.length) % allImages.length;
    while (attempts < allImages.length) {
      const url = allImages[idx];
      const o = orientations.get(url);
      if (o === undefined) {
        // Kick off detection for unknowns and skip for now
        detectOrientation(url, () => {});
      } else if (o !== "portrait") {
        return idx;
      }
      idx = (idx + 1) % allImages.length;
      attempts += 1;
    }
    return startIndex;
  }

  // Track indices so we know what comes next
  let currentIndex = 0;
  let nextIndex = 1;
  let timerId: number | undefined;

  // Persist across navigations within the SPA
  const STORAGE_KEY = "rotating-bg-state-v1";
  interface PersistedState {
    index: number;
    lastTick: number;
    showA: boolean;
  }

  onMount(() => {
    if (allImages.length === 0) return;
    const now = Date.now();
    let initialIndex = 0;
    let initialShowA = true;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as PersistedState;
        if (Number.isFinite(saved.index) && Number.isFinite(saved.lastTick)) {
          const ticksPassed = Math.floor((now - saved.lastTick) / intervalMs);
          initialIndex = (saved.index + Math.max(0, ticksPassed)) % allImages.length;
          initialShowA = saved.showA ?? true;
        }
      } else {
        // No saved state → randomize the starting image for variety
        initialIndex = Math.floor(Math.random() * allImages.length);
      }
    } catch {
      // ignore and fallback to defaults
    }

    // Seed indices but prefer non-portrait if known
    const preferredInitial = findNextNonPortrait(initialIndex);
    const initialNext = findNextNonPortrait(preferredInitial + 1);
    currentIndex = preferredInitial;
    nextIndex = initialNext;
    setShowA(initialShowA);

    // Seed layer URLs and orientations
    setImageAUrl(allImages[currentIndex]);
    setImageBUrl(allImages[nextIndex]);
    detectOrientation(allImages[currentIndex], setImageAOrientation);
    detectOrientation(allImages[nextIndex], setImageBOrientation);
    preloadImage(allImages[nextIndex]);
    preloadImage(allImages[(nextIndex + 1) % allImages.length]);

    // Align to the next tick boundary for smooth persistence
    const msSinceLastTick = (() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const saved = JSON.parse(raw) as PersistedState;
          return Math.max(0, now - saved.lastTick);
        }
      } catch {}
      return 0;
    })();
    const msUntilNext = msSinceLastTick > 0 ? Math.max(0, intervalMs - (msSinceLastTick % intervalMs)) : intervalMs;

    const advance = () => {
      currentIndex = nextIndex;
      let upcoming = findNextNonPortrait(nextIndex + 1);

      if (showA()) {
        setShowA(false);
        setTimeout(() => {
          setImageAUrl(allImages[upcoming]);
          detectOrientation(allImages[upcoming], setImageAOrientation);
        }, 50);
      } else {
        setShowA(true);
        setTimeout(() => {
          setImageBUrl(allImages[upcoming]);
          detectOrientation(allImages[upcoming], setImageBOrientation);
        }, 50);
      }

      nextIndex = upcoming;
      preloadImage(allImages[upcoming]);
      try {
        const toSave: PersistedState = { index: currentIndex, lastTick: Date.now(), showA: showA() };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
      } catch {}
    };

    const timeoutId = window.setTimeout(() => {
      advance();
      timerId = window.setInterval(advance, intervalMs);
    }, msUntilNext);

    // Save initial state
    try {
      const toSave: PersistedState = { index: currentIndex, lastTick: now, showA: showA() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch {}

    // Ensure we clear both timer types on cleanup
    onCleanup(() => window.clearTimeout(timeoutId));
  });

  onCleanup(() => {
    if (timerId) window.clearInterval(timerId);
  });

  const layerContainerClass = "absolute inset-0 transition-opacity will-change-[opacity] pointer-events-none";
  const bgBaseClass = "absolute inset-0 bg-center bg-no-repeat bg-fixed";

  return (
    <div class={`absolute inset-0 z-0 ${props.class ?? ""}`} aria-hidden="true">
      {/* Layer A (with blurred fill + focused image) */}
      <div
        class={layerContainerClass}
        style={{
          "transition-duration": `${fadeMs}ms`,
          opacity: showA() ? "1" : "0",
        }}
      >
        {/* Blurred fill to cover negative space, especially for portrait images */}
        <div
          class={bgBaseClass}
          style={{
            "background-image": `url('${imageAUrl()}')`,
            "background-size": "cover",
            filter: "blur(24px)",
            transform: "scale(1.08)",
            opacity: imageAOrientation() === "portrait" ? "0.9" : "0.6",
            "will-change": "transform, filter, opacity",
          }}
        />
        {/* Focused image on top */}
        <div
          class={bgBaseClass}
          style={{
            "background-image": `url('${imageAUrl()}')`,
            // For portrait images, reduce perceived zoom by sizing to viewport height
            "background-size": imageAOrientation() === "portrait" ? "auto 110%" : "cover",
          }}
        />
      </div>

      {/* Layer B (with blurred fill + focused image) */}
      <div
        class={layerContainerClass}
        style={{
          "transition-duration": `${fadeMs}ms`,
          opacity: showA() ? "0" : "1",
        }}
      >
        {/* Blurred fill */}
        <div
          class={bgBaseClass}
          style={{
            "background-image": `url('${imageBUrl()}')`,
            "background-size": "cover",
            filter: "blur(24px)",
            transform: "scale(1.08)",
            opacity: imageBOrientation() === "portrait" ? "0.9" : "0.6",
            "will-change": "transform, filter, opacity",
          }}
        />
        {/* Focused image */}
        <div
          class={bgBaseClass}
          style={{
            "background-image": `url('${imageBUrl()}')`,
            "background-size": imageBOrientation() === "portrait" ? "auto 110%" : "cover",
          }}
        />
      </div>
    </div>
  );
}


