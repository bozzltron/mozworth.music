import { createSignal, createEffect, createMemo } from "solid-js";
import { useLocation } from "@solidjs/router";
import { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import ShareButton from "../../components/ShareButton";
import ReleaseMeta from "../../components/ReleaseMeta";
import LeaveNoteModal from "../../components/LeaveNoteModal";
import { StandardMetadata } from "../../utils/metadata";


export default function StoryOfAnArtist() {
  const location = useLocation();
  const [tab, setTab] = createSignal("Lyrics");
  const [showLeaveNoteModal, setShowLeaveNoteModal] = createSignal(false);

  // Streaming links for this song
  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/track/0KJKnfaRQo9ChpFdBiXMBz?si=4a6a5dd6e4ca4ee4",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Spotify', song: 'Story of an Artist' }); }
    },
    {
      href: "https://music.apple.com/us/album/story-of-an-artist-single/1869440910",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Apple Music', song: 'Story of an Artist' }); }
    },
    {
      href: "https://mozworth.bandcamp.com/track/story-of-an-artist",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Bandcamp', song: 'Story of an Artist' }); }
    },
    {
      href: "https://soundcloud.com/mozworth/story-of-an-artist",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'SoundCloud', song: 'Story of an Artist' }); }
    },
    {
      href: "https://tidal.com/album/489983996/track/489983997",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Tidal', song: 'Story of an Artist' }); }
    },
    {
      href: "https://www.amazon.com/music/player/albums/B0GH2FB8GF",
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Amazon Music', song: 'Story of an Artist' }); }
    },
    {
      href: "https://link.deezer.com/s/32eJ51YMEr2g4u4FF0khU",
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Deezer', song: 'Story of an Artist' }); }
    },
    {
      href: "https://www.youtube.com/watch?v=zXXh2I4wU3g&list=OLAK5uy_lDN5oZeT_lDLQunHTEshby_mbRe0WfF7w",
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Watch on YouTube",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'YouTube', song: 'Story of an Artist' }); }
    },
  ];

  // Cover art (Bandcamp embed)
  const cover = (
    <iframe
      class="cover-art w-full max-w-[380px] min-h-[430px] md:min-h-[470px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      style={{ border: 0 }}
      src="https://bandcamp.com/EmbeddedPlayer/track=1390313411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
      title="Story of an Artist by mozworth (Bandcamp embed)"
    />
  );

  // Info section
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Story of an Artist</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; Story of an Artist
      </div>
      <ReleaseMeta releaseDate="2026-01-22" prefix="Released" showConfetti={false} />
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <button
          onClick={() => setShowLeaveNoteModal(true)}
          class="inline-block px-5 py-2 rounded bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 w-full text-left"
        >
          Leave a Note
        </button>
        <a href="https://mozworth.bandcamp.com/track/story-of-an-artist" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 mt-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 w-full">
          Free Download
        </a>
        <a href="/support" 
          class="inline-block px-5 py-2 mt-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Support
        </a>
        <ShareButton
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/story-of-an-artist/"}
          title="Story of an Artist by mozworth"
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
Listen up and I'll tell a story
About an artist growing old
Some would try for fame and glory
Others aren't so bold

Everyone, and friends and family
Saying, "Hey! Get a job!"
"Why do you only do that only?
Why are you so odd?

We don't really like what you do
We don't think anyone ever will
It's a problem that you have
And this problem's made you ill."

Listen up and I'll tell a story
About an artist growing old
Some would try for fame and glory
Others aren't so bold

The artist walks alone
Someone says behind his back
"He's got his gall to call himself that!
He doesn't even know where he's at!"

The artist walks among the flowers
Appreciating the sun
He does this all his waking hours
But is it really so wrong?

Listen up and I'll tell a story
About an artist growing old
Some would try for fame and glory
Others aren't so bold

They sit in front of their TVs
Saying, "Hey! This is fun!"
And they laugh at the artist
Saying, "He doesn't know how to have fun."

The best things in life are truly free
Singing birds and laughing bees
"You've got me wrong", says he
"The sun don't shine in your TV"

