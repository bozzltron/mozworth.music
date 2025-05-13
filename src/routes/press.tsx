export default function Press() {
  return (
    <>
      <title>mozworth - Press</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <main class="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background image */}
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0" style={{ 'background-image': "url('/boz4web.jpg')" }} />
        {/* Overlay */}
        <div class="absolute inset-0 bg-black/70 z-10" />
        {/* Main content */}
        <div class="relative z-20 max-w-2xl w-full mx-auto bg-black/70 rounded-xl p-8 text-white flex flex-col items-center">
          <a href="/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black mb-6">&larr; Back to Home</a>
          <h1 class="text-3xl font-bold mb-8 text-center">Press Coverage</h1>

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

          <a href="/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black mt-2">&larr; Back to Home</a>
          <div class="text-xs text-gray-400 mt-8">&copy; {new Date().getFullYear()} mozworth. All rights reserved.</div>
        </div>
      </main>
    </>
  );
} 