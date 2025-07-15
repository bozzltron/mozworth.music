export default function Press() {
  return (
    <>
      <title>mozworth - Press</title>
      <div class="flex flex-col min-h-screen">
        <main class="flex-1 flex items-center justify-center relative bg-black">
          {/* Background image */}
          <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0" style={{ 'background-image': "url('/mozworth.webp')" }} />
          {/* Main content */}
          <div class="relative container mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-10 md:rounded-[10px] bg-black/70">
            <h1 class="text-3xl font-bold mb-8 text-center">Press Coverage</h1>
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
              <h2 class="text-2xl font-semibold mb-2">An Interview with Mozworth</h2>
              <div class="text-lg text-white/70 mb-1">KVRX 91.7</div>
              <div class="text-sm text-white/60 mb-3">December 4, 2024</div>
              <div class="mb-4 leading-relaxed">
                "Michael Bosworth, known professionally as Mozworth, is an independent singer-songwriter based in Austin. 
                His self-titled debut, which was released on Nov. 15, stands out through both its catchy indie-rock melodies 
                and passionate storytelling."
              </div>
              <a href="https://kvrx.org/app/blog/features/an-interview-with-mozworth/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Read Full Interview</a>
            </div>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">Mozworth: "Postcard" [PREMIERE]</h2>
              <div class="text-lg text-white/70 mb-1">KUTX</div>
              <div class="text-sm text-white/60 mb-3">September 11, 2024</div>
              <div class="mb-4 leading-relaxed">
                "Packaging everything we love about '90s indie-alt-rock into a four-minute envelope, 'Postcard' proudly puts 
                Mozworth's stamp on these nostalgic sounds, less of a 'wish you were here' and more of a 'can't wait to show 
                you more' ahead of his upcoming debut album."
              </div>
              <a href="https://kutx.org/song-of-the-day/mozworth-postcard-premiere/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Read Full Article</a>
            </div>
            <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
              <h2 class="text-2xl font-semibold mb-2">Mozworth - Goodbye Colorado</h2>
              <div class="text-lg text-white/70 mb-1">Indie Dream</div>
              <div class="text-sm text-white/60 mb-3">October 16, 2024</div>
              <div class="mb-4 leading-relaxed">
                "Indie Dream describes 'Goodbye Colorado' as a moving indie rock track that explores the emotional journey of leaving behind not just a place, but memories, sensations, and people. The review highlights the song's blend of melodic indie softness with electric guitar and slow percussion, calling it a touching and nostalgic reflection on connections that will be remembered with love. Mozworth's serious and sentimental interpretation is praised for effectively conveying these emotions."
              </div>
              <a href="https://www.indiedream.com.mx/2024/10/mozworth-goodbye-colorado.html?m=1" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Read Full Review</a>
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