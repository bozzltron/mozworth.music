import { JSX, createMemo, createSignal, onMount, Show } from "solid-js";
import { formatTimeAgo, isAnniversaryToday } from "../utils/date";
import AnniversaryConfetti from "./AnniversaryConfetti";

interface ReleaseMetaProps {
  releaseDate: string; // ISO or parseable date string like '2024-11-15'
  prefix?: string; // e.g., 'Released', 'Released on'
  showConfetti?: boolean;
  forceConfetti?: boolean; // force confetti for demos/tests
  textColor?: string; // optional text color class
}

export default function ReleaseMeta(props: ReleaseMetaProps): JSX.Element {
  const [isClient, setIsClient] = createSignal(false);
  onMount(() => setIsClient(true));
  const date = createMemo(() => {
    // Parse date in local timezone to avoid timezone conversion issues
    const [year, month, day] = props.releaseDate.split('-').map(Number);
    return new Date(year, month - 1, day); // month is 0-based
  });
  const userLocale = createMemo(() => (typeof navigator !== 'undefined' && navigator.language) ? navigator.language : undefined);
  const formatted = createMemo(() => date().toLocaleDateString(userLocale(), { year: 'numeric', month: 'long', day: 'numeric' }));
  const timeAgo = createMemo(() => formatTimeAgo(date(), new Date(), userLocale()));
  const todayIsAnniversary = createMemo(() => isAnniversaryToday(date()));

  const textColorClass = props.textColor || "text-gray-400";
  const timeAgoColorClass = props.textColor === "text-black" ? "text-gray-600" : "text-white/60";
  
  return (
    <div class={`song-info ${textColorClass} text-base mb-1 w-full text-left relative`}>
      {props.prefix ?? 'Released'} {formatted()}
      <Show when={isClient()}>
        <span class={`ml-2 ${timeAgoColorClass}`}>({timeAgo()})</span>
      </Show>
      {props.showConfetti && (todayIsAnniversary() || props.forceConfetti) && (
        <AnniversaryConfetti releaseDate={date()} enabled={true} force={props.forceConfetti} />
      )}
    </div>
  );
}


