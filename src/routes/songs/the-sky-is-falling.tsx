import { createSignal, createEffect, createMemo } from "solid-js";
import { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import ShareButton from "../../components/ShareButton";

export default function TheSkyIsFalling() {
  const [tab, setTab] = createSignal("Lyrics");

  // Streaming links (placeholders for now)
  const streamingLinks: StreamingLink[] = [
    {
      href: "#",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify (coming soon)"
    },
    {
      href: "#",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp (coming soon)"
    },
    {
      href: "#",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music (coming soon)"
    },
    {
      href: "#",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal (coming soon)"
    }
  ];

  // Cover art (placeholder)
  const cover = (
    <img
      class="cover-art w-full max-w-[380px] min-h-[430px] md:min-h-[470px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 opacity-80"
      src="/album-placeholder.webp"
      alt="The Sky Is Falling cover art placeholder"
    />
  );

  // Info section
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">The Sky Is Falling</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; The Sky Is Falling
      </div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Expected July 2025</div>
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <button
          class="inline-block px-5 py-2 rounded bg-teal-500 text-white font-semibold shadow opacity-60 cursor-not-allowed w-full mb-2"
          disabled
        >
          Purchase (Coming Soon)
        </button>
        <a href="https://mozworth.printful.me/" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 mt-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Merch
        </a>
        <ShareButton
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/the-sky-is-falling/"}
          title="The Sky Is Falling by mozworth"
          text="Check out this upcoming single by mozworth!"
        />
      </div>
    </>
  );

  // Tabbed content using TabbedContent component
  const tabs = createMemo(() => [
    {
      label: "Lyrics",
      content: (
        <div class="whitespace-pre-line text-base md:text-lg leading-relaxed text-white opacity-60 italic">
          Lyrics for 'The Sky Is Falling' will be revealed on release day. Stay tuned!
        </div>
      ),
    },
    {
      label: "Press Release",
      content: (
        <>
          <h2 class="text-xl font-bold mb-2">New Single Coming Summer 2025</h2>
          <p>Stay tuned.</p>
        </>
      ),
    },
    {
      label: "Credits",
      content: (
        <>
          <p>Songwriting by Michael Bosworth</p>
          <p>Composed by Michael Bosworth, Ken Mockler, Mark Heaps, and Jack Shultz</p>
          <p>Produced by Michael Bosworth</p>
          <p>Recorded by Michael Bosworth and Mockler</p>
          <p>Guitar and Vocals performed by Michael Bosworth</p>
          <p>Acoustic and Electronic Drums performed by Ken Mockler</p>
          <p>Lead Guitar performed by Mark Heaps</p>
          <p>Bass performed by Jack Shultz</p>
          <p>Mixed and Mastered by Steven Glaze at Tone Freq Studios</p>
          <p>Recorded at mozworth and Mockler home studio's</p>
          <p>Cover art by Mark Heaps</p>
          <p class="text-white/40">(Full credits will be available on release.)</p>
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
      <title>The Sky Is Falling | mozworth</title>
      <meta name="description" content="Preview the upcoming single 'The Sky Is Falling' by mozworth. Release date: July 2025. Lyrics, press, and more coming soon!" />
      <meta name="last-modified" content="2025-05-30" />
      <link rel="canonical" href="https://mozworth.music/songs/the-sky-is-falling/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="The Sky Is Falling | mozworth" />
      <meta property="og:description" content="Preview the upcoming single 'The Sky Is Falling' by mozworth. Release date: July 2025. Lyrics, press, and more coming soon!" />
      <meta property="og:image" content="https://mozworth.music/album-placeholder.webp" />
      <meta property="og:url" content="https://mozworth.music/songs/the-sky-is-falling/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Sky Is Falling | mozworth" />
      <meta name="twitter:description" content="Preview the upcoming single 'The Sky Is Falling' by mozworth. Release date: July 2025. Lyrics, press, and more coming soon!" />
      <meta name="twitter:image" content="https://mozworth.music/album-placeholder.webp" />
      {/* Structured Data for AI and Search Engines */}
      <script type="application/ld+json" innerHTML={`{
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": "The Sky Is Falling",
        "byArtist": {
          "@type": "MusicGroup",
          "name": "mozworth"
        },
        "inAlbum": {
          "@type": "MusicAlbum",
          "name": "The Sky Is Falling"
        },
        "image": "https://mozworth.music/album-placeholder.webp",
        "datePublished": "2025-07-01",
        "dateModified": "2025-05-30",
        "url": "https://mozworth.music/songs/the-sky-is-falling/"
      }`} />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
        backgroundClass="min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-br from-[#f8f8f8] via-[#e0e0e0] to-[#b0b0b0]"
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs()}
          defaultTab="Lyrics"
        />
      </BasePageLayout>
    </>
  );
} 