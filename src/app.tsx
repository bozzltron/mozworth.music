import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount, ErrorBoundary } from "solid-js";
import "./app.css";

export default function App() {
  onMount(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  });
  return (
    <ErrorBoundary fallback={err => { console.error("Global error boundary:", err); return null; }}>
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
