import { JSX } from "solid-js";
import AnniversaryConfetti from "./AnniversaryConfetti";
import StreamingIcons, { StreamingLink } from "./StreamingIcons";

interface BasePageLayoutProps {
  cover: JSX.Element;
  info: JSX.Element;
  streamingLinks: StreamingLink[];
  children: JSX.Element;
  isrc?: string;
  backgroundClass?: string;
  articleClass?: string;
  iconClass?: string;
  confetti?: {
    enabled: boolean;
    releaseDate: Date;
    force?: boolean;
    imageUrl?: string;
  };
}

export default function BasePageLayout(props: BasePageLayoutProps) {
  const forceConfetti = ((): boolean => {
    try {
      const search = typeof window !== 'undefined' ? window.location.search : '';
      const sp = new URLSearchParams(search);
      const v = sp.get('anniversary');
      return sp.has('anniversary') && v !== '0' && v !== 'false';
    } catch {
      return false;
    }
  })();
  return (
    <>
      {props.isrc && <meta property="music:isrc" content={props.isrc} />}
      <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400 z-50">Skip to main content</a>
      <main id="main-content" class={props.backgroundClass || "min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-br from-[#a04c3d] via-[#3e6e6b] to-[#e2c97b]"}>
        <article class={props.articleClass || "w-full h-full md:w-[98vw] md:h-[95vh] bg-black/45 md:rounded-xl shadow-2xl flex flex-col md:flex-row items-stretch p-4 mt-0 mb-2 md:mt-4 md:mb-4"}>
          {/* Left: Cover, info, controls */}
          <aside class="flex flex-col items-center md:items-start md:mr-10 flex-shrink-0 w-full md:w-[380px] max-w-full md:max-w-[380px] min-h-[420px] md:min-h-[470px] md:max-h-[calc(95vh-2rem)] md:overflow-y-auto mb-6 md:mb-0" aria-label="Song information and streaming links">
            {props.cover}
            {props.info}
            <nav aria-label="Streaming platforms" class="player-controls flex flex-wrap gap-4 mb-4 w-full justify-center md:justify-start">
              <StreamingIcons links={props.streamingLinks} iconClass={props.iconClass} />
            </nav>
          </aside>
          {/* Right: Tabbed content */}
          <section class="player-right flex-1 flex flex-col min-w-0 md:max-h-[calc(95vh-2rem)] md:overflow-y-auto relative" aria-label="Song content">
            {props.children}
          </section>
        </article>
      </main>
      {props.confetti?.enabled && (
        <AnniversaryConfetti
          releaseDate={props.confetti.releaseDate}
          enabled={true}
          force={props.confetti.force ?? forceConfetti}
          variant="fullscreen"
          imageUrl={props.confetti.imageUrl}
        />
      )}
      {/* Footer */}
      <footer class="w-full text-center text-xs text-gray-400 py-3 border-t border-white/10 mt-auto bg-black/70" role="contentinfo">
        &copy; {new Date().getFullYear()} mozworth. All rights reserved.
        <nav aria-label="Footer navigation" class="inline ml-2">
          <a href="/" class="text-teal-300 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 mx-1">Home</a>
          <span class="mx-1" aria-hidden="true">|</span>
          <a href="/music" class="text-teal-300 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 mx-1">Music</a>
        </nav>
      </footer>
    </>
  );
} 