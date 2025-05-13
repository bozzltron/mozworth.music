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

export default function GoodbyeColorado() {
  const [commentsEnabled, setCommentsEnabled] = createSignal(false);
  const [mounted, setMounted] = createSignal(false);
  const [tab, setTab] = createSignal("Lyrics");

  onMount(() => {
    setCommentsEnabled(localStorage.getItem("mozworth-comments-enabled") === "true");
    setMounted(true);
  });

  // Streaming links for this song
  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/track/5EHFPfXAA7ezlrL5GzPw4k?si=22079d9af9ee4d6f", // Replace with actual Spotify link if available
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify"
    },
    {
      href: "https://music.apple.com/us/song/goodbye-colorado/1768959065", // Replace with actual Apple Music link if available
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music"
    },
    {
      href: "https://mozworth.bandcamp.com/track/goodbye-colorado",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp"
    },
    {
      href: "https://soundcloud.com/mozworth/goodbye-colorado",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud"
    },
    {
      href: "https://www.youtube.com/watch?v=Vv9xnKNOcEM", // Replace with actual Apple Music link if available
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Listen on YouTube"
    },
    {
      href: "https://listen.tidal.com/album/387655037/track/387655038", // Replace with actual Tidal link if available
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal"
    },
    {
      href: "https://amazon.com/music/player/albums/B0DH5BMGX7", // Replace with actual Amazon Music link if available
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music"
    },
    {
      href: "https://dzr.page.link/5CBRZeEfV7NVGM4C8", // Replace with actual Deezer link if available
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer"
    }
  ];

  // Cover art (use Bandcamp embed as fallback)
  const cover = (
    <iframe
      class="cover-art w-full max-w-[380px] min-h-[420px] md:min-h-[470px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      style={{ border: 0 }}
      src="https://bandcamp.com/EmbeddedPlayer/track=2833446675/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
      title="Goodbye Colorado by mozworth (Bandcamp embed)"
    />
  );

  // Info section
  const albumLink = "/albums/mozworth";
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Goodbye Colorado</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; <a href={albumLink} class="underline hover:text-teal-300 transition-colors">mozworth</a>
      </div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Released as a single on October 9, 2024</div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Released on mozworth on November 15, 2024</div>
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <a href="https://mozworth.bandcamp.com/track/goodbye-colorado" target="_blank" rel="noopener"
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
          <p class="mb-4">A cool breath washing over me like a river<br />
          Walking in the shadows cast<br />
          By the pines, I raise my eyes and I wonder<br />
          I am taking the right path</p>

          <p class="mb-4">I won't forget being brought low by your beauty<br />
          The quiet power of your form<br />
          I've watched the weather dress you up almost daily<br />
          Oh the garments that you've worn</p>

          <p class="mb-4">My heart breaks to see<br />
          When life leads away<br />
          From the things you love<br />
          Until we meet again</p>

          <p class="mb-4">Goodbye Colorado<br />
          Goodbye Colorado<br />
          Goodbye Colorado<br />
          Goodbye Colorado</p>

          <p class="mb-4">I'll kiss the window and I'll leave you a letter<br />
          Filled with standard pleasantry<br />
          The sleepness nights I'll leave behind for the better<br />
          The rest will come along with me</p>

          <p class="mb-4">My heart breaks to see<br />
          When life leads away<br />
          From the things you love<br />
          Until we meet again</p>

          <p class="mb-4">My heart breaks to see<br />
          When life leads away<br />
          From the things you love<br />
          Until we meet again</p>

          <p class="mb-4">Goodbye Colorado<br />
          Goodbye Colorado<br />
          Goodbye Colorado<br />
          Goodbye Colorado</p>
        </div>
      ),
    },
    {
      label: "Writing",
      content: (
        <p>Goodbye Colorado was written in Colorado Springs, Colorado in 2023 in a rental home. It was inspired by the sound of an old Harmony parlor acoustic which starts the intro. </p>
      ),
    },
    {
      label: "Demo",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p>This is the original demo recorded in the cabin in Colorado Springs, Colorado.</p>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1292295211&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mozworth" title="mozworth" target="_blank" style="color: #cccccc; text-decoration: none;">mozworth</a> · <a href="https://soundcloud.com/mozworth/goodbye-colorado-demo" title="Goodbye Colorado Demo" target="_blank" style="color: #cccccc; text-decoration: none;">Goodbye Colorado Demo</a></div>
        </div>
      ),
    },
    {
      label: "Conversation",
      content: mounted() && commentsEnabled()
        ? <SongComments contentId="goodbye-colorado" />
        : <div class="text-gray-400 italic">Comments are disabled for this song.</div>,
    },
    {
      label: "Credits",
      content: (
        <>
          <p>Songwriting by Michael Bosworth</p>
          <p>Composition by Michael Bosworth, Ken Mockler, and Mark Heaps</p>
          <p>Lyrics by Michael Bosworth</p>
          <p>Vocals, Electric Guitars, Bass, and Han Pan by Michael Bosworth</p>
          <p>Drums, tambourine, and shakers by Ken Mockler</p>
          <p>Accompanying Vocals by Ashleigh Wright</p>
          <p>Produced by Jeff Shinrock</p>
          <p>Recorded by Jeff Shinrock and Michael Bosworth</p>
          <p>Mixed and Mastered by Steve Glaze at Tone Freq Studios</p>
          <p>Cover art by Josh Row</p>
          <p>Cover art script by Michael Bosworth</p>
        </>
      ),
    },
  ]);

  createEffect(() => {
    if (!tabs().some(t => t.label === tab())) {
      setTab("Lyrics");
    }
  });

  console.log('Tabs array at render:', tabs().map(t => t.label));
  return (
    <>
      <title>Goodbye Colorado | mozworth</title>
      <meta name="description" content="Listen to 'Goodbye Colorado' by mozworth. Read the lyrics, learn about the song, and experience the official cover art. Streaming everywhere October 9, 2024." />
      <link rel="canonical" href="https://mozworth.music/songs/goodbye-colorado/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="Goodbye Colorado | mozworth" />
      <meta property="og:description" content="Listen to 'Goodbye Colorado' by mozworth. Read the lyrics, learn about the song, and experience the official cover art. Streaming everywhere October 9, 2024." />
      <meta property="og:image" content="https://mozworth.music/goodbye-colorado-cover.jpg" />
      <meta property="og:url" content="https://mozworth.music/songs/goodbye-colorado/" />
      <meta property="music:release_date" content="2024-10-09" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Goodbye Colorado | mozworth" />
      <meta name="twitter:description" content="Listen to 'Goodbye Colorado' by mozworth. Read the lyrics, learn about the song, and experience the official cover art. Streaming everywhere October 9, 2024." />
      <meta name="twitter:image" content="https://mozworth.music/goodbye-colorado-cover.jpg" />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
        backgroundClass="min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-b from-[#b6c85a] via-[#2e5d4a] to-[#18344a]"
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