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

export default function WhyNot() {
  const [tab, setTab] = createSignal("Lyrics");
  const [showLeaveNoteModal, setShowLeaveNoteModal] = createSignal(false);
  const location = useLocation();

  const cover = (
    <img
      src="/why-not.webp"
      alt="Why Not by mozworth - single artwork"
      class="cover-art w-full max-w-[380px] mx-auto rounded-xl shadow-xl bg-[#222] object-contain mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04]"
      loading="lazy"
      decoding="async"
    />
  );

  const streamingLinks: StreamingLink[] = [];

  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Why Not</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; Why Not
      </div>
      <ReleaseMeta releaseDate="2026-10-22" prefix="Released on" showConfetti={true} />
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4 flex flex-col gap-2">
        <a
          href="https://distrokid.com/hyperfollow/mozworth/why-not"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => { if (window.gtag) window.gtag('event', 'pre_save_click', { song: 'Why Not' }); }}
          class="inline-block px-5 py-2 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 w-full text-left text-center"
        >
          Pre-save
        </a>
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
Outside the earth's atmosphere I feel more at home

The time was never right
The time is always wrong
Arms and legs blown 
God save these bones

If you wanted to live a quiet peaceful life, you picked the wrong time to be alive  

I can't even see myself anymore but here I am 
The sad thing is I'm actually a comedian 

If you wanted a breath of fresh air, you won't find one 
It's a fact She's not coming back but we're not alone

If you wanted to live a quiet peaceful life, you picked the wrong time to be alive 

You can't wake up if you don't fall asleep
I meant to say yes my mouth didn't speak 
You can't wake up if you don't fall asleep
Just keep telling the story

What's the cause? What's the meaning? Why
do you always have to dare?
we watch, transfixed, as you enter
into uncharted terr

Are you planning to abandon us? We're in grief
Eyeballs gouged literal and figuratively 

If you wanted to live a quiet peaceful life, you picked the wrong time to be alive`}
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
    </div>
  );

  const tabs = createMemo(() => [
    { label: "Lyrics", content: lyrics },
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
        description="mozworth releases Why Not — an indie rock awakening about taking chances and embracing the unknown. Out October 22, 2026."
        url="https://mozworth.music/songs/why-not/"
        type="music.song"
        image="https://mozworth.music/why-not.webp"
        imageAlt="Why Not by mozworth - single artwork"
        publishDate="2026-10-22"
        modifiedDate="2026-10-01"
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
          "image": "https://mozworth.music/why-not.webp",
          "datePublished": "2026-10-22",
          "dateModified": "2026-10-01",
          "url": "https://mozworth.music/songs/why-not/"
        }}
      />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
        confetti={{ enabled: true, releaseDate: new Date('2026-10-22'), imageUrl: '/why-not.webp' }}
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