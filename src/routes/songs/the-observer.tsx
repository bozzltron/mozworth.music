import { createSignal, onMount, createEffect, createMemo } from "solid-js";
import SongComments from "../../components/SongComments";
import StreamingIcons, { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import type { JSX } from "solid-js";
import { useLocation } from "@solidjs/router";

interface Tab {
  label: string;
  content: JSX.Element;
}

export default function TheObserver() {
  const [commentsEnabled, setCommentsEnabled] = createSignal(false);
  const [mounted, setMounted] = createSignal(false);
  const location = useLocation();

  onMount(() => {
    setCommentsEnabled(localStorage.getItem("mozworth-comments-enabled") === "true");
    setMounted(true);
  });

  const streamingLinks: StreamingLink[] = [
    { href: "https://open.spotify.com/track/3NNXEFyHojoTRB9nmUi392?si=07a5363d64224b03", alt: "Spotify", iconSrc: "/spotify.svg", ariaLabel: "Listen on Spotify" },
    { href: "https://music.apple.com/us/song/the-observer/1778536752", alt: "Apple Music", iconSrc: "/apple-music.svg", ariaLabel: "Listen on Apple Music" },
    { href: "https://mozworth.bandcamp.com/track/the-observer", alt: "Bandcamp", iconSrc: "/bandcamp.svg", ariaLabel: "Buy on Bandcamp" },
    { href: "https://soundcloud.com/mozworth/the-observer", alt: "SoundCloud", iconSrc: "/soundcloud.svg", ariaLabel: "Listen on SoundCloud" },
    { href: "https://www.youtube.com/watch?v=LffiT-oJfg4", alt: "YouTube", iconSrc: "/youtube.svg", ariaLabel: "Listen on YouTube" },
    { href: "https://listen.tidal.com/album/398032766/track/398032770", alt: "Tidal", iconSrc: "/tidal.svg", ariaLabel: "Listen on Tidal" },
    { href: "https://music.amazon.com/albums/B0DM6QNX2J", alt: "Amazon Music", iconSrc: "/amazon-music.svg", ariaLabel: "Listen on Amazon Music" },
    { href: "https://www.deezer.com/us/track/3083103541", alt: "Deezer", iconSrc: "/deezer.svg", ariaLabel: "Listen on Deezer" }
  ];

  const cover = (
    <iframe class="w-full max-w-[380px] min-h-[490px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] overflow-hidden mb-6 md:mb-8" src="https://bandcamp.com/EmbeddedPlayer/album=2412424488/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=136727558/transparent=true/" seamless></iframe>
  );

  const albumLink = "/albums/mozworth";
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">The Observer</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; <a href={albumLink} class="underline hover:text-teal-300 transition-colors">mozworth</a>
      </div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Released on November 15, 2024</div>
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <a href="https://mozworth.bandcamp.com/track/the-observer" target="_blank" rel="noopener"
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
      content: <div class="text-base md:text-lg leading-relaxed text-white">
        <p class="mb-4">The sun is rising<br />
The snow is falling<br />
The world is waking<br />
I'm just watching</p>
<p class="mb-4">The roots are reaching<br />
The river flowing<br />
My worries fading<br />
Time is slowing</p>
<p class="mb-4">The trail is calling<br />
The birds are feeding<br />
My soul is singing<br />
I'm just breathing</p>
<p class="mb-4">The forests growing<br />
winds is whisp'rin<br />
My heart is swelling<br />
I'm just listening</p>
      </div>,
    },
    {
      label: "Writing",
      content: <p>The Observer was written during the Finland sessions. After making it to the cabin around dawn, mozworth moved in, stayed the first night alone in the woods. The next morning he got up, made some coffee, sat down and took in the sirene view of the snow covered valley. He picked up his guitar and The Observer happened.</p>,
    },
    {
      label: "Demo",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p class="mb-4">This is the original demo of The Observer recorded the morning it was written in a cabin in the woods. The sound of the river was recorded on site and was included in the final mix.</p>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/778569364&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mozworth" title="mozworth" target="_blank" style="color: #cccccc; text-decoration: none;">mozworth</a> · <a href="https://soundcloud.com/mozworth/the-observer-demo" title="The Observer Demo" target="_blank" style="color: #cccccc; text-decoration: none;">The Observer Demo</a></div>
        </div>
      ),
    },
    {
      label: "Credits",
      content: <>
        <p>Songwriting by Michael Bosworth</p>
        <p>Composition by Michael Bosworth and Ken Mockler</p>
        <p>Lyrics by Michael Bosworth</p>
        <p>Vocals and Guitars performed by Michael Bosworth</p>
        <p>Synth performed by Ken Mockler</p>
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
      <title>The Observer | mozworth</title>
      <meta name="description" content="Listen to 'The Observer' by mozworth. Read the lyrics, learn about the song, and experience the official cover art. Streaming everywhere soon!" />
      <link rel="canonical" href="https://mozworth.music/songs/the-observer/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="The Observer | mozworth" />
      <meta property="og:description" content="Listen to 'The Observer' by mozworth. Read the lyrics, learn about the song, and experience the official cover art. Streaming everywhere soon!" />
      <meta property="og:image" content="https://mozworth.music/the-observer-cover.jpg" />
      <meta property="og:url" content="https://mozworth.music/songs/the-observer/" />
      <meta property="music:release_date" content="2024-11-15" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Observer | mozworth" />
      <meta name="twitter:description" content="Listen to 'The Observer' by mozworth. Read the lyrics, learn about the song, and experience the official cover art. Streaming everywhere soon!" />
      <meta name="twitter:image" content="https://mozworth.music/the-observer-cover.jpg" />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs}
          defaultTab={"Lyrics"}
        />
      </BasePageLayout>
    </>
  );
} 