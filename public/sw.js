const CACHE_NAME = "mozworth-v1747320069723";
// const CACHE_VERSION = "20250122102846";
const urlsToCache = [
  "/",
  "/manifest.json",
  "/site.webmanifest",
  "/mozworth.webp",
  "/mozworth-debut.webp",
  "/mozworth-walking-the-cow-cover.webp",
  "/postcard_cover.webp",
  "/goodbye_colorado_cover.webp",
  "/boz4web.jpg",
  "/logo.jpg",
  "/mozworth.png",
  "/apple-touch-icon.png",
  "/favicon-32x32.png",
  "/favicon-16x16.png",
  "/bandcamp.svg",
  "/instagram.svg",
  "/youtube.svg",
  "/facebook.svg",
  "/soundcloud.svg",
  "/tiktok.svg",
  "/apple-music.svg",
  "/amazon-music.svg",
  "/tidal.svg",
  "/bluesky.svg",
  "/bandsintown.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (
            cacheName.startsWith("balanced-scale-media-") &&
            cacheName !== CACHE_NAME
          ) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Check if this is an HTML request
  const isHTML = event.request.headers.get("accept")?.includes("text/html");

  if (isHTML) {
    // Network-first strategy for HTML files
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Clone the response before caching it
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        })
        .catch(() => {
          // If network fails, try the cache
          return caches.match(event.request);
        })
    );
    return;
  }

  // Stale-while-revalidate for all other assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          // Update cache with fresh content
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If network fetch fails, return null to fall back to cache
          return null;
        });

      // Return cached response immediately, but update cache in background
      return Promise.resolve(cachedResponse).then((response) => {
        // Return cached response if we have it
        if (response) {
          // Trigger fetch promise in background to update cache
          event.waitUntil(fetchPromise);
          return response;
        }
        // If no cached response, wait for the fetch to complete
        return fetchPromise;
      });
    })
  );
});
