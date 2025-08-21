import { createSignal } from "solid-js";
import { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
//
import { useLocation } from "@solidjs/router";
import ShareButton from "../../components/ShareButton";
import ReleaseMeta from "../../components/ReleaseMeta";
import LeaveNoteModal from "../../components/LeaveNoteModal";

//

export default function TheObserver() {
  const [showLeaveNoteModal, setShowLeaveNoteModal] = createSignal(false);
  const location = useLocation();

  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/track/3NNXEFyHojoTRB9nmUi392?si=07a5363d64224b03",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Spotify', song: 'The Observer' }); }
    },
    {
      href: "https://music.apple.com/us/song/the-observer/1778536752",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Apple Music', song: 'The Observer' }); }
    },
    {
      href: "https://mozworth.bandcamp.com/track/the-observer",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Bandcamp', song: 'The Observer' }); }
    },
    {
      href: "https://soundcloud.com/mozworth/the-observer",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'SoundCloud', song: 'The Observer' }); }
    },
    {
      href: "https://www.youtube.com/watch?v=LffiT-oJfg4",
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Listen on YouTube",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'YouTube', song: 'The Observer' }); }
    },
    {
      href: "https://listen.tidal.com/album/398032766/track/398032770",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Tidal', song: 'The Observer' }); }
    },
    {
      href: "https://music.amazon.com/albums/B0DM6QNX2J",
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Amazon Music', song: 'The Observer' }); }
    },
    {
      href: "https://www.deezer.com/us/track/3083103541",
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Deezer', song: 'The Observer' }); }
    }
  ];

  const cover = (
    <iframe
      class="cover-art w-full max-w-[380px] min-h-[425px] md:min-h-[490px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      src="https://bandcamp.com/EmbeddedPlayer/album=2412424488/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=136727558/transparent=true/"
      seamless
      title="The Observer by mozworth (Bandcamp embed)"
    />
  );

  const albumLink = "/albums/mozworth";
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">The Observer</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; <a href={albumLink} class="underline hover:text-teal-300 transition-colors">mozworth</a>
      </div>
      <ReleaseMeta releaseDate="2024-11-15" prefix="Released on" showConfetti={true} />
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <button
          onClick={() => setShowLeaveNoteModal(true)}
          class="inline-block px-5 py-2 rounded bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 w-full text-left"
        >
          Leave a Note
        </button>
        <a href="https://mozworth.bandcamp.com/track/the-observer" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 mt-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 w-full">
          Purchase
        </a>
        <a href="/support" 
          class="inline-block px-5 py-2 mt-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Support
        </a>
        <ShareButton
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/the-observer/"}
          title="The Observer by mozworth"
          text="Check out this song by mozworth!"
        />
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
      content: <p>The Observer was written <a class="underline hover:text-teal-300 transition-colors" href="https://www.bozzltron.com/2020/06/25/the-finland-sessions-the-observer/" target="_blank" rel="noopener">during the Finland sessions</a>. After making it to the cabin around dawn, mozworth moved in, stayed the first night alone in the woods. The next morning he got up, made some coffee, sat down and took in the sirene view of the snow covered valley. He picked up his guitar and The Observer happened.</p>,
    },
    {
      label: "Demo",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p class="mb-4">This is the original demo of The Observer recorded the morning it was written in a cabin in the woods. The sound of the river was recorded on site and was included in the final mix.</p>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/778569364&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          <div style={{"font-size":"10px","color":"#cccccc","line-break":"anywhere","word-break":"normal","overflow":"hidden","white-space":"nowrap","text-overflow":"ellipsis","font-family":"Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif","font-weight":"100"}}><a href="https://soundcloud.com/mozworth" title="mozworth" target="_blank" style={{"color":"#cccccc","text-decoration":"none"}}>mozworth</a> · <a href="https://soundcloud.com/mozworth/the-observer-demo" title="The Observer Demo" target="_blank" style={{"color":"#cccccc","text-decoration":"none"}}>The Observer Demo</a></div>
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
        <p>Mixed by Steve Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="underline hover:text-teal-300">Tone Freq Studios</a></p>
        <p>Mastered by Steve Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="underline hover:text-teal-300">Tone Freq Studios</a></p>
        <p>Cover art by <a href="https://www.instagram.com/joshrowdesign/?hl=en" target="_blank" rel="noopener" class="underline hover:text-teal-300">Josh Row</a></p>
        <p>Cover art photography by Kelly Treybig</p>
      </>
    },
    {
      label: "Reviews",
      content: (
        <div>
          <blockquote class="text-base md:text-lg italic text-white mb-2">
          es una pieza que invita al oyente a sumergirse en un espacio introspectivo y contemplativo. La producción es atmosférica, con capas de sonidos que crean una sensación de vigilancia silenciosa, como si estuvieras observando desde lejos sin interferir en lo que ocurre.
          <br /><br /> ( It's a piece that invites the listener to immerse themselves in an introspective and contemplative space. The production is atmospheric, with layers of sounds that create a sense of silent surveillance, as if you were observing from afar without interfering with what's happening.

)<br />
            <span class="block text-yellow-300 text-sm mt-1">B&amp;W Peru</span>
          </blockquote>
          <blockquote class="text-base md:text-lg italic text-white mb-2">
          Very beautiful voice and calming energy. Lets go!  
          <br />
          <span class="block text-yellow-300 text-sm mt-1">NeverGrownUp </span>
          </blockquote>
          
        </div>
      ),
    },
    {
      label: "Performances",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p class="mb-4">Watch a live performance of "The Observer":</p>
          <div class="w-full aspect-video max-w-2xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/_Wb_knkWYbk"
              title="The Observer - Live Performance"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="rounded-xl shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <title>The Observer | mozworth</title>
      <meta name="description" content="Listen to 'The Observer' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'The Observer' from the self-titled debut album (2024)." />
      <meta name="last-modified" content="2025-05-01" />
      <link rel="canonical" href="https://mozworth.music/songs/the-observer/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="The Observer | mozworth" />
      <meta property="og:description" content="Listen to 'The Observer' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'The Observer' from the self-titled debut album (2024)." />
      <meta property="og:image" content="https://mozworth.music/mozworth-debut.webp" />
      <meta property="og:url" content="https://mozworth.music/songs/the-observer/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Observer | mozworth" />
      <meta name="twitter:description" content="Listen to 'The Observer' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'The Observer' from the self-titled debut album (2024)." />
      <meta name="twitter:image" content="https://mozworth.music/mozworth-debut.webp" />
      {/* Structured Data for AI and Search Engines */}
      <script type="application/ld+json" textContent={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": "The Observer",
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
        "url": "https://mozworth.music/songs/the-observer/"
      })} />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
        confetti={{ enabled: true, releaseDate: new Date('2024-11-15'), imageUrl: '/mozworth-debut.webp' }}
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs}
          defaultTab="Lyrics"
        />      <LeaveNoteModal
        isOpen={showLeaveNoteModal()}
        onClose={() => setShowLeaveNoteModal(false)}
        songTitle="The Observer"
      />

      </BasePageLayout>
    </>
  );
} 