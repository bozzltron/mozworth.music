import { createSignal, onMount, createEffect, createMemo } from "solid-js";
import SongComments from "../../components/SongComments";
import StreamingIcons, { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import type { JSX } from "solid-js";

interface Tab {
  label: string;
  content: JSX.Element;
}

export default function CantBackDown() {
  const [commentsEnabled, setCommentsEnabled] = createSignal(false);
  const [mounted, setMounted] = createSignal(false);
  const [tab, setTab] = createSignal("Lyrics");

  onMount(() => {
    setCommentsEnabled(localStorage.getItem("mozworth-comments-enabled") === "true");
    setMounted(true);
  });

  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/track/6eJUqJSxwowzdMUeO4MwT4?si=8db3231ffa1642c7",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Spotify', song: "Can't Back Down" }); }
    },
    {
      href: "https://music.apple.com/us/song/cant-back-down/1778536754",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Apple Music', song: "Can't Back Down" }); }
    },
    {
      href: "https://mozworth.bandcamp.com/track/cant-back-down",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Bandcamp', song: "Can't Back Down" }); }
    },
    {
      href: "https://soundcloud.com/mozworth/cant-back-down",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'SoundCloud', song: "Can't Back Down" }); }
    },
    {
      href: "https://www.youtube.com/watch?v=n11CkpCbYLI",
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Listen on YouTube",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'YouTube', song: "Can't Back Down" }); }
    },
    {
      href: "https://listen.tidal.com/album/398032766/track/398032772",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Tidal', song: "Can't Back Down" }); }
    },
    {
      href: "https://music.amazon.com/albums/B0DM6QNX2J",
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Amazon Music', song: "Can't Back Down" }); }
    },
    {
      href: "https://www.deezer.com/us/track/3083103571",
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Deezer', song: "Can't Back Down" }); }
    }
  ];

  const cover = (
    <iframe
      class="cover-art w-full max-w-[380px] min-h-[490px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      src="https://bandcamp.com/EmbeddedPlayer/album=2412424488/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2324904741/transparent=true/"
      seamless
      title="Can't Back Down by mozworth (Bandcamp embed)"
    />
  );

  const albumLink = "/albums/mozworth";
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Can't Back Down</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; <a href={albumLink} class="underline hover:text-teal-300 transition-colors">mozworth</a>
      </div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Released on November 15, 2024</div>
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <a href="https://mozworth.bandcamp.com/track/cant-back-down" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 w-full mb-2">
          Purchase
        </a>
        <a href="https://mozworth.printful.me/" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Merch
        </a>
      </div>
    </>
  );

  const tabs = [
    {
      label: "Lyrics",
      content: <div class="text-base md:text-lg leading-relaxed text-white"><p class="mb-4">This season's been<br />
One poetic punch in the face<br />
Our souls bending under the weight<br />
When I see your eyes I<br />
Know you feel the same<br /><br />
And life is unrelenting<br />
Always feeling attacked<br />
Always a fight to unpack<br />
But you don't hold the blame<br /><br />
And girl our ships not sinking<br />
We just gotta jettison the weight<br />
All this negative freight<br />
And set our sails<br /><br />
And who am I<br />
Just another jerk off the street<br />
Oh, but I love you complete<br />
And I know we can't<br />
Can't back<br />
Can't back<br /><br />
We can't back down now<br />
We can't back down now<br />
We can't back down now<br /><br />
Please forgive my<br />
Ignorant place in this mess<br />
All of my fight I relent<br />
At least toward you<br /><br />
But when it comes to<br />
All of this weight that we bear<br />
I'll carry more than my share<br />
To make you smile<br /><br />
And know that this season<br />
It will retreat like it came<br />
Until we see through the rain<br />
I know we can't<br />
Can't back<br />
Can't back<br /><br />
We can't back down now<br />
We can't back down now<br />
We can't back down now<br /><br />
We can't back down now<br />
We can't back down now<br />
We can't back down now<br /><br />
We can't back down now<br />
We can't back down now<br />
We can't back down now<br /><br />
We can't back down now<br />
We can't back down now<br />
We can't back down now</p></div>,
    },
    {
      label: "Writing",
      content: <p>Can't Back Down was written during the Finland sessions. [Add more writing background here.]</p>,
    },
    {
      label: "Demo",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p class="mb-4">This is the original demo of Can't Back Down. [Add demo details here.]</p>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/PLACEHOLDER&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div class="text-[10px] text-[#cccccc] break-all overflow-hidden whitespace-nowrap truncate font-sans font-thin">
            <a href="https://soundcloud.com/mozworth" title="mozworth" target="_blank" class="text-[#cccccc] no-underline">mozworth</a> · <a href="https://soundcloud.com/mozworth/cant-back-down-demo" title="Can't Back Down Demo" target="_blank" class="text-[#cccccc] no-underline">Can't Back Down Demo</a>
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

  createEffect(() => {
    if (!tabs.some(t => t.label === tab())) {
      setTab("Lyrics");
    }
  });

  return (
    <>
      <title>Can't Back Down | mozworth</title>
      <meta name="description" content="Listen to 'Can't Back Down' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Can't Back Down' from the self-titled debut album (2024)." />
      <link rel="canonical" href="https://mozworth.music/songs/cant-back-down/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="Can't Back Down | mozworth" />
      <meta property="og:description" content="Listen to 'Can't Back Down' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Can't Back Down' from the self-titled debut album (2024)." />
      <meta property="og:image" content="https://mozworth.music/mozworth-debut.png" />
      <meta property="og:url" content="https://mozworth.music/songs/cant-back-down/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Can't Back Down | mozworth" />
      <meta name="twitter:description" content="Listen to 'Can't Back Down' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Can't Back Down' from the self-titled debut album (2024)." />
      <meta name="twitter:image" content="https://mozworth.music/mozworth-debut.png" />
      {/* Structured Data for AI and Search Engines */}
      <script type="application/ld+json" innerHTML={`{
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": "Can't Back Down",
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
        "url": "https://mozworth.music/songs/cant-back-down/"
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