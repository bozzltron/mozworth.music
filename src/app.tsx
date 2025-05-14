import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount, ErrorBoundary } from "solid-js";
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
  onMount(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  });
  return (
    <ErrorBoundary fallback={GlobalErrorFallback}>
      <Router
        root={props => (
          <>
            <script innerHTML={`
              if (location.hostname === "mozworth.music") {
                (function(){
                  var gtagScript = document.createElement('script');
                  gtagScript.async = true;
                  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-HCSKGBDXDT";
                  document.head.appendChild(gtagScript);
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('js', new Date());
                  gtag('config', 'G-HCSKGBDXDT');
                })();
              }
            `} />
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </ErrorBoundary>
  );
}