Listen up and I'll tell a story
About an artist growing old
Some would try for fame and glory
Others just like to watch the world`}</div>
      ),
    },
    {
      label: "Press Release",
      content: (
        <>
          <h2 class="text-xl font-bold mb-2">mozworth – Indie‑Alt Rock Outfit Releases a New Cover of Daniel Johnston's "Story of an Artist"</h2>
          <p class="mb-4"><strong>Austin, TX – 9 January 2026</strong></p>
          <p class="mb-4">South‑Austin band mozworth is proud to announce the digital release of their re‑imagined version of Daniel Johnston's classic <em>Story of an Artist</em>. The track drops on January 22, 2026—the day that celebrates both Johnston's birthday and Austin's "Hi, How Are You Day," a city‑wide reminder to check in on friends' mental health. By pairing the tribute with this civic observance, mozworth hopes to honor Daniel's legacy in song and in community.</p>
          
          <p class="mb-4">The song has long spoke to Michael Bosworth. "It is such a vivid picture of Daniel's experience. It contains some profound perspectives along with some deep pain. Sonically, it's beautiful." he says. "I remember working on the demo and getting caught up with emotion. I was able to connect with his pain."</p>
          
          <p class="mb-4">Paying homage to Daniel isn't new for mozworth. Last year was the first release of this kind with "Walking The Cow". "Story of an Artist" is the second installment. "We knew we were going to record this song early and I had a demo but we waited till late in the year to get recording", says Michael Bosworth. "We quickly realized that everyone's schedules were too fragmented for a traditional in‑person studio day." Instead, they pieced the song together digitally.</p>
          
          <p class="mb-4">They had a demo, but they needed drums. They needed Mike. When Mike heard the demo, he heard the Beatles—a natural homage, given Daniel Johnston's lifelong admiration for the Fab Four. The band embraced the idea, swapping their usual twin‑electric‑guitar attack for a mandolin and upright bass.</p>
          
          <p class="mb-4">Each member showed up with their instrument, wrote their part, and recorded it on the spot. Mark Heaps on mandolin. Jack Schultz on upright bass. Michael Bosworth on electric guitar. "These guys showed up really having no idea what to play and reacting to the recording. There is a spontaneity to it. A trust in our intuition that brings some magic.", says Michael Bosworth.</p>
          
          <p class="mb-4">Mandolin, bass, guitar, and vocals were recorded at mozworth's South‑Austin space; drums and auxiliary percussion at Mike Hall's home studio. A brief nod to the gear: a set of vintage microphones and preamps borrowed from friend Josh Wolfer to give this release a new sound. Mixing and mastering were handled by Steven Glaze at Tone Freq Studios.</p>
          
          <p class="mb-4">mozworth's <em>Story of an Artist</em> is a dreamy DIY reinterpretation that honors the original by digging deep into Daniel's own inspiration and playing in the spirit of his heroes.</p>
          
          <p class="mb-4">January 22 is Hi, How Are You Day in Austin and several other cities, a grassroots campaign encouraging residents to reach out to friends and family about mental‑health wellbeing.</p>
          
          <p class="mb-4">mozworth is currently booking dates in the Austin area to support the release and they are in the process of recording their next full length album expected late 2026.</p>
          
          <p class="mb-6"><strong>Story of an Artist released January 22, 2026</strong></p>
        </>
      ),
    },
      {
      label: "Credits",
      content: (
        <>
          <p>Released January 22, 2026</p>
          <p>Songwriting by Daniel Johnston</p>
          <p>composed by mozworth</p>
          <p>Vocals and Electric Guitar by Michael Bosworth</p>
          <p>Mandolin by Mark Heaps</p>
          <p>Bass by Jack Schultz</p>
          <p>Slide Guitar by Jack Schultz</p>
          <p>Background "lala" Vocals by Mark Heaps and Michael Bosworth</p>
          <p>Recording by Mark Heaps, Michael Bosworth, and Mike Hall</p>
          <p>Mixed and Mastered by Steven Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="underline hover:text-teal-300">Tone Freq Studios</a></p>
          <p>Cover art by Michael Bosworth</p>
        </>
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
      <StandardMetadata
        title="Story of an Artist | mozworth"
        description="Listen to 'Story of an Artist' by mozworth. Daniel Johnston cover song from Austin indie rock band mozworth. Read the lyrics, learn about the song, and experience the official album art. The second installment from mozworth celebrating Daniel's birthday and Hi, How Are You Day. Released January 22, 2026."
        url="https://mozworth.music/songs/story-of-an-artist/"
        type="music.song"
        image="https://mozworth.music/storyofanartist.webp"
        imageAlt="Story of an Artist by mozworth - single artwork"
        keywords="Story of an Artist, Daniel Johnston, mozworth, indie rock, alternative rock, Austin Texas, Daniel Johnston cover, Austin indie rock, alternative rock bands Austin, mozworth music"
        publishDate="2026-01-22"
        modifiedDate="2026-01-22"
        isrc="QZDA62658204"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MusicRecording",
          "name": "Story of an Artist",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "mozworth"
          },
          "inAlbum": {
            "@type": "MusicAlbum",
            "name": "Story of an Artist"
          },
          "genre": ["Indie Rock", "Alternative Rock", "Indie Alternative Rock"],
          "image": "https://mozworth.music/storyofanartist.webp",
          "datePublished": "2026-01-22",
          "dateModified": "2026-01-22",
          "url": "https://mozworth.music/songs/story-of-an-artist/",
          "isrcCode": "QZDA62658204"
        }}
      />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
        confetti={{ enabled: true, releaseDate: new Date('2026-01-22'), imageUrl: '/storyofanartist.webp' }}
        backgroundClass="min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-br from-[#f9f3d8] via-[#faf8f0] to-[#e8d474]"
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs()}
          defaultTab="Lyrics"
        />      <LeaveNoteModal
        isOpen={showLeaveNoteModal()}
        onClose={() => setShowLeaveNoteModal(false)}
        songTitle="Story of an Artist"
      />

      </BasePageLayout>
    </>
  );
}
