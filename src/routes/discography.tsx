export default function Discography() {
  return (
    <>
      <title>Discography | mozworth</title>
      <meta name="description" content="Explore the full discography of mozworth: albums, singles, and more." />
      <div class="flex flex-col min-h-screen">
        <main class="flex-1 flex items-center justify-center relative bg-black">
          {/* Background image */}
          <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ 'background-image': "url('/mozworth.webp')" }} />
          {/* Main content */}
          <div class="relative container mx-0 md:mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-4 md:rounded-[10px] bg-black/70">
            <h1 class="text-3xl font-bold mb-8 text-center">Discography</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
              {/* Walking The Cow */}
              <a href="/songs/walking-the-cow" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full  mx-auto" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'Walking The Cow', destination: '/songs/walking-the-cow' }); }}>
                <img src="/mozworth-walking-the-cow-cover.webp" alt="Walking The Cow cover art" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">Walking The Cow</h2>
                <p class="text-white/70 mb-1">January 22, 2025</p>
                <p class="text-white/60 text-sm mb-4">A cover of Daniel Johnston's 'Walking The Cow' released on Daniel's birthday, which is also celebrated in Austin and elsewhere as 'Hi, How Are You Day'!</p>
              </a>
              {/* Self-titled Album */}
              <a href="/albums/mozworth" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full  mx-auto" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'mozworth', destination: '/albums/mozworth' }); }}>
                <img src="/mozworth-debut.webp" alt="mozworth album cover" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">mozworth</h2>
                <p class="text-white/70 mb-1">November 15, 2024</p>
                <p class="text-white/60 text-sm mb-4">Six songs that form the debut of mozworth.</p>
              </a>
              {/* Goodbye Colorado */}
              <a href="/songs/goodbye-colorado" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full  mx-auto" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'Goodbye Colorado', destination: '/songs/goodbye-colorado' }); }}>
                <img src="/goodbye_colorado_cover.webp" alt="Goodbye Colorado cover art" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">Goodbye Colorado</h2>
                <p class="text-white/70 mb-1">October 9, 2024</p>
                <p class="text-white/60 text-sm mb-4">The second single released in anticipation of the mozworth debut.</p>
              </a>
              {/* Postcard */}
              <a href="/songs/postcard" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full mx-auto" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'Postcard', destination: '/songs/postcard' }); }}>
                <img src="/postcard_cover.webp" alt="Postcard cover art" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
                <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">Postcard</h2>
                <p class="text-white/70 mb-1">September 12, 2024</p>
                <p class="text-white/60 text-sm mb-4">The first single in anticipation for the mozworth debut. Premiered by KUTX as Song of the Day</p>
              </a>
            </div>
          </div>
        </main>
        <footer class="w-full text-center text-xs text-gray-400 py-3 border-t border-white/10 bg-black/70">
          &copy; {new Date().getFullYear()} mozworth. All rights reserved. &mdash;
          <a href="/" class="text-teal-300 hover:underline mx-1">Home</a>
        </footer>
      </div>
    </>
  );
} 