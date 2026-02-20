import { For, createSignal, createEffect, onCleanup } from "solid-js";
import GlobalFooter from "../components/GlobalFooter";
import RotatingBackground from "../components/RotatingBackground";
import ShareButton from "../components/ShareButton";
import { StandardMetadata } from "../utils/metadata";
import { wallpapers } from "../data/wallpapers";
import type { Wallpaper } from "../data/wallpapers";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackDownload(title: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "wallpaper_download", {
      event_category: "backgrounds",
      event_label: title,
    });
  }
}

export default function Backgrounds() {
  const [preview, setPreview] = createSignal<Wallpaper | null>(null);
  let lastFocusedElement: HTMLElement | null = null;
  let closeButtonRef: HTMLButtonElement | undefined;

  createEffect(() => {
    if (!preview()) return;
    lastFocusedElement = (document.activeElement as HTMLElement) ?? null;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeButtonRef?.focus());

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", handler);
    onCleanup(() => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
      lastFocusedElement?.focus();
    });
  });

  return (
    <>
      <StandardMetadata
        title="Phone Backgrounds | mozworth | Free Wallpapers"
        description="Download free mozworth phone backgrounds and wallpapers. Logo designs and album art for your lock screen. Austin indie alternative rock."
        url="https://mozworth.music/backgrounds/"
        type="website"
        keywords="mozworth wallpapers, phone backgrounds, indie rock wallpapers, Austin music backgrounds, free phone wallpapers"
        modifiedDate="2026-02-16"
        author="mozworth"
        image="https://mozworth.music/wallpapers/logo-black.webp"
        imageAlt="mozworth logo on black — free phone wallpaper"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Phone Backgrounds | mozworth | Free Wallpapers",
          "description": "Free downloadable phone wallpapers from mozworth: logo designs and album art for lock screens. WebP format, 1440×3200 (9:20), optimized for iPhone and Android.",
          "url": "https://mozworth.music/backgrounds/",
          "isPartOf": {
            "@type": "WebSite",
            "name": "mozworth",
            "url": "https://mozworth.music"
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": "mozworth Phone Wallpapers",
            "description": "Free phone wallpapers featuring mozworth logo and album art",
            "numberOfItems": wallpapers.length,
            "itemListElement": wallpapers.map((wp, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "CreativeWork",
                "name": wp.title,
                "url": `https://mozworth.music${wp.source}`,
                "author": { "@type": "MusicGroup", "name": "mozworth" },
                "copyrightHolder": { "@type": "MusicGroup", "name": "mozworth" }
              }
            }))
          }
        }}
      />
      <div class="flex flex-col min-h-screen">
        <a
          href="#main-content"
          class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50"
        >
          Skip to main content
        </a>
        <main id="main-content" class="flex-1 flex items-center justify-center relative bg-black">
          <RotatingBackground />
          <div class="relative container mx-auto md:mt-10 md:mb-10 text-center flex flex-col items-center max-w-[900px] p-4 md:p-10 md:rounded-[10px] bg-black/70 text-white">
            <h1 id="wallpapers-heading" class="text-3xl font-bold mb-2 text-center">Phone Backgrounds</h1>
            <p class="text-white/80 mb-4 text-center max-w-lg">
              Free wallpapers for your phone from mozworth, an Austin indie rock band. Logo designs and album art in WebP format (1440×3200). Tap to preview, download to save.
            </p>
            <ShareButton
              url={typeof window !== "undefined" ? window.location.href : "https://mozworth.music/backgrounds/"}
              title="mozworth Phone Backgrounds"
              text="Free phone wallpapers from mozworth — logo and album art. Download at mozworth.music"
              buttonClass="inline-block border border-white/30 rounded-full px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black mb-8"
            />

            <section aria-labelledby="wallpapers-heading" class="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
              <For each={wallpapers}>
                {(wp) => (
                  <div class="group flex flex-col items-center">
                    {/* Phone mockup frame — click to preview full-res */}
                    <button
                      type="button"
                      class="relative w-full max-w-[160px] mx-auto mb-3 cursor-pointer rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                      onClick={() => setPreview(wp)}
                      aria-label={`Preview ${wp.title} full size`}
                    >
                      <div class="aspect-[9/19.5] rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-xl bg-black">
                        <img
                          src={wp.source}
                          alt={`${wp.title} wallpaper preview`}
                          class="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </button>
                    <h2 class="text-sm font-semibold text-white mb-2 text-center line-clamp-2">
                      {wp.title}
                    </h2>
                    <a
                      href={wp.source}
                      download={`mozworth-${wp.title.toLowerCase().replace(/\s+/g, "-")}.webp`}
                      class="inline-block border border-white/30 rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
                      onClick={() => trackDownload(wp.title)}
                      aria-label={`Download ${wp.title} wallpaper`}
                    >
                      Download
                    </a>
                  </div>
                )}
              </For>
            </section>

            {/* Full-res preview modal */}
            {preview() && (
              <div
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby="preview-title"
                aria-describedby="preview-desc"
                onClick={() => setPreview(null)}
              >
                <button
                  ref={(el) => (closeButtonRef = el)}
                  type="button"
                  class="absolute top-4 right-4 text-white/80 hover:text-white text-2xl leading-none p-2 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close preview"
                  onClick={() => setPreview(null)}
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div
                  class="relative max-h-[90vh] max-w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={preview()!.source}
                    alt={`${preview()!.title} full resolution wallpaper`}
                    class="max-h-[90vh] w-auto object-contain rounded-lg shadow-2xl"
                  />
                  <p id="preview-title" class="text-white/70 text-sm mt-2 text-center font-medium">{preview()!.title}</p>
                  <p id="preview-desc" class="sr-only">Full resolution wallpaper. Tap outside or press Escape to close.</p>
                </div>
              </div>
            )}

            <p class="text-white/60 text-xs mt-8 text-center">
              Optimized for iPhone and Android (1440×3200, 9:20). Tap to preview full size, long-press to save on mobile.
            </p>
            <p class="text-white/50 text-xs mt-2 text-center">
              WebP: Android supports natively. iOS 14+ usually works; if not, use Photos → Share → Convert Image to JPEG.
            </p>
            <p class="text-white/50 text-xs mt-2 text-center">
              © mozworth. For personal use. Do not redistribute or use commercially.
            </p>
          </div>
        </main>
        <GlobalFooter />
      </div>
    </>
  );
}
