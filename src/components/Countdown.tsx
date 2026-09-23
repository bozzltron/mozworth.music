import { createSignal, onCleanup, onMount, JSX } from "solid-js";

interface CountdownProps {
  /** Target date in ISO format (e.g., "2026-10-22T00:00:00") */
  targetDate: string;
  /** Text to show when countdown expires */
  expiredText?: string;
  /** CSS class for the countdown container */
  class?: string;
  /** Whether to show labels (Days, Hours, etc.) */
  showLabels?: boolean;
  /** Compact mode - shows only numbers and minimal labels */
  compact?: boolean;
}

interface ViewProps {
  class: string;
}

function getTimeLeft(target: string) {
  const now = new Date().getTime();
  const targetTime = new Date(target).getTime();
  const diff = targetTime - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function ExpiredView(props: { expiredText: string } & ViewProps): JSX.Element {
  return (
    <div class={`inline-flex items-center gap-2 text-teal-400 font-semibold ${props.class}`}>
      <span class="animate-pulse" aria-hidden="true">✦</span>
      <span>{props.expiredText}</span>
      <span class="animate-pulse" aria-hidden="true">✦</span>
    </div>
  );
}

function CompactView(props: { timeLeft: ReturnType<typeof getTimeLeft>; showLabels: boolean } & ViewProps): JSX.Element {
  const { days, hours, minutes, seconds } = props.timeLeft;
  return (
    <div class={`inline-flex items-center gap-1 font-mono ${props.class}`} aria-label={`Time until release: ${days}d ${hours}h ${minutes}m ${seconds}s`}>
      {days > 0 && (
        <>
          <span class="text-white/90 light:text-gray-900 text-lg font-bold">{days}</span>
          {props.showLabels && <span class="text-white/50 light:text-gray-500 text-xs uppercase">d</span>}
        </>
      )}
      <span class="text-white/90 light:text-gray-900 text-lg font-bold">{hours.toString().padStart(2, "0")}</span>
      {props.showLabels && <span class="text-white/50 light:text-gray-500 text-xs uppercase">h</span>}
      <span class="text-white/90 light:text-gray-900 text-lg font-bold">{minutes.toString().padStart(2, "0")}</span>
      {props.showLabels && <span class="text-white/50 light:text-gray-500 text-xs uppercase">m</span>}
      <span class="text-white/90 light:text-gray-900 text-lg font-bold">{seconds.toString().padStart(2, "0")}</span>
      {props.showLabels && <span class="text-white/50 light:text-gray-500 text-xs uppercase">s</span>}
    </div>
  );
}

function FullView(props: { timeLeft: ReturnType<typeof getTimeLeft>; showLabels: boolean } & ViewProps): JSX.Element {
  const { days, hours, minutes, seconds } = props.timeLeft;
  return (
    <div class={`inline-flex items-center gap-4 ${props.class}`} aria-label={`Time until release: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`}>
      <div class="flex flex-col items-center">
        <span class="text-white/90 light:text-gray-900 text-2xl md:text-3xl font-bold tabular-nums">{days}</span>
        {props.showLabels && <span class="text-white/50 light:text-gray-500 text-xs uppercase tracking-wider mt-1">Days</span>}
      </div>
      <div class="flex flex-col items-center">
        <span class="text-white/90 light:text-gray-900 text-2xl md:text-3xl font-bold tabular-nums">{hours.toString().padStart(2, "0")}</span>
        {props.showLabels && <span class="text-white/50 light:text-gray-500 text-xs uppercase tracking-wider mt-1">Hours</span>}
      </div>
      <div class="flex flex-col items-center">
        <span class="text-white/90 light:text-gray-900 text-2xl md:text-3xl font-bold tabular-nums">{minutes.toString().padStart(2, "0")}</span>
        {props.showLabels && <span class="text-white/50 light:text-gray-500 text-xs uppercase tracking-wider mt-1">Minutes</span>}
      </div>
      <div class="flex flex-col items-center">
        <span class="text-white/90 light:text-gray-900 text-2xl md:text-3xl font-bold tabular-nums">{seconds.toString().padStart(2, "0")}</span>
        {props.showLabels && <span class="text-white/50 light:text-gray-500 text-xs uppercase tracking-wider mt-1">Seconds</span>}
      </div>
    </div>
  );
}

export default function Countdown(props: CountdownProps): JSX.Element {
  const {
    targetDate,
    expiredText = "Released!",
    class: className = "",
    showLabels = true,
    compact = false,
  } = props;

  const [timeLeft, setTimeLeft] = createSignal(getTimeLeft(targetDate));

  onMount(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });

  return (
    <>
      {timeLeft().expired ? (
        <ExpiredView expiredText={expiredText} class={className} />
      ) : (
        compact ? (
          <CompactView timeLeft={timeLeft()} showLabels={showLabels} class={className} />
        ) : (
          <FullView timeLeft={timeLeft()} showLabels={showLabels} class={className} />
        )
      )}
    </>
  );
}