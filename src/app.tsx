import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount, ErrorBoundary, createSignal } from "solid-js";
import { registerSW } from 'virtual:pwa-register';
import "./app.css";

function GlobalErrorFallback(err: unknown) {
  console.error("Global error boundary:", err);
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-black">
      <a href="/" aria-label="Go to home page">
        <img src="/logo.jpg" alt="mozworth logo" class="w-64 h-64 object-contain mb-8 focus:outline-none focus:ring-4 focus:ring-teal-400 rounded transition-shadow" />
      </a>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Something went wrong. Stay calm and refresh.</h2>
      <blockquote class="text-xl md:text-2xl text-white italic text-center max-w-xl">
        "My worries faiding. Time is slowing."
        <a
          href="/songs/the-observer"
          class="block mt-2 text-base not-italic text-teal-300 hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
        >
          — The Observer
        </a>
      </blockquote>
      <button
        class="mt-8 px-6 py-3 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 text-lg"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
}

export default function App() {
  const [updateReady, setUpdateReady] = createSignal(false);
  const [offlineReady, setOfflineReady] = createSignal(false);
  const [showLaunchSplash, setShowLaunchSplash] = createSignal(true);
  let doUpdate: ((reload?: boolean) => void) | undefined;

  onMount(() => {
    // Let VitePWA handle service worker generation/registration and surface updates
    doUpdate = registerSW({
      immediate: true,
      onNeedRefresh() {
        setUpdateReady(true);
      },
      onOfflineReady() {
        setOfflineReady(true);
        setTimeout(() => setOfflineReady(false), 2500);
      }
    });

    // Hide the launch overlay once the page is fully loaded, with a small delay
    const hide = () => setShowLaunchSplash(false);
    if (document.readyState === 'complete') {
      setTimeout(hide, 200);
    } else {
      window.addEventListener('load', () => setTimeout(hide, 200), { once: true });
    }
    // Fallback in case load event is delayed
    setTimeout(hide, 1800);
  });
  return (
    <ErrorBoundary fallback={GlobalErrorFallback}>
      <Router
        root={props => (
          <>
            {/* In-app launch overlay splash */}
            {showLaunchSplash() && (
              <div class="fixed inset-0 z-50 bg-black flex items-center justify-center">
                <img src="/logo.jpg" alt="mozworth logo" class="w-[52vw] max-w-[300px] h-auto object-contain" />
              </div>
            )}
            <Suspense>{props.children}</Suspense>
            {offlineReady() && (
              <div class="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 rounded-lg bg-black/80 border border-white/20 px-4 py-2 text-sm text-white shadow-lg">
                App is ready to work offline
              </div>
            )}
            {updateReady() && (
              <div class="fixed bottom-0 left-0 right-0 z-40 bg-black/90 border-t border-white/20 text-white">
                <div class="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between gap-3">
                  <span class="text-sm">A new version is available.</span>
                  <div class="flex items-center gap-2">
                    <button
                      class="px-3 py-1.5 rounded bg-teal-500 text-white text-sm font-medium hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      onClick={() => { setUpdateReady(false); doUpdate && doUpdate(true); }}
                    >
                      Reload
                    </button>
                    <button
                      class="px-3 py-1.5 rounded border border-white/30 text-white/90 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                      onClick={() => setUpdateReady(false)}
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </ErrorBoundary>
  );
}
