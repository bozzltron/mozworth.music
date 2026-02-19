// eslint-disable-next-line
declare global { interface Window { gtag?: (...args: any[]) => void } }

import GlobalFooter from "../components/GlobalFooter";
import RotatingBackground from "../components/RotatingBackground";
import { StandardMetadata, createSocialLinks } from "../utils/metadata";

export default function Support() {
  return (
    <>
      {/* Favicon and manifest */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="theme-color" content="#000000" />
      
      <StandardMetadata
        title="Support mozworth | Independent Music Support"
        description="Support mozworth and independent music. Learn about streaming payouts, follow on social media, and make direct contributions to keep local music alive. 100% of contributions go to recording and promotion."
        url="https://mozworth.music/support/"
        type="website"
        modifiedDate="2025-01-20"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Support mozworth",
          "description": "Support mozworth and independent music. Learn about streaming payouts, follow on social media, and make direct contributions to keep local music alive.",
          "url": "https://mozworth.music/support/",
          "mainEntity": {
            "@type": "MusicGroup",
            "name": "mozworth",
            "url": "https://mozworth.music",
            "image": "https://mozworth.music/mozworth-10-11-2025.webp",
            "genre": ["Indie Rock", "Alternative Rock"],
            "location": {
              "@type": "Place",
              "name": "Austin, Texas"
            },
            "sameAs": createSocialLinks()
          },
          "potentialAction": [
            {
              "@type": "DonateAction",
              "target": "https://cash.app/$mozworth",
              "description": "Support mozworth via Cash App"
            },
            {
              "@type": "BuyAction", 
              "target": "https://mozworth.bandcamp.com/",
              "description": "Buy music on Bandcamp"
            }
          ]
        }}
      />
      
      <div class="flex flex-col min-h-screen">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50">Skip to main content</a>
        <main id="main-content" class="flex-1 flex items-center justify-center relative bg-black">
          {/* Background image */}
          <RotatingBackground />
          {/* Main content */}
          <div class="relative container mx-0 md:mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-4 md:rounded-[10px] bg-black/70">
            <h1 class="text-3xl font-bold mb-8 text-center">Support mozworth</h1>
            
                        <p class="text-white/90 leading-relaxed text-center mb-8">
              Thank you for supporting independent music! <strong>100% of contributions go directly to recording and promotion.</strong>
            </p>
            
            <div class="space-y-6 w-full mt-6">
               {/* Top 3 Actions */}
               <div class="space-y-4 mb-8">
                 {/* Action 1: Donate/Purchase */}
                 <div class="bg-black/40 border border-white/20 rounded-lg">
                   <button 
                     class="w-full px-6 py-4 text-left rounded-lg hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" 
                     onClick={() => {
                       const el = document.getElementById('donate-section');
                       if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
                     }}
                     aria-expanded="false"
                     aria-controls="donate-section"
                     aria-label="Toggle donate or purchase options"
                   >
                     <h2 class="text-xl font-bold text-teal-300">Donate or Purchase</h2>
                     <p class="text-white/70 text-sm mt-1">Direct financial support - the most impactful way to help</p>
                   </button>
                   
                   <div id="donate-section" style="display: none;" class="px-6 pb-6">
                     <div class="grid grid-cols-4 gap-4 mt-4">
                       <a href="https://cash.app/$mozworth" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-colors group focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'support', event_label: 'Cash App', destination: 'cashapp' }); }} aria-label="Send money via Cash App (opens in new tab)">
                         <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-2 group-hover:bg-green-500 transition-colors">
                           <img src="/cashapp.svg" alt="" class="w-6 h-6 filter brightness-0 invert" />
                         </div>
                         <span class="text-sm text-center text-white font-semibold">Cash App</span>
                       </a>
                       
                       <a href="https://mozworth.bandcamp.com/" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-colors group" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'support', event_label: 'Bandcamp', destination: 'bandcamp' }); }}>
                         <div class="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-2 group-hover:bg-cyan-400 transition-colors">
                           <img src="/bandcamp.svg" alt="Bandcamp" class="w-6 h-6 filter brightness-0 invert" />
                         </div>
                         <span class="text-sm text-center text-white font-semibold">Bandcamp</span>
                       </a>
                       
                       <a href="https://mozworth.printful.me/" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-colors group" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'support', event_label: 'Merch', destination: 'printful' }); }}>
                         <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-2 group-hover:bg-purple-500 transition-colors">
                           <span class="text-lg">👕</span>
                     </div>
                         <span class="text-sm text-center text-white font-semibold">Merch</span>
                       </a>
                       
                       <div class="flex flex-col items-center p-4 rounded-xl">
                         <div class="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center mb-2">
                           <span class="text-lg">💿</span>
                         </div>
                         <span class="text-sm text-center text-white/70 font-semibold">Physical (Soon)</span>
                       </div>
                     </div>
                     </div>
                 </div>
                 
                 {/* Action 2: Follow & Stream */}
                 <div class="bg-black/40 border border-white/20 rounded-lg">
                   <button class="w-full px-6 py-4 text-left rounded-lg hover:bg-black/60 transition-colors" onClick={() => {
                     const el = document.getElementById('stream-section');
                     if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
                   }}>
                     <h2 class="text-xl font-bold text-teal-300">Follow & Stream</h2>
                     <p class="text-white/70 text-sm mt-1">Choose high-paying platforms and follow for discovery</p>
                   </button>
                   
                   <div id="stream-section" style="display: none;" class="px-6 pb-6">
                     <p class="text-white/60 text-sm mb-4 mt-4">Higher-paying platforms listed first</p>
                     <div class="grid grid-cols-4 gap-3">
                       <a href="https://tidal.com/browse/artist/49656537" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'streaming', event_label: 'Tidal', destination: 'tidal' }); }}>
                         <div class="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-2 group-hover:bg-gray-800 transition-colors border border-white/20">
                           <img src="/tidal.svg" alt="Tidal" class="w-5 h-5 filter brightness-0 invert" />
                         </div>
                         <span class="text-xs text-center text-white font-semibold">Tidal</span>
                       </a>
                       <a href="https://music.apple.com/us/artist/mozworth/1761894108" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'streaming', event_label: 'Apple Music', destination: 'apple_music' }); }}>
                         <div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mb-2 group-hover:bg-red-400 transition-colors">
                           <img src="/apple-music.svg" alt="Apple Music" class="w-5 h-5 filter brightness-0 invert" />
                     </div>
                         <span class="text-xs text-center text-white font-semibold">Apple Music</span>
                       </a>
                       <a href="https://open.spotify.com/artist/19yvsMNCISApooxkEt0aMO" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'streaming', event_label: 'Spotify', destination: 'spotify' }); }}>
                         <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-2 group-hover:bg-green-400 transition-colors">
                           <img src="/spotify.svg" alt="Spotify" class="w-5 h-5 filter brightness-0 invert" />
                     </div>
                         <span class="text-xs text-center text-white font-semibold">Spotify</span>
                       </a>
                       <a href="https://soundcloud.com/mozworth" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'streaming', event_label: 'SoundCloud', destination: 'soundcloud' }); }}>
                         <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-2 group-hover:bg-orange-400 transition-colors">
                           <img src="/soundcloud.svg" alt="SoundCloud" class="w-5 h-5 filter brightness-0 invert" />
                     </div>
                         <span class="text-xs text-center text-white font-semibold">SoundCloud</span>
                       </a>
                       <a href="https://music.amazon.com/artists/B0DCMD1NQ7/mozworth" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'streaming', event_label: 'Amazon Music', destination: 'amazon_music' }); }}>
                         <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-500 transition-colors">
                           <img src="/amazon-music.svg" alt="Amazon Music" class="w-5 h-5 filter brightness-0 invert" />
                         </div>
                         <span class="text-xs text-center text-white font-semibold">Amazon Music</span>
                       </a>
                       <a href="https://www.youtube.com/@mozworthmusic" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group">
                         <div class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-red-500 transition-colors">
                           <img src="/youtube.svg" alt="YouTube" class="w-5 h-5 filter brightness-0 invert" />
                         </div>
                         <span class="text-xs text-center text-white font-semibold">YouTube</span>
                       </a>
                       <a href="https://www.deezer.com/us/artist/277222071" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'streaming', event_label: 'Deezer', destination: 'deezer' }); }}>
                         <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-purple-500 transition-colors">
                           <img src="/deezer.svg" alt="Deezer" class="w-5 h-5 filter brightness-0 invert" />
                         </div>
                         <span class="text-xs text-center text-white font-semibold">Deezer</span>
                       </a>
                     </div>
                     <p class="text-white/50 text-xs mt-4">
                       <strong>Source:</strong> <a href="https://royaltyexchange.com/blog/how-music-streaming-platforms-calculate-payouts-per-stream-2025?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" class="text-teal-300 hover:underline">Royalty Exchange</a>
                     </p>
                   </div>
               </div>
                 
                 {/* Action 3: Post & Share */}
                 <div class="bg-black/40 border border-white/20 rounded-lg">
                   <button class="w-full px-6 py-4 text-left rounded-lg hover:bg-black/60 transition-colors" onClick={() => {
                     const el = document.getElementById('social-section');
                     if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
                   }}>
                     <h2 class="text-xl font-bold text-teal-300">Post & Share</h2>
                     <p class="text-white/70 text-sm mt-1">Spread the word and build community using #mozworth</p>
                   </button>
                   
                   <div id="social-section" style="display: none;" class="px-6 pb-6">
                     <div class="grid grid-cols-4 gap-3 mt-4">
                       <a href="https://bsky.app/profile/mozworth.music" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'social', event_label: 'Bluesky', destination: 'bluesky' }); }}>
                         <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-400 transition-colors">
                           <img src="/bluesky.svg" alt="Bluesky" class="w-5 h-5 filter brightness-0 invert" />
                         </div>
                         <span class="text-xs text-center text-white font-semibold">Bluesky</span>
                       </a>
                       <a href="https://www.reddit.com/user/mozworth" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group">
                         <div class="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-orange-500 transition-colors">
                           <img src="/reddit.svg" alt="Reddit" class="w-5 h-5 filter brightness-0 invert" />
                         </div>
                         <span class="text-xs text-center text-white font-semibold">Reddit</span>
                       </a>
                       <a href="https://www.tiktok.com/@mozworthmusic" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group">
                         <div class="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-2 group-hover:bg-gray-800 transition-colors border border-pink-400">
                           <img src="/tiktok.svg" alt="TikTok" class="w-5 h-5 filter brightness-0 invert" />
                         </div>
                         <span class="text-xs text-center text-white font-semibold">TikTok</span>
                       </a>
                       <a href="https://www.youtube.com/@mozworthmusic" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group">
                         <div class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-red-500 transition-colors">
                           <img src="/youtube.svg" alt="YouTube" class="w-5 h-5 filter brightness-0 invert" />
                   </div>
                         <span class="text-xs text-center text-white font-semibold">YouTube</span>
                       </a>
                       <a href="https://www.instagram.com/mozworthmusic/" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group">
                         <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2 group-hover:from-purple-400 group-hover:to-pink-400 transition-colors">
                           <img src="/instagram.svg" alt="Instagram" class="w-5 h-5 filter brightness-0 invert" />
                   </div>
                         <span class="text-xs text-center text-white font-semibold">Instagram</span>
                       </a>
                       <a href="https://www.threads.net/@mozworthmusic" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group">
                         <div class="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-2 group-hover:bg-gray-800 transition-colors border border-white/20">
                           <img src="/threads.svg" alt="Threads" class="w-5 h-5 filter brightness-0 invert" />
                   </div>
                         <span class="text-xs text-center text-white font-semibold">Threads</span>
                       </a>
                       <a href="https://www.bandsintown.com/a/15561057-mozworth" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group">
                         <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-500 transition-colors">
                           <img src="/bandsintown.svg" alt="Bandsintown" class="w-5 h-5 filter brightness-0 invert" />
                   </div>
                         <span class="text-xs text-center text-white font-semibold">Bandsintown</span>
                       </a>
                       <a href="https://www.facebook.com/mozworth" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-colors group">
                         <div class="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-600 transition-colors">
                           <img src="/facebook.svg" alt="Facebook" class="w-5 h-5 filter brightness-0 invert" />
                   </div>
                         <span class="text-xs text-center text-white font-semibold">Facebook</span>
                     </a>
                   </div>
                   </div>
                 </div>
               </div>



             </div>
          </div>
        </main>
        <GlobalFooter />
      </div>
    </>
  );
} 