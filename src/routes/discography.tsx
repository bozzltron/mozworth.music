export default function Discography() {
  return (
    <>
      <title>Discography | mozworth</title>
      <meta name="description" content="Explore the full discography of mozworth: albums, singles, and more." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <main class="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background image */}
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ 'background-image': "url('/boz4web.jpg')" }} />
        {/* Main content */}
        <div class="relative w-full max-w-5xl mx-auto bg-black/70 md:rounded-lg md:rounded-xl p-4 md:p-8 text-white flex flex-col items-center">
          <a href="/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black mb-6">&larr; Back to Home</a>
          <h1 class="text-3xl font-bold mb-8 text-center">Discography</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
            {/* Walking The Cow */}
            <a href="/songs/walking-the-cow" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full max-w-xs mx-auto" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'Walking The Cow', destination: '/songs/walking-the-cow' }); }}>
              <img src="/mozworth-walking-the-cow-cover.jpg" alt="Walking The Cow cover art" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
              <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">Walking The Cow</h2>
              <p class="text-white/70 mb-4">January 22, 2025</p>
            </a>
            {/* Self-titled Album */}
            <a href="/albums/mozworth" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full max-w-xs mx-auto" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'mozworth', destination: '/albums/mozworth' }); }}>
              <img src="/mozworth-debut.png" alt="mozworth album cover" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
              <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">mozworth</h2>
              <p class="text-white/70 mb-4">November 15, 2024</p>
            </a>
            {/* Goodbye Colorado */}
            <a href="/songs/goodbye-colorado" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full max-w-xs mx-auto" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'Goodbye Colorado', destination: '/songs/goodbye-colorado' }); }}>
              <img src="/goodbye_colorado_cover.png" alt="Goodbye Colorado cover art" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
              <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">Goodbye Colorado</h2>
              <p class="text-white/70 mb-4">October 9, 2024</p>
            </a>
            {/* Postcard */}
            <a href="/songs/postcard" class="release group bg-black/50 border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-teal-400/30 w-full max-w-xs mx-auto" onClick={() => { if (window.gtag) window.gtag('event', 'release_click', { event_category: 'discography', event_label: 'Postcard', destination: '/songs/postcard' }); }}>
              <img src="/postcard_cover.png" alt="Postcard cover art" class="w-full aspect-square object-cover mb-4 rounded shadow-lg group-hover:shadow-teal-400/40 transition-shadow duration-200" />
              <h2 class="text-xl font-bold mb-2 group-hover:text-teal-300 transition-colors">Postcard</h2>
              <p class="text-white/70 mb-4">September 12, 2024</p>
            </a>
          </div>
          <div class="text-xs text-gray-400 mt-8">&copy; {new Date().getFullYear()} mozworth. All rights reserved.</div>
        </div>
      </main>
    </>
  );
} 