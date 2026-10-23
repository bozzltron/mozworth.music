import { createSignal, createEffect, createMemo } from "solid-js";
import { useLocation } from "@solidjs/router";
import { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import ShareButton from "../../components/ShareButton";
import FollowButton from "../../components/FollowButton";
import ReleaseMeta from "../../components/ReleaseMeta";
import { StandardMetadata } from "../../utils/metadata";
import LeaveNoteModal from "../../components/LeaveNoteModal";
import BandcampDigitalLink from "../../components/BandcampDigitalLink";

export default function WhyNot() {
  const [tab, setTab] = createSignal("Lyrics");
  const [showLeaveNoteModal, setShowLeaveNoteModal] = createSignal(false);
  const location = useLocation();

  // Bandcamp embedded player
  const cover = (
    <iframe
      src="https://bandcamp.com/EmbeddedPlayer/track=2084037407/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
      seamless
      class="cover-art w-full aspect-square rounded-xl shadow-xl bg-[#222] mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      title="Why Not by mozworth"
    />
  );

  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/track/3ekUvQlwMnQmVyJIV7zGcW?si=06894b4089704e42",
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Spotify', song: 'Why Not' }); }
    },
    {
      href: "https://music.apple.com/us/song/why-not/6815667974",
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Apple Music', song: 'Why Not' }); }
    },
    {
      href: "https://soundcloud.com/mozworth/why-not",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'SoundCloud', song: 'Why Not' }); }
    },
    {
      href: "https://music.amazon.com/tracks/B0HKTRN5J7?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_BQ1en18I5Cde2gKzn7YR4Q0Ai",
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Amazon Music', song: 'Why Not' }); }
    },
    {
      href: "https://www.youtube.com/watch?v=P4z-AF61SHQ&list=OLAK5uy_lt-c3fL2FT4dDbJBiHGC3NWTa68Akul6I",
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Listen on YouTube",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'YouTube', song: 'Why Not' }); }
    },
    {
      href: "https://tidal.com/track/563856535/u",
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Tidal', song: 'Why Not' }); }
    },
    {
      href: "https://www.deezer.com/us/album/1105902212",
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Deezer', song: 'Why Not' }); }
    },
    {
      href: "https://mozworth.bandcamp.com/track/why-not",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Listen on Bandcamp",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Bandcamp', song: 'Why Not' }); }
    },
    {
      href: "https://www.subvert.fm/mozworth/tracks/why-not",
      alt: "Subvert FM",
      iconSrc: "/subvert.svg",
      ariaLabel: "Listen on Subvert FM",
      onClick: () => { if (window.gtag) window.gtag('event', 'streaming_click', { event_category: 'streaming', event_label: 'Subvert FM', song: 'Why Not' }); }
    },
  ];

  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Why Not</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; Why Not
      </div>
      <ReleaseMeta releaseDate="2026-10-22" prefix="Released on" showConfetti={false} />
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4 flex flex-col gap-2">
        <button
          onClick={() => setShowLeaveNoteModal(true)}
          class="inline-block px-5 py-2 rounded bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 w-full text-left"
        >
          Leave a Note
        </button>
        <BandcampDigitalLink
          href="https://mozworth.bandcamp.com/track/why-not"
          analyticsLabel="Why Not"
          pricing="paid"
        />
        <FollowButton variant="light" songTitle="Why Not" noMargin />
        <ShareButton noMargin
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/why-not/"}
          title="Why Not by mozworth"
          text="Check out this song by mozworth!"
        />
      </div>
    </>
  );

  const lyrics = (
    <div class="text-base md:text-lg leading-relaxed text-white opacity-90">
      <pre class="whitespace-pre-line font-sans">
{`In a building with real windows
I don't think I should be alone
Outside the earth's atmosphere
I feel more at home

And the time was never right
The time was always wrong
Arms and legs gettin' blown off
God save these bones

If you wanted to live a quiet peaceful life
You picked the wrong time to be alive

I can't even see myself anymore but here I am
And the sad thing is I'm actually a comedian

If you wanted a breath of fresh air you won't find one
It's a fact she's not coming back and we are not alone

If you wanted to live a quiet peaceful life
You picked the wrong time to be alive

You can't wake up if you don't fall asleep
I meant to say yes but my mouth didn't speak
You can't wake up if you don't fall asleep
Just keep telling the story

What's the cause?
What's the meaning?
Why do you always have to dare?
We watch transfixed as you enter into uncharted terr

Are you going to abandon us?
We're in our grief
Eyeballs gouged literal and figuratively

If you wanted to live a quiet peaceful life
You picked the wrong time to be alive

You can't wake up if you don't fall asleep
I meant to say yes but my mouth didn't speak
You can't wake up if you don't fall asleep
Just keep telling the story

You can't wake up if you don't fall asleep
I meant to say yes but my mouth didn't speak
You can't wake up if you don't fall asleep
Just keep telling the story`}
      </pre>
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

  const performances = (
    <div class="flex flex-col items-start gap-6">
      <p class="mb-4">Watch live performances of "Why Not":</p>
      <div class="w-full aspect-video max-w-2xl">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/bsGnlAxp2fk"
          title="Why Not - Live Performance"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );

  const press = (
    <div class="text-base md:text-lg leading-relaxed text-white opacity-90">
      <h2 class="text-xl font-bold mb-4">Press Coverage</h2>
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">No Transmission Review</h3>
        <p class="text-white/70 mb-2">October 22, 2026</p>
        <p class="mb-3">
          No Transmission calls "Why Not" a single that’s "heavier, more forceful and more outward-looking than much of their earlier work," setting the tone for The Mountain & The Wolf.
        </p>
        <a href="https://notransmission.com/mozworth-sound-ready-to-break-something-open-on-why-not/" target="_blank" rel="noopener noreferrer" class="inline-block text-teal-300 hover:text-teal-200 underline">
          Read Full Review →
        </a>
      </div>
    </div>
  );

  const tabs = createMemo(() => [
    { label: "Lyrics", content: lyrics },
    { label: "Performances", content: performances },
    { label: "Press", content: press },
    { label: "Credits", content: credits }
  ]);

  createEffect(() => {
    if (!tabs().some(t => t.label === tab())) {
      setTab("Lyrics");
    }
  });

  return (
    <>
      <StandardMetadata
        title="Why Not | mozworth"
        description="mozworth releases Why Not — an indie rock awakening about taking chances and embracing the unknown. Released October 22, 2026."
        url="https://mozworth.music/songs/why-not/"
        type="music.song"
        image="https://mozworth.music/Why-Not.webp"
        imageAlt="Why Not by mozworth - single artwork"
        publishDate="2026-10-22"
        modifiedDate="2026-10-23"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MusicRecording",
          "name": "Why Not",
          "byArtist": {
            "@type": "MusicGroup",
            "name": "mozworth"
          },
          "inAlbum": {
            "@type": "MusicAlbum",
            "name": "The Mountain & The Wolf"
          },
          "image": "https://mozworth.music/Why-Not.webp",
          "datePublished": "2026-10-22",
          "dateModified": "2026-10-23",
          "url": "https://mozworth.music/songs/why-not/"
        }}
      />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
        confetti={{ enabled: true, releaseDate: new Date('2026-10-22'), imageUrl: '/Why-Not.webp' }}
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs()}
          defaultTab="Lyrics"
        />
      </BasePageLayout>
      <LeaveNoteModal
        isOpen={showLeaveNoteModal()}
        onClose={() => setShowLeaveNoteModal(false)}
        songTitle="Why Not"
      />
    </>
  );
}