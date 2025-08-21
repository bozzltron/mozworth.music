import { createSignal, createEffect, createMemo } from "solid-js";
import { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import ShareButton from "../../components/ShareButton";
import ReleaseMeta from "../../components/ReleaseMeta";
import LeaveNoteModal from "../../components/LeaveNoteModal";


export default function WalkingTheCow() {
  const [tab, setTab] = createSignal("Lyrics");
  const [showLeaveNoteModal, setShowLeaveNoteModal] = createSignal(false);

  // Streaming links for this song
  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/track/29Y414L9PJrHtVWc5kpqJB?si=ff3f6296bf184ebb",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify"
    },
    {
      href: "https://mozworth.bandcamp.com/track/walking-the-cow",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp"
    },
    {
      href: "https://soundcloud.com/mozworth/walking-the-cow",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud"
    },
    {
      href: "https://tidal.com/browse/track/413771222",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal"
    },
    {
      href: "https://music.apple.com/us/song/walking-the-cow/1792739172",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music"
    },
    {
      href: "https://www.amazon.com/music/player/albums/B0DV3F48DQ",
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music"
    },
    {
      href: "https://www.deezer.com/us/album/703000271",
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer"
    },
    {
      href: "https://youtu.be/sOMIUcZ0Sgw",
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Watch on YouTube"
    }
  ];

  // Cover art
  const cover = (
    <iframe
      class="cover-art w-full max-w-[380px] min-h-[430px] md:min-h-[470px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      src="https://bandcamp.com/EmbeddedPlayer/track=2974293744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
      title="Walking The Cow by mozworth (Bandcamp embed)"
    />
  );

  // Info section
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Walking The Cow</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; Walking The Cow
      </div>
      <ReleaseMeta releaseDate="2025-01-22" prefix="Released" showConfetti={true} />
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <button
          onClick={() => setShowLeaveNoteModal(true)}
          class="inline-block px-5 py-2 rounded bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 w-full text-left"
        >
          Leave a Note
        </button>
        <a href="https://mozworth.bandcamp.com/track/walking-the-cow" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 mt-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 w-full">
          Purchase
        </a>
        <a href="/support" 
          class="inline-block px-5 py-2 mt-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Support
        </a>
        <ShareButton
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/walking-the-cow/"}
          title="Walking the Cow by mozworth"
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
        <div class="whitespace-pre-line text-base md:text-lg leading-relaxed text-white">{`
Try to remember
But my feelings can't know for sure
Try to reach out
But it's gone

Lucky stars in your eyes
I am walking the cow
I really don't know how I came here
I really don't know why I'm staying here
Oh, oh, oh-oh-oh
I am walking the cow

Tried to point my finger
But the wind was spinning me around
In circles
Circles

Lucky stars in your eyes
I am walking the cow
I really don't know why I have to fear
I really don't know why I have to care
Oh, oh, oh-oh-oh
I am walking the cow`}</div>
      ),
    },
    {
      label: "Press Release",
      content: (
        <>
          <h2 class="text-xl font-bold mb-2">Honoring Daniel Johnston: A New Cover of Walking the Cow</h2>
          <p>Austin-based artist <strong>mozworth</strong> has released a heartfelt cover of <em>Walking the Cow</em>, a beloved song by the late Daniel Johnston. The release coincides with <strong>Hi, How Are You Day</strong>, a celebration of Johnston's life and a movement for mental health awareness.</p>
          <h3 class="text-lg font-semibold mt-6 mb-2">A Tribute to an Icon</h3>
          <p>Daniel Johnston's music and legacy have left a profound impact on mozworth. mozworth first discovered Daniel through the documentary <em><a class="underline hover:text-teal-300" href="https://www.imdb.com/title/tt0436231/" target="_blank" rel="noopener">The Devil and Daniel Johnston</a></em> and became fascinated by home-recorded music and the raw honesty of his work. mozworth explains, "Daniel's story—his struggles with mental health and his ability to create without filters—has been a huge inspiration for me as an artist."</p>
          <p class="mt-4">Releasing this cover on Johnston's birthday was an intentional choice. Releasing this cover on Johnston's birthday felt like a meaningful way to participate and connect with the city of Austin, which holds him in such high regard. As a new artist, mozworth saw this as an opportunity to cut through the noise and reach people who appreciate Daniel's music.</p>
          <h3 class="text-lg font-semibold mt-6 mb-2">Reinterpreting Walking the Cow</h3>
          <p>When it came to arranging the song, mozworth took a different approach while still honoring Johnston's lo-fi aesthetic. The original recording is centered around the piano, and mozworth felt a lot of Daniel's anxiety in the way he played the keys. The new arrangement translates that feeling through drums trading tapping keys for a thumping rhythm. This leaves the guitar free to ring out and create space.</p>
          <p class="mt-4">The recording process was a mix of spontaneity and intention. The demo was recorded independently, layering separate takes in a home studio. It started with a rough scratch track to a metronome, followed by drums, bass, guitar, and finally vocals. To maintain the raw, off-the-cuff feel of Daniel's lo-fi recordings, all original takes were kept for the final version, except for the drums, which were re-recorded by Kenneth Mockler in his Austin studio.</p>
          <h3 class="text-lg font-semibold mt-6 mb-2">A Lasting Influence</h3>
          <p>Diving deep into Johnston's music has influenced mozworth's own songwriting approach. Daniel's music doesn't follow traditional song structures. In most music, standardized verses and choruses repeat, but his delivery constantly shifts. Each phrase is slightly different, erratic in a way that feels deeply personal. Recording this cover was a reminder that there are no strict rules in songwriting—everything is just a tool, and the key is knowing when to embrace chaos and when to rein it in. Daniel's music offers permission to be chaotic.</p>
        </>
      ),
    },
    {
      label: "Credits",
      content: (
        <>
          <p>Written by Daniel Johnston</p>
          <p>Arrangement by Michael Bosworth</p>
          <p>Guitar, bass, and vocals performed by Michael Bosworth</p>
          <p>Drums performed by Ken Mockler</p>
          <p>Produced by Michael Bosworth</p>
          <p>Recorded by Michael Bosworth and Ken Mockler</p>
          <p>Mixed and Mastered by Steve Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="underline hover:text-teal-300">Tone Freq Studios</a></p>
          <p>Cover art by Michael Bosworth</p>
        </>
      ),
    },
    {
      label: "Reviews",
      content: (
        <div>
          <blockquote class="text-base md:text-lg italic text-white mb-2">
            es una canción introspectiva que combina una producción suave con una letra que habla sobre la liberación emocional y la superación personal. Es una balada que captura la sensación de dejar atrás el pasado para avanzar hacia algo nuevo y más saludable. (It's an introspective song that combines a soft production with lyrics that speak to emotional release and self-improvement. It's a ballad that captures the feeling of leaving the past behind to move forward toward something new and healthier.)<br />
            <span class="block text-yellow-300 text-sm mt-1">B&amp;W Peru</span>
          </blockquote>
        </div>
      ),
    },
    {
      label: "Performances",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p class="mb-4">Watch a live performance of "Walking The Cow":</p>
          <div class="w-full aspect-video max-w-2xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/edJ2sMOpNHw"
              title="Walking The Cow - Live Performance"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="rounded-xl shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ]);

  createEffect(() => {
    if (!tabs().some(t => t.label === tab())) {
      setTab("Lyrics");
    }
  });

  return (
    <>
      <title>Walking The Cow | mozworth</title>
      <meta name="description" content="Listen to 'Walking The Cow' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the mozworth cover of 'Walking The Cow' (2025)." />
      <meta name="last-modified" content="2025-05-01" />
      <link rel="canonical" href="https://mozworth.music/songs/walking-the-cow/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="Walking The Cow | mozworth" />
      <meta property="og:description" content="Listen to 'Walking The Cow' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the the mozworth cover of 'Walking The Cow' (2025)." />
      <meta property="og:image" content="https://mozworth.music/mozworth-walking-the-cow-cover.webp" />
      <meta property="og:url" content="https://mozworth.music/songs/walking-the-cow/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Walking The Cow | mozworth" />
      <meta name="twitter:description" content="Listen to 'Walking The Cow' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the the mozworth cover of 'Walking The Cow' (2025)." />
      <meta name="twitter:image" content="https://mozworth.music/mozworth-walking-the-cow-cover.webp" />
      {/* Structured Data for AI and Search Engines */}
      <script type="application/ld+json" textContent={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": "Walking The Cow",
        "byArtist": {
          "@type": "MusicGroup",
          "name": "mozworth"
        },
        "inAlbum": {
          "@type": "MusicAlbum",
          "name": "Walking The Cow"
        },
        "image": "https://mozworth.music/mozworth-walking-the-cow-cover.webp",
        "datePublished": "2025-01-22",
        "dateModified": "2025-05-01",
        "url": "https://mozworth.music/songs/walking-the-cow/"
      })} />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
        confetti={{ enabled: true, releaseDate: new Date('2025-01-22'), imageUrl: '/mozworth-walking-the-cow-cover.webp' }}
        backgroundClass="min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-br from-[#f8f8f8] via-[#e0e0e0] to-[#b0b0b0]"
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs()}
          defaultTab="Lyrics"
        />      <LeaveNoteModal
        isOpen={showLeaveNoteModal()}
        onClose={() => setShowLeaveNoteModal(false)}
        songTitle="Walking the Cow"
      />

      </BasePageLayout>
    </>
  );
} 