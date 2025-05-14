import { createSignal, onMount, createEffect, createMemo } from "solid-js";
import SongComments from "../../components/SongComments";
import StreamingIcons, { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import type { JSX } from "solid-js";
import { useLocation } from "@solidjs/router";
import ShareButton from "../../components/ShareButton";

interface Tab {
  label: string;
  content: JSX.Element;
}

export default function QueenOfTheOcean() {
  const [commentsEnabled, setCommentsEnabled] = createSignal(false);
  const [mounted, setMounted] = createSignal(false);
  const location = useLocation();
  console.log('[QueenOfTheOcean] location.pathname:', location.pathname);

  onMount(() => {
    setCommentsEnabled(localStorage.getItem("mozworth-comments-enabled") === "true");
    setMounted(true);
  });

  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/track/6YyB8JhNwtiG4vt3QgFddW?si=a419eb1f8ee9452f",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Spotify', song: 'Queen of the Ocean' }); }
    },
    {
      href: "https://music.apple.com/us/song/queen-of-the-ocean/1778536750",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Apple Music', song: 'Queen of the Ocean' }); }
    },
    {
      href: "https://mozworth.bandcamp.com/track/queen-of-the-ocean",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Bandcamp', song: 'Queen of the Ocean' }); }
    },
    {
      href: "https://soundcloud.com/mozworth/queen-of-the-ocean",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'SoundCloud', song: 'Queen of the Ocean' }); }
    },
    {
      href: "https://www.youtube.com/watch?v=jWBZrGsmNUo",
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Listen on YouTube",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'YouTube', song: 'Queen of the Ocean' }); }
    },
    {
      href: "https://listen.tidal.com/album/398032766/track/398032768",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Tidal', song: 'Queen of the Ocean' }); }
    },
    {
      href: "https://music.amazon.com/albums/B0DM6QNX2J",
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Amazon Music', song: 'Queen of the Ocean' }); }
    },
    {
      href: "https://www.deezer.com/us/track/3083103521",
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Deezer', song: 'Queen of the Ocean' }); }
    }
  ];

  const cover = (
    <iframe
      class="cover-art w-full max-w-[380px] min-h-[425px] md:min-h-[490px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      src="https://bandcamp.com/EmbeddedPlayer/album=2412424488/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=3296059837/transparent=true/"
      seamless
      title="mozworth by mozworth"
    />
  );

  const albumLink = "/albums/mozworth";
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Queen of the Ocean</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; <a href={albumLink} class="underline hover:text-teal-300 transition-colors">mozworth</a>
      </div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Released on November 15, 2024</div>
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <a href="https://mozworth.bandcamp.com/track/queen-of-the-ocean" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 w-full mb-2">
          Purchase
        </a>
        <a href="https://mozworth.printful.me/" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Merch
        </a>
        <ShareButton
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/queen-of-the-ocean/"}
          title="Queen of the Ocean by mozworth"
          text="Check out this song by mozworth!"
        />
      </div>
    </>
  );

  const tabs = [
    {
      label: "Lyrics",
      content: <div class="text-base md:text-lg leading-relaxed text-white"><p class="mb-4">She slips out the backdoor<br />
When no one is watching<br />
Makes her way to the sand<br /><br />
And she's all alone<br />
There for the swimming<br />
Turns her back on the land<br /><br />
The water is cold<br />
Air is salty<br />
As she fights the will of the wake<br /><br />
And she's unaware<br />
That something is lurking<br />
And she's swimming to her grave<br /><br />
Down, down, down will she go<br />
The queen of the ocean<br />
Down to the heart of the sea<br />
She sits on her throne<br />
At the root of the mountain<br />
Her spirit is finally free<br /><br />
She heard a crack<br />
Before pain was searing<br />
Water as crimson as rose<br /><br />
She let out a cry<br />
That was drowned in the current<br />
Her body dragged into the cold<br /><br />
Down, down, down will she go<br />
The queen of the ocean<br />
Down to the heart of the sea<br />
She sits on her throne<br />
At the root of the mountain<br />
Her spirit is finally free<br /><br />
She'll never return<br />
But she's not forgotten<br />
Her shoes still next to the sea<br /><br />
And with them a sound<br />
Of her mourning mother<br />
Crying daughter! Please come back to me!<br /><br />
Down, down, down will she go<br />
The queen of the ocean<br />
Down to the heart of the sea<br />
She sits on her throne<br />
At the root of the mountain<br />
Her spirit is finally free</p></div>,
    },
    {
      label: "Writing",
      content: <p>Queen of the Ocean was written on the last day of the Finland sessions in Finland, Minnesota in 2020. The idea was prompted by mozworth's daughter when he asked her what she should write about and she answered : "sharks".</p>,
    },
    {
      label: "Demo",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p class="mb-4">This is the original demo of Queen of the Ocean. Some elements recorded from the Finland session and later additions from mozworth's home studio in Iowa.</p>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/882940837&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          <div class="text-[10px] text-[#cccccc] break-all overflow-hidden whitespace-nowrap truncate font-sans font-thin">
            <a href="https://soundcloud.com/mozworth" title="mozworth" target="_blank" class="text-[#cccccc] no-underline">mozworth</a> · <a href="https://soundcloud.com/mozworth/the-queen-of-the-ocean-demo" title="Queen Of The Ocean Demo" target="_blank" class="text-[#cccccc] no-underline">Queen Of The Ocean Demo</a>
          </div>
        </div>
      ),
    },
    {
      label: "Credits",
      content: <>
        <p>Songwriting by Michael Bosworth</p>
        <p>Composition by Michael Bosworth and Ken Mockler</p>
        <p>Lyrics by Michael Bosworth</p>
        <p>Vocals, Electric Guitars, Bass performed by Michael Bosworth</p>
        <p>Drums and Auxiliary Percussion performed by Ken Mockler</p>
        <p>Accompanying Vocals by Ashleigh Wright</p>
        <p>Produced by Jeff Shinrock</p>
        <p>Recorded by Jeff Shinrock and Michael Bosworth</p>
        <p>Mixed by Steve Glaze at Tone Freq Studios</p>
        <p>Mastered by Steve Glaze at Tone Freq Studios</p>
        <p>Cover art by Josh Row</p>
        <p>Cover art photography by Kelly Treybig</p>
      </>
    },
  ];

  return (
    <>
      <title>Queen of the Ocean | mozworth</title>
      <meta name="description" content="Listen to 'Queen of the Ocean' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Queen of the Ocean' from the self-titled debut album (2024)." />
      <link rel="canonical" href="https://mozworth.music/songs/queen-of-the-ocean/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="Queen of the Ocean | mozworth" />
      <meta property="og:description" content="Listen to 'Queen of the Ocean' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Queen of the Ocean' from the self-titled debut album (2024)." />
      <meta property="og:image" content="https://mozworth.music/mozworth-debut.png" />
      <meta property="og:url" content="https://mozworth.music/songs/queen-of-the-ocean/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Queen of the Ocean | mozworth" />
      <meta name="twitter:description" content="Listen to 'Queen of the Ocean' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Queen of the Ocean' from the self-titled debut album (2024)." />
      <meta name="twitter:image" content="https://mozworth.music/mozworth-debut.png" />
      {/* Structured Data for AI and Search Engines */}
      <script type="application/ld+json" innerHTML={`{
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": "Queen of the Ocean",
        "byArtist": {
          "@type": "MusicGroup",
          "name": "mozworth"
        },
        "inAlbum": {
          "@type": "MusicAlbum",
          "name": "mozworth"
        },
        "image": "https://mozworth.music/mozworth-debut.png",
        "datePublished": "2024-11-15",
        "url": "https://mozworth.music/songs/queen-of-the-ocean/"
      }`} />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs}
          defaultTab="Lyrics"
        />
      </BasePageLayout>
    </>
  );
} 