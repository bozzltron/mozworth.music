import { createSignal } from "solid-js";
import { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import ShareButton from "../../components/ShareButton";
import FollowButton from "../../components/FollowButton";
import ReleaseMeta from "../../components/ReleaseMeta";
import { StandardMetadata } from "../../utils/metadata";
import LeaveNoteModal from "../../components/LeaveNoteModal";
import BandcampDigitalLink from "../../components/BandcampDigitalLink";

const RELEASE_DATE = "2026-11-24";

export default function Push() {
  const [showLeaveNoteModal, setShowLeaveNoteModal] = createSignal(false);

  // Bandcamp embedded player
  const cover = (
    <iframe
      src="https://bandcamp.com/EmbeddedPlayer/track=1205551012/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
      class="cover-art w-full max-w-[380px] min-h-[430px] md:min-h-[470px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#0b1d33] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      title="Push by mozworth (Bandcamp embed)"
    />
  );

  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/album/4DX7ksdewwG9R6Prp6ohi6",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Spotify', song: 'Push' }); }
    },
    {
      href: "https://music.apple.com/us/album/push/6831842567?i=6831842568",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Apple Music', song: 'Push' }); }
    },
    {
      href: "https://soundcloud.com/mozworth/push",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'SoundCloud', song: 'Push' }); }
    },
    {
      href: "https://music.amazon.com/albums/B0HQR547BR",
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Amazon Music', song: 'Push' }); }
    },
    {
      href: "https://www.youtube.com/watch?v=L8l9F6vHcwI&list=OLAK5uy_lZX5yxGqbiUK43O5rHPJkLujOSbhPijLI",
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Listen on YouTube",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'YouTube', song: 'Push' }); }
    },
    {
      href: "https://tidal.com/track/576798229/u",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Tidal', song: 'Push' }); }
    },
    {
      href: "https://link.deezer.com/s/3538TJSmT923LwYash6YF",
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Deezer', song: 'Push' }); }
    },
    {
      href: "https://mozworth.bandcamp.com/track/push",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Listen on Bandcamp",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Bandcamp', song: 'Push' }); }
    },
    {
      href: "https://www.subvert.fm/mozworth/tracks/push",
      alt: "Subvert FM",
      iconSrc: "/subvert.svg",
      ariaLabel: "Listen on Subvert FM",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Subvert FM', song: 'Push' }); }
    },
  ];

  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Push</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; Push
      </div>
      <ReleaseMeta releaseDate={RELEASE_DATE} prefix="Released" showConfetti={false} />
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4 flex flex-col gap-2">
        <button
          onClick={() => setShowLeaveNoteModal(true)}
          class="inline-block px-5 py-2 rounded bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 w-full text-left"
        >
          Leave a Note
        </button>
        <BandcampDigitalLink
          href="https://mozworth.bandcamp.com/track/push"
          analyticsLabel="Push"
          pricing="paid"
        />
        <FollowButton variant="light" songTitle="Push" noMargin />
        <ShareButton noMargin
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/push/"}
          title="Push by mozworth"
          text="Listen to Push by mozworth!"
        />
      </div>
    </>
  );

  const lyrics = (
    <div class="text-base md:text-lg leading-relaxed text-white opacity-90">
      <pre class="whitespace-pre-line font-sans">
{`Feel the breeze
Taste the salt
The embrace of the sea

We paddle out
Noses down
Embrace the energy

Bob in the wake
Focus finds a state
All in harmony

Push to stand
Glide towards the sand
On a holy message from the deep

What could be more profound than this wave?
Oh this wave
It's swelling up under me
What could be more profound than this wave?
On this wave
It's breaking up over me

Wow

The push of the sun
Pull of the moon
On the surface of the earth

Find your space
Among the waves
Among all things
Feel the swell and take your place

What could be more profound than this wave?
Oh this wave
It's swelling up under me
What could be more profound than this wave?
On this wave
It's breaking up over me

Wow

What could be more profound than this wave?
Oh this wave
It's swelling up under me
What could be more profound than this wave?
On this wave
It's breaking up over me

Wow`}
      </pre>
    </div>
  );

  const pressRelease = (
    <div class="text-base md:text-lg leading-relaxed text-white opacity-90">
      <p class="mb-4 font-bold">FOR IMMEDIATE RELEASE</p>
      <p class="mb-4 text-xl font-bold">
        mozworth Drops New Single &ldquo;Push&rdquo; &mdash; A Bold Sonic Evolution
      </p>
      <p class="mb-4">
        <strong>Austin, TX &ndash; November 6, 2026</strong> &ndash; Following the release of
        &ldquo;Why Not&rdquo; (October 22, 2026) which Cougar Microbes noted, &ldquo;teases a new and
        exciting direction ahead of their upcoming album&rdquo;, mozworth is proud to announce
        &ldquo;Push.&rdquo; This isn&rsquo;t just a follow-up&mdash;it&rsquo;s a declaration: mozworth
        has arrived.
      </p>
      <p class="mb-4">
        While prepping for the new album, the band&rsquo;s rehearsal recordings brought the awareness
        that their sound had outgrown the home studio. They selected 5th Street Studios and recording
        engineer Ryan Huseman in Austin, Texas to live track and capture this raw power.
      </p>
      <p class="mb-4">
        &ldquo;Push&rdquo; is, on the surface, a song about surfing. Underneath, it delves into
        something far deeper.
      </p>
      <p class="mb-4">
        Hammer-on guitar riffs from Michael &ldquo;Boz&rdquo; Bosworth cut through feedback, bringing in
        an eager Mike Hall on drums that immediately build tension. The track explodes into
        &ldquo;Texas-meets-surf&rdquo; guitar work courtesy of Mark Heaps and then settles into a wide
        stereo verse complete with shimmering, reverb-drenched guitar bending with the waves. Jack
        Schultz colors the track with a bass as active as the ocean. The track bounces between two sonic
        landscapes: dry ripping guitar riffs with a fully engaged rock lineup and seaside verses that
        create space to think. It crescendos in a wall of sound that demonstrates just how powerful this
        group is. This band is in full send. &ldquo;Push&rdquo; is the journey.
      </p>
      <p class="mb-4">
        The song was mixed and mastered by Steve Glaze at Tone Freq Studios. Steve has grown with the
        band, mixing every mozworth track to date. He is now in place to refine their latest work.
      </p>
      <p class="mb-4">
        Stay tuned for more music leading toward the full-length release of{" "}
        <em>The Mountain &amp; The Wolf</em> in 2027.
      </p>
      <p class="font-semibold">Push drops November 24, 2026</p>
    </div>
  );

  const credits = (
    <div class="text-base md:text-lg leading-relaxed text-white opacity-90">
      <p>Songwriting by Michael Bosworth</p>
      <p>Lyrics by Michael Bosworth</p>
      <p>Composed by Michael Bosworth, Mark Heaps, Jack Schultz, and Mike Hall</p>
      <p>Produced by mozworth</p>
      <p>Guitar and Vocals performed by Michael Bosworth</p>
      <p>Guitar performed by Mark Heaps</p>
      <p>Bass performed by Jack Schultz</p>
      <p>Drums performed by Mike Hall</p>
      <p>Recorded by Ryan Huseman at <a href="https://5thstreetstudios.com/" target="_blank" rel="noopener" class="underline hover:text-teal-300">5th Street Studios</a></p>
      <p>Mixed by Steven Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="underline hover:text-teal-300">Tone Freq Studios</a></p>
      <p>Mastered by Steven Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="underline hover:text-teal-300">Tone Freq Studios</a></p>
      <p>Cover art by Mark Heaps</p>
      <p>No AI was used to create this music.</p>
    </div>
  );

  const tabs = [
    { label: "Lyrics", content: lyrics },
    { label: "Press Release", content: pressRelease },
    { label: "Credits", content: credits },
  ];

  return (
    <>
      <StandardMetadata
        title="Push | mozworth"
        description="mozworth returns with Push — a Texas-meets-surf rock anthem recorded live at 5th Street Studios. Out November 24, 2026."
        url="https://mozworth.music/songs/push/"
        type="music.song"
        image="https://mozworth.music/mozworth-push.webp"
        imageAlt="Push by mozworth - single artwork"
        publishDate={RELEASE_DATE}
        modifiedDate="2026-11-25"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MusicRecording",
          "name": "Push",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "mozworth"
          },
          "inAlbum": {
            "@type": "MusicAlbum",
            "name": "The Mountain & The Wolf"
          },
          "image": "https://mozworth.music/mozworth-push.webp",
          "datePublished": RELEASE_DATE,
          "dateModified": "2026-11-25",
          "url": "https://mozworth.music/songs/push/"
        }}
      />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
        backgroundClass="min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-br from-[#081b2e] via-[#1c4a68] to-[#8fc1d4]"
        confetti={{ enabled: true, releaseDate: new Date(RELEASE_DATE), imageUrl: '/mozworth-push.webp' }}
      >
        <TabbedContent
          tabs={tabs}
          defaultTab="Lyrics"
        />
      </BasePageLayout>
      <LeaveNoteModal
        isOpen={showLeaveNoteModal()}
        onClose={() => setShowLeaveNoteModal(false)}
        songTitle="Push"
      />
    </>
  );
}
