import { createSignal, createEffect, createMemo } from "solid-js";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import ShareButton from "../../components/ShareButton";
import LeaveNoteModal from "../../components/LeaveNoteModal";

export default function Sandpiper() {
  const [tab, setTab] = createSignal("Press Release");
  const [showLeaveNoteModal, setShowLeaveNoteModal] = createSignal(false);

  // Cover art (placeholder)
  const cover = (
    <img
      class="cover-art w-full max-w-[380px] rounded-xl shadow-xl bg-white mb-6 md:mb-8 opacity-80 object-contain"
      style={{ height: 'auto' }}
      src="/album-placeholder.webp"
      alt="Sandpiper cover art placeholder"
    />
  );

  // Info section
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Sandpiper</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; Sandpiper
      </div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Release date TBA</div>
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <button
          onClick={() => setShowLeaveNoteModal(true)}
          class="inline-block px-5 py-2 rounded bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 w-full text-left"
        >
          Leave a Note
        </button>
        <a
          href="#"
          target="_blank"
          rel="noopener"
          class="inline-block px-5 py-2 mt-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors w-full opacity-60 cursor-not-allowed"
          tabIndex={-1}
          aria-disabled="true"
        >
          Pre Save / Pre Purchase (Coming Soon)
        </a>
        <a href="/support" 
          class="inline-block px-5 py-2 mt-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Support
        </a>
        <ShareButton
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/sandpiper/"}
          title="Sandpiper by mozworth"
          text="Check out this upcoming single by mozworth!"
        />
      </div>
    </>
  );

  // Tabbed content using TabbedContent component
  const tabs = createMemo(() => [
    // {
    //   label: "Lyrics",
    //   content: (
    //     <div class="text-base md:text-lg leading-relaxed text-white opacity-90">
    //       Lyrics will be available on release day. Stay tuned!
    //     </div>
    //   ),
    // },
    {
      label: "Press Release",
      content: (
        <div class="whitespace-pre-line text-base md:text-lg leading-relaxed text-white opacity-90">
          <p class="mb-4 font-bold">FOR IMMEDIATE RELEASE</p>
          <p class="mb-4">mozworth announces new single "Sandpiper"</p>
          <p class="mb-4">Austin, TX — mozworth is excited to announce the upcoming release of their new single, "Sandpiper." More details, including release date, credits, and streaming links, will be available soon. Stay tuned for updates!</p>
          <p class="mb-4 font-semibold">Release date: TBA</p>
          <p class="mb-4">For media inquiries, interviews, or press materials, please contact:</p>
          <p class="mb-1">Press Junkie PR<br />ryan@pressjunkiepr.com<br /><a href="https://www.pressjunkiepr.com" target="_blank" rel="noopener" class="underline hover:text-teal-300">www.pressjunkiepr.com</a></p>
        </div>
      ),
    },
    {
      label: "Credits",
      content: (
        <>
          <p>Songwriting by mozworth</p>
          <p>Lyrics by mozworth</p>
          <p>Composed and produced by mozworth</p>
          <p>More credits coming soon.</p>
        </>
      ),
    }
  ]);

  createEffect(() => {
    if (!tabs().some(t => t.label === tab())) {
      setTab("Press Release");
    }
  });

  return (
    <>
      <title>Sandpiper | mozworth</title>
      <meta name="description" content="Preview the upcoming single 'Sandpiper' by mozworth. Release date: TBA. Lyrics, press, and more coming soon!" />
      <meta name="last-modified" content="2025-06-19" />
      <link rel="canonical" href="https://mozworth.music/songs/sandpiper/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="Sandpiper | mozworth" />
      <meta property="og:description" content="Preview the upcoming single 'Sandpiper' by mozworth. Release date: TBA. Lyrics, press, and more coming soon!" />
      <meta property="og:image" content="https://mozworth.music/album-placeholder.webp" />
      <meta property="og:url" content="https://mozworth.music/songs/sandpiper/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sandpiper | mozworth" />
      <meta name="twitter:description" content="Preview the upcoming single 'Sandpiper' by mozworth. Release date: TBA. Lyrics, press, and more coming soon!" />
      <meta name="twitter:image" content="https://mozworth.music/album-placeholder.webp" />
      <script type="application/ld+json" innerHTML={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": "Sandpiper",
        "byArtist": {
          "@type": "MusicGroup",
          "name": "mozworth"
        },
        "inAlbum": {
          "@type": "MusicAlbum",
          "name": "Sandpiper"
        },
        "image": "https://mozworth.music/album-placeholder.webp",
        "datePublished": "TBA",
        "dateModified": "2025-06-19",
        "url": "https://mozworth.music/songs/sandpiper/"
      })} />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={[]}
        backgroundClass="min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-br from-[#3a5ba0] via-[#7b3fa0] to-[#e05fa0]"
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs()}
          defaultTab="Press Release"
        />
      </BasePageLayout>
      <LeaveNoteModal
        isOpen={showLeaveNoteModal()}
        onClose={() => setShowLeaveNoteModal(false)}
        songTitle="Sandpiper"
      />
    </>
  );
} 