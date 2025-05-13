import { createSignal } from "solid-js";

export default function Home() {
  const [showMusicPanel, setShowMusicPanel] = createSignal(false);
  const [showSocialPanel, setShowSocialPanel] = createSignal(false);

  return (
    <>
      <title>mozworth | Indie Alternative Rock Artist from Austin, Texas</title>
      {/* Favicon and manifest */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
      {/* Google Analytics */}
      <script innerHTML={`
        if (location.hostname === "mozworth.music") {
          (function(){
            var gtagScript = document.createElement('script');
            gtagScript.async = true;
            gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-HCSKGBDXDT";
            document.head.appendChild(gtagScript);
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-HCSKGBDXDT');
          })();
        }
      `} />
      {/* SEO & Social Meta Tags */}
      <meta name="description" content="Discover mozworth, an indie alternative rock artist based in Austin, Texas. Explore the latest music, news, and updates from the artist." />
      <meta property="og:title" content="mozworth | Indie Alternative Rock Artist" />
      <meta property="og:description" content="Explore the unique sounds of mozworth, an indie alternative rock artist from Austin, Texas. Check out the latest tracks and news!" />
      <meta property="og:image" content="https://mozworth.music/boz4web.jpg" />
      <meta property="og:url" content="https://mozworth.music" />
      <meta property="music:musician" content="mozworth" />
      <meta property="og:type" content="music" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="mozworth | Indie Alternative Rock Artist" />
      <meta name="twitter:description" content="Discover the music of mozworth, an indie alternative rock artist based in Austin, Texas." />
      <meta name="twitter:image" content="https://mozworth.music/boz4web.jpg" />
      <main class="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background image */}
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0" style={{ 'background-image': "url('/boz4web.jpg')" }} />
        {/* Overlay */}
        <div class="absolute inset-0 bg-black/70 z-10" />
        {/* Main content */}
        <div class="relative z-20 container max-w-xl mx-auto text-center rounded-xl p-8 flex flex-col items-center">
          <img src="/logo.jpg" alt="mozworth logo" class="w-36 mb-6 mx-auto select-none pointer-events-none" draggable={false} />
          <h1 class="text-3xl md:text-4xl font-bold mb-6">Hello! I'm mozworth</h1>
          {/* Album ad */}
          <div class="mb-8 w-full flex justify-center">
            <div class="bg-black/50 border border-white/30 rounded-xl p-4 w-full max-w-md">
              <div class="aspect-square mb-4">
                <iframe
                  class="w-full h-full rounded"
                  style="border:0;"
                  src="https://bandcamp.com/EmbeddedPlayer/album=2412424488/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                  seamless
                  title="Mozworth Bandcamp"
                />
              </div>
              <h2 class="text-xl font-semibold mb-2">Self-Titled Debut Out Now!</h2>
              <p class="text-gray-200 mb-2">Listen to it!</p>
              <div class="flex flex-wrap justify-center gap-3">
                <a href="https://distrokid.com/hyperfollow/mozworth/mozworth-2" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Stream</a>
                <a href="https://mozworth.bandcamp.com/album/mozworth" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Purchase</a>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div class="flex flex-wrap justify-center gap-3 mb-6">
            <a href="#" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" onClick={e => { e.preventDefault(); setShowMusicPanel(true); }}>Listen To Music</a>
            <a href="#" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" onClick={e => { e.preventDefault(); setShowSocialPanel(true); }}>Follow On Social</a>
            <a href="https://mozworth.beehiiv.com/subscribe" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Join The Newsletter</a>
            <a href="https://mozworth.printful.me/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Visit The Store</a>
            <a href="https://www.pressjunkiepr.com/clients/mozworth/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Press Kit</a>
            <a href="/press" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black">Press Coverage</a>
            <a href="/discography" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black">Discography</a>
            <a href="/tour" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black">Tour Dates</a>
            <a href="https://www.pressjunkiepr.com/contact/" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">Contact Me</a>
            <a href="/lyrics" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black">Lyrics</a>
          </div>
          <div class="text-xs text-gray-400 mt-8">
            &copy; {new Date().getFullYear()} mozworth. All rights reserved.
          </div>
        </div>
        {/* Music Panel */}
        {showMusicPanel() && (
          <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div class="bg-black/90 rounded-xl p-20 relative flex flex-col items-center w-full max-w-md mx-4">
              <button class="absolute top-4 right-4 text-3xl text-white hover:text-teal-400" onClick={() => setShowMusicPanel(false)}>&times;</button>
              <a href="https://open.spotify.com/artist/19yvsMNCISApooxkEt0aMO" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/spotify.svg" alt="Spotify" class="w-7 h-7 mr-3 invert brightness-0" />Spotify
              </a>
              <a href="https://music.apple.com/us/artist/mozworth/1761894108" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/apple-music.svg" alt="Apple Music" class="w-7 h-7 mr-3 invert brightness-0" />Apple Music
              </a>
              <a href="https://tidal.com/browse/artist/49656537" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/tidal.svg" alt="Tidal" class="w-7 h-7 mr-3 invert brightness-0" />Tidal
              </a>
              <a href="https://mozworth.bandcamp.com" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/bandcamp.svg" alt="Bandcamp" class="w-7 h-7 mr-3 invert brightness-0" />Bandcamp
              </a>
              <a href="https://music.amazon.com/artists/B0DCMD1NQ7/mozworth" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/amazon-music.svg" alt="Amazon Music" class="w-7 h-7 mr-3 invert brightness-0" />Amazon Music
              </a>
              <a href="https://www.youtube.com/@mozworthmusic" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/youtube.svg" alt="YouTube" class="w-7 h-7 mr-3 invert brightness-0" />YouTube
              </a>
              <a href="https://soundcloud.com/mozworth" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/soundcloud.svg" alt="SoundCloud" class="w-7 h-7 mr-3 invert brightness-0" />SoundCloud
              </a>
            </div>
          </div>
        )}
        {/* Social Panel */}
        {showSocialPanel() && (
          <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div class="bg-black/90 rounded-xl p-20 relative flex flex-col items-center w-full max-w-md mx-4">
              <button class="absolute top-4 right-4 text-3xl text-white hover:text-teal-400 mb-6 ml-6" onClick={() => setShowSocialPanel(false)}>&times;</button>
              <a href="https://www.instagram.com/mozworthmusic/" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/instagram.svg" alt="Instagram" class="w-7 h-7 mr-3 invert brightness-0" />Instagram
              </a>
              <a href="https://www.tiktok.com/@mozworthmusic" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/tiktok.svg" alt="TikTok" class="w-7 h-7 mr-3 invert brightness-0" />TikTok
              </a>
              <a href="https://www.youtube.com/@mozworthmusic" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/youtube.svg" alt="YouTube" class="w-7 h-7 mr-3 invert brightness-0" />YouTube
              </a>
              <a href="https://www.bandsintown.com/a/15561057-mozworth" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/bandsintown.svg" alt="Bandsintown" class="w-7 h-7 mr-3 invert brightness-0" />Bandsintown
              </a>
              <a href="https://www.facebook.com/mozworth" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/facebook.svg" alt="Facebook" class="w-7 h-7 mr-3 invert brightness-0" />Facebook
              </a>
              <a href="https://bsky.app/profile/mozworth.bsky.social" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/bluesky.svg" alt="Bluesky" class="w-7 h-7 mr-3 invert brightness-0" />Bluesky
              </a>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
