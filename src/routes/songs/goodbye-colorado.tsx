import { createSignal } from "solid-js";
import ReleaseMeta from "../../components/ReleaseMeta";
import { StreamingLink } from "../../components/StreamingIcons";
import BasePageLayout from "../../components/BasePageLayout";
import TabbedContent from "../../components/TabbedContent";
import { useLocation } from "@solidjs/router";
import ShareButton from "../../components/ShareButton";
import LeaveNoteModal from "../../components/LeaveNoteModal";

export default function GoodbyeColorado() {
  const location = useLocation();
  const [showLeaveNoteModal, setShowLeaveNoteModal] = createSignal(false);

  // Streaming links for this song
  const streamingLinks: StreamingLink[] = [
    {
      href: "https://open.spotify.com/track/5EHFPfXAA7ezlrL5GzPw4k?si=22079d9af9ee4d6f", // Replace with actual Spotify link if available
      alt: "Spotify",
      iconSrc: "/spotify.svg",
      ariaLabel: "Listen on Spotify"
    },
    {
      href: "https://music.apple.com/us/song/goodbye-colorado/1768959065", // Replace with actual Apple Music link if available
      alt: "Apple Music",
      iconSrc: "/apple-music.svg",
      ariaLabel: "Listen on Apple Music"
    },
    {
      href: "https://mozworth.bandcamp.com/track/goodbye-colorado",
      alt: "Bandcamp",
      iconSrc: "/bandcamp.svg",
      ariaLabel: "Buy on Bandcamp"
    },
    {
      href: "https://soundcloud.com/mozworth/goodbye-colorado",
      alt: "SoundCloud",
      iconSrc: "/soundcloud.svg",
      ariaLabel: "Listen on SoundCloud"
    },
    {
      href: "https://www.youtube.com/watch?v=Vv9xnKNOcEM", // Replace with actual Apple Music link if available
      alt: "YouTube",
      iconSrc: "/youtube.svg",
      ariaLabel: "Listen on YouTube"
    },
    {
      href: "https://listen.tidal.com/album/387655037/track/387655038", // Replace with actual Tidal link if available
      alt: "Tidal",
      iconSrc: "/tidal.svg",
      ariaLabel: "Listen on Tidal"
    },
    {
      href: "https://amazon.com/music/player/albums/B0DH5BMGX7", // Replace with actual Amazon Music link if available
      alt: "Amazon Music",
      iconSrc: "/amazon-music.svg",
      ariaLabel: "Listen on Amazon Music"
    },
    {
      href: "https://dzr.page.link/5CBRZeEfV7NVGM4C8", // Replace with actual Deezer link if available
      alt: "Deezer",
      iconSrc: "/deezer.svg",
      ariaLabel: "Listen on Deezer"
    }
  ];

  // Cover art (use Bandcamp embed as fallback)
  const cover = (
    <iframe
      class="cover-art w-full max-w-[380px] min-h-[430px] md:min-h-[470px] h-[56vw] max-h-[380px] rounded-xl shadow-xl bg-[#222] object-cover mb-6 md:mb-8 transition-transform duration-300 hover:scale-[1.04] hover:-rotate-2 hover:shadow-teal-400/60"
      style={{ border: 0 }}
      src="https://bandcamp.com/EmbeddedPlayer/track=2833446675/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
      title="Goodbye Colorado by mozworth (Bandcamp embed)"
    />
  );

  // Info section
  const albumLink = "/albums/mozworth";
  const info = (
    <>
      <h1 class="song-title text-2xl sm:text-3xl font-bold mb-1 text-left w-full">Goodbye Colorado</h1>
      <div class="song-info text-gray-400 text-base mb-1 w-full text-left">
        mozworth &middot; <a href={albumLink} class="underline hover:text-teal-300 transition-colors">mozworth</a>
      </div>
      <ReleaseMeta releaseDate="2024-10-09" prefix="Released as a single on" showConfetti={true} />
      <div class="song-info text-gray-400 text-base mb-6 w-full text-left mt-4">
        <button
          onClick={() => setShowLeaveNoteModal(true)}
          class="inline-block px-5 py-2 rounded bg-purple-600 text-white font-semibold shadow hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 w-full text-left"
        >
          Leave a Note
        </button>
        <a href="https://mozworth.bandcamp.com/track/goodbye-colorado" target="_blank" rel="noopener"
          class="inline-block px-5 py-2 mt-2 rounded bg-teal-500 text-white font-semibold shadow hover:bg-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 w-full">
          Purchase
        </a>
        <a href="/support" 
          class="inline-block px-5 py-2 mt-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full">
          Support
        </a>
        <ShareButton
          url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/songs/goodbye-colorado/"}
          title="Goodbye Colorado by mozworth"
          text="Check out this song by mozworth!"
        />
      </div>
    </>
  );

  // Tabbed content using TabbedContent component
  const tabs = [
    {
      label: "Lyrics",
      content: (
        <div class="text-base md:text-lg leading-relaxed text-white">
          <p class="mb-4">A cool breath washing over me like a river<br />
          Walking in the shadows cast<br />
          By the pines, I raise my eyes and I wonder<br />
          I am taking the right path</p>

          <p class="mb-4">I won't forget being brought low by your beauty<br />
          The quiet power of your form<br />
          I've watched the weather dress you up almost daily<br />
          Oh the garments that you've worn</p>

          <p class="mb-4">My heart breaks to see<br />
          When life leads away<br />
          From the things you love<br />
          Until we meet again</p>

          <p class="mb-4">Goodbye Colorado<br />
          Goodbye Colorado<br />
          Goodbye Colorado<br />
          Goodbye Colorado</p>

          <p class="mb-4">I'll kiss the window and I'll leave you a letter<br />
          Filled with standard pleasantry<br />
          The sleepness nights I'll leave behind for the better<br />
          The rest will come along with me</p>

          <p class="mb-4">My heart breaks to see<br />
          When life leads away<br />
          From the things you love<br />
          Until we meet again</p>

          <p class="mb-4">My heart breaks to see<br />
          When life leads away<br />
          From the things you love<br />
          Until we meet again</p>

          <p class="mb-4">Goodbye Colorado<br />
          Goodbye Colorado<br />
          Goodbye Colorado<br />
          Goodbye Colorado</p>
        </div>
      ),
    },
    {
      label: "Writing",
      content: (
        <p>Goodbye Colorado was written in Colorado Springs, Colorado in 2023 in a rental home. It was inspired by the sound of an old Harmony parlor acoustic which starts the intro. </p>
      ),
    },
    {
      label: "Demo",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p>This is the original demo recorded in the Colorado Springs, Colorado rental home.</p>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1292295211&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          <div style={{"font-size":"10px","color":"#cccccc","line-break":"anywhere","word-break":"normal","overflow":"hidden","white-space":"nowrap","text-overflow":"ellipsis","font-family":"Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif","font-weight":"100"}}><a href="https://soundcloud.com/mozworth" title="mozworth" target="_blank" style={{"color":"#cccccc","text-decoration":"none"}}>mozworth</a> · <a href="https://soundcloud.com/mozworth/goodbye-colorado-demo" title="Goodbye Colorado Demo" target="_blank" style={{"color":"#cccccc","text-decoration":"none"}}>Goodbye Colorado Demo</a></div>
        </div>
      ),
    },
    {
      label: "Press",
      content: (
        <div class="text-base md:text-lg leading-relaxed text-white">
          <h2 class="text-xl font-bold mb-4">FOR IMMEDIATE RELEASE</h2>
          <p class="mb-4 font-semibold">MOZWORTH TO RELEASE NEW SINGLE<br />"GOODBYE COLORADO" ON OCTOBER 9, 2024</p>
          <p class="mb-4 italic">FROM HIS UPCOMING SELF-TITLED ALBUM</p>
          <p class="mb-4">Mozworth, the rising Austin indie artist will release his new single, "Goodbye Colorado" on October 9th. This is on the heels of his first single "Postcard," which KUTX featured as their Song of the Day and stated that it's "...everything we love about '90s indie-alt-rock into a four-minute envelope." Both singles showcase Mozworth's diverse range and are a testament of what's to come from his self-titled debut album, dropping this Fall.</p>
          <p class="mb-4">Inspired by his move away from Colorado Springs to Austin, "Goodbye Colorado" tells the deeply personal story of Mozworth's experience moving to a new city during the pandemic that had a lot of promise, but ultimately wasn't a fit. Mozworth's move to Colorado Springs marked the beginning of a new chapter for him and his family, but it also came with its own set of challenges. While they embraced the beauty of the mountains and the opportunity to be closer to family, the year spent in Colorado was one of the most difficult periods for him and his immediate family. It was a time of uncertainty, both personally and professionally, as the pandemic forced him to reevaluate his life path.</p>
          <p class="mb-4">In search of new possibilities after a year of adversity in Colorado, Mozworth and his family set their sights on Austin. Coincidentally before leaving Colorado, Mozworth attended a live performance by Phoebe Bridgers at the iconic Red Rocks Amphitheatre, where a backdrop featuring imagery of the South, including the word Austin, felt like a strange but comforting sign that he was on the right path.</p>
          <p class="mb-4">While spending time alone in their Colorado Springs rental house before his big move to Austin, Mozworth wrote "Goodbye Colorado" on a Harmony acoustic guitar gifted by a family member. Although the guitar was not the highest caliber, its unique timbre led Mozworth to incorporate it into the final recording, creating the hauntingly beautiful intro that defines the song. "The song is a mixture of skepticism, mourning the beauty of the mountains, and saying goodbye to family we were leaving behind," says Mozworth. "I wrote a lot of it while hiking the mountain trails. The opening line, 'A cool breath washing over me like a river,' came to me on a trail when I was feeling the coolness of the mountain air."</p>
          <p class="mb-4">Emotionally charged and lyrically rich, "Goodbye Colorado" reflects on Mozworth's inner conflict about leaving behind both the hardships and beauty of Colorado Springs. In the final verse, the song conveys a sense of reconciliation, acknowledging the good amidst the challenges, as well as a hopeful outlook on the move to Austin. "Goodbye Colorado" is also "Hello Austin."</p>
          <p class="mb-4">The song, which features the production of Jeff Shinrock and a powerful rhythm section by drummer Ken Mockler, blends melancholy with a unique groove. "Despite its downbeat tone, the rhythm gives it a groove that makes it stand out," Mozworth shares. "Ken brought the perfect rhythm to make it both introspective and engaging." Ashleigh Wright rounds out the song with her stunning vocals on harmony.</p>
          <p class="mb-4">"Goodbye Colorado" serves as a follow-up to Mozworth's debut single "Postcard" and continues to set the stage for his upcoming debut album. Mozworth concludes, "'Postcard' and 'Goodbye Colorado' are very different songs and provide different ends of the spectrum that all the other songs will rest within."</p>
          <p class="mb-4">Catch Mozworth live for his "Goodbye Colorado" single release party on October 25th at The Shiner's Saloon. More information at <a href="https://shinerssaloon.com/" class="underline hover:text-teal-300 transition-colors" target="_blank" rel="noopener">https://shinerssaloon.com/</a></p>
        </div>
      ),
    },
    {
      label: "Credits",
      content: (
        <>
          <p>Songwriting by Michael Bosworth</p>
          <p>Composition by Michael Bosworth, Ken Mockler, and Mark Heaps</p>
          <p>Lyrics by Michael Bosworth</p>
          <p>Vocals, Electric Guitars, Bass, and Han Pan by Michael Bosworth</p>
          <p>Drums, tambourine, and shakers by Ken Mockler</p>
          <p>Accompanying Vocals by Ashleigh Wright</p>
          <p>Produced by Jeff Shinrock</p>
          <p>Recorded by Jeff Shinrock and Michael Bosworth</p>
          <p>Mixed and Mastered by Steve Glaze at <a href="https://stevenglaze.com/" target="_blank" rel="noopener" class="underline hover:text-teal-300">Tone Freq Studios</a></p>
          <p>Cover art by  <a href="https://www.instagram.com/joshrowdesign/?hl=en" target="_blank" rel="noopener" class="underline hover:text-teal-300">Josh Row</a></p>
          <p>Cover art script by Michael Bosworth</p>
        </>
      ),
    },
    {
      label: "Reviews",
      content: (
        <div class="mt-8 p-4 bg-black/40 rounded-lg border border-white/20">
          <h3 class="text-lg font-semibold mb-2">Indie Dream Review</h3>
          <p class="mb-2">Indie Dream describes "Goodbye Colorado" as a moving indie rock track that explores the emotional journey of leaving behind not just a place, but memories, sensations, and people. The review highlights the song's blend of melodic indie softness with electric guitar and slow percussion, calling it a touching and nostalgic reflection on connections that will be remembered with love. Mozworth's serious and sentimental interpretation is praised for effectively conveying these emotions.</p>
          <a href="https://www.indiedream.com.mx/2024/10/mozworth-goodbye-colorado.html?m=1" target="_blank" rel="noopener" class="text-teal-300 underline hover:text-teal-400">Read the full Indie Dream review</a>
        </div>
      ),
    },
    {
      label: "Performances",
      content: (
        <div class="flex flex-col items-start gap-4">
          <p class="mb-4">Watch a live performance of "Goodbye Colorado":</p>
          <div class="w-full aspect-video max-w-2xl">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/0He2ot6VCnc"
              title="Goodbye Colorado - Live Performance"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="rounded-xl shadow-lg"
            />
          </div>
          <div class="w-full aspect-video max-w-2xl mt-8">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Bl828gy-gIo"
              title="Goodbye Colorado - Live at The Ballroom"
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
      <title>Goodbye Colorado | mozworth</title>
      <meta name="description" content="Listen to 'Goodbye Colorado' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Goodbye Colorado' from the self-titled debut album (2024)." />
      <meta name="last-modified" content="2025-05-01" />
      <link rel="canonical" href="https://mozworth.music/songs/goodbye-colorado/" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content="Goodbye Colorado | mozworth" />
      <meta property="og:description" content="Listen to 'Goodbye Colorado' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Goodbye Colorado' from the self-titled debut album (2024)." />
      <meta property="og:image" content="https://mozworth.music/mozworth-debut.webp" />
      <meta property="og:url" content="https://mozworth.music/songs/goodbye-colorado/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Goodbye Colorado | mozworth" />
      <meta name="twitter:description" content="Listen to 'Goodbye Colorado' by mozworth. Read the lyrics, learn about the song, and experience the official album art. This is the definitive online destination for the song 'Goodbye Colorado' from the self-titled debut album (2024)." />
      <meta name="twitter:image" content="https://mozworth.music/mozworth-debut.webp" />
      {/* Structured Data for AI and Search Engines */}
      <script type="application/ld+json" textContent={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": "Goodbye Colorado",
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
        "url": "https://mozworth.music/songs/goodbye-colorado/"
      })} />
      <BasePageLayout
        cover={cover}
        info={info}
        streamingLinks={streamingLinks}
        confetti={{ enabled: true, releaseDate: new Date('2024-10-09'), imageUrl: '/goodbye_colorado_cover.webp' }}
        backgroundClass="min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-b from-[#b6c85a] via-[#2e5d4a] to-[#18344a]"
      >
        <TabbedContent
          key={location.pathname}
          tabs={tabs}
          defaultTab={"Lyrics"}
        />
      </BasePageLayout>
      <LeaveNoteModal
        isOpen={showLeaveNoteModal()}
        onClose={() => setShowLeaveNoteModal(false)}
        songTitle="Goodbye Colorado"
      />
    </>
  );
} 