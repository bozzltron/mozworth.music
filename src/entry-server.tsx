// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="application-name" content="mozworth" />
          <meta name="apple-mobile-web-app-title" content="mozworth" />
          <script innerHTML={`
            (function(){
              var allowedHosts = ["mozworth.music"]; // add more production hosts if needed
              if (!allowedHosts.includes(location.hostname)) return;
              var gtagScript = document.createElement('script');
              gtagScript.async = true;
              gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-HCSKGBDXDT';
              document.head.appendChild(gtagScript);
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-HCSKGBDXDT', { anonymize_ip: true });
            })();
          `} />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
