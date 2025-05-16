import { JSX } from "solid-js";
import StreamingIcons, { StreamingLink } from "./StreamingIcons";

interface BasePageLayoutProps {
  cover: JSX.Element;
  info: JSX.Element;
  streamingLinks: StreamingLink[];
  children: JSX.Element;
  isrc?: string;
  backgroundClass?: string;
}

export default function BasePageLayout(props: BasePageLayoutProps) {
  return (
    <>
      {props.isrc && <meta property="music:isrc" content={props.isrc} />}
      <main class={props.backgroundClass || "min-h-screen min-w-full w-full flex items-center justify-center bg-gradient-to-br from-[#a04c3d] via-[#3e6e6b] to-[#e2c97b]"}>
        <article class="w-full h-full md:w-[98vw] md:h-[95vh] bg-black/45 md:rounded-xl shadow-2xl flex flex-col md:flex-row items-stretch p-4 mt-0 mb-2 md:mt-4 md:mb-4 md:overflow-hidden">
          {/* Left: Cover, info, controls */}
          <div class="flex flex-col items-center md:items-start md:mr-10 flex-shrink-0 w-full md:w-[380px] max-w-full md:max-w-[380px] min-h-[420px] md:min-h-[470px] mb-6 md:mb-0 overflow-y-auto">
            {props.cover}
            {props.info}
            <div class="player-controls flex flex-wrap gap-4 mb-4 w-full justify-center md:justify-start">
              <StreamingIcons links={props.streamingLinks} />
            </div>
          </div>
          {/* Right: Tabbed content */}
          <div class="player-right flex-1 flex flex-col min-w-0 md:max-h-[calc(95vh-2rem)] md:overflow-y-auto">
            {props.children}
          </div>
        </article>
      </main>
      {/* Footer */}
      <footer class="w-full text-center text-xs text-gray-400 py-3 border-t border-white/10 mt-auto bg-black/70">
        &copy; {new Date().getFullYear()} mozworth. All rights reserved. &mdash;
        <a href="/" class="text-teal-300 hover:underline mx-1">Home</a>|
        <a href="/discography" class="text-teal-300 hover:underline mx-1">Discography</a>
      </footer>
    </>
  );
} 