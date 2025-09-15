import { createSignal, createEffect, createMemo } from "solid-js";
import { useLocation } from "@solidjs/router";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import ShareButton from "../../components/ShareButton";
import LeaveNoteModal from "../../components/LeaveNoteModal";
import ReleaseMeta from "../../components/ReleaseMeta";

export default function Sandpiper() {
  const location = useLocation();
  const isForcedAnniversary = createMemo(() => {
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const sp = new URLSearchParams(search);
    return sp.has('anniversary') && sp.get('anniversary') !== '0' && sp.get('anniversary') !== 'false';
  });
  const [tab, setTab] = createSignal("Lyrics");
  const [showLeaveNoteModal, setShowLeaveNoteModal] = createSignal(false);

  // Bandcamp embedded player
  const cover = (
    <iframe
      src="https://bandcamp.com/EmbeddedPlayer/track=2363697352/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
      class="cover-art w-full max-w-[380px] min-h-[430px] md:min-h-[470px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      title="Sandpiper by mozworth"
    >
    </iframe>
  );

  // Info section
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Sandpiper</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; Sandpiper
      </div>
      <ReleaseMeta
        releaseDate="2025-09-15"
        prefix="Released"
        showConfetti={false}
        forceConfetti={isForcedAnniversary()}
      />
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <button
          onClick={() => setShowLeaveNoteModal(true)}
          class="inline-block px-5 py-2 rounded bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 w-full text-left"
        >
          Leave a Note
        </button>
        <a
          href="https://mozworth.bandcamp.com/track/sandpiper"
          target="_blank"
          rel="noopener"
          class="inline-block px-5 py-2 mt-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors w-full"
        >
          Purchase
        </a>
        <a href="/support" 
          class="inline-block px-5 py-2 mt-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Support
        </a>
        <ShareButton
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/sandpiper/"}
          title="Sandpiper by mozworth"
          text="Check out this song by mozworth!"
        />
      </div>
    </>
  );

  // Tabbed content using TabbedContent component
  const tabs = createMemo(() => [
    {
      label: "Lyrics",
      content: (
        <div class="text-base md:text-lg leading-relaxed text-white opacity-90">
          <pre class="whitespace-pre-line font-sans">
{`You are a messenger
Of land and sea
You know the tides
Now you know me

You are the soul
Of a sailor lost
You forecast the storm
You show me the cost

Natural and mystical
Help me make sense of my world

Sandpiper show me the way!
Sandpiper show me the way!

You weathered the storm
You survived
You command the shore
You're a samurai

You are a voyager
An ocean guide
You navigate your world
Now help me with mine

Natural and mystical
Help me make sense of my world

Sandpiper show me the way!
Sandpiper show me the way!


Sandpiper show me the way!
Sandpiper show me the way!`}
          </pre>
        </div>
      ),
    },
    {
      label: "Press Release",
      content: (
        <div class="whitespace-pre-line text-base md:text-lg leading-relaxed text-white opacity-90">
          <p class="mb-4 font-bold">FOR IMMEDIATE RELEASE</p>
          <p class="mb-4">mozworth Bridges Worlds with New Summer Single “Sandpiper”</p>
          <p class="mb-4 italic">A guitar-driven, ocean-soaked anthem inspired by myth, nature, and the quiet messengers all around us</p>
          <p class="mb-4">AUSTIN, TX – August 21, 2025 — South Austin songwriter mozworth releases Sandpiper, a sweeping new single shaped by the rhythms of the Gulf Coast, the weight of mythology, and the search for answers in uncertain times. It follows this spring’s The Sky Is Falling and acts as its emotional companion — where one named the fracture, the other seeks the bridge.</p>
          <p class="mb-4">The song took shape during a family trip to Surfside Beach, Texas — days filled with skimboarding, saltwater, and long walks along the shore. It was there that the sandpiper first caught mozworth’s attention. “When you’re walking along the coastline, you have the ocean to one side and land to the other. Ahead of you is that narrow strip of wet sand. That’s where you find the sandpiper,” he says.</p>
          <p class="mb-4">Drawn deeper, he found the sandpiper in Native American, Celtic, and Japanese myths — as a navigator, a survivor, a lost soul, and a messenger between worlds. “The idea of the messenger grabbed me the most”, says mozworth.  “I started to see the sandpiper as inspiration. If this bird can merge two wildly different words, perhaps so can we. I love the idea that the answer is hidden in plain sight in the form of this humble creature.”</p>
          <p class="mb-4">The recording process was loose and instinctual. “I had a lot of lyrical ideas, but no sound yet,” he says. Starting with a one-mic drum improv and a bassline, he followed what felt good. Listening back, what is now the driving bassline of the song was found. A guitar melody soon took shape using his daughter’s Harley Benton JA-60, now a fixture of the song’s identity. “That guitar — it just sang. The leads started sounding like birds to me.”</p>
          <p class="mb-4">The band brought the track to life. Longtime collaborator Ken Mockler locked in the drum parts before relocating to Denver, making this one of his last recordings with the group. “Ken loved the chorus — we really wrestled with the verses to make sure that left room for the chorus to break through” says mozworth. Guitarist Mark Heaps added shimmering textures and dynamic contrast, while bassist Jack Schultz nailed a tone the whole group instantly fell in love with.</p>
          <p class="mb-4">The final mix, crafted by Steve Glaze at Tone Freq Studios, opens with the nostalgic click of a guitar cable — a subtle link to the lo-fi textures of '90s alt-rock. If you play The Sky Is Falling first, it fades out like a radio switching off. Sandpiper clicks right back on — not planned, but somehow perfect.</p>
          <p class="mb-4">The single was recorded at mozworth’s home studio in South Austin, drums at Ken’s place just across town. “We wanted to capture who we are right now — together, in this moment,” he says.</p>
          <p class="mb-4">With Ken’s move, drummer Mike Hall steps in for the Sandpiper single release. Introduced by Ken and already a kindred spirit, Mike brings a new heartbeat to mozworth’s evolving sound — raw, melodic, and rooted in the human experience.</p>
          <p class="mb-4 font-semibold">Sandpiper drops September 15, 2025</p>
          <p class="mb-4">For media inquiries, interviews, or press materials, please contact:</p>
          <p class="mb-1">Press Junkie PR<br />ryan@pressjunkiepr.com<br /><a href="https://www.pressjunkiepr.com" target="_blank" rel="noopener" class="underline hover:text-teal-300">www.pressjunkiepr.com</a></p>
        </div>
      ),
    },
    {
      label: "Credits",
      content: (
        <>
          <p>Songwriting by Michael Bosworth</p>
          <p>Lyrics by Michael Bosworth</p>
          <p>Composed by Michael Bosworth, Ken Mockler, Mark Heaps, and Jack Schultz</p>
          <p>Produced by Michael Bosworth</p>
          <p>Drums performed by Ken Mockler</p>
          <p>Guitar performed by Mark Heaps</p>
          <p>Bass performed by Jack Schultz</p>
          <p>Vocals and Guitar performed by Michael Bosworth</p>
          <p>Guitars and vocals recorded by Michael Bosworth at mozworth's home studio in South Austin</p>
          <p>Drums recorded at Ken's home studio in South Austin</p>
          <p>Mixed by Steven Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="underline hover:text-teal-300">Tone Freq Studios</a></p>
          <p>Mastered by Steven Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="underline hover:text-teal-300">Tone Freq Studios</a></p>
          <p>Cover art watercolor by Jessica Bosworth</p>
          <p>Cover art composition and design by Mark Heaps</p>
          <p>ISRC: QZZ782549784</p>
        </>
      ),
    }
  ]);

  createEffect(() => {
    if (!tabs().some(t => t.label === tab())) {
      setTab("Lyrics");
    }
  });

  return (
    <>
      <title>Sandpiper | mozworth</title>
      <meta name="description" content="mozworth Bridges Worlds with New Summer Single Sandpiper — a guitar-driven, ocean-soaked anthem inspired by myth, nature, and quiet messengers. Out September 15, 2025." />
      <meta name="last-modified" content="2025-08-21" />
      <link rel="canonical" href="https://mozworth.music/songs/sandpiper/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="Sandpiper | mozworth" />
      <meta property="og:description" content="mozworth Bridges Worlds with New Summer Single Sandpiper — a guitar-driven, ocean-soaked anthem inspired by myth, nature, and quiet messengers. Out September 15, 2025." />
      <meta property="og:image" content="https://mozworth.music/sandpiper.webp" />
      <meta property="og:url" content="https://mozworth.music/songs/sandpiper/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sandpiper | mozworth" />
      <meta name="twitter:description" content="mozworth Bridges Worlds with New Summer Single Sandpiper — a guitar-driven, ocean-soaked anthem inspired by myth, nature, and quiet messengers. Out September 15, 2025." />
      <meta name="twitter:image" content="https://mozworth.music/sandpiper.webp" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MusicRecording",
          "name": "Sandpiper",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "mozworth"
          },
          "inAlbum": {
            "@type": "MusicAlbum",
            "name": "Sandpiper"
          },
          "image": "https://mozworth.music/sandpiper.webp",
          "datePublished": "2025-09-15",
          "dateModified": "2025-08-21",
          "url": "https://mozworth.music/songs/sandpiper/",
          "isrcCode": "QZZ782549784"
        }).replace(/</g, '\\u003c')}
      </script>
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={[
          {
            href: "https://open.spotify.com/track/7odYoITooNmjUhi81htXk4?si=d665c12d45cc460f",
            alt: "Spotify",
            iconSrc: "/spotify.svg",
            ariaLabel: "Listen on Spotify",
            onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Spotify', song: 'Sandpiper' }); }
          },
          {
            href: "https://music.apple.com/us/song/sandpiper/1834623310",
            alt: "Apple Music",
            iconSrc: "/apple-music.svg",
            ariaLabel: "Listen on Apple Music",
            onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Apple Music', song: 'Sandpiper' }); }
          },
          {
            href: "https://soundcloud.com/mozworth/sandpiper",
            alt: "SoundCloud",
            iconSrc: "/soundcloud.svg",
            ariaLabel: "Listen on SoundCloud",
            onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'SoundCloud', song: 'Sandpiper' }); }
          },
          {
            href: "https://music.amazon.com/tracks/B0FN573KFW?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_NBSjdSmsLdVdbJaBHuXUWG3oc",
            alt: "Amazon Music",
            iconSrc: "/amazon-music.svg",
            ariaLabel: "Listen on Amazon Music",
            onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Amazon Music', song: 'Sandpiper' }); }
          },
          {
            href: "https://www.youtube.com/watch?v=Mq1T76H5TLQ&list=OLAK5uy_kcqChVTW_E_Y-etU1YweSXWEEj-mM-Z8M&index=1",
            alt: "YouTube",
            iconSrc: "/youtube.svg",
            ariaLabel: "Listen on YouTube",
            onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'YouTube', song: 'Sandpiper' }); }
          },
          {
            href: "https://tidal.com/browse/track/455287849",
            alt: "Tidal",
            iconSrc: "/tidal.svg",
            ariaLabel: "Listen on Tidal",
            onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Tidal', song: 'Sandpiper' }); }
          },
          {
            href: "https://link.deezer.com/s/3138pzzD6y4Z7wkQkqaHH",
            alt: "Deezer",
            iconSrc: "/deezer.svg",
            ariaLabel: "Listen on Deezer",
            onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Deezer', song: 'Sandpiper' }); }
          },
          {
            href: "https://mozworth.bandcamp.com/track/sandpiper",
            alt: "Bandcamp",
            iconSrc: "/bandcamp.svg",
            ariaLabel: "Listen on Bandcamp",
            onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Bandcamp', song: 'Sandpiper' }); }
          },
        ]}
        isrc="QZZ782549784"
        backgroundClass="min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-br from-[#0d2a3a] via-[#2e6f7e] to-[#f2c17d]"
        confetti={{ enabled: true, releaseDate: new Date('2025-09-15'), force: isForcedAnniversary(), imageUrl: '/sandpiper.webp' }}
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs()}
          defaultTab="Lyrics"
        />
      </BasePageLayout>
      <LeaveNoteModal
        isOpen={showLeaveNoteModal()}
        onClose={() => setShowLeaveNoteModal(false)}
        songTitle="Sandpiper"
      />
    </>
  );
} 