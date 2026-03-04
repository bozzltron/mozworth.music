import { For } from "solid-js";
import FollowButton from "../components/FollowButton";
import GlobalFooter from "../components/GlobalFooter";
import SmartPromo from "../components/SmartPromo";
import RotatingBackground from "../components/RotatingBackground";
import { photographyBackgrounds } from "../data/photography";
import { StandardMetadata, createMusicGroupData } from "../utils/metadata";

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

export default function Home() {
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
          <div class="relative container mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-10 md:rounded-[10px] bg-black/70 text-white">
            <h1 class="sr-only">mozworth - Indie Rock & Alternative Rock Band from Austin, Texas</h1>
            <img src="/logo.jpg" alt="mozworth logo" class="w-36 mb-6 mx-auto select-none pointer-events-none" draggable={false} />
            {/* Album ad (replaced with SmartPromo) */}
            <div class="mb-8 w-full flex justify-center">
              <SmartPromo />
            </div>
            {/* Navigation */}
          <nav aria-label="Main navigation" class="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 mb-6 w-full">
            <a href="/music" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'music_page' }); }}>Music</a>
            <a href="/tour" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'tour_page' }); }}>Tour Dates</a>
            <a href="/backgrounds" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'backgrounds_page' }); }}>Backgrounds</a>
            <div class="w-full md:w-auto">
              <FollowButton variant="light" compact />
            </div>
            <a href="https://mozworth.printful.me/" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener noreferrer" onClick={() => { if (window.gtag) window.gtag('event', 'outbound_click', { event_category: 'outbound', event_label: 'Store', destination: 'printful' }); }}>Merch</a>
            <a href="https://friendmusicrecords.com/artists/mozworth" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" target="_blank" rel="noopener noreferrer" onClick={() => { if (window.gtag) window.gtag('event', 'outbound_click', { event_category: 'outbound', event_label: 'Press Kit', destination: 'friendmusicrecords' }); }}>Press Kit</a>
            <a href="/press" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'navigation', { event_label: 'press_coverage' }); }}>Press Coverage</a>
            <a href="#" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={handleContactClick} aria-label="Contact mozworth via email">Contact mozworth</a>
            <a href="#" class="w-full md:w-auto inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={handleLabelContactClick} aria-label="Contact friend music records label via email">Contact Label</a>
          </nav>
          </div>
        </main>
        <GlobalFooter />
      </div>
    </>
  );
}
