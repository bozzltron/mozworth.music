import { createMemo } from "solid-js";

const SHOW_END = new Date("2025-05-16T18:00:00-05:00"); // Austin time (CDT)

export default function SmartPromo() {
  const now = createMemo(() => new Date());
  const showActive = createMemo(() => now() < SHOW_END);

  return showActive() ? (
    <div class="bg-black/60 border border-white/30 rounded-xl p-4 w-full max-w-md flex flex-col items-center mb-8">
      <img src="/brentwood.jpeg" alt="Brentwood Social House" class="w-full h-100 object-cover rounded mb-4" />
      <div class="text-xl font-bold text-white mb-2 text-center">mozworth unplugged @ Brentwood Social House</div>
      <div class="text-base text-gray-200 mb-2 text-center">Friday, May 16, 2025<br />4pm – 6pm<br />Austin, TX</div>
      <div class="flex gap-3 mb-2">
        <a href="https://www.bandsintown.com/e/106761310" target="_blank" rel="noopener" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black">Bandsintown</a>
        <a href="https://www.facebook.com/share/1AisQjQCHt/" target="_blank" rel="noopener" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black">Facebook</a>
        <a href="https://do512.com/events/2025/5/16/mozworth-unplugged-tickets" target="_blank" rel="noopener" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black">Do512</a>
      </div>
      <div class="text-xs text-gray-400">@ Brentwood Social House</div>
    </div>
  ) : (
    <div class="bg-black/50 border border-white/30 rounded-xl p-4 w-full max-w-md flex flex-col items-center mb-8">
      <img
        src="/mozworth-debut.webp"
        alt="Mozworth album cover"
        class="w-full aspect-square object-cover rounded-xl shadow-lg mb-4"
      />
      <div class="flex flex-wrap justify-center gap-3">
        <a href="/albums/mozworth" class="inline-block font-medium text-white text-base rounded-full border-2 border-white/30 px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black">Go listen!</a>
      </div>
    </div>
  );
} 