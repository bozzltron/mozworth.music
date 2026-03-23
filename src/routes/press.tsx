import GlobalFooter from "../components/GlobalFooter";
import RotatingBackground from "../components/RotatingBackground";
import { createSignal, createMemo, For } from "solid-js";
import { StandardMetadata } from "../utils/metadata";
import { pressItems } from "../data/press";

/**
 * Masonry layout (Tailwind): CSS multi-column — `columns-*` + `gap-*` + `break-inside-avoid`
 * on each card so items pack vertically without splitting across columns.
 * @see https://tailwindcss.com/docs/columns
 * @see https://tailwindcss.com/docs/break-inside
 */

function getCategoryColor(category: string): string {
  switch (category) {
    case "REVIEW":
      return "bg-teal-600";
    case "INTERVIEW":
      return "bg-purple-600";
    case "PREMIERE":
      return "bg-orange-600";
    case "TV":
      return "bg-blue-600";
    default:
      return "bg-gray-600";
  }
}

export default function Press() {
  const [selectedFilter, setSelectedFilter] = createSignal("ALL");

  const categories = createMemo(() => {
    const unique = [...new Set(pressItems.map((item) => item.category))];
    return ["ALL", ...unique];
  });

  const filteredItems = createMemo(() => {
    if (selectedFilter() === "ALL") return pressItems;
    return pressItems.filter((item) => item.category === selectedFilter());
  });

  return (
    <>
      <StandardMetadata
        title="Press Coverage | mozworth | Austin Indie Rock"
        description="Read the latest press coverage, reviews, interviews and features about mozworth, an indie rock and alternative rock band from Austin, Texas. Featured in Plastic Magazine, The Big Takeover, It's All Indie, and more."
        url="https://mozworth.music/press/"
        type="website"
        keywords="indie rock reviews, alternative rock press, Austin indie rock bands, mozworth reviews, indie rock press coverage, alternative rock interviews"
      />
      <div class="flex flex-col min-h-screen">
        <a
          href="#main-content"
          class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50"
        >
          Skip to main content
        </a>
        <main
          id="main-content"
          class="flex-1 flex items-center justify-center relative bg-black light:bg-stone-100"
        >
          <RotatingBackground />
          <div class="relative container mx-auto md:mt-10 md:mb-10 w-full max-w-6xl px-4 md:px-6 py-6 md:py-10 md:rounded-[10px] bg-black/70 light:bg-white/90 text-white light:text-gray-900">
            <h1 class="text-3xl font-bold mb-8 text-center">Press Coverage</h1>

            <div class="mb-8 flex flex-wrap justify-center gap-3">
              <For each={categories()}>
                {(category) => (
                  <button
                    type="button"
                    onClick={() => setSelectedFilter(category)}
                    class={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      selectedFilter() === category
                        ? "bg-white light:bg-gray-900 text-black light:text-white shadow-lg"
                        : "bg-black/50 light:bg-white/50 text-white light:text-gray-900 border border-white/30 light:border-gray-300 hover:bg-white/10 light:hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                )}
              </For>
            </div>

            {/* Masonry: multi-column flow + gap; each card stays in one column */}
            <div class="columns-1 sm:columns-2 xl:columns-3 gap-6">
              <For each={filteredItems()}>
                {(item) => (
                  <article class="break-inside-avoid mb-6">
                    <div class="press-item p-6 bg-black/50 light:bg-white/70 border border-white/30 light:border-gray-200 rounded-lg text-left">
                      <div class="aspect-video bg-black/30 light:bg-gray-200 rounded-lg overflow-hidden mb-4">
                        <img
                          src={`/press-screenshots/${item.id}.webp`}
                          alt={`${item.publication} — ${item.title}`}
                          class="w-full h-full object-cover object-top"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const fallback = target.nextElementSibling;
                            if (fallback instanceof HTMLElement) {
                              fallback.classList.remove("hidden");
                            }
                          }}
                        />
                        <div
                          class="hidden w-full h-full flex-col items-center justify-center px-4 text-center text-white/80 light:text-gray-600 text-sm"
                          aria-hidden="true"
                        >
                          <span class="font-semibold">{item.publication}</span>
                          <span class="text-xs mt-1">Preview unavailable</span>
                        </div>
                      </div>
                      <div class="mb-3">
                        <span
                          class={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full mr-2 ${getCategoryColor(item.category)}`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h2 class="text-xl font-semibold mb-2">{item.title}</h2>
                      <div class="text-lg text-white/70 light:text-gray-600 mb-1">
                        {item.publication}
                      </div>
                      <div class="text-sm text-white/60 light:text-gray-500 mb-3">
                        {item.date}
                      </div>
                      <div class="mb-4 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-block font-medium text-white light:text-gray-900 text-base rounded-full border-2 border-white/30 light:border-gray-300 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black light:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black light:focus:ring-offset-stone-100"
                      >
                        {item.linkText}
                      </a>
                    </div>
                  </article>
                )}
              </For>
            </div>
          </div>
        </main>
        <GlobalFooter />
      </div>
    </>
  );
}
