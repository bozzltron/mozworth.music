import { createSignal, Show, onCleanup, onMount, createEffect, createMemo } from "solid-js";
import SongComments from "../../components/SongComments";
import StreamingIcons, { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import type { JSX } from "solid-js";

interface Tab {
  label: string;
  content: JSX.Element;
}

export default function Postcard() {
  const [commentsEnabled, setCommentsEnabled] = createSignal(false);
  const [mounted, setMounted] = createSignal(false);
  const [tab, setTab] = createSignal("Lyrics");

  onMount(() => {
    setCommentsEnabled(localStorage.getItem("mozworth-comments-enabled") === "true");
    setMounted(true);
  });

  // Streaming links for this song (placeholders)
  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/track/0LyV5KAWmvWa2AjrFfJq40?si=94d98fbe374c4c66",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify"
    },
    {
      href: "https://music.apple.com/us/song/postcard/1778536751",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music"
    },
    {
      href: "https://mozworth.bandcamp.com/track/postcard",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp"
    },
    {
      href: "https://soundcloud.com/mozworth/postcard",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud"
    },
    {
      href: "https://www.youtube.com/watch?v=IJmjaja5Bzc",
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Listen on YouTube"
    },
    {
      href: "https://listen.tidal.com/album/398032766/track/398032769",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal"
    },
    {
      href: "https://music.amazon.com/albums/B0DCMBQ8B8",
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music"
    },
    {
      href: "https://www.deezer.com/us/album/627355711",
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer"
    }
  ];

  // Cover art (Bandcamp embed for Postcard)
  const cover = (
    <iframe
      class="cover-art w-full max-w-[380px] min-h-[420px] md:min-h-[470px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      src="https://bandcamp.com/EmbeddedPlayer/track=1468914398/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
      title="Postcard by mozworth (Bandcamp embed)"
    >
    </iframe>
  );

  // Info section (placeholder)
  const albumLink = "/albums/mozworth";
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Postcard</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; <a href={albumLink} class="underline hover:text-teal-300 transition-colors">mozworth</a>
      </div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Released as a single on September 12, 2024</div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Released on mozworth on November 15, 2024</div>
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <a href="https://mozworth.bandcamp.com/track/postcard" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 w-full">
          Purchase
        </a>
      </div>
    </>
  );

  // Tabbed content using TabbedContent component
  const tabs = createMemo(() => [
    {
      label: "Lyrics",
      content: (
        <div class="text-base md:text-lg leading-relaxed text-white">
          <p class="mb-4">The sun shines spotty<br />
The stream is calling<br />
Here in Kansas</p>
<p class="mb-4">I put a fire on the stove<br />
And steep my cup of tea</p>
<p class="mb-4">The wet earth walks soft<br />
The cardinals talk<br />
Here in Kansas</p>
<p class="mb-4">I'm settlin' in<br />
Wishing you were here with me<br />
Wishing you were here with me<br />
Wishing you were here with me</p>
<p class="mb-4">Spring sings like a symphony<br />
And I'm just joining in<br />
To all it's got to say<br />
Are you listening?<br />
The sound builds like an avalanche<br />
Busting through the trees<br />
Filling my heart again<br />
And I'm remembering</p>
<p class="mb-4">All I have is memory<br />
All I have is memory</p>
<p class="mb-4">The rain turns loose<br />
Like a drum on the roof<br />
Here in Kansas</p>
<p class="mb-4">I see the fire needs a stoke<br />
And feel your gravity</p>
<p class="mb-4">I do know what I'd do<br />
So that I could hold you<br />
Here in Kansas</p>
<p class="mb-4">The suns shining through<br />
Wishing you were here with me<br />
Wishing you were here with me<br />
Wishing you were here with me</p>
<p class="mb-4">Spring sings like a symphony<br />
And I'm just joining in<br />
To all it's got to say<br />
Are you listening?<br />
The sound builds like an avalanche<br />
Busting through the trees<br />
Filling my heart again<br />
And I'm remembering</p>
<p class="mb-4">All I have is memory<br />
All I have is memory<br />
All I have is memory</p>
<p class="mb-4">I'm wishing you were here with me<br />
Wishing you were here with me<br />
Wishing you were here with me</p>
        </div>
      ),
    },
    {
      label: "Writing",
      content: (
        <p>Postcard was written during <a class="hover:text-teal-300 underline" href="https://www.bozzltron.com/2021/05/31/here-in-kansas/">writing session in McLouth, Kansas in 2021</a>. mozworth stayed in a DIY cabin and tended a fire across the river from the owners tiny home.</p>
      ),
    },
    {
      label: "Demo",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p>This is the original demo recorded for Postcard recorded in a cabin in McLouth, Kansas in 2021.</p>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1010895439&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mozworth" title="mozworth" target="_blank" style="color: #cccccc; text-decoration: none;">mozworth</a> · <a href="https://soundcloud.com/mozworth/postcard-demo" title="Postcard Demo" target="_blank" style="color: #cccccc; text-decoration: none;">Postcard Demo</a></div>
        </div>
      ),
    },
    {
      label: "Credits",
      content: (
        <>
          <p>Songwriting by Michael Bosworth</p>
          <p>Composition by Michael Bosworth and Ken Mockler</p>
          <p>Lyrics by Michael Bosworth</p>
          <p>Vocals, Electric Guitars, Bass, and Tambourine by Michael Bosworth</p>
          <p>Drums by Ken Mockler</p>
          <p>Accompanying Vocals by Ashleigh Wright</p>
          <p>Produced by Jeff Shinrock</p>
          <p>Recorded by Jeff Shinrock and Michael Bosworth</p>
          <p>Mixed by Steve Glaze at Tone Freq Studios</p>
          <p>Mastered by Steve Glaze at Tone Freq Studios</p>
          <p>Cover art by [Artist Name]</p>
        </>
      ),
    },
    {
      label: "Press",
      content: (
        <div class="text-base md:text-lg leading-relaxed text-white">
          <h2 class="text-xl font-bold mb-2">KUTX Song of the Day Premiere</h2>
          <p class="mb-4">Postcard was premiered as a <a href="https://kutx.org/song-of-the-day/mozworth-postcard/" target="_blank" rel="noopener" class="underline hover:text-teal-300">KUTX Song of the Day</a> on September 12, 2024.</p>
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
      <title>Postcard | mozworth</title>
      <meta name="description" content="Listen to 'Postcard' by mozworth. Read the lyrics, learn about the song, and experience the official cover art. Streaming everywhere soon!" />
      <link rel="canonical" href="https://mozworth.music/songs/postcard/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="Postcard | mozworth" />
      <meta property="og:description" content="Listen to 'Postcard' by mozworth. Read the lyrics, learn about the song, and experience the official cover art. Streaming everywhere soon!" />
      <meta property="og:image" content="https://mozworth.music/postcard-cover.jpg" />
      <meta property="og:url" content="https://mozworth.music/songs/postcard/" />
      <meta property="music:release_date" content="[Release Date]" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Postcard | mozworth" />
      <meta name="twitter:description" content="Listen to 'Postcard' by mozworth. Read the lyrics, learn about the song, and experience the official cover art. Streaming everywhere soon!" />
      <meta name="twitter:image" content="https://mozworth.music/postcard-cover.jpg" />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
      >
        <TabbedContent
          tabs={tabs()}
          defaultTab={"Lyrics"}
          tab={tab()}
          setTab={setTab}
        />
      </BasePageLayout>
    </>
  );
} 