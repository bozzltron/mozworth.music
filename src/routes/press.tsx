import RotatingBackground from "../components/RotatingBackground";
import { createSignal, createMemo } from "solid-js";

export default function Press() {
  const [selectedFilter, setSelectedFilter] = createSignal("ALL");

  // Press items data with categories (sorted chronologically, most recent first)
  const pressItems = [
    {
      id: 1,
      category: "REVIEW",
      title: "mozworth - Sandpiper",
      publication: "Plastic Magazine",
      date: "September 22, 2025",
      description: "Plastic Magazine praises \"Sandpiper\" as \"a spectacular alternative jam that's timeless and truly absorbing throughout,\" highlighting the track's \"intricate ebb and flow between the mellow verses and charge of exhilarating choruses.\" The review celebrates mozworth's \"songwriting flair and performance talent\" and calls it \"an incredible display\" of his musical evolution.",
      link: "https://plasticmag.co.uk/2025/09/mozworth-drops-new-single-sandpiper/",
      linkText: "Read Full Review"
    },
    {
      id: 2,
      category: "INTERVIEW",
      title: "Exclusive Interview with MOZWORTH",
      publication: "Illustrate Magazine",
      date: "September 20, 2025",
      description: "An in-depth exclusive interview covering mozworth's musical journey from his roots in Logan, Iowa, through his skateboarding-influenced musical exploration, to his current Austin-based project. The interview explores his creative process, home recording setup, influences from Soundgarden to Big Thief, and his philosophy on music as a reflection of the human experience and the times we live in.",
      link: "https://illustratemagazine.com/exclusive-interview-with-mozworth/",
      linkText: "Read Full Interview"
    },
    {
      id: 3,
      category: "REVIEW",
      title: "mozworth - Sandpiper",
      publication: "The Big Takeover", 
      date: "September 17, 2025",
      description: "The Big Takeover praises \"Sandpiper\" for its depth and duality, describing it as music that \"ebbs and flows between folky understatement and the roar of rock and roll at its finest\" and calling it \"a blend of indie delicacy, rock muscle, psychedelic colour, and surf finesse.\"",
      link: "https://bigtakeover.com/recordings/mozworth-sandpiper-balanced-scale-media",
      linkText: "Read Full Review"
    },
    {
      id: 4,
      category: "REVIEW",
      title: "mozworth - Sandpiper",
      publication: "It's All Indie",
      date: "September 14, 2025", 
      description: "It's All Indie describes \"Sandpiper\" as \"a clear-cut slice of shimmering indie-pop with a slightly scuzzy undertone of grunge guitar sounds\" and praises the track as \"a breezy indie-pop gem with grungy undertones, jangly new-wave hooks, and lush melodies.\"",
      link: "https://www.itsallindie.com/2025/09/mozworth-reveals-bold-new-single.html",
      linkText: "Read Full Review"
    },
    {
      id: 5,
      category: "REVIEW",
      title: "mozworth - The Sky Is Falling",
      publication: "The Big Takeover",
      date: "July 15, 2025",
      description: "The Big Takeover praises \"The Sky Is Falling\" as \"an absolutely essential document of our times,\" highlighting the band's evolution and their perfect capture of modern chaos through \"raw rock riffs and indie deftness.\"",
      link: "https://bigtakeover.com/recordings/mozworth-the-sky-is-falling-balanced-scale-media",
      linkText: "Read Full Review"
    },
    {
      id: 6,
      category: "REVIEW", 
      title: "mozworth - The Sky Is Falling",
      publication: "Indie Dock Music Blog",
      date: "July 15, 2025",
      description: "Indie Dock Music Blog reviews \"The Sky Is Falling,\" highlighting how mozworth captures the tension of modern digital life with this compelling indie rock track, praising its tight musicianship and thoughtful songwriting.",
      link: "https://indiedockmusicblog.co.uk/?p=30798",
      linkText: "Read Full Review"
    },
    {
      id: 7,
      category: "REVIEW",
      title: "mozworth - The Sky Is Falling", 
      publication: "Apricot Magazine",
      date: "July 15, 2025",
      description: "Apricot Magazine calls \"The Sky Is Falling\" a \"compelling sonic landscape\" and praises the band's chemistry, emotional honesty, and the track's transformation of anxiety into beauty and connection.",
      link: "https://apricot-magazine.com/review/the-sky-may-be-falling-but-mozworth-is-rising/",
      linkText: "Read Full Review"
    },
    {
      id: 8,
      category: "REVIEW",
      title: "mozworth - The Sky Is Falling",
      publication: "Buzzy Band", 
      date: "July 15, 2025",
      description: "Buzzy Band highlights \"The Sky Is Falling\" for its urgent indie rock energy and praises mozworth's ability to turn anxiety into anthemic, cathartic music.",
      link: "https://buzzyband.com/mozworth-the-sky-is-falling/",
      linkText: "Read Full Review"
    },
    {
      id: 9,
      category: "INTERVIEW",
      title: "An Interview with mozworth",
      publication: "KVRX 91.7",
      date: "December 4, 2024",
      description: "\"Michael Bosworth, known professionally as mozworth, is an independent singer-songwriter based in Austin. His self-titled debut, which was released on Nov. 15, stands out through both its catchy indie-rock melodies and passionate storytelling.\"",
      link: "https://kvrx.org/app/blog/features/an-interview-with-mozworth/",
      linkText: "Read Full Interview"
    },
    {
      id: 10,
      category: "REVIEW",
      title: "mozworth - Goodbye Colorado",
      publication: "Indie Dream",
      date: "October 16, 2024", 
      description: "\"Indie Dream describes 'Goodbye Colorado' as a moving indie rock track that explores the emotional journey of leaving behind not just a place, but memories, sensations, and people. The review highlights the song's blend of melodic indie softness with electric guitar and slow percussion, calling it a touching and nostalgic reflection on connections that will be remembered with love. mozworth's serious and sentimental interpretation is praised for effectively conveying these emotions.\"",
      link: "https://www.indiedream.com.mx/2024/10/mozworth-goodbye-colorado.html?m=1",
      linkText: "Read Full Review"
    },
    {
      id: 11,
      category: "PREMIERE",
      title: "mozworth: \"Postcard\" [PREMIERE]",
      publication: "KUTX",
      date: "September 11, 2024",
      description: "\"Packaging everything we love about '90s indie-alt-rock into a four-minute envelope, 'Postcard' proudly puts mozworth's stamp on these nostalgic sounds, less of a 'wish you were here' and more of a 'can't wait to show you more' ahead of his upcoming debut album.\"",
      link: "https://kutx.org/song-of-the-day/mozworth-postcard-premiere/",
      linkText: "Read Full Article"
    }
  ];

  // Get unique categories for filter buttons
  const categories = createMemo(() => {
    const uniqueCategories = [...new Set(pressItems.map(item => item.category))];
    return ["ALL", ...uniqueCategories];
  });

  // Filter press items based on selected category
  const filteredItems = createMemo(() => {
    if (selectedFilter() === "ALL") {
      return pressItems;
    }
    return pressItems.filter(item => item.category === selectedFilter());
  });

  // Get category badge color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "REVIEW": return "bg-teal-600";
      case "INTERVIEW": return "bg-purple-600"; 
      case "PREMIERE": return "bg-orange-600";
      case "TV": return "bg-blue-600";
      default: return "bg-gray-600";
    }
  };
  return (
    <>
      <title>mozworth - Press</title>
      <meta property="og:image" content="https://mozworth.music/mozworth.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://mozworth.music/mozworth.webp" />
      <div class="flex flex-col min-h-screen">
        <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50">Skip to main content</a>
        <main id="main-content" class="flex-1 flex items-center justify-center relative bg-black">
          <RotatingBackground />
          {/* Main content */}
          <div class="relative container mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[800px] p-4 md:p-10 md:rounded-[10px] bg-black/70">
            <h1 class="text-3xl font-bold mb-8 text-center">Press Coverage</h1>
            
            {/* Filter buttons */}
            <div class="mb-8 flex flex-wrap justify-center gap-3">
              {categories().map(category => (
                <button
                  onClick={() => setSelectedFilter(category)}
                  class={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedFilter() === category
                      ? "bg-white text-black shadow-lg"
                      : "bg-black/50 text-white border border-white/30 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Dynamic press items */}
            {filteredItems().map(item => (
              <div class="press-item mb-10 p-6 bg-black/50 border border-white/30 rounded-lg">
                <div class="mb-3">
                  <span class={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full mr-2 ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                <h2 class="text-2xl font-semibold mb-2">{item.title}</h2>
                <div class="text-lg text-white/70 mb-1">{item.publication}</div>
                <div class="text-sm text-white/60 mb-3">{item.date}</div>
                <div class="mb-4 leading-relaxed">
                  {item.description}
                </div>
                <a 
                  href={item.link} 
                  class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black" 
                  target="_blank" 
                  rel="noopener"
                >
                  {item.linkText}
                </a>
              </div>
            ))}
          </div>
        </main>
        <footer class="w-full text-center text-xs text-gray-400 py-3 border-t border-white/10 bg-black/70" role="contentinfo">
          &copy; {new Date().getFullYear()} mozworth. All rights reserved.
          <nav aria-label="Footer navigation" class="inline ml-2">
            <a href="/" class="text-teal-300 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 mx-1">Home</a>
          </nav>
        </footer>
      </div>
    </>
  );
} 