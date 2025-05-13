import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount } from "solid-js";
import "./app.css";

export default function App() {
  onMount(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  });
  return (
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
  );
}
