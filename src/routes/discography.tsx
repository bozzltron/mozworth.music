import GlobalFooter from "../components/GlobalFooter";
import { A } from "@solidjs/router";

import RotatingBackground from "../components/RotatingBackground";
import { MOZWORTH_DEBUT_VINYL_URL } from "../data/commerce";
import { StandardMetadata } from "../utils/metadata";

export default function Discography() {
  return (
    <>
      <StandardMetadata
        title="Discography | mozworth"
        description="Explore the full discography of mozworth: the self-titled debut album (2024), singles, and covers from the Austin-based indie rock band."
        url="https://mozworth.music/discography"
        type="music.albums"
        keywords="mozworth, discography, albums, singles, indie rock, Austin"
        author="mozworth"
        modifiedDate="2025-06-17"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          "name": "mozworth",
          "url": "https://mozworth.music",
          "image": "https://mozworth.music/mozworth-debut.webp",
          "description": "Austin-based indie rock and alternative rock band",
          "album": [
            {
              "@type": "MusicAlbum",
              "name": "mozworth",
              "datePublished": "2024-11-15",
              "url": "https://mozworth.music/albums/mozworth"
            }
          ]
        }}
      />
      <div class="flex flex-col min-h-screen">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50">Skip to main content</a>
        <main id="main-content" class="flex-1 flex items-center justify-center relative bg-black light:bg-stone-100">
          {/* Background image */}
          <RotatingBackground />
          {/* Main content */}
          <div class="relative container mx-0 md:mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-4 md:rounded-[10px] bg-black/70 light:bg-white/90 text-white light:text-gray-900">
            <h1 class="text-3xl font-bold mb-8 text-center">Discography</h1>
            <section aria-label="Discography releases" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
              {/* The Sky Is Falling */}
              <A href="/songs/the-sky-is-falling" class="release group bg-black/50 light:bg-white/80 border border-white/10 light:border-gray-200 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 light:hover:shadow-teal-500/20 w-full mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'The Sky Is Falling', destination: '/songs/the-sky-is-falling' }); }} aria-label="The Sky Is Falling - Single released July 15, 2025">
                <img src="/the_sky_is_falling.webp" alt="The Sky Is Falling single cover showing a dramatic stormy sky" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 light:group-hover:text-teal-600 transition-colors">The Sky Is Falling</h2>
                <p class="text-white/70 light:text-gray-600 mb-1">July 15, 2025</p>
                <p class="text-white/60 light:text-gray-500 text-sm mb-4">The first of two summer singles in 2025.</p>
              </A>
              {/* Walking The Cow */}
              <A href="/songs/walking-the-cow" class="release group bg-black/50 light:bg-white/80 border border-white/10 light:border-gray-200 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 light:hover:shadow-teal-500/20 w-full  mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'Walking The Cow', destination: '/songs/walking-the-cow' }); }} aria-label="Walking The Cow - Cover song released January 22, 2025">
                <img src="/mozworth-walking-the-cow-cover.webp" alt="Walking The Cow cover featuring artistic cow imagery in honor of Daniel Johnston" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 light:group-hover:text-teal-600 transition-colors">Walking The Cow</h2>
                <p class="text-white/70 light:text-gray-600 mb-1">January 22, 2025</p>
                <p class="text-white/60 light:text-gray-500 text-sm mb-4">A cover of Daniel Johnston's 'Walking The Cow' released on Daniel's birthday, which is also celebrated in Austin and elsewhere as 'Hi, How Are You Day'!</p>
              </A>
              {/* Self-titled Album */}
              <div class="release group bg-black/50 light:bg-white/80 border border-white/10 light:border-gray-200 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 light:hover:shadow-teal-500/20 w-full mx-auto">
                <A href="/albums/mozworth" class="flex flex-col items-center text-center w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'mozworth', destination: '/albums/mozworth' }); }} aria-label="mozworth - Debut album released November 15, 2024">
                  <img src="/mozworth-debut.webp" alt="mozworth debut album cover featuring artist's portrait in moody lighting" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                  <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 light:group-hover:text-teal-600 transition-colors">mozworth</h2>
                  <p class="text-white/70 light:text-gray-600 mb-1">November 15, 2024</p>
                  <p class="text-white/60 light:text-gray-500 text-sm mb-1">Six songs that form the debut of mozworth.</p>
                </A>
                <a href={MOZWORTH_DEBUT_VINYL_URL} target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-teal-300 light:text-teal-600 hover:underline mb-1 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded" onClick={() => { if (window.gtag) window.gtag('event', 'commerce_click', { event_category: 'vinyl', event_label: 'discography_debut_card', destination: 'elasticstage' }); }} aria-label="Buy debut album on vinyl at elasticStage (opens in new tab)">Buy Vinyl</a>
              </div>
              {/* Goodbye Colorado */}
              <A href="/songs/goodbye-colorado" class="release group bg-black/50 light:bg-white/80 border border-white/10 light:border-gray-200 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 light:hover:shadow-teal-500/20 w-full  mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'Goodbye Colorado', destination: '/songs/goodbye-colorado' }); }} aria-label="Goodbye Colorado - Single released October 9, 2024">
                <img src="/goodbye_colorado_cover.webp" alt="Goodbye Colorado single cover showing Colorado mountain landscape at sunset" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 light:group-hover:text-teal-600 transition-colors">Goodbye Colorado</h2>
                <p class="text-white/70 light:text-gray-600 mb-1">October 9, 2024</p>
                <p class="text-white/60 light:text-gray-500 text-sm mb-4">The second single released in anticipation of the mozworth debut.</p>
              </A>
              {/* Postcard */}
              <A href="/songs/postcard" class="release group bg-black/50 light:bg-white/80 border border-white/10 light:border-gray-200 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 light:hover:shadow-teal-500/20 w-full mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'Postcard', destination: '/songs/postcard' }); }} aria-label="Postcard - Single released September 12, 2024">
                <img src="/postcard_cover.webp" alt="Postcard single cover featuring vintage postcard design with nostalgic imagery" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 light:group-hover:text-teal-600 transition-colors">Postcard</h2>
                <p class="text-white/70 light:text-gray-600 mb-1">September 12, 2024</p>
                <p class="text-white/60 light:text-gray-500 text-sm mb-4">The first single in anticipation for the mozworth debut. Premiered by KUTX as Song of the Day</p>
              </A>
            </section>
          </div>
        </main>
        <GlobalFooter />
      </div>
    </>
  );
} 