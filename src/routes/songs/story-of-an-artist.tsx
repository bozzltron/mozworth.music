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

  // Streaming links for this song (to be updated when available)
  const streamingLinks: StreamingLink[] = [
    // Placeholder - update with actual links when available
  ];

  // Cover art
  const cover = (
    <img
      src="/storyofanartist.webp"
      alt="Story of an Artist cover art"
      class="cover-art w-full max-w-[380px] min-h-[430px] md:min-h-[470px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
    />
  );

  // Info section
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Story of an Artist</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; Story of an Artist
      </div>
      <ReleaseMeta releaseDate="2026-01-22" prefix="Released" showConfetti={true} />
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <button
          onClick={() => setShowLeaveNoteModal(true)}
          class="inline-block px-5 py-2 rounded bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 w-full text-left"
        >
          Leave a Note
        </button>
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
        <div class="whitespace-pre-line text-base md:text-lg leading-relaxed text-white">
          {/* Lyrics to be added */}
          Lyrics coming soon...
        </div>
      ),
    },
    {
      label: "Press Release",
      content: (
        <>
          <h2 class="text-xl font-bold mb-2">Story of an Artist: The Second Installment</h2>
          <p>The second installment from mozworth celebrating Daniel's birthday and Hi, How Are You Day.</p>
          <p class="mt-4">More details coming soon...</p>
        </>
      ),
    },
    {
      label: "Credits",
      content: (
        <>
          <p>Songwriting by Michael Bosworth</p>
          <p>Lyrics by Michael Bosworth</p>
          <p>Produced by Michael Bosworth</p>
          {/* Credits to be updated when available */}
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
        description="Listen to 'Story of an Artist' by mozworth. Read the lyrics, learn about the song, and experience the official album art. The second installment from mozworth celebrating Daniel's birthday and Hi, How Are You Day."
        url="https://mozworth.music/songs/story-of-an-artist/"
        type="music.song"
        image="https://mozworth.music/storyofanartist.webp"
        imageAlt="Story of an Artist by mozworth - single artwork"
        publishDate="2026-01-22"
        modifiedDate="2026-01-22"
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
          "image": "https://mozworth.music/storyofanartist.webp",
          "datePublished": "2026-01-22",
          "dateModified": "2026-01-22",
          "url": "https://mozworth.music/songs/story-of-an-artist/"
        }}
      />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
        confetti={{ enabled: true, releaseDate: new Date('2026-01-22'), imageUrl: '/storyofanartist.webp' }}
        backgroundClass="min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-br from-[#f8f8f8] via-[#e0e0e0] to-[#b0b0b0]"
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
