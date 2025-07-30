export default function Tour() {
  return (
    <>
      <title>Tour Dates | mozworth</title>
      <meta name="last-modified" content="2025-06-23" />
      <div class="flex flex-col min-h-screen">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50">Skip to main content</a>
        <main id="main-content" class="flex-1 flex items-center justify-center relative bg-black">
          {/* Background image */}
          <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0" style={{ 'background-image': "url('/mozworth.webp')" }} />

          {/* Main content */}
          <div class="relative container mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-10 md:rounded-[10px] bg-black/70">
            <h1 class="text-3xl font-bold mb-8 text-center">Tour Dates</h1>

            <div class="tour-date info w-full border-green-500 bg-green-500/10 border mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div class="min-w-[200px] text-left font-bold">2025</div>
              <div class="venue-info flex-1 text-left text-base">
                <p>2025 Tour Dates Coming Soon<br />Check back for updates</p>
              </div>
              <div class="tour-links min-w-[140px] flex flex-wrap gap-2 justify-center md:justify-end"></div>
            </div>

            <div class="tour-date upcoming w-full border-white bg-white/10 border mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div class="min-w-[200px] text-left font-bold">Friday, August 1, 2025</div>
              <div class="venue-info flex-1 text-left text-base">
                <p>The Sky Is Falling Single Release Party<br />South Austin Beer Garden<br />8pm - 10pm<br />Austin, TX<br /><span class="block mt-2 text-white font-semibold">The Distraits open at 8pm</span><span class="block text-teal-300 font-semibold">mozworth plays at 9pm</span></p>
              </div>
              <div class="tour-links w-full md:w-auto md:min-w-[140px] flex flex-col md:flex-row flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                <a href="https://www.bandsintown.com/e/107046899?" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="View event on Bandsintown (opens in new tab)">Bandsintown</a>
                <a href="https://www.facebook.com/share/19L86HVi4U/" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="View event on Facebook (opens in new tab)">Facebook</a>
              </div>
            </div>

            <div class="tour-date upcoming w-full border-white bg-white/10 border mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div class="min-w-[200px] text-left font-bold">Thursday, July 31, 2025</div>
              <div class="venue-info flex-1 text-left text-base">
                <p>Good Day Austin (TV Appearance)<br />FOX 7 Austin (KTBC)<br />9:50am Central Time<br />Austin, TX</p>
              </div>
              <div class="tour-links min-w-[140px] flex flex-wrap gap-2 justify-center md:justify-end">
                <a href="https://www.fox7austin.com/live" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm font-semibold transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener" aria-label="Watch Good Day Austin live">Watch</a>
              </div>
            </div>

            <div class="tour-date upcoming w-full border-white bg-white/10 border mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div class="min-w-[200px] text-left font-bold">Sunday, July 20, 2025</div>
              <div class="venue-info flex-1 text-left text-base">
                <p>mozworth Interview Airs<br />KLBJ 93.7 FM<br />7:00pm<br />Austin, TX</p>
              </div>
              <div class="tour-links min-w-[140px] flex flex-wrap gap-2 justify-center md:justify-end">
                <a href="https://www.klbjfm.com/listen-live" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm font-semibold transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener" aria-label="Listen to KLBJ live">Listen</a>
              </div>
            </div>

            <div class="tour-date past w-full border border-white/30 opacity-70 mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div class="min-w-[200px] text-left font-bold">June 6, 2025</div>
              <div class="venue-info flex-1 text-left text-base">
                <p>South Austin Beer Garden<br />9pm - 10pm<br />Austin, TX</p>
              </div>
              <div class="tour-links w-full md:w-auto md:min-w-[140px] flex flex-col md:flex-row flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                <a href="https://www.bandsintown.com/e/106941100-mozworth-at-south-austin-beer-garden?came_from=251&utm_medium=web&utm_source=artist_page&utm_campaign=event" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
                <a href="https://www.facebook.com/share/1B8AZgXj5f/" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Facebook</a>
              </div>
            </div>

            <div class="tour-date past w-full border border-white/30 opacity-70 mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div class="min-w-[200px] text-left font-bold">May 16, 2025</div>
              <div class="venue-info flex-1 text-left text-base">
                <p>Unplugged @ Brentwood Social Club<br />4pm – 6pm<br />Austin, TX</p>
              </div>
              <div class="tour-links w-full md:w-auto md:min-w-[140px] flex flex-col md:flex-row flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                <a href="https://www.bandsintown.com/e/106761310" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
                <a href="https://www.facebook.com/share/1AisQjQCHt/" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Facebook</a>
              </div>
            </div>

            <div class="tour-date past w-full border border-white/30 opacity-70 mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4">
              <div class="min-w-[200px] text-left font-bold">March 9, 2025</div>
              <div class="venue-info flex-1 text-left text-base">
                <p>Shiner's Saloon Songwriters Showcase 9pm<br />w/ Fin Fin & Others<br />Austin, TX</p>
              </div>
              <div class="tour-links w-full md:w-auto md:min-w-[140px] flex flex-col md:flex-row flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                <a href="https://www.bandsintown.com/e/106360770" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
                <a href="https://www.facebook.com/share/15zTxqmEy4/" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Facebook</a>
              </div>
            </div>

            <div class="tour-date past w-full border border-white/30 opacity-70 mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4">
              <div class="min-w-[200px] text-left font-bold">December 20, 2024</div>
              <div class="venue-info flex-1 text-left text-base">
                <p>The Meridian <br />w/ The Somebodies <br />Buda, TX</p>
              </div>
              <div class="tour-links w-full md:w-auto md:min-w-[140px] flex flex-col md:flex-row flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                <a href="https://www.bandsintown.com/e/106153715" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
                <a href="https://www.facebook.com/events/1367188184260258" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Facebook</a>
              </div>
            </div>

            <div class="tour-date past w-full border border-white/30 opacity-70 mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4">
              <div class="min-w-[200px] text-left font-bold">November 17, 2024</div>
              <div class="venue-info flex-1 text-left text-base">
                <p>mozworth listening party <br /> Virtual</p>
              </div>
              <div class="tour-links w-full md:w-auto md:min-w-[140px] flex flex-col md:flex-row flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                <a href="https://www.bandsintown.com/e/106122824-mozworth-at-live-stream?came_from=250&utm_medium=web&utm_source=artist_page&utm_campaign=event" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
              </div>
            </div>

            <div class="tour-date past w-full border border-white/30 opacity-70 mb-6 p-6 rounded-xl flex flex-col md:flex-row items-start gap-4">
              <div class="min-w-[200px] text-left font-bold">October 25, 2024</div>
              <div class="venue-info flex-1 text-left text-base">
                <p>Shiner's Saloon <br /> w/ Horshoes and Handgrinades <br /> Austin, TX</p>
              </div>
              <div class="tour-links w-full md:w-auto md:min-w-[140px] flex flex-col md:flex-row flex-wrap gap-2 mt-4 md:mt-0 md:justify-end">
                <a href="https://www.bandsintown.com/e/106028135-mozworth-at-shiner's-saloon?came_from=250&utm_medium=web&utm_source=artist_page&utm_campaign=event" class="tour-link w-full md:w-auto text-center inline-block border border-white/30 rounded-full px-6 py-3 md:px-4 md:py-2 text-base md:text-sm transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Bandsintown</a>
              </div>
            </div>
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