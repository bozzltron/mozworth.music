import { createSignal, For } from "solid-js";
import Callout from "../components/Callout";
import GlobalFooter from "../components/GlobalFooter";
import SmartPromo from "../components/SmartPromo";
import RotatingBackground from "../components/RotatingBackground";
import { photographyBackgrounds } from "../data/photography";
import { StandardMetadata, createMusicGroupData } from "../utils/metadata";

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

export default function Home() {
  const [showMusicPanel, setShowMusicPanel] = createSignal(false);
  const [showSocialPanel, setShowSocialPanel] = createSignal(false);
  
  // Secure email handling - split to prevent scraping
  const handleContactClick = (e: MouseEvent) => {
    e.preventDefault();
    const emailLocal = 'mozworth';
    const emailDomain = 'mozworth.music';
    const email = `${emailLocal}@${emailDomain}`;
    window.location.href = `mailto:${email}`;
    if (window.gtag) {
      window.gtag('event', 'email_click', { event_category: 'contact', event_label: 'Contact mozworth' });
    }
  };

  // Secure email handling for label contact - split to prevent scraping
  const handleLabelContactClick = (e: MouseEvent) => {
    e.preventDefault();
    const emailLocal = 'info';
    const emailDomain = 'friendmusicrecords.com';
    const email = `${emailLocal}@${emailDomain}`;
    window.location.href = `mailto:${email}`;
    if (window.gtag) {
      window.gtag('event', 'email_click', { event_category: 'contact', event_label: 'Contact Label', destination: 'friendmusicrecords' });
    }
  };

  return (
    <>
      {/* Favicon and manifest */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="theme-color" content="#000000" />
      
      <StandardMetadata
        title="mozworth | Indie Alternative Rock Artist from Austin, Texas"
        description="mozworth is an indie rock and alternative rock band from Austin, Texas. Discover new music, tour dates, and press coverage from this Austin-based indie alternative rock artist."
        url="https://mozworth.music"
        type="music"
        keywords="indie rock, alternative rock, indie rock bands, alternative rock bands, Austin Texas, indie rock bands Austin, alternative rock bands Austin, Austin indie rock, Austin alternative rock, indie rock Austin TX, mozworth"
        modifiedDate="2026-02-16"
        structuredData={createMusicGroupData()}
      />
      
      {/* Additional Open Graph images from photography backgrounds */}
      <For each={photographyBackgrounds}>{(src) => (
        <>
          <meta property="og:image" content={src} />
          <meta property="og:image:alt" content="mozworth photography" />
        </>
      )}</For>
      <div class="flex flex-col min-h-screen">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50">Skip to main content</a>
        <main id="main-content" class="flex-1 flex items-center justify-center relative bg-black">
          <RotatingBackground />
          {/* Main content */}
          <div class="relative container mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-10 md:rounded-[10px] bg-black/70">
            <h1 class="sr-only">mozworth - Indie Rock & Alternative Rock Band from Austin, Texas</h1>
            <img src="/logo.jpg" alt="mozworth logo" class="w-36 mb-6 mx-auto select-none pointer-events-none" draggable={false} />
            {/* Album ad (replaced with SmartPromo) */}
            <div class="mb-8 w-full flex justify-center">
              <SmartPromo />
            </div>
            <Callout href="/tour" class="mb-6 w-full max-w-md mx-auto" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'tour_page' }); }}>
              Up next: Shiner's Saloon • Tuesday, March 10 • Austin, TX
            </Callout>
                      {/* Navigation */}
          <nav aria-label="Main navigation" class="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 mb-6 w-full">
            <a href="/music" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'music_page' }); }}>Music</a>
            <a href="/support" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'support_page' }); }}>Support</a>
            <a href="/tour" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'tour_page' }); }}>Tour Dates</a>
            <a href="/backgrounds" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'backgrounds_page' }); }}>Backgrounds</a>
            <button type="button" aria-label="Open streaming platforms" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={e => { e.preventDefault(); setShowMusicPanel(true); if (window.gtag) window.gtag('event', 'panel_open', { event_label: 'music' }); }}>Find Streaming</button>
            <button type="button" aria-label="Open social media platforms" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={e => { e.preventDefault(); setShowSocialPanel(true); if (window.gtag) window.gtag('event', 'panel_open', { event_label: 'social' }); }}>Follow On Social</button>
            <a href="https://mozworth.beehiiv.com/subscribe" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" onClick={() => { if (window.gtag) window.gtag('event', 'outbound_click', { event_category: 'outbound', event_label: 'Newsletter', destination: 'beehiiv' }); }}>Join The Newsletter</a>
            <a href="https://mozworth.printful.me/" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" onClick={() => { if (window.gtag) window.gtag('event', 'outbound_click', { event_category: 'outbound', event_label: 'Store', destination: 'printful' }); }}>Merch</a>
            <a href="https://friendmusicrecords.com/artists/mozworth" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" onClick={() => { if (window.gtag) window.gtag('event', 'outbound_click', { event_category: 'outbound', event_label: 'Press Kit', destination: 'friendmusicrecords' }); }}>Press Kit</a>
            <a href="/press" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'press_coverage' }); }}>Press Coverage</a>
            <a href="#" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={handleContactClick} aria-label="Contact mozworth via email">Contact mozworth</a>
            <a href="#" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={handleLabelContactClick} aria-label="Contact friend music records label via email">Contact Label</a>
          </nav>
          </div>
          {/* Music Panel */}
          {showMusicPanel() && (
            <div 
              class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              role="dialog"
              aria-modal="true"
              aria-labelledby="music-panel-title"
            >
              <div class="bg-black/90 rounded-xl p-20 relative flex flex-col items-center w-full max-w-md mx-4">
                <h2 id="music-panel-title" class="sr-only">Streaming Platforms</h2>
                <button 
                  class="absolute top-4 right-4 text-3xl text-white hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" 
                  onClick={() => setShowMusicPanel(false)}
                  aria-label="Close streaming platforms"
                >&times;</button>
                <a href="https://tidal.com/browse/artist/49656537" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Listen to mozworth on Tidal (opens in new tab)">
                  <img src="/tidal.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Tidal
                </a>
                <a href="https://open.spotify.com/artist/19yvsMNCISApooxkEt0aMO" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Listen to mozworth on Spotify (opens in new tab)">
                  <img src="/spotify.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Spotify
                </a>
                <a href="https://music.apple.com/us/artist/mozworth/1761894108" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Listen to mozworth on Apple Music (opens in new tab)">
                  <img src="/apple-music.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Apple Music
                </a>
                <a href="https://mozworth.bandcamp.com" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Buy mozworth music on Bandcamp (opens in new tab)">
                  <img src="/bandcamp.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Bandcamp
                </a>
                <a href="https://music.amazon.com/artists/B0DCMD1NQ7/mozworth" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Listen to mozworth on Amazon Music (opens in new tab)">
                  <img src="/amazon-music.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Amazon Music
                </a>
                <a href="https://www.youtube.com/@mozworthmusic" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Watch mozworth on YouTube (opens in new tab)">
                  <img src="/youtube.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />YouTube
                </a>
                <a href="https://soundcloud.com/mozworth" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Listen to mozworth on SoundCloud (opens in new tab)">
                  <img src="/soundcloud.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />SoundCloud
                </a>
                <a href="https://www.deezer.com/us/artist/277222071" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Listen to mozworth on Deezer (opens in new tab)" onClick={() => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Deezer', destination: 'deezer' }); }}>
                  <img src="/deezer.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Deezer
                </a>
                <a href="https://www.pandora.com/artist/mozworth/AR5hqjlxV7wvwdg" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Listen to mozworth on Pandora (opens in new tab)">
                  <img src="/pandora.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Pandora
                </a>
                <a href="https://www.iheart.com/artist/mozworth-43720696/" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener" aria-label="Listen to mozworth on iHeartRadio (opens in new tab)">
                  <img src="/iheartradio.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />iHeartRadio
                </a>
              </div>
            </div>
          )}
          {/* Social Panel */}
          {showSocialPanel() && (
            <div 
              class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              role="dialog"
              aria-modal="true"
              aria-labelledby="social-panel-title"
            >
              <div class="bg-black/90 rounded-xl p-20 relative flex flex-col items-center w-full max-w-md mx-4">
                <h2 id="social-panel-title" class="sr-only">Social Media Platforms</h2>
                <button 
                  class="absolute top-4 right-4 text-3xl text-white hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" 
                  onClick={() => setShowSocialPanel(false)}
                  aria-label="Close social media platforms"
                >&times;</button>
                <a href="https://bsky.app/profile/mozworth.music" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                  <img src="/bluesky.svg" alt="Bluesky" class="w-7 h-7 mr-3 invert brightness-0" />Bluesky
                </a>
                <a href="https://www.reddit.com/user/mozworth/" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                  <img src="/reddit.svg" alt="Reddit" class="w-7 h-7 mr-3 invert brightness-0" />Reddit
                </a>
                <a href="https://www.instagram.com/mozworthmusic/" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                  <img src="/instagram.svg" alt="Instagram" class="w-7 h-7 mr-3 invert brightness-0" />Instagram
                </a>
                <a href="https://www.threads.net/@mozworthmusic" class="ad-button flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium transition-all duration-200 hover:bg-white hover:text-black" target="_blank" rel="noopener">
                  <img src="/threads.svg" alt="Threads" class="w-7 h-7 mr-3 invert brightness-0" />Threads
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
              </div>
            </div>
          )}
        </main>
        <GlobalFooter />
      </div>
    </>
  );
}
