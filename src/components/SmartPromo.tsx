import { JSX } from "solid-js";

export default function SmartPromo(): JSX.Element {
  return (
    <div class="bg-black/60 border border-white/30 rounded-xl p-4 w-full max-w-xl flex flex-col items-center mb-8">
      <div class="w-full flex justify-center mb-4">
        <div style="position: relative; width: 100%; max-width: 560px; padding-bottom: 56.25%;">
          <iframe
            src="https://www.youtube.com/embed/0He2ot6VCnc?si=vmHVqsBr-QNA5FRa"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;"
          ></iframe>
        </div>
      </div>
      <div class="text-xl font-bold text-white text-center">
        Goodbye Colorado Live @ Brentwood Socialhouse 5/16/2025!
      </div>
    </div>
  );
} 