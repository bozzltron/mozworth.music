export default function Tour() {
  return (
    <>
      <title>Tour Dates | mozworth</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <main class="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background image */}
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0" style={{ 'background-image': "url('/mozworth.jpg')" }} />

        {/* Main content */}
        <div class="relative z-20 min-w-[800px] max-w-3xl w-full mx-auto bg-black/70 rounded-xl p-8 text-white flex flex-col items-center sm:min-w-0">
          <a href="/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black mb-6">&larr; Back to Home</a>
          <h1 class="text-3xl font-bold mb-8 text-center">Tour Dates</h1>

          <div class="tour-date upcoming w-full border-green-500 bg-green-500/10 border mb-6 p-6 rounded-xl flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div class="min-w-[200px] text-center md:text-left font-bold">2025</div>
            <div class="venue-info flex-1 text-center md:text-left text-base">
              <p>2025 Tour Dates Coming Soon<br />Check back for updates</p>
            </div>
            <div class="tour-links min-w-[140px] flex flex-wrap gap-2 justify-center md:justify-end"></div>
          </div>

          <div class="tour-date w-full border border-white/30 mb-6 p-6 rounded-xl flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div class="min-w-[200px] text-center md:text-left font-bold">May 16, 2025</div>
            <div class="venue-info flex-1 text-center md:text-left text-base">
              <p>Unplugged @ Brentwood Social Club<br />4pm – 6pm<br />Austin, TX</p>
            </div>
            <div class="tour-links min-w-[140px] flex flex-wrap gap-2 justify-center md:justify-end">
              <a href="https://www.bandsintown.com/e/106761310" class="tour-link inline-block border border-white/30 rounded-full px-4 py-1 text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
              <a href="https://www.facebook.com/share/1AisQjQCHt/" class="tour-link inline-block border border-white/30 rounded-full px-4 py-1 text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Facebook</a>
            </div>
          </div>

          <div class="tour-date past w-full border border-white/30 opacity-70 mb-6 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="min-w-[200px] font-bold">March 9, 2025</div>
            <div class="venue-info text-base">
              <p>Shiner's Saloon Songwriters Showcase 9pm<br />w/ Fin Fin & Others<br />Austin, TX</p>
            </div>
            <div class="tour-links flex gap-2">
              <a href="https://www.bandsintown.com/e/106360770" class="tour-link inline-block border border-white/30 rounded-full px-4 py-1 text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
              <a href="https://www.facebook.com/share/15zTxqmEy4/" class="tour-link inline-block border border-white/30 rounded-full px-4 py-1 text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Facebook</a>
            </div>
          </div>

          <div class="tour-date past w-full border border-white/30 opacity-70 mb-6 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="min-w-[200px] font-bold">December 20, 2024</div>
            <div class="venue-info text-base">
              <p>The Meridian <br />w/ The Somebodies <br />Buda, TX</p>
            </div>
            <div class="tour-links flex gap-2 flex-wrap">
              <a href="https://www.bandsintown.com/e/106153715" class="tour-link inline-block border border-white/30 rounded-full px-4 py-1 text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
              <a href="https://www.facebook.com/events/1367188184260258" class="tour-link inline-block border border-white/30 rounded-full px-4 py-1 text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Facebook</a>
            </div>
          </div>

          <div class="tour-date past w-full border border-white/30 opacity-70 mb-6 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="min-w-[200px] font-bold">November 17, 2024</div>
            <div class="venue-info text-base">
              <p>mozworth listening party <br /> Virtual</p>
            </div>
            <div class="tour-links flex gap-2 flex-wrap">
              <a href="https://www.bandsintown.com/e/106122824-mozworth-at-live-stream?came_from=250&utm_medium=web&utm_source=artist_page&utm_campaign=event" class="tour-link inline-block border border-white/30 rounded-full px-4 py-1 text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
            </div>
          </div>

          <div class="tour-date past w-full border border-white/30 opacity-70 mb-6 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="min-w-[200px] font-bold">October 25, 2024</div>
            <div class="venue-info text-base">
              <p>Shiner's Saloon <br /> w/ Horshoes and Handgrinades <br /> Austin, TX</p>
            </div>
            <div class="tour-links flex gap-2 flex-wrap">
              <a href="https://www.bandsintown.com/e/106028135-mozworth-at-shiner's-saloon?came_from=250&utm_medium=web&utm_source=artist_page&utm_campaign=event" class="tour-link inline-block border border-white/30 rounded-full px-4 py-1 text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
            </div>
          </div>

          <a href="/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black mt-2">&larr; Back to Home</a>
          <div class="text-xs text-gray-400 mt-8">&copy; {new Date().getFullYear()} mozworth. All rights reserved.</div>
        </div>
      </main>
    </>
  );
} 