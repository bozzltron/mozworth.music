import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

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
        },
        devOptions: {
          enabled: false,
        },
      })
    ]
  }
});
