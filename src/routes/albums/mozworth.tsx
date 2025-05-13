import { Show, createSignal, onMount, onCleanup, createEffect } from "solid-js";
import SongComments from "../../components/SongComments";
import StreamingIcons, { StreamingLink } from "../../components/StreamingIcons";
import TabbedContent from "../../components/TabbedContent";
import BasePageLayout from "../../components/BasePageLayout";
import { useLocation } from "@solidjs/router";

export default function MozworthAlbum() {
  const [commentsEnabled, setCommentsEnabled] = createSignal(false);
  const [tab, setTab] = createSignal("Tracklist");
  const [isMobile, setIsMobile] = createSignal(false);
  const location = useLocation();

  // Streaming links for this album
  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/album/21lSrbyIvx8oVjBORjKozD?si=e4f_JV1wQ2yO7UjEKsntoQ",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify"
    },
    {
      href: "https://music.apple.com/us/album/mozworth-ep/1778536748",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music"
    },
    {
      href: "https://mozworth.bandcamp.com/album/mozworth",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp"
    },
    {
      href: "https://www.youtube.com/watch?v=4Avq0ZtLtRc&list=OLAK5uy_kDXxBe_o2gnmaYQnzlPe1BY13IU2mkc8A",
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Watch on YouTube"
    },
    {
      href: "https://tidal.com/browse/album/398032766",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal"
    },
    {
      href: "https://music.amazon.com/albums/B0DM6QNX2J",
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music"
    },
    {
      href: "https://soundcloud.com/mozworth/sets/mozworth",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud"
    },
    {
      href: "https://dzr.page.link/3vQHgas851udoDfq8",
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer"
    }
  ];

  const trackList = [
    { title: "Letting Go", href: "/songs/letting-go" },
    { title: "Queen of the Ocean", href: "/songs/queen-of-the-ocean" },
    { title: "Postcard", href: "/songs/postcard" },
    { title: "The Observer", href: "/songs/the-observer" },
    { title: "Goodbye Colorado", href: "/songs/goodbye-colorado" },
    { title: "Can't Back Down", href: "/songs/cant-back-down" }
  ];

  // TabbedContent tabs array
  const tabs = [
    {
      label: "Tracklist",
      content: (
        <ol class="list-decimal list-inside text-lg text-white/90">
          {trackList.map(track =>
            track.href
              ? <li><a href={track.href} class="hover:text-teal-300 underline">{track.title}</a></li>
              : <li>{track.title}</li>
          )}
        </ol>
      ),
    },
    {
      label: "Press Release",
      content: (
        <section class="tab-content mb-8 overflow-x-auto">
          <h2 class="text-xl font-bold mb-2">FOR IMMEDIATE RELEASE</h2>
          <h3 class="text-lg font-semibold mb-2">MOZWORTH'S SELF-TITLED DEBUT ALBUM</h3>
          <h4 class="text-base font-medium mb-4">TO BE RELEASED ON NOVEMBER 15, 2024</h4>
          <p class="mb-4">Austin based singer-songwriter Mozworth (Michael "Boz" Bosworth) will release his self-titled debut album on Friday, November 15th. The six song collection features previously released singles "Postcard" (which was a KUTX Song of the Day) and "Goodbye Colorado," alongside "Letting Go," "Queen of the Ocean," "The Observer," and "Can't Back Down." Pre-save the album here.</p>
          <p class="mb-4">Mozworth was inspired by Bill Gates's "Think Weeks" where he gets away to a secluded cabin and just reads. Mozworth took the idea, but evolved it into songwriting sessions, where he was able to get away from the demands of his day job and unwind from family life in dedicated and isolated spaces. The songs were created in three different locations from Lake Superior, to McLouth, Kansas, to Colorado Springs, each providing their own unique environment for Mozworth's songwriting.</p>
          <p class="mb-4">The songs sat dormant until Mozworth and his family relocated to Austin, TX in the Summer of 2022. Not knowing anyone, except for the reputation for it being a vibrant music city, Mozworth serendipitously met a friend who was an avid skateboarder and also in the music industry. Both elements tied back to his youth and re-inspired him to revisit his Cabin recordings. Mozworth was instantly inspired by the creative community in Austin and was drawn in through KUTX and the countless concerts happening seven nights a week.</p>
          <p class="mb-4">Now rooted in Austin's unique creative energy, Mozworth's debut album embodies a journey through personal transitions, family life, and the turbulence of the past few years. From the highs of fatherhood and the lows of uprooting his family from Iowa to Colorado to Texas, Mozworth's music reflects the joys and challenges of modern life. He states, "These songs are a testament to my family and the strength we've found in each other," he shares. "This album is not only a creative milestone for me, but a piece of my legacy for my children—something they can always return to and hear my voice. It represents a coming of age for me as an artist and a project that encompasses my life, while capturing a sound that comes from my own love of music."</p>
          <p class="mb-4">The debut album, self-titled as a way to "lay bare the most authentic version of myself," unfolds in a collection of tracks that span love, loss, and hope. Tracks like "Can't Back Down" embody themes of resilience and unity, while "Goodbye Colorado" explores letting go amid unexpected change. "Queen of the Ocean" provides a darker narrative inspired by Mozworth's daughter, fusing his love of surf rock with storytelling in a tribute to their connection. Other songs like "Postcard," which is a love letter to his wife, captures the beauty of his secluded writing sessions and the longing to share them with her, while "The Observer" is a serene meditation on the natural beauty of his cabin retreat in Minnesota, encouraging listeners to pause and be present. Mozworth expresses, "these songs feel like a mirror—capturing who I am now in an unfiltered way."</p>
          <p class="mb-4">Recorded in a guest bedroom above his garage, Mozworth found his ideal creative space to craft this project with full artistic freedom. Collaborating with producer/engineer Jeff Shinrock, who flew in from Portland, Mozworth and his team recorded nearly all parts over a fast-paced weekend. They utilized Austin's Rock n Roll Rentals to bring in top-tier equipment without the constraints of a studio clock, lending the album a sense of rawness that mirrors the city's "keep it weird" ethos. "There's a DIY feel to this album that aligns with my love for Austin's music scene," says Mozworth.</p>
          <p class="mb-4">Mozworth's debut was shaped by a core team of trusted friends and seasoned musicians. Key collaborators include Jeff Shinrock, Producer and Sound Engineer, who was a soundboard that helped shape his demos into flushed out songs. Jeff provided his depth of knowledge around the gear, room treatments, and mic placements to capture the sound Mozworth envisioned. Drummer and composer Ken Mockler, whose background in psychoacoustics brought additional layers to the songs, while vocalist Ashleigh Wright lent her voice to create the hauntingly beautiful harmonies on "Queen of the Ocean" and more. Composer and mentor Mark Heaps provided valuable feedback, helping Mozworth tweak the songs and mixes. The album was mixed and mastered by Steve Glaze at Tone Freq Studios. "It was an honest collaboration between people from diverse backgrounds who found friendship and mutual respect in the creative process," says Ken Mockler of the Mozwroth project.</p>
          <p class="mb-4">Mozworth notes, "I had a vision for how I wanted this album to sound. I wanted it to feel like you were in the room with the musicians and you could feel them vibing off of each other. There are a lot of artifacts in the tracks. A slip of the strings or a late note. We cleaned up some of those things but also left some on purpose. I didn't want it to sound too perfect. I wanted it to sound human." He concludes, "Listening back, these songs have a wild range from beautifully intimate parts to gigantic walls of sound. I hear my influences from The Pixies Surfer Rosa to Wilco's Yankee Hotel Foxtrot and everything in between evenly sprinkled. Just like the artists that came before me I listened, I picked up my own instrument, and I wrote down my response. This album is all the music that I love strained through the filter of my own experience and ability. When I hear it, I hear me."</p>
          <a href="https://mozworth.bandcamp.com/album/mozworth" class="underline hover:text-teal-300" target="_blank" rel="noopener">Press Junkie </a>
        </section>
      ),
    },
    {
      label: "Press",
      content: (
        <section class="tab-content mb-8 text-white">
          <h2 class="text-xl font-bold mb-2">KUTX Song of the Day Premiere</h2>
          <p class="mb-4">
            "Postcard" was premiered as a <a href="https://kutx.org/song-of-the-day/mozworth-postcard/" target="_blank" rel="noopener" class="underline hover:text-teal-300">KUTX Song of the Day</a> on September 12, 2024.
          </p>
          <h2 class="text-xl font-bold mb-2">KVRX Interview</h2>
          <p class="mb-4">
            mozworth was interviewed on <a href="https://kvrx.org/app/blog/features/an-interview-with-mozworth/" target="_blank" rel="noopener" class="underline hover:text-teal-300">KVRX Austin</a> about the debut album. [Add link to the specific interview if available.]
          </p>
        </section>
      ),
    },
    {
      label: "Credits",
      content: (
        <section class="tab-content mb-8">
          <p>Songwriting by Michael Bosworth</p>
          <p>Composition by Michael Bosworth, Jeff Shinrock, Ken Mockler, and Mark Heaps</p>
          <p>Lyrics by Michael Bosworth</p>
          <p>Vocals, Electric Guitars, Bass, Tambourine, and Han Pan by Michael Bosworth</p>
          <p>Drums, Auxiliary Percussion, and Synth by Ken Mockler</p>
          <p>Accompanying Vocals by Ashleigh Wright</p>
          <p>Produced by Jeff Shinrock</p>
          <p>Recorded by Jeff Shinrock and Michael Bosworth</p>
          <p>Mixed by <a href="http://www.tonefreq.net/" target="_blank" rel="noopener" class="hover:text-teal-300 underline">Steve Glaze</a> at Tone Freq Studios</p>
          <p>Mastered by <a href="http://www.tonefreq.net/" target="_blank" rel="noopener" class="hover:text-teal-300 underline">Steve Glaze</a> at Tone Freq Studios</p>
          <p>Cover art photography by Kelly Treybig</p>
          <p>Cover art design by <a href="https://www.instagram.com/joshrowdesigns/" target="_blank" rel="noopener" class="hover:text-teal-300">Josh Row</a></p>
        </section>
      ),
    },
  ];

  onMount(() => {
    setCommentsEnabled(localStorage.getItem("mozworth-comments-enabled") === "true");
    if (localStorage.getItem("mozworth-comments-enabled") !== "true" && tab() === "conversation") {
      setTab("tracks");
    }
    const mql = window.matchMedia('(max-width: 600px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    onCleanup(() => mql.removeEventListener('change', handler));
  });

  createEffect(() => {
    location.pathname;
    setTab("Tracklist");
  });

  const cover = (
    <iframe class="cover-art w-full max-w-[380px] min-h-[680px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60" src="https://bandcamp.com/EmbeddedPlayer/album=2412424488/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless title="mozworth by mozworth"></iframe>
  );

  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">mozworth</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">mozworth</div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Released November 15, 2024</div>
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <a href="https://mozworth.bandcamp.com/album/mozworth" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 w-full">
          Purchase
        </a>
      </div>
    </>
  );

  return (
    <>
      <title>mozworth (Album) | mozworth</title>
      <meta name="description" content="Listen to the self-titled debut album by mozworth. Explore the tracklist, credits, and more." />
      <link rel="canonical" href="https://mozworth.music/albums/mozworth/" />
      <meta property="og:type" content="music.album" />
      <meta property="og:title" content="mozworth (Album) | mozworth" />
      <meta property="og:description" content="Listen to the self-titled debut album by mozworth. Explore the tracklist, credits, and more." />
      <meta property="og:image" content="https://mozworth.music/mozworth-debut.png" />
      <meta property="og:url" content="https://mozworth.music/albums/mozworth/" />
      <meta property="music:release_date" content="2024-11-15" />
      <meta property="music:album" content="mozworth" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="mozworth (Album) | mozworth" />
      <meta name="twitter:description" content="Listen to the self-titled debut album by mozworth. Explore the tracklist, credits, and more." />
      <meta name="twitter:image" content="https://mozworth.music/mozworth-debut.png" />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs}
          defaultTab={"Tracklist"}
        />
      </BasePageLayout>
    </>
  );
} 