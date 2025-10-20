import { createSignal } from "solid-js";
import RotatingBackground from "../components/RotatingBackground";
import { StandardMetadata, createMusicGroupData } from "../utils/metadata";

export default function EPK() {
  const [showStreamingPanel, setShowStreamingPanel] = createSignal(false);
  const [showSocialPanel, setShowSocialPanel] = createSignal(false);

  return (
    <>
      <StandardMetadata
        title="Press Kit | mozworth"
        description="Official press kit for mozworth. Download press materials, photos, lyrics, credits and press release for latest single Sandpiper. Featured in Plastic Magazine, The Big Takeover, and It's All Indie."
        url="https://mozworth.music/epk/"
        type="music.musician"
        keywords="mozworth, press kit, EPK, electronic press kit, indie rock, alternative rock, Austin Texas, Sandpiper, press materials, press photos, music press"
        author="mozworth"
        modifiedDate="2025-01-15"
        imageAlt="mozworth official press photo"
        structuredData={createMusicGroupData({
          description: "Austin-based indie alternative rock artist. Official press kit featuring latest single Sandpiper.",
          album: {
            "@type": "MusicAlbum",
            name: "Sandpiper",
            datePublished: "2025-09-15",
            image: "https://mozworth.music/sandpiper.webp"
          }
        })}
      />

      <div class="flex flex-col min-h-screen" lang="en">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50">Skip to main content</a>
        
        <main id="main-content" class="flex-1 flex items-center justify-center relative bg-black" role="main">
          <RotatingBackground />
          
          {/* Main content */}
          <div class="relative container mx-auto my-8 max-w-5xl p-4">
            <div class="bg-black/70 rounded-xl p-6 md:p-10 shadow-2xl">
              
              {/* Hero Section */}
              <div class="text-center mb-10">
                <img src="/logo.jpg" alt="mozworth logo" class="w-32 mb-4 mx-auto" />
                <h1 class="text-4xl md:text-5xl font-bold mb-2">Press Kit</h1>
                <p class="text-gray-400 text-lg">Austin-based Indie Alternative Rock Artist</p>
              </div>

              {/* Featured Single */}
              <section class="mb-12 p-6 bg-black/40 rounded-lg border border-white/20" aria-labelledby="featured-release-heading">
                <h2 id="featured-release-heading" class="text-2xl font-bold mb-4 text-teal-400">Featured Release</h2>
                <article class="flex flex-col md:flex-row gap-6 items-center">
                  <iframe
                    src="https://bandcamp.com/EmbeddedPlayer/track=2363697352/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                    seamless
                    class="w-full md:w-80 h-[420px] rounded-lg shadow-lg"
                    title="Sandpiper by mozworth - Bandcamp music player"
                    aria-label="Bandcamp music player for Sandpiper by mozworth"
                    loading="lazy"
                  />
                  <div class="flex-1">
                    <h3 class="text-3xl font-bold mb-2">Sandpiper</h3>
                    <p class="text-gray-400 mb-2">
                      <span class="sr-only">Release type:</span>Single 
                      <span aria-hidden="true"> • </span>
                      <span class="sr-only">Released on:</span>
                      <time datetime="2025-09-15">Released September 15, 2025</time>
                    </p>
                    <p class="text-white/90 mb-4 leading-relaxed">A guitar-driven, ocean-soaked anthem inspired by myth, nature, and the quiet messengers all around us.</p>
                    <a 
                      href="/songs/sandpiper" 
                      class="inline-block px-6 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="View more information about Sandpiper"
                    >
                      More Info
                    </a>
                  </div>
                </article>
              </section>

              {/* Quick Links */}
              <section class="mb-12" aria-labelledby="quick-links-heading">
                <h2 id="quick-links-heading" class="text-2xl font-bold mb-4 text-teal-400">Quick Links</h2>
                <nav aria-label="Press kit quick links">
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <button 
                      type="button"
                      onClick={() => setShowStreamingPanel(true)}
                      aria-label="Open streaming platforms panel"
                      class="px-4 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white hover:text-black transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Streaming
                    </button>
                    <button 
                      type="button"
                      onClick={() => setShowSocialPanel(true)}
                      aria-label="Open social media platforms panel"
                      class="px-4 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white hover:text-black transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Social Media
                    </button>
                    <a 
                      href="https://www.pressjunkiepr.com/contact/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Contact mozworth via Press Junkie PR (opens in new tab)"
                      class="px-4 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white hover:text-black transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Contact
                    </a>
                    <a 
                      href="/music"
                      class="px-4 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white hover:text-black transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Discography
                    </a>
                    <a 
                      href="/tour"
                      class="px-4 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white hover:text-black transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Tour Dates
                    </a>
                    <a 
                      href="/press"
                      class="px-4 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white hover:text-black transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Press Coverage
                    </a>
                  </div>
                </nav>
              </section>

              {/* Download Assets */}
              <section class="mb-12 p-6 bg-black/40 rounded-lg border border-white/20" aria-labelledby="download-assets-heading">
                <h2 id="download-assets-heading" class="text-2xl font-bold mb-4 text-teal-400">Download Assets</h2>
                <p class="text-gray-400 mb-4">High-resolution press materials for media use</p>
                <nav aria-label="Downloadable press materials">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <a 
                      href="/sandpiper.webp" 
                      download="mozworth-sandpiper-cover-art.webp"
                      class="flex items-center px-4 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white hover:text-black transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="Download Sandpiper cover art (high-resolution image)"
                    >
                      <div>
                        <div class="font-semibold">Sandpiper Cover Art</div>
                        <div class="text-xs opacity-70">High-resolution image</div>
                      </div>
                    </a>
                    <a 
                      href="/mozworth-10-11-2025.webp" 
                      download="mozworth-press-photo.webp"
                      class="flex items-center px-4 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white hover:text-black transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="Download official mozworth press photo (high-resolution)"
                    >
                      <div>
                        <div class="font-semibold">Press Photo</div>
                        <div class="text-xs opacity-70">Official artist photo</div>
                      </div>
                    </a>
                    <a 
                      href="#press-release" 
                      class="flex items-center px-4 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white hover:text-black transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="Jump to Sandpiper press release section below"
                    >
                      <div>
                        <div class="font-semibold">Press Release</div>
                        <div class="text-xs opacity-70">Sandpiper - Full text below</div>
                      </div>
                    </a>
                    <a 
                      href="https://www.pressjunkiepr.com/clients/mozworth/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center px-4 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white hover:text-black transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="Visit external press kit on Press Junkie PR website (opens in new tab)"
                    >
                      <div>
                        <div class="font-semibold">External EPK</div>
                        <div class="text-xs opacity-70">Press Junkie PR</div>
                      </div>
                    </a>
                  </div>
                </nav>
              </section>

              {/* Press Release */}
              <section id="press-release" class="mb-12 p-6 bg-black/40 rounded-lg border border-white/20" aria-labelledby="press-release-heading">
                <h2 id="press-release-heading" class="text-2xl font-bold mb-6 text-teal-400">Press Release</h2>
                <article class="prose prose-invert max-w-none text-white/90 leading-relaxed">
                  <p class="font-bold mb-4">FOR IMMEDIATE RELEASE</p>
                  <p class="mb-4 text-xl font-semibold">mozworth Bridges Worlds with New Summer Single "Sandpiper"</p>
                  <p class="mb-4 italic">A guitar-driven, ocean-soaked anthem inspired by myth, nature, and the quiet messengers all around us</p>
                  <p class="mb-4"><strong>AUSTIN, TX – August 21, 2025</strong> — South Austin songwriter mozworth releases Sandpiper, a sweeping new single shaped by the rhythms of the Gulf Coast, the weight of mythology, and the search for answers in uncertain times. It follows this spring's The Sky Is Falling and acts as its emotional companion — where one named the fracture, the other seeks the bridge.</p>
                  <p class="mb-4">The song took shape during a family trip to Surfside Beach, Texas — days filled with skimboarding, saltwater, and long walks along the shore. It was there that the sandpiper first caught mozworth's attention. "When you're walking along the coastline, you have the ocean to one side and land to the other. Ahead of you is that narrow strip of wet sand. That's where you find the sandpiper," he says.</p>
                  <p class="mb-4">Drawn deeper, he found the sandpiper in Native American, Celtic, and Japanese myths — as a navigator, a survivor, a lost soul, and a messenger between worlds. "The idea of the messenger grabbed me the most", says mozworth.  "I started to see the sandpiper as inspiration. If this bird can merge two wildly different words, perhaps so can we. I love the idea that the answer is hidden in plain sight in the form of this humble creature."</p>
                  <p class="mb-4">The recording process was loose and instinctual. "I had a lot of lyrical ideas, but no sound yet," he says. Starting with a one-mic drum improv and a bassline, he followed what felt good. Listening back, what is now the driving bassline of the song was found. A guitar melody soon took shape using his daughter's Harley Benton JA-60, now a fixture of the song's identity. "That guitar — it just sang. The leads started sounding like birds to me."</p>
                  <p class="mb-4">The band brought the track to life. Longtime collaborator Ken Mockler locked in the drum parts before relocating to Denver, making this one of his last recordings with the group. "Ken loved the chorus — we really wrestled with the verses to make sure that left room for the chorus to break through" says mozworth. Guitarist Mark Heaps added shimmering textures and dynamic contrast, while bassist Jack Schultz nailed a tone the whole group instantly fell in love with.</p>
                  <p class="mb-4">The final mix, crafted by Steve Glaze at Tone Freq Studios, opens with the nostalgic click of a guitar cable — a subtle link to the lo-fi textures of '90s alt-rock. If you play The Sky Is Falling first, it fades out like a radio switching off. Sandpiper clicks right back on — not planned, but somehow perfect.</p>
                  <p class="mb-4">The single was recorded at mozworth's home studio in South Austin, drums at Ken's place just across town. "We wanted to capture who we are right now — together, in this moment," he says.</p>
                  <p class="mb-4">With Ken's move, drummer Mike Hall steps in for the Sandpiper single release. Introduced by Ken and already a kindred spirit, Mike brings a new heartbeat to mozworth's evolving sound — raw, melodic, and rooted in the human experience.</p>
                  <p class="mb-4 font-semibold">Sandpiper drops September 15, 2025</p>
                  <p class="mb-4">For media inquiries, interviews, or press materials, please contact:</p>
                  <p class="mb-1">Press Junkie PR<br />ryan@pressjunkiepr.com<br /><a href="https://www.pressjunkiepr.com" target="_blank" rel="noopener" class="text-teal-300 underline hover:text-teal-200">www.pressjunkiepr.com</a></p>
                </article>
              </section>

              {/* Press Coverage */}
              <section class="mb-12 p-6 bg-black/40 rounded-lg border border-white/20" aria-labelledby="press-coverage-heading">
                <h2 id="press-coverage-heading" class="text-2xl font-bold mb-6 text-teal-400">Press Coverage</h2>
                <div class="space-y-6">
                  <div class="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                    <h3 class="text-xl font-semibold mb-2">Plastic Magazine</h3>
                    <p class="text-gray-400 text-sm mb-3">September 22, 2025</p>
                    <p class="text-white/80 mb-3 leading-relaxed">
                      Plastic Magazine praises "Sandpiper" as "a spectacular alternative jam that's timeless and truly absorbing throughout," highlighting the track's "intricate ebb and flow between the mellow verses and charge of exhilarating choruses." The review celebrates mozworth's "songwriting flair and performance talent" and calls it "an incredible display" of his musical evolution.
                    </p>
                    <a href="https://plasticmag.co.uk/2025/09/mozworth-drops-new-single-sandpiper/" target="_blank" rel="noopener" class="text-teal-300 hover:text-teal-200 underline font-medium">
                      Read Full Review →
                    </a>
                  </div>
                  <div class="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                    <h3 class="text-xl font-semibold mb-2">The Big Takeover</h3>
                    <p class="text-gray-400 text-sm mb-3">September 17, 2025</p>
                    <p class="text-white/80 mb-3 leading-relaxed">
                      The Big Takeover praises "Sandpiper" for its depth and duality, describing it as music that "ebbs and flows between folky understatement and the roar of rock and roll at its finest" and calling it "a blend of indie delicacy, rock muscle, psychedelic colour, and surf finesse."
                    </p>
                    <a href="https://bigtakeover.com/recordings/mozworth-sandpiper-balanced-scale-media" target="_blank" rel="noopener" class="text-teal-300 hover:text-teal-200 underline font-medium">
                      Read Full Review →
                    </a>
                  </div>
                  <div class="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                    <h3 class="text-xl font-semibold mb-2">It's All Indie</h3>
                    <p class="text-gray-400 text-sm mb-3">September 14, 2025</p>
                    <p class="text-white/80 mb-3 leading-relaxed">
                      It's All Indie describes "Sandpiper" as "a clear-cut slice of shimmering indie-pop with a slightly scuzzy undertone of grunge guitar sounds" and praises the track as "a breezy indie-pop gem with grungy undertones, jangly new-wave hooks, and lush melodies."
                    </p>
                    <a href="https://www.itsallindie.com/2025/09/mozworth-reveals-bold-new-single.html" target="_blank" rel="noopener" class="text-teal-300 hover:text-teal-200 underline font-medium">
                      Read Full Review →
                    </a>
                  </div>
                </div>
                <div class="mt-6">
                  <a href="/press" class="inline-block px-6 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-400 transition-colors">
                    View All Press Coverage
                  </a>
                </div>
              </section>

              {/* Credits */}
              <section class="mb-12 p-6 bg-black/40 rounded-lg border border-white/20" aria-labelledby="credits-heading">
                <h2 id="credits-heading" class="text-2xl font-bold mb-4 text-teal-400">Credits - Sandpiper</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/90">
                  <div>
                    <p class="mb-2">Songwriting by Michael Bosworth</p>
                    <p class="mb-2">Lyrics by Michael Bosworth</p>
                    <p class="mb-2">Composed by Michael Bosworth, Ken Mockler, Mark Heaps, and Jack Schultz</p>
                    <p class="mb-2">Produced by Michael Bosworth</p>
                  </div>
                  <div>
                    <p class="mb-2">Drums performed by Mike Hall</p>
                    <p class="mb-2">Guitar performed by Mark Heaps</p>
                    <p class="mb-2">Bass performed by Jack Schultz</p>
                    <p class="mb-2">Vocals and Guitar performed by Michael Bosworth</p>
                  </div>
                  <div class="md:col-span-2">
                    <p class="mb-2">Guitars and vocals recorded by Michael Bosworth at mozworth's home studio in South Austin</p>
                    <p class="mb-2">Drums recorded by Mike Hall in South Austin</p>
                    <p class="mb-2">Mixed by Steven Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="text-teal-300 underline hover:text-teal-200">Tone Freq Studios</a></p>
                    <p class="mb-2">Mastered by Steven Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="text-teal-300 underline hover:text-teal-200">Tone Freq Studios</a></p>
                    <p class="mb-2">Cover art watercolor by Jessica Bosworth</p>
                    <p class="mb-2">Cover art composition and design by Mark Heaps</p>
                    <p class="mb-2">ISRC: QZZ782549784</p>
                  </div>
                </div>
              </section>

              {/* Artist Bio */}
              <section class="mb-12 p-6 bg-black/40 rounded-lg border border-white/20" aria-labelledby="about-heading">
                <h2 id="about-heading" class="text-2xl font-bold mb-4 text-teal-400">About mozworth</h2>
                <div class="text-white/90 leading-relaxed space-y-4">
                  <p>
                    mozworth is the musical project of Austin-based singer-songwriter Michael "Boz" Bosworth. Drawing from the depths of '90s alternative rock and the vulnerability of modern indie, mozworth creates music that feels both timeless and urgently present.
                  </p>
                  <p>
                    With a self-titled debut album released in November 2024, mozworth has garnered attention from KUTX (Song of the Day) and international music publications. His songwriting blends personal narrative with universal themes, crafted during isolated writing sessions in remote locations from Lake Superior to Colorado Springs to the Gulf Coast.
                  </p>
                  <p>
                    Now based in South Austin with his family, mozworth continues to evolve his sound alongside collaborators Ken Mockler (drums), Mark Heaps (guitar), and Jack Schultz (bass), creating music that captures the complexity of modern life with honesty, melody, and raw power.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section class="mb-12 p-6 bg-black/40 rounded-lg border border-white/20 text-center" aria-labelledby="contact-heading">
                <h2 id="contact-heading" class="text-2xl font-bold mb-4 text-teal-400">Media Contact</h2>
                <p class="text-white/90 mb-4">For interviews, press materials, or media inquiries:</p>
                <div class="text-lg mb-4">
                  <p class="font-semibold">Press Junkie PR</p>
                  <p class="text-gray-400">Austin, TX</p>
                  <a href="mailto:ryan@pressjunkiepr.com" class="text-teal-300 hover:text-teal-200 underline">ryan@pressjunkiepr.com</a>
                  <p class="mt-2">
                    <a href="https://www.pressjunkiepr.com" target="_blank" rel="noopener" class="text-teal-300 hover:text-teal-200 underline">www.pressjunkiepr.com</a>
                  </p>
                </div>
                <a 
                  href="https://www.pressjunkiepr.com/contact/"
                  target="_blank"
                  rel="noopener"
                  class="inline-block px-8 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-400 transition-colors"
                >
                  Contact Us
                </a>
              </section>

              {/* Footer Links */}
              <section class="text-center">
                <div class="flex flex-wrap justify-center gap-4 text-sm">
                  <a href="/" class="text-gray-400 hover:text-teal-300 transition-colors">Home</a>
                  <span class="text-gray-600">•</span>
                  <a href="/music" class="text-gray-400 hover:text-teal-300 transition-colors">Music</a>
                  <span class="text-gray-600">•</span>
                  <a href="/tour" class="text-gray-400 hover:text-teal-300 transition-colors">Tour</a>
                  <span class="text-gray-600">•</span>
                  <a href="/press" class="text-gray-400 hover:text-teal-300 transition-colors">Press</a>
                  <span class="text-gray-600">•</span>
                  <a href="/support" class="text-gray-400 hover:text-teal-300 transition-colors">Support</a>
                </div>
              </section>

            </div>
          </div>
        </main>

        {/* Streaming Panel */}
        {showStreamingPanel() && (
          <div 
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            role="dialog"
            aria-modal="true"
            aria-labelledby="streaming-panel-title"
          >
            <div class="bg-black/90 rounded-xl p-10 relative flex flex-col items-center w-full max-w-md mx-4">
              <h2 id="streaming-panel-title" class="text-2xl font-bold mb-6">Listen on</h2>
              <button 
                class="absolute top-4 right-4 text-3xl text-white hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400" 
                onClick={() => setShowStreamingPanel(false)}
                aria-label="Close streaming platforms"
              >&times;</button>
              <a href="https://open.spotify.com/track/7odYoITooNmjUhi81htXk4?si=d665c12d45cc460f" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/spotify.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Spotify
              </a>
              <a href="https://music.apple.com/us/song/sandpiper/1834623310" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/apple-music.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Apple Music
              </a>
              <a href="https://mozworth.bandcamp.com/track/sandpiper" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/bandcamp.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Bandcamp
              </a>
              <a href="https://www.youtube.com/watch?v=Mq1T76H5TLQ&list=OLAK5uy_kcqChVTW_E_Y-etU1YweSXWEEj-mM-Z8M&index=1" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/youtube.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />YouTube
              </a>
              <a href="https://tidal.com/browse/track/455287849" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/tidal.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Tidal
              </a>
              <a href="https://music.amazon.com/tracks/B0FN573KFW?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_NBSjdSmsLdVdbJaBHuXUWG3oc" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/amazon-music.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />Amazon Music
              </a>
              <a href="https://soundcloud.com/mozworth/sandpiper" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/soundcloud.svg" alt="" class="w-7 h-7 mr-3 invert brightness-0" />SoundCloud
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
            <div class="bg-black/90 rounded-xl p-10 relative flex flex-col items-center w-full max-w-md mx-4">
              <h2 id="social-panel-title" class="text-2xl font-bold mb-6">Follow on</h2>
              <button 
                class="absolute top-4 right-4 text-3xl text-white hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400" 
                onClick={() => setShowSocialPanel(false)}
                aria-label="Close social media platforms"
              >&times;</button>
              <a href="https://bsky.app/profile/mozworth.music" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/bluesky.svg" alt="Bluesky" class="w-7 h-7 mr-3 invert brightness-0" />Bluesky
              </a>
              <a href="https://www.instagram.com/mozworthmusic/" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/instagram.svg" alt="Instagram" class="w-7 h-7 mr-3 invert brightness-0" />Instagram
              </a>
              <a href="https://www.tiktok.com/@mozworthmusic" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/tiktok.svg" alt="TikTok" class="w-7 h-7 mr-3 invert brightness-0" />TikTok
              </a>
              <a href="https://www.youtube.com/@mozworthmusic" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/youtube.svg" alt="YouTube" class="w-7 h-7 mr-3 invert brightness-0" />YouTube
              </a>
              <a href="https://www.threads.net/@mozworthmusic" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/threads.svg" alt="Threads" class="w-7 h-7 mr-3 invert brightness-0" />Threads
              </a>
              <a href="https://www.facebook.com/mozworth" class="flex items-center w-full mb-2 text-white text-base rounded-full border-2 border-white/30 px-5 py-2 font-medium hover:bg-white hover:text-black transition-colors" target="_blank" rel="noopener">
                <img src="/facebook.svg" alt="Facebook" class="w-7 h-7 mr-3 invert brightness-0" />Facebook
              </a>
            </div>
          </div>
        )}

        <footer class="w-full text-center text-xs text-gray-400 py-3 border-t border-white/10 bg-black/70">
          &copy; {new Date().getFullYear()} mozworth. All rights reserved.
        </footer>
      </div>
    </>
  );
}

