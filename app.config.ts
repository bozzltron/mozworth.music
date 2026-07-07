import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// Bumped by scripts/update-sw-cache.js — do not edit by hand.
// Referenced in the VitePWA workbox cacheNames below so any bump
// invalidates the precache and runtime caches on the next build.
const SW_REVISION = 'initial';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: false, // keep using public/manifest.json
        includeAssets: [
          'favicon.ico',
          'apple-touch-icon.png',
          'android-chrome-192x192.png',
          'android-chrome-512x512.png'
        ],
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,webp,ico,jpg,jpeg}'],
          navigateFallback: '/',
          cleanupOutdatedCaches: true,
          cacheId: `mozworth-${SW_REVISION}`,
        },
        devOptions: {
          enabled: false,
        },
      })
    ],
    server: {
      hmr: {
        overlay: true, // Show error overlay in browser
      },
      watch: {
        // Ensure file watching is enabled
        usePolling: false, // Set to true if you have issues with file watching
      },
    },
  }
});
