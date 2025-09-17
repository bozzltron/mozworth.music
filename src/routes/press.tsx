import RotatingBackground from "../components/RotatingBackground";

export default function Press() {
  return (
    <>
      <title>mozworth - Press</title>
      <meta property="og:image" content="https://mozworth.music/mozworth.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://mozworth.music/mozworth.webp" />
      <div class="flex flex-col min-h-screen">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50">Skip to main content</a>
        <main id="main-content" class="flex-1 flex items-center justify-center relative bg-black">
          <RotatingBackground />
          {/* Main content */}
          <div class="relative container mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-10 md:rounded-[10px] bg-black/70">
            <h1 class="text-3xl font-bold mb-8 text-center">Press Coverage</h1>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">mozworth - Sandpiper</h2>
              <div class="text-lg text-white/70 mb-1">The Big Takeover</div>
              <div class="text-sm text-white/60 mb-3">September 17, 2025</div>
              <div class="mb-4 leading-relaxed">
                The Big Takeover praises "Sandpiper" for its depth and duality, describing it as music that "ebbs and flows between folky understatement and the roar of rock and roll at its finest" and calling it "a blend of indie delicacy, rock muscle, psychedelic colour, and surf finesse."
              </div>
              <a href="https://bigtakeover.com/recordings/mozworth-sandpiper-balanced-scale-media" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener">Read Full Review</a>
            </div>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">mozworth - Sandpiper</h2>
              <div class="text-lg text-white/70 mb-1">It's All Indie</div>
              <div class="text-sm text-white/60 mb-3">September 14, 2025</div>
              <div class="mb-4 leading-relaxed">
                It's All Indie describes "Sandpiper" as "a clear-cut slice of shimmering indie-pop with a slightly scuzzy undertone of grunge guitar sounds" and praises the track as "a breezy indie-pop gem with grungy undertones, jangly new-wave hooks, and lush melodies."
              </div>
              <a href="https://www.itsallindie.com/2025/09/mozworth-reveals-bold-new-single.html" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener">Read Full Review</a>
            </div>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">mozworth - The Sky Is Falling</h2>
              <div class="text-lg text-white/70 mb-1">The Big Takeover</div>
              <div class="text-sm text-white/60 mb-3">July 15, 2025</div>
              <div class="mb-4 leading-relaxed">
                The Big Takeover praises "The Sky Is Falling" as "an absolutely essential document of our times," highlighting the band's evolution and their perfect capture of modern chaos through "raw rock riffs and indie deftness."
              </div>
              <a href="https://bigtakeover.com/recordings/mozworth-the-sky-is-falling-balanced-scale-media" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Read full review from The Big Takeover (opens in new tab)">Read Full Review</a>
            </div>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">mozworth - The Sky Is Falling</h2>
              <div class="text-lg text-white/70 mb-1">Indie Dock Music Blog</div>
              <div class="text-sm text-white/60 mb-3">July 15, 2025</div>
              <div class="mb-4 leading-relaxed">
                Indie Dock Music Blog reviews "The Sky Is Falling," highlighting how mozworth captures the tension of modern digital life with this compelling indie rock track, praising its tight musicianship and thoughtful songwriting.
              </div>
              <a href="https://indiedockmusicblog.co.uk/?p=30798" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Read Full Review</a>
            </div>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">mozworth - The Sky Is Falling</h2>
              <div class="text-lg text-white/70 mb-1">Apricot Magazine</div>
              <div class="text-sm text-white/60 mb-3">July 15, 2025</div>
              <div class="mb-4 leading-relaxed">
                Apricot Magazine calls "The Sky Is Falling" a "compelling sonic landscape" and praises the band's chemistry, emotional honesty, and the track's transformation of anxiety into beauty and connection.
              </div>
              <a href="https://apricot-magazine.com/review/the-sky-may-be-falling-but-mozworth-is-rising/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Read Full Review</a>
            </div>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">mozworth - The Sky Is Falling</h2>
              <div class="text-lg text-white/70 mb-1">Buzzy Band</div>
              <div class="text-sm text-white/60 mb-3">July 15, 2025</div>
              <div class="mb-4 leading-relaxed">
                Buzzy Band highlights "The Sky Is Falling" for its urgent indie rock energy and praises mozworth's ability to turn anxiety into anthemic, cathartic music.
              </div>
              <a href="https://buzzyband.com/mozworth-the-sky-is-falling/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Read Full Review</a>
            </div>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">An Interview with mozworth</h2>
              <div class="text-lg text-white/70 mb-1">KVRX 91.7</div>
              <div class="text-sm text-white/60 mb-3">December 4, 2024</div>
              <div class="mb-4 leading-relaxed">
                "Michael Bosworth, known professionally as mozworth, is an independent singer-songwriter based in Austin. 
                His self-titled debut, which was released on Nov. 15, stands out through both its catchy indie-rock melodies 
                and passionate storytelling."
              </div>
              <a href="https://kvrx.org/app/blog/features/an-interview-with-mozworth/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Read Full Interview</a>
            </div>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">mozworth: "Postcard" [PREMIERE]</h2>
              <div class="text-lg text-white/70 mb-1">KUTX</div>
              <div class="text-sm text-white/60 mb-3">September 11, 2024</div>
              <div class="mb-4 leading-relaxed">
                "Packaging everything we love about '90s indie-alt-rock into a four-minute envelope, 'Postcard' proudly puts 
                mozworth's stamp on these nostalgic sounds, less of a 'wish you were here' and more of a 'can't wait to show 
                you more' ahead of his upcoming debut album."
              </div>
              <a href="https://kutx.org/song-of-the-day/mozworth-postcard-premiere/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Read Full Article</a>
            </div>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">mozworth - Goodbye Colorado</h2>
              <div class="text-lg text-white/70 mb-1">Indie Dream</div>
              <div class="text-sm text-white/60 mb-3">October 16, 2024</div>
              <div class="mb-4 leading-relaxed">
                "Indie Dream describes 'Goodbye Colorado' as a moving indie rock track that explores the emotional journey of leaving behind not just a place, but memories, sensations, and people. The review highlights the song's blend of melodic indie softness with electric guitar and slow percussion, calling it a touching and nostalgic reflection on connections that will be remembered with love. mozworth's serious and sentimental interpretation is praised for effectively conveying these emotions."
              </div>
              <a href="https://www.indiedream.com.mx/2024/10/mozworth-goodbye-colorado.html?m=1" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Read Full Review</a>
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