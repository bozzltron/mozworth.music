import { createSignal, onMount, createEffect, createMemo } from "solid-js";
import StreamingIcons, { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import ShareButton from "../../components/ShareButton";
import LeaveNoteModal from "../../components/LeaveNoteModal";

export default function LettingGo() {
  const [commentsEnabled, setCommentsEnabled] = createSignal(false);
  const [mounted, setMounted] = createSignal(false);
  const [tab, setTab] = createSignal("Lyrics");
  const [showLeaveNoteModal, setShowLeaveNoteModal] = createSignal(false);

  // Streaming links for this song
  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/track/1av4Vro9y4sAfigukPMVLW?si=671827b7b13d4daf",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Spotify', song: 'Letting Go' }); }
    },
    {
      href: "https://music.apple.com/us/song/letting-go/1778536749",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Apple Music', song: 'Letting Go' }); }
    },
    {
      href: "https://mozworth.bandcamp.com/track/letting-go",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Bandcamp', song: 'Letting Go' }); }
    },
    {
      href: "https://www.youtube.com/watch?v=4Avq0ZtLtRc",
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Watch on YouTube",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'YouTube', song: 'Letting Go' }); }
    },
    {
      href: "https://tidal.com/browse/album/398032766?u",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Tidal', song: 'Letting Go' }); }
    },
    {
      href: "https://music.amazon.com/albums/B0DM6QNX2J?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_YDG3bySITVf4MMKmlbFnux1QA&trackAsin=B0DM6QL6N3",
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Amazon Music', song: 'Letting Go' }); }
    },
    {
      href: "https://soundcloud.com/mozworth/letting-go",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'SoundCloud', song: 'Letting Go' }); }
    },
    {
      href: "https://dzr.page.link/3vQHgas851udoDfq8",
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Deezer', song: 'Letting Go' }); }
    }
  ];

  onMount(() => {
    setCommentsEnabled(localStorage.getItem("mozworth-comments-enabled") === "true");
    setMounted(true);
  });

  // Cover art
  const cover = (
    <iframe
      class="cover-art w-full max-w-[380px] min-h-[425px] md:min-h-[490px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      src="https://bandcamp.com/EmbeddedPlayer/album=2412424488/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2966455044/transparent=true/"
      seamless
      title="mozworth by mozworth (Bandcamp embed)"
    />
  );

  // Info section
  const albumLink = "/albums/mozworth";
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Letting Go</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; <a href={albumLink} class="underline hover:text-teal-300 transition-colors">mozworth</a>
      </div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Released November 15, 2024</div>
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <button
          onClick={() => setShowLeaveNoteModal(true)}
          class="inline-block px-5 py-2 rounded bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 w-full text-left"
        >
          Leave a Note
        </button>
        <a href="https://mozworth.bandcamp.com/track/letting-go" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 mt-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 w-full">
          Purchase
        </a>
        <a href="https://mozworth.printful.me/" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 mt-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Merch
        </a>
        <ShareButton
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/letting-go/"}
          title="Letting Go by mozworth"
          text="Check out this song by mozworth!"
        />
      </div>
    </>
  );

  // TabbedContent tabs array
  const tabs = createMemo(() => [
    {
      label: "Lyrics",
      content: (
        <div class="whitespace-pre-line text-base md:text-lg leading-relaxed text-white">{`I've been scratching\nFor some space\nTo get my head\nOn the page\n\nThere's only so much\nI can fit\nInside my head\nBefore it splits\n\nI've been scratching\nFor some space\nTo get my head\nOn the page\n\nThere's only so much\nI can fit\nInside my head\nBefore it splits\n\nFeel the pressure building up\nGotta get away before I blow\n\nKnock the arrow\nBend the bow\nFeather to my face\nI'm letting go\n\nI've been Itching\nFor a place\nTo get my head\nOn the page\n\nThere's only so much\nI can take\nBefore bending\nBefore I break\n\nFeel the pressure building up\nGotta get away before I blow\n\nKnock the arrow\nBend the bow\nFeather to my face\nI'm letting go\n\nI'm letting go\nI'm letting go\nI'm letting\nGo`}</div>
      ),
    },
    {
      label: "Writing",
      content: (
        <p>Letting Go was written as part of the <a href="https://www.bozzltron.com/2020/06/24/the-finland-sessions/" target="_blank" rel="noopener" class="hover:text-teal-300 underline">Finland sessions</a>. This was the first trip mozworth took to Finland, Minnesota in 2020 to write for four days in a cabin. So excited to finally fullfill a dream a having this treasured time, he wrote a song in advance of arrival. Letting Go is not only the first song on the the debut, it was the first of the project, and a symbol of a new door opening.</p>
      ),
    },
    {
      label: "Demo",
      content: (
        <div>
          <p>This is the original demo recorded in the cabin in Finland, Minnesota.</p>
          <iframe scrolling="no" frameborder="no" allow="autoplay" class="w-full h-32 md:h-40 rounded" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/778576108&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          <div class="text-xs text-gray-400 mt-2"><a href="https://soundcloud.com/mozworth" target="_blank" rel="noopener" class="hover:text-teal-300">mozworth</a> · <a href="https://soundcloud.com/mozworth/letting-go-demo" target="_blank" rel="noopener" class="hover:text-teal-300">Letting GO Demo</a></div>
        </div>
      ),
    },
    {
      label: "Credits",
      content: (
        <div>
          <p>Songwriting by Michael Bosworth</p>
          <p>Composition by Michael Bosworth and Ken Mockler</p>
          <p>Lyrics by Michael Bosworth</p>
          <p>Vocals, Electric Guitars, Bass, and Tambourine by Michael Bosworth</p>
          <p>Drums by Ken Mockler</p>
          <p>Accompanying Vocals by Ashleigh Wright</p>
          <p>Produced by Jeff Shinrock</p>
          <p>Recorded by Jeff Shinrock and Michael Bosworth</p>
          <p>Mixed by <a href="http://www.tonefreq.net/" target="_blank" rel="noopener" class="hover:text-teal-300">Steve Glaze</a> at Tone Freq Studios</p>
          <p>Mastered by <a href="http://www.tonefreq.net/" target="_blank" rel="noopener" class="hover:text-teal-300">Steve Glaze</a> at Tone Freq Studios</p>
          <p>Cover art photography by Kelly Treybig</p>
          <p>Cover art design by <a href="https://www.instagram.com/joshrowdesigns/" target="_blank" rel="noopener" class="hover:text-teal-300">Josh Row</a></p>
        </div>
      ),
    },
    {
      label: "Reviews",
      content: (
        <div>
          <blockquote class="text-base md:text-lg italic text-white mb-2">
          This sound feels like an invitation to forget everything and just enjoy the music. The vocals sound like they're revealing something important about life. 
            <br />
            <span class="block text-yellow-300 text-sm mt-1">Crashtest Recordings </span>
          </blockquote>
          <blockquote class="text-base md:text-lg italic text-white mb-2">
          Your latest Alternative release showcases your growth as an artist. It's exciting, it's dynamic, and it's going to make waves. 
            <br />
            <span class="block text-yellow-300 text-sm mt-1">OnTheRoad </span>
          </blockquote>
        </div>
      ),
    },
    {
      label: "Performances",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p class="mb-4">Watch a live performance of "Letting Go":</p>
          <div class="w-full aspect-video max-w-2xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/2pFXFlCRJ3M"
              title="Letting Go - Live Performance"
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
      <title>Letting Go | mozworth</title>
      <meta name="description" content="Listen to 'Letting Go' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Letting Go' from the self-titled debut album (2024)." />
      <meta name="last-modified" content="2025-05-01" />
      <link rel="canonical" href="https://mozworth.music/songs/letting-go/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="Letting Go | mozworth" />
      <meta property="og:description" content="Listen to 'Letting Go' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Letting Go' from the self-titled debut album (2024)." />
      <meta property="og:image" content="https://mozworth.music/mozworth-debut.webp" />
      <meta property="og:url" content="https://mozworth.music/songs/letting-go/" />
      <meta property="music:isrc" content="QZZ762472990" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Letting Go | mozworth" />
      <meta name="twitter:description" content="Listen to 'Letting Go' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Letting Go' from the self-titled debut album (2024)." />
      <meta name="twitter:image" content="https://mozworth.music/mozworth-debut.webp" />
      {/* Structured Data for AI and Search Engines */}
      <script type="application/ld+json" innerHTML={`{
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": "Letting Go",
        "byArtist": {
          "@type": "MusicGroup",
          "name": "mozworth"
        },
        "inAlbum": {
          "@type": "MusicAlbum",
          "name": "mozworth"
        },
        "image": "https://mozworth.music/mozworth-debut.webp",
        "datePublished": "2024-11-15",
        "dateModified": "2025-05-01",
        "url": "https://mozworth.music/songs/letting-go/"
      }`} />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
      >
        <TabbedContent
          tabs={tabs()}
          defaultTab={mounted() && commentsEnabled() ? tabs()[0].label : "Lyrics"}
        />
      </BasePageLayout>
      <LeaveNoteModal
        isOpen={showLeaveNoteModal()}
        onClose={() => setShowLeaveNoteModal(false)}
        songTitle="Letting Go"
      />
    </>
  );
} 