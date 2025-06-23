import { createSignal, createEffect, createMemo } from "solid-js";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import ShareButton from "../../components/ShareButton";

export default function TheSkyIsFalling() {
  const [tab, setTab] = createSignal("Press Release");

  // Cover art (placeholder)
  const cover = (
    <img
      class="cover-art w-full max-w-[380px] rounded-xl shadow-xl bg-white mb-6 md:mb-8 opacity-80 object-contain"
      style={{ height: 'auto' }}
      src="/the_sky_is_falling.webp"
      alt="The Sky Is Falling cover art"
    />
  );

  // Info section
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">The Sky Is Falling</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; The Sky Is Falling
      </div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">Releasing July 15, 2025</div>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        <a href="https://www.bandsintown.com/e/107046899?" target="_blank" rel="noopener" class="underline hover:text-teal-300">
          Single Release Party: Aug 1, 2025
        </a>
      </div>
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <a
          href="https://distrokid.com/hyperfollow/mozworth/the-sky-is-falling"
          target="_blank"
          rel="noopener"
          class="inline-block px-5 py-2 text-left rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors w-full"
        >
          Pre Save / Pre Purchase
        </a>
        <a href="https://mozworth.printful.me/" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 mt-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Merch
        </a>
        <ShareButton
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/the-sky-is-falling/"}
          title="The Sky Is Falling by mozworth"
          text="Mark your calendar for this upcoming single by mozworth!"
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
          <p class="mb-4">mozworth's New Single "The Sky Is Falling" Channels Chaos Into Connection</p>
          <p class="mb-4">Austin, TX — Just as 2025 shook the world with uncertainty, Austin-based indie outfit mozworth found their footing in the turbulence—and turned it into something unforgettable. Their upcoming release "The Sky Is Falling" is a powerful single that captures the weight of living through history in real time. Equal parts raw and reflective, the song is both a document of our times and a deeply personal snapshot of a band coming into its own.</p>
          <p class="mb-4">Frontman and songwriter mozworth began writing "The Sky Is Falling" in the earliest days of 2025, a period marked by global unrest and the dramatic return of Donald Trump to the presidency in the United States. What emerged from that fog was a sound that captures the tension of the moment—a song that feels like you are no longer in control but along for the ride. The project's title, borrowed from the fable of Chicken Little, is a poetic nod to the panic, misinformation, and distorted realities that defined this cultural moment. The song draws on not only from the story's narrative but also its feel, like the brace before impact or the white knuckle grip at the top of the roller coaster before you take the plunge.</p>
          <p class="mb-4">But "The Sky Is Falling" isn't just a personal reckoning—it's a band coming into full bloom. It marks the first recording with the full mozworth lineup: Mark Heaps (electric guitar), Jack Schultz (bass), and Ken Mockler (drums).</p>
          <p class="mb-4">Ken joined the band through a mutual friend who intended to start a punk rock cover band, but when the other members never showed up for rehearsal they started working on mozworth's original material. Ken performed the drums on the debut mozworth EP (featured on <a href="https://kutx.org/song-of-the-day/mozworth-postcard/" target="_blank" rel="noopener" class="underline hover:text-teal-300">KUTX</a> and <a href="https://kvrx.org/app/blog/features/an-interview-with-mozworth/" target="_blank" rel="noopener" class="underline hover:text-teal-300">KVRX</a>) and "Walking The Cow." Ken's background in metal shows its teeth with the strength, energy, and precision he delivers on the track.</p>
          <p class="mb-4">Mark Heaps joined the band after meeting mozworth returning his cat Peter who had escaped. Mark maintained a mentorship role for the EP and contributed the bass intro / outro to "Goodbye Colorado." Mark's style produces unique chording and leads that navigate the moment to create depth and beauty in the guitar work.</p>
          <p class="mb-4">Jack joined the band through Mark. The two had played together and several other bands around Austin in the past. Jack brings a strong education in music, experience in performance, and creativity on all fronts. His ability to lock in with Ken produces a solid rhythm section and the perfect foundation. Jack chose a finger picked performance for the track to add more energy than a pick would and wrote the dramatic walk down in the outro on the spot.</p>
          <p class="mb-4">With this lineup, mozworth began touring the Austin area including this year's SXSW and something unexpected happened. The respect for the music was the start, the musicianship brought to the live show was the evolution, but the community that took shape was a surprise. "We're not just guys showing up to do the task of performing music, we are people that genuinely care about each other," says mozworth. "From the earliest rehearsals, there has always been a good energy about us being in the same room. We've confided in and supported each other along the way. It's out of the richness of the relationships and musicianship that mozworth now brings new music forth."</p>
          <p class="mb-4">Each member not only contributed their own parts to "The Sky Is Falling," they operated in the mode of a composer suggesting new parts and driving the song to its full potential. "The Sky Is Falling" was tracked entirely in South Austin—recorded across home studios, including mozworth's and Mockler's home studios. Mixing duties were handled by Steven Glaze at Tone Freq Studios, whose touch brought warmth and clarity to the song's layered, dynamic sound. The homegrown approach gave the band space to experiment, to stumble into happy accidents, and to shape the music on their own terms.</p>
          <p class="mb-4">One of those accidents involves the guitar mozworth used for rhythm tracks—a Harley Benton JA-60 gifted to his daughter for Christmas. "It reminded me of when my parents surprised me with a guitar. That moment stuck with me my whole life. I wanted to give her that, and turns out, I fell in love with the guitar myself," he laughs. The Harley Benton is modeled after a Fender Jazz Master and provides a more surf rock centered tone. "I love everything about that guitar. The shape, the sound, and it's probably the most comfortable thing I've played. I've ordered one for myself and expect it to play a staple role in my guitar sound in the future," says mozworth. Paired with Mark Heap's custom designed guitar, the song's sounds are rich and unexpected—reflecting the band's ability to attain indie rock edge with tasteful tone.</p>
          <p class="mb-4">At its heart, "The Sky Is Falling" is more than a commentary on the state of the world—it's a love letter to collaboration, to growth, and to the strange beauty of staying human when the world feels like it's on fire. It's about finding your people in the noise and trying to produce a melody.</p>
          <p class="mb-4">The song will arrive later this summer with a twist for drummer Ken Mockler, who is moving to Denver. It was Ken's news that prompted the band's decision to release their new songs. "It's too soon how Ken's move will affect the band. What is important is that we feel so strongly about playing together that we felt compelled to release this music. This was our way to mark the moment," mozworth says. "To document the sound of us—what we built together."</p>
          <p class="mb-4 font-semibold">The Sky Is Falling drops July 15, 2025</p>
          <p class="mb-4">For media inquiries, interviews, or press materials, please contact:</p>
          <p class="mb-1">Press Junkie PR<br />ryan@pressjunkiepr.com<br /><a href="https://www.pressjunkiepr.com" target="_blank" rel="noopener" class="underline hover:text-teal-300">www.pressjunkiepr.com</a></p>
        </div>
      ),
    },
    {
      label: "Credits",
      content: (
        <>
          <p>Songwriting by Michael Bosworth</p>
          <p>Lyrics by Michael Bosworth</p>
          <p>Composed by Michael Bosworth, Ken Mockler, Mark Heaps, and Jack Shultz</p>
          <p>Produced by Michael Bosworth</p>
          <p>Recorded by Michael Bosworth and Mockler</p>
          <p>Guitar and Vocals performed by Michael Bosworth</p>
          <p>Acoustic and Electronic Drums performed by Ken Mockler</p>
          <p>Lead Guitar performed by Mark Heaps</p>
          <p>Bass performed by Jack Shultz</p>
          <p>Mixed and Mastered by Steven Glaze at Tone Freq Studios</p>
          <p>Recorded at mozworth and Mockler home studio's</p>
          <p>Releasing July 15, 2025</p>
          <p>Cover art by Mark Heaps</p>
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
      <title>The Sky Is Falling | mozworth</title>
      <meta name="description" content="Preview the upcoming single 'The Sky Is Falling' by mozworth. Release date: July 15, 2025. Lyrics, press, and more coming soon!" />
      <meta name="last-modified" content="2025-06-17" />
      <link rel="canonical" href="https://mozworth.music/songs/the-sky-is-falling/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="The Sky Is Falling | mozworth" />
      <meta property="og:description" content="Preview the upcoming single 'The Sky Is Falling' by mozworth. Release date: July 15, 2025. Lyrics, press, and more coming soon!" />
      <meta property="og:image" content="https://mozworth.music/the_sky_is_falling.webp" />
      <meta property="og:url" content="https://mozworth.music/songs/the-sky-is-falling/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Sky Is Falling | mozworth" />
      <meta name="twitter:description" content="Preview the upcoming single 'The Sky Is Falling' by mozworth. Release date: July 15, 2025. Lyrics, press, and more coming soon!" />
      <meta name="twitter:image" content="https://mozworth.music/the_sky_is_falling.webp" />
      <script type="application/ld+json" innerHTML={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": "The Sky Is Falling",
        "byArtist": {
          "@type": "MusicGroup",
          "name": "mozworth"
        },
        "inAlbum": {
          "@type": "MusicAlbum",
          "name": "The Sky Is Falling"
        },
        "image": "https://mozworth.music/the_sky_is_falling.webp",
        "datePublished": "2025-07-15",
        "dateModified": "2025-06-17",
        "url": "https://mozworth.music/songs/the-sky-is-falling/"
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
    </>
  );
} 