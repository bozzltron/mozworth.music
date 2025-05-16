import { createSignal } from "solid-js";
import SmartPromo from "../components/SmartPromo";

// @ts-expect-error: Window.gtag is injected by Google Analytics and may not be present in all environments.
// eslint-disable-next-line
declare global { interface Window { gtag?: (...args: any[]) => void } }

export default function Home() {
  const [showMusicPanel, setShowMusicPanel] = createSignal(false);
  const [showSocialPanel, setShowSocialPanel] = createSignal(false);

  return (
    <>
      <title>mozworth | Indie Alternative Rock Artist from Austin, Texas</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Favicon and manifest */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href="https://mozworth.music" />
      {/* Open Graph & Twitter Enhancements */}
      <meta property="og:site_name" content="mozworth" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:site" content="@mozworthmusic" />
      <meta name="twitter:creator" content="@mozworthmusic" />
      {/* Structured Data for AI and Search Engines */}
      {/*
        The innerHTML attribute is used here to inject static JSON-LD for SEO purposes.
        The content is not user-generated and is safe in this context.
      */}
      <script type="application/ld+json" innerHTML={`<!--${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MusicAlbum",
        "name": "mozworth",
        "byArtist": {
          "@type": "MusicGroup",
          "name": "mozworth"
        },
        "image": "https://mozworth.music/mozworth-debut.webp",
        "datePublished": "2024-11-15",
        "url": "https://mozworth.music/albums/mozworth"
      })}-->`} />
      {/* SEO & Social Meta Tags */}
      <meta name="description" content="Discover mozworth, an indie alternative rock artist based in Austin, Texas. Explore the latest music, news, and updates from the artist." />
      <meta property="og:title" content="mozworth | Indie Alternative Rock Artist" />
      <meta property="og:description" content="Explore the unique sounds of mozworth, an indie alternative rock artist from Austin, Texas. Check out the latest tracks and news!" />
      <meta property="og:image" content="https://mozworth.music/mozworth.webp" />
      <meta property="og:url" content="https://mozworth.music" />
      <meta property="music:musician" content="mozworth" />
      <meta property="og:type" content="music" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="mozworth | Indie Alternative Rock Artist" />
      <meta name="twitter:description" content="Discover the music of mozworth, an indie alternative rock artist based in Austin, Texas." />
      <meta name="twitter:image" content="https://mozworth.music/mozworth.webp" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <main class="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background image */}
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ 'background-image': "url('/mozworth.webp')" }} />
   
        {/* Main content */}
        <div
          class="relative container mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-10 md:rounded-[10px] bg-black/70"
        >
          <img src="/logo.jpg" alt="mozworth logo" class="w-36 mb-6 mx-auto select-none pointer-events-none" draggable={false} />
          <h1 class="text-3xl md:text-4xl font-bold mb-6">Hello! I'm mozworth</h1>
          {/* Album ad (replaced with SmartPromo) */}
          <div class="mb-8 w-full flex justify-center">
            <SmartPromo />
          </div>
          {/* Actions */}
          <div class="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 mb-6 w-full">
            <a href="#" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" onClick={e => { e.preventDefault(); setShowMusicPanel(true); if (window.gtag) window.gtag('event', 'panel_open', { event_label: 'music' }); }}>Listen To Music</a>
            <a href="#" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" onClick={e => { e.preventDefault(); setShowSocialPanel(true); if (window.gtag) window.gtag('event', 'panel_open', { event_label: 'social' }); }}>Follow On Social</a>
            <a href="https://mozworth.beehiiv.com/subscribe" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener" onClick={() => { if (window.gtag) window.gtag('event', 'outbound_click', { event_category: 'outbound', event_label: 'Newsletter', destination: 'beehiiv' }); }}>Join The Newsletter</a>
            <a href="https://mozworth.printful.me/" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener" onClick={() => { if (window.gtag) window.gtag('event', 'outbound_click', { event_category: 'outbound', event_label: 'Store', destination: 'printful' }); }}>Visit The Store</a>
            <a href="https://www.pressjunkiepr.com/clients/mozworth/" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener" onClick={() => { if (window.gtag) window.gtag('event', 'outbound_click', { event_category: 'outbound', event_label: 'Press Kit', destination: 'pressjunkiepr' }); }}>Press Kit</a>
            <a href="/press" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'press_coverage' }); }}>Press Coverage</a>
            <a href="/discography" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'discography_page' }); }}>Discography</a>
            <a href="/tour" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'tour_page' }); }}>Tour Dates</a>
            <a href="https://www.pressjunkiepr.com/contact/" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener" onClick={() => { if (window.gtag) window.gtag('event', 'outbound_click', { event_category: 'outbound', event_label: 'Contact', destination: 'pressjunkiepr' }); }}>Contact Me</a>
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
              <a href="https://bsky.app/profile/mozworth.music" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                <img src="/bluesky.svg" alt="Bluesky" class="w-7 h-7 mr-3 invert brightness-0" />Bluesky
              </a>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
