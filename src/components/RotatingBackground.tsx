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

  function detectOrientation(url: string, assign: (o: Orientation) => void): void {
    try {
      const img = new Image();
      img.onload = () => {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (w === 0 || h === 0) return;
        if (Math.abs(w - h) < 4) assign("square");
        else if (h > w) assign("portrait");
        else assign("landscape");
      };
      img.src = url;
    } catch {
      // ignore
    }
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

    const initialNext = (initialIndex + 1) % allImages.length;
    currentIndex = initialIndex;
    nextIndex = initialNext;
    setShowA(initialShowA);

    // Seed layer URLs and orientations
    setImageAUrl(allImages[initialIndex]);
    setImageBUrl(allImages[initialNext]);
    detectOrientation(allImages[initialIndex], setImageAOrientation);
    detectOrientation(allImages[initialNext], setImageBOrientation);
    preloadImage(allImages[initialNext]);
    preloadImage(allImages[(initialNext + 1) % allImages.length]);

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
      const upcoming = (nextIndex + 1) % allImages.length;

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

  const baseLayerClass = "absolute inset-0 bg-center bg-no-repeat bg-fixed transition-opacity duration-1000 will-change-[opacity] pointer-events-none";

  return (
    <div class={`absolute inset-0 z-0 ${props.class ?? ""}`} aria-hidden="true">
      <div
        class={baseLayerClass}
        style={{
          "background-image": `url('${imageAUrl()}')`,
          // For portrait images, reduce perceived zoom by sizing to viewport height
          "background-size": imageAOrientation() === "portrait" ? "auto 110%" : "cover",
          "transition-duration": `${fadeMs}ms`,
          opacity: showA() ? "1" : "0",
        }}
      />
      <div
        class={baseLayerClass}
        style={{
          "background-image": `url('${imageBUrl()}')`,
          "background-size": imageBOrientation() === "portrait" ? "auto 110%" : "cover",
          "transition-duration": `${fadeMs}ms`,
          opacity: showA() ? "0" : "1",
        }}
      />
    </div>
  );
}


