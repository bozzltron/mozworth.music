import RotatingBackground from "../components/RotatingBackground";
import { StandardMetadata } from "../utils/metadata";

export default function Music() {
  return (
    <>
      <StandardMetadata
        title="Music | mozworth"
        description="Explore the complete music catalog of mozworth: albums, singles, and releases. New music coming January 22, 2026!"
        url="https://mozworth.music/music/"
        type="music.albums"
        modifiedDate="2025-10-28"
      />
      
      <div class="flex flex-col min-h-screen">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50">Skip to main content</a>
        <main id="main-content" class="flex-1 flex items-center justify-center relative bg-black">
          {/* Background image */}
          {/* Rotating photography backgrounds */}
          <RotatingBackground />
          {/* Main content */}
          <div class="relative container mx-0 md:mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-4 md:rounded-[10px] bg-black/70">
            <h1 class="text-3xl font-bold mb-8 text-center">Music</h1>
            <section aria-label="Music releases" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
              {/* New Release Coming Soon */}
              <div class="release group bg-gradient-to-br from-teal-900/30 to-purple-900/30 border-2 border-teal-400/50 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/50 w-full mx-auto relative overflow-hidden" aria-label="New release coming January 22, 2026">
                <div class="absolute top-2 right-2 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  COMING SOON
                </div>
                <div class="w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-900 mb-4 rounded shadow-lg flex items-center justify-center relative overflow-hidden group-hover:shadow-teal-400/50 transition-shadow duration-200">
                  <div class="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 animate-pulse" />
                  <div class="text-6xl opacity-30">?</div>
                </div>
                <h2 class="text-xl font-bold mb-2 text-teal-300">New Release</h2>
                <p class="text-white/90 mb-1 font-semibold">January 22, 2026</p>
                <p class="text-white/70 text-sm mb-4 italic">Something new is on the way...</p>
              </div>
              {/* Sandpiper (Upcoming) */}
              <a href="/songs/sandpiper" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'music', event_label: 'Sandpiper', destination: '/songs/sandpiper' }); }} aria-label="Sandpiper - Single releasing September 15, 2025">
                <img src="/sandpiper.webp" alt="Sandpiper single cover featuring watercolor artwork and coastal hues" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">Sandpiper</h2>
                <p class="text-white/70 mb-1">September 15, 2025</p>
                <p class="text-white/60 text-sm mb-4">"A spectacular alternative jam that's timeless and truly absorbing throughout." – Plastic Magazine</p>
              </a>
              {/* The Sky Is Falling */}
              <a href="/songs/the-sky-is-falling" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'music', event_label: 'The Sky Is Falling', destination: '/songs/the-sky-is-falling' }); }} aria-label="The Sky Is Falling - Single released July 15, 2025">
                <img src="/the_sky_is_falling.webp" alt="The Sky Is Falling single cover showing a dramatic stormy sky" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">The Sky Is Falling</h2>
                <p class="text-white/70 mb-1">July 15, 2025</p>
                <p class="text-white/60 text-sm mb-4">“An absolutely essential document of our times.” – The Big Takeover</p>
              </a>
              {/* Walking The Cow */}
              <a href="/songs/walking-the-cow" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full  mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'music', event_label: 'Walking The Cow', destination: '/songs/walking-the-cow' }); }} aria-label="Walking The Cow - Cover song released January 22, 2025">
                <img src="/mozworth-walking-the-cow-cover.webp" alt="Walking The Cow cover featuring artistic cow imagery in honor of Daniel Johnston" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">Walking The Cow</h2>
                <p class="text-white/70 mb-1">January 22, 2025</p>
                <p class="text-white/60 text-sm mb-4">A cover of Daniel Johnston's 'Walking The Cow' released on Daniel's birthday, which is also celebrated in Austin and elsewhere as 'Hi, How Are You Day'!</p>
              </a>
              {/* Self-titled Album */}
              <a href="/albums/mozworth" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full  mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'music', event_label: 'mozworth', destination: '/albums/mozworth' }); }} aria-label="mozworth - Debut album released November 15, 2024">
                <img src="/mozworth-debut.webp" alt="mozworth debut album cover featuring artist's portrait in moody lighting" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">mozworth</h2>
                <p class="text-white/70 mb-1">November 15, 2024</p>
                <p class="text-white/60 text-sm mb-4">Six songs that form the debut of mozworth.</p>
              </a>
              {/* Goodbye Colorado */}
              <a href="/songs/goodbye-colorado" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full  mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'music', event_label: 'Goodbye Colorado', destination: '/songs/goodbye-colorado' }); }} aria-label="Goodbye Colorado - Single released October 9, 2024">
                <img src="/goodbye_colorado_cover.webp" alt="Goodbye Colorado single cover showing Colorado mountain landscape at sunset" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">Goodbye Colorado</h2>
                <p class="text-white/70 mb-1">October 9, 2024</p>
                <p class="text-white/60 text-sm mb-4">The second single released in anticipation of the mozworth debut.</p>
              </a>
              {/* Postcard */}
              <a href="/songs/postcard" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'music', event_label: 'Postcard', destination: '/songs/postcard' }); }} aria-label="Postcard - Single released September 12, 2024">
                <img src="/postcard_cover.webp" alt="Postcard single cover featuring vintage postcard design with nostalgic imagery" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">Postcard</h2>
                <p class="text-white/70 mb-1">September 12, 2024</p>
                <p class="text-white/60 text-sm mb-4">The first single in anticipation for the mozworth debut. Premiered by KUTX as Song of the Day</p>
              </a>
            </section>
          </div>
        </main>
        <footer class="w-full text-center text-xs text-gray-400 py-3 border-t border-white/10 bg-black/70" role="contentinfo">
          &copy; {new Date().getFullYear()} mozworth. All rights reserved.
          <nav aria-label="Footer navigation" class="inline ml-2">
            <a href="/" class="text-teal-300 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 mx-1">Home</a>
          </nav>
        </footer>
      </div>
    </>
  );
}