// eslint-disable-next-line
declare global { interface Window { gtag?: (...args: any[]) => void } }

export default function Support() {
  return (
    <>
      <title>Support mozworth | Independent Music Support Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Support mozworth and independent music. Learn about streaming payouts, follow on social media, and make direct contributions to keep local music alive. 100% of contributions go to recording and promotion." />
      <meta name="last-modified" content="2025-01-20" />
      <link rel="canonical" href="https://mozworth.music/support/" />
      
      {/* Favicon and manifest */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="theme-color" content="#000000" />
      
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
        "@type": "WebPage",
        "name": "Support mozworth",
        "description": "Support mozworth and independent music. Learn about streaming payouts, follow on social media, and make direct contributions to keep local music alive.",
        "url": "https://mozworth.music/support/",
        "mainEntity": {
          "@type": "MusicGroup",
          "name": "mozworth",
          "url": "https://mozworth.music",
          "image": "https://mozworth.music/mozworth.webp",
          "genre": ["Indie Rock", "Alternative Rock"],
          "location": {
            "@type": "Place",
            "name": "Austin, Texas"
          },
          "sameAs": [
            "https://open.spotify.com/artist/19yvsMNCISApooxkEt0aMO",
            "https://music.apple.com/us/artist/mozworth/1761894108",
            "https://mozworth.bandcamp.com",
            "https://www.youtube.com/@mozworthmusic",
            "https://soundcloud.com/mozworth",
            "https://www.instagram.com/mozworthmusic/",
            "https://www.tiktok.com/@mozworthmusic",
            "https://bsky.app/profile/mozworth.music",
            "https://www.facebook.com/mozworth"
          ]
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
      })}-->`} />
      
      {/* SEO & Social Meta Tags */}
      <meta property="og:title" content="Support mozworth | Independent Music Support" />
      <meta property="og:description" content="Support mozworth and independent music. Learn about streaming payouts, follow on social media, and make direct contributions. 100% goes to recording and promotion." />
      <meta property="og:image" content="https://mozworth.music/mozworth.webp" />
      <meta property="og:url" content="https://mozworth.music/support/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Support mozworth | Independent Music Support" />
      <meta name="twitter:description" content="Support mozworth and independent music. Learn about streaming payouts and make direct contributions. 100% goes to recording and promotion." />
      <meta name="twitter:image" content="https://mozworth.music/mozworth.webp" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      <div class="flex flex-col min-h-screen">
        <main class="flex-1 flex items-center justify-center relative bg-black">
          {/* Background image */}
          <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ 'background-image': "url('/mozworth.webp')" }} />
          {/* Main content */}
          <div class="relative container mx-0 md:mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-4 md:rounded-[10px] bg-black/70">
            <h1 class="text-3xl font-bold mb-8 text-center">Support mozworth</h1>
            
            <p class="text-white/90 leading-relaxed text-left mb-2">
              Thank you for supporting independent music! <strong>100% of all money coming into the mozworth project goes directly to recording, promoting, and whatever the project needs.</strong> Your support makes it that much easier to keep making music.
            </p>
            
                         <div class="space-y-12 w-full mt-6 text-left">
               {/* Direct Support */}
               <div class="support-section">
                 <h2 class="text-2xl font-bold mb-4 text-teal-300">Direct Support</h2>
                 <p class="text-white/80 mb-6 leading-relaxed">
                   The most effective way to support independent artists is through donations or direct purchases.
                 </p>
                 
                 <div class="space-y-4">
                   <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                     <h3 class="font-semibold text-white mb-2">Cash App</h3>
                     <p class="text-white/70 mb-3 text-sm">100% of your contribution goes directly to the artist for creating new music and supporting the local scene.</p>
                     <a href="https://cash.app/$mozworth" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-500 transition-colors" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'support', event_label: 'Cash App', destination: 'cashapp' }); }}>
                       <img src="/cashapp.svg" alt="Cash App" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Send $mozworth
                     </a>
                   </div>
                   
                                                             <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                       <h3 class="font-semibold text-white mb-2">Digital Downloads</h3>
                       <p class="text-white/70 mb-3 text-sm">Artists keep 85-90% of sales after payment processing fees. You can buy individual tracks or entire albums at once, often at a better value than streaming.</p>
                                            <a href="https://mozworth.bandcamp.com/" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-cyan-500 text-white font-semibold shadow hover:bg-cyan-400 transition-colors" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'support', event_label: 'Bandcamp', destination: 'bandcamp' }); }}>
                       <img src="/bandcamp.svg" alt="Bandcamp" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Buy on Bandcamp
                     </a>
                     </div>
                   
                   <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                     <h3 class="font-semibold text-white mb-2">Physical Media</h3>
                     <p class="text-white/70 mb-3 text-sm">CDs and vinyl records are in the works! Physical media provides the highest revenue share for artists and creates lasting connections with fans.</p>
                     <div class="text-sm text-white/60 italic">
                       Coming soon...
                     </div>
                   </div>
                   
                                        <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                       <h3 class="font-semibold text-white mb-2">Merchandise</h3>
                       <p class="text-white/70 mb-3 text-sm">Printful gives artists 15-25% profit margins on merch sales. Wearing or using mozworth merch is your own way to promote! Let mozworth know about specific styles of merch you'd like to see!</p>
                                            <a href="https://mozworth.printful.me/" target="_blank" rel="noopener" class="inline-block px-6 py-2 rounded bg-teal-600 text-white font-semibold shadow hover:bg-teal-500 transition-colors" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'support', event_label: 'Merch', destination: 'printful' }); }}>
                       Shop Merch
                     </a>
                     </div>
                 </div>
               </div>

               {/* Streaming Smart */}
               <div class="support-section">
                 <h2 class="text-2xl font-bold mb-4 text-teal-300">Streaming Smart</h2>
                 <p class="text-white/80 mb-6 leading-relaxed">
                   Not all streaming platforms pay artists equally. Some platforms pay significantly more per stream than others. By choosing platforms that pay artists better, you can maximize your support while still enjoying your favorite music. Following artists on these platforms also helps them appear in recommendations and curated playlists.
                 </p>

                 
                                    <div class="space-y-4">
                     <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                       <h3 class="font-semibold text-white mb-2">Tidal</h3>
                       <p class="text-white/70 mb-3 text-sm">Pays artists $0.01284 per stream - the highest rate among major platforms. Following helps artists appear in recommendations and curated playlists.</p>
                                            <a href="https://tidal.com/browse/artist/49656537" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-black text-white font-semibold shadow hover:bg-gray-800 transition-colors border border-white/20" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'streaming', event_label: 'Tidal', destination: 'tidal' }); }}>
                       <img src="/tidal.svg" alt="Tidal" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Follow on Tidal
                     </a>
                     </div>
                     
                     <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                       <h3 class="font-semibold text-white mb-2">Apple Music</h3>
                       <p class="text-white/70 mb-3 text-sm">Pays artists $0.01 per stream. Adding artists to favorites helps them appear in recommendations and curated playlists.</p>
                                            <a href="https://music.apple.com/us/artist/mozworth/1761894108" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-red-500 text-white font-semibold shadow hover:bg-red-400 transition-colors" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'streaming', event_label: 'Apple Music', destination: 'apple_music' }); }}>
                       <img src="/apple-music.svg" alt="Apple Music" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Add to Favorites
                     </a>
                     </div>
                     
                     <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                       <h3 class="font-semibold text-white mb-2">SoundCloud</h3>
                       <p class="text-white/70 mb-3 text-sm">Pays artists $0.003 per stream. Great for independent artists and music discovery. Following helps with algorithm recommendations.</p>
                                            <a href="https://soundcloud.com/mozworth" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-orange-500 text-white font-semibold shadow hover:bg-orange-400 transition-colors" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'streaming', event_label: 'SoundCloud', destination: 'soundcloud' }); }}>
                       <img src="/soundcloud.svg" alt="SoundCloud" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Follow on SoundCloud
                     </a>
                     </div>
                     
                     <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                       <h3 class="font-semibold text-white mb-2">Spotify</h3>
                       <p class="text-white/70 mb-3 text-sm">Pays artists $0.00318 per stream. Following increases playlist consideration and discovery opportunities.</p>
                       <a href="https://open.spotify.com/artist/19yvsMNCISApooxkEt0aMO" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-green-500 text-white font-semibold shadow hover:bg-green-400 transition-colors" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'streaming', event_label: 'Spotify', destination: 'spotify' }); }}>
                         <img src="/spotify.svg" alt="Spotify" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                         Follow on Spotify
                       </a>
                     </div>
                     
                     <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                       <h3 class="font-semibold text-white mb-2">YouTube Music</h3>
                       <p class="text-white/70 mb-3 text-sm">Pays artists $0.00200 per stream - one of the lowest rates among major platforms. Following still helps with algorithm recommendations.</p>
                       <a href="https://www.youtube.com/@mozworthmusic" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-red-600 text-white font-semibold shadow hover:bg-red-500 transition-colors">
                         <img src="/youtube.svg" alt="YouTube" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                         Subscribe on YouTube
                       </a>
                     </div>
                   </div>
                   
                   <p class="text-white/60 text-sm mt-6">
                     <strong>Source:</strong> <a href="https://royaltyexchange.com/blog/how-music-streaming-platforms-calculate-payouts-per-stream-2025?utm_source=chatgpt.com" target="_blank" rel="noopener" class="text-teal-300 hover:underline">Royalty Exchange - How Music Streaming Platforms Calculate Payouts Per Stream 2025</a>
                   </p>
                 
               </div>

               {/* Social Media */}
               <div class="support-section">
                 <h2 class="text-2xl font-bold mb-4 text-teal-300">Social Media</h2>
                 <p class="text-white/80 mb-6 leading-relaxed">
                   Following artists on social media helps them build community and get discovered by new listeners. Higher follower counts increase visibility, algorithm recommendations, and opportunities for collaborations and features. Some platforms are better for artists than others. <span class="block mt-2">Want to go the extra mile? Share your own posts about mozworth and include <strong>#mozworth</strong> so we can find and share your support!</span>
                 </p>

                 
                 <div class="space-y-4">
                   <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                     <h3 class="font-semibold text-white mb-2">Bluesky</h3>
                     <p class="text-white/70 mb-3 text-sm">Decentralized platform that gives users control over their data and content. No algorithm manipulation, authentic community connections, and better artist-fan relationships.</p>
                     <a href="https://bsky.app/profile/mozworth.music" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-blue-500 text-white font-semibold shadow hover:bg-blue-400 transition-colors" onClick={() => { if (window.gtag) window.gtag('event', 'support_click', { event_category: 'social', event_label: 'Bluesky', destination: 'bluesky' }); }}>
                       <img src="/bluesky.svg" alt="Bluesky" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Follow @mozworth.music
                     </a>
                   </div>
                   
                   <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                     <h3 class="font-semibold text-white mb-2">Reddit</h3>
                     <p class="text-white/70 mb-3 text-sm">Community-driven platform where artists can engage with niche audiences and music enthusiasts. Good for authentic discussions and fan engagement.</p>
                     <a href="https://www.reddit.com/user/mozworth" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-orange-600 text-white font-semibold shadow hover:bg-orange-500 transition-colors">
                       <img src="/reddit.svg" alt="Reddit" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Follow on Reddit
                     </a>
                   </div>
                   
                   <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                     <h3 class="font-semibold text-white mb-2">TikTok</h3>
                     <p class="text-white/70 mb-3 text-sm">Viral potential and algorithm-driven discovery can introduce artists to millions of new listeners. Strong music discovery features and trend-driven exposure.</p>
                     <a href="https://www.tiktok.com/@mozworthmusic" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-black text-white font-semibold shadow hover:bg-gray-800 transition-colors border border-pink-400">
                       <img src="/tiktok.svg" alt="TikTok" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Follow @mozworthmusic
                     </a>
                   </div>
                   
                   <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                     <h3 class="font-semibold text-white mb-2">YouTube</h3>
                     <p class="text-white/70 mb-3 text-sm">Long-form content and music videos help artists build deeper connections with fans. Algorithm can be unpredictable but offers high potential reach.</p>
                     <a href="https://www.youtube.com/@mozworthmusic" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-red-600 text-white font-semibold shadow hover:bg-red-500 transition-colors">
                       <img src="/youtube.svg" alt="YouTube" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Subscribe
                     </a>
                   </div>
                   
                   <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                     <h3 class="font-semibold text-white mb-2">Instagram</h3>
                     <p class="text-white/70 mb-3 text-sm">Builds community and helps artists get discovered through hashtags and recommendations. Good for visual content and fan engagement.</p>
                     <a href="https://www.instagram.com/mozworthmusic/" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:from-purple-400 hover:to-pink-400 transition-colors">
                       <img src="/instagram.svg" alt="Instagram" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Follow @mozworthmusic
                     </a>
                   </div>
                   
                   <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                     <h3 class="font-semibold text-white mb-2">Threads</h3>
                     <p class="text-white/70 mb-3 text-sm">Meta's text-based platform that connects with Instagram. Good for longer-form content and community building with existing Instagram followers.</p>
                     <a href="https://www.threads.net/@mozworthmusic" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-black text-white font-semibold shadow hover:bg-gray-800 transition-colors border border-white/20">
                       <img src="/threads.svg" alt="Threads" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Follow @mozworthmusic
                     </a>
                   </div>
                   
                   <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                     <h3 class="font-semibold text-white mb-2">Bandsintown</h3>
                     <p class="text-white/70 mb-3 text-sm">Concert discovery platform that helps artists promote shows and build local fan bases. Great for tour announcements and event updates.</p>
                     <a href="https://www.bandsintown.com/a/15561057-mozworth" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-500 transition-colors">
                       <img src="/bandsintown.svg" alt="Bandsintown" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Follow on Bandsintown
                     </a>
                   </div>
                   
                   <div class="bg-black/30 border border-white/10 rounded-lg p-4">
                     <h3 class="font-semibold text-white mb-2">Facebook</h3>
                     <p class="text-white/70 mb-3 text-sm">Traditional social platform with broad reach and event promotion capabilities. Good for older demographics and local community building.</p>
                     <a href="https://www.facebook.com/mozworth" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-2 rounded bg-blue-700 text-white font-semibold shadow hover:bg-blue-600 transition-colors">
                       <img src="/facebook.svg" alt="Facebook" class="w-5 h-5 mr-2 filter brightness-0 invert" />
                       Follow on Facebook
                     </a>
                   </div>
                 </div>
               </div>


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