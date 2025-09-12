import { JSX, Show, createMemo } from "solid-js";
import { isAnniversaryToday } from "../utils/date";

interface AnniversaryMessageProps {
  releaseDate: Date;
  enabled?: boolean;
  force?: boolean;
}

export default function AnniversaryMessage(props: AnniversaryMessageProps): JSX.Element {
  const shouldShow = createMemo(() => {
    return props.enabled && (props.force === true || isAnniversaryToday(props.releaseDate));
  });

  const yearsAgo = createMemo(() => {
    const now = new Date();
    return now.getFullYear() - props.releaseDate.getFullYear();
  });

  const anniversaryText = createMemo(() => {
    const years = yearsAgo();
    if (years === 1) {
      return "Happy 1-Year Anniversary!";
    }
    return `Happy ${years}-Year Anniversary!`;
  });

  return (
    <Show when={shouldShow()}>
      <div class="anniversary-message bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-400/30 rounded-lg p-4 mt-6 mb-4 w-full text-center backdrop-blur-sm">
        <div class="text-xl font-bold text-white mb-1 flex items-center justify-center gap-2">
          <span class="animate-pulse">🎉</span>
          {anniversaryText()}
          <span class="animate-pulse">🎉</span>
        </div>
        <div class="text-sm text-white/80">
          {yearsAgo() === 1 ? "One year" : `${yearsAgo()} years`} since "Postcard" was released!
        </div>
      </div>
    </Show>
  );
}
