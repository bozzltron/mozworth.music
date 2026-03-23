/**
 * Press coverage data — single source of truth for /press page and screenshot script.
 * Sorted chronologically, most recent first.
 */

export interface PressItem {
  id: number;
  category: "INTERVIEW" | "REVIEW" | "PREMIERE" | "TV";
  title: string;
  publication: string;
  date: string;
  description: string;
  link: string;
  linkText: string;
}

export const pressItems: PressItem[] = [
  {
    id: 12,
    category: "INTERVIEW",
    title: "Talking Daniel Johnston, The Austin Underground, And \"The Mountain And The Wolf\" With mozworth",
    publication: "Wax Zine",
    date: "February 2026",
    description: "Wax Zine sits down with mozworth for an in-depth conversation about Daniel Johnston's influence on Austin, the local live music scene (SABG, Sam's Town Point, Far Out Lounge), and the band's upcoming concept album \"The Mountain & The Wolf.\"",
    link: "https://www.waxzine.com/post/talking-daniel-johnston-the-austin-underground-and-the-mountain-and-the-wolf-with-mozworth",
    linkText: "Read Full Interview"
  },
  {
    id: 0,
    category: "REVIEW",
    title: "mozworth - Story of an Artist",
    publication: "musikepool",
    date: "January 2026",
    description: "musikepool praises \"Story of an Artist\" as \"a heartfelt tribute that feels both tender and alive—Daniel Johnston's spirit resonates through every note.\"",
    link: "https://musikepool.com/story-of-an-artist-mozworth/",
    linkText: "Read Full Review"
  },
  {
    id: 1,
    category: "REVIEW",
    title: "mozworth - Sandpiper",
    publication: "Plastic Magazine",
    date: "September 22, 2025",
    description: "Plastic Magazine praises \"Sandpiper\" as \"a spectacular alternative jam that's timeless and truly absorbing throughout.\"",
    link: "https://plasticmag.co.uk/2025/09/mozworth-drops-new-single-sandpiper/",
    linkText: "Read Full Review"
  },
  {
    id: 2,
    category: "INTERVIEW",
    title: "Exclusive Interview with MOZWORTH",
    publication: "Illustrate Magazine",
    date: "September 20, 2025",
    description: "An in-depth exclusive interview covering mozworth's musical journey from his roots in Logan, Iowa, through his skateboarding-influenced musical exploration.",
    link: "https://illustratemagazine.com/exclusive-interview-with-mozworth/",
    linkText: "Read Full Interview"
  },
  {
    id: 3,
    category: "REVIEW",
    title: "mozworth - Sandpiper",
    publication: "The Big Takeover",
    date: "September 17, 2025",
    description: "The Big Takeover praises \"Sandpiper\" for its depth and duality, describing it as music that \"ebbs and flows between folky understatement and the roar of rock and roll at its finest.\"",
    link: "https://bigtakeover.com/recordings/mozworth-sandpiper-balanced-scale-media",
    linkText: "Read Full Review"
  },
  {
    id: 4,
    category: "REVIEW",
    title: "mozworth - Sandpiper",
    publication: "It's All Indie",
    date: "September 14, 2025",
    description: "It's All Indie describes \"Sandpiper\" as \"a clear-cut slice of shimmering indie-pop with a slightly scuzzy undertone of grunge guitar sounds.\"",
    link: "https://www.itsallindie.com/2025/09/mozworth-reveals-bold-new-single.html",
    linkText: "Read Full Review"
  },
  {
    id: 5,
    category: "REVIEW",
    title: "mozworth - The Sky Is Falling",
    publication: "The Big Takeover",
    date: "July 15, 2025",
    description: "The Big Takeover praises \"The Sky Is Falling\" as \"an absolutely essential document of our times.\"",
    link: "https://bigtakeover.com/recordings/mozworth-the-sky-is-falling-balanced-scale-media",
    linkText: "Read Full Review"
  },
  {
    id: 6,
    category: "REVIEW",
    title: "mozworth - The Sky Is Falling",
    publication: "Indie Dock Music Blog",
    date: "July 15, 2025",
    description: "Indie Dock Music Blog reviews \"The Sky Is Falling,\" highlighting how mozworth captures the tension of modern digital life.",
    link: "https://indiedockmusicblog.co.uk/?p=30798",
    linkText: "Read Full Review"
  },
  {
    id: 7,
    category: "REVIEW",
    title: "mozworth - The Sky Is Falling",
    publication: "Apricot Magazine",
    date: "July 15, 2025",
    description: "Apricot Magazine calls \"The Sky Is Falling\" a \"compelling sonic landscape\" and praises the band's chemistry and emotional honesty.",
    link: "https://apricot-magazine.com/review/the-sky-may-be-falling-but-mozworth-is-rising/",
    linkText: "Read Full Review"
  },
  {
    id: 8,
    category: "REVIEW",
    title: "mozworth - The Sky Is Falling",
    publication: "Buzzy Band",
    date: "July 15, 2025",
    description: "Buzzy Band highlights \"The Sky Is Falling\" for its urgent indie rock energy and praises mozworth's ability to turn anxiety into anthemic music.",
    link: "https://buzzyband.com/mozworth-the-sky-is-falling/",
    linkText: "Read Full Review"
  },
  {
    id: 9,
    category: "INTERVIEW",
    title: "An Interview with mozworth",
    publication: "KVRX 91.7",
    date: "December 4, 2024",
    description: "Michael Bosworth, known professionally as mozworth, is an independent singer-songwriter based in Austin.",
    link: "https://kvrx.org/app/blog/features/an-interview-with-mozworth/",
    linkText: "Read Full Interview"
  },
  {
    id: 10,
    category: "REVIEW",
    title: "mozworth - Goodbye Colorado",
    publication: "Indie Dream",
    date: "October 16, 2024",
    description: "Indie Dream describes 'Goodbye Colorado' as a moving indie rock track that explores the emotional journey of leaving behind not just a place, but memories.",
    link: "https://www.indiedream.com.mx/2024/10/mozworth-goodbye-colorado.html?m=1",
    linkText: "Read Full Review"
  },
  {
    id: 11,
    category: "PREMIERE",
    title: "mozworth: \"Postcard\" [PREMIERE]",
    publication: "KUTX",
    date: "September 11, 2024",
    description: "Packaging everything we love about '90s indie-alt-rock into a four-minute envelope, 'Postcard' proudly puts mozworth's stamp on these nostalgic sounds.",
    link: "https://kutx.org/song-of-the-day/mozworth-postcard-premiere/",
    linkText: "Read Full Article"
  }
];
