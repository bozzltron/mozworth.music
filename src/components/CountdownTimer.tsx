import { createSignal, onCleanup, onMount, JSX } from "solid-js";

interface CountdownTimerProps {
  releaseDate: Date;
  title?: string;
  subtitle?: string;
  className?: string;
  onComplete?: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export default function CountdownTimer(props: CountdownTimerProps): JSX.Element {
  const [timeRemaining, setTimeRemaining] = createSignal<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  const calculateTimeRemaining = (): TimeRemaining => {
    const now = new Date().getTime();
    const targetTime = props.releaseDate.getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      isExpired: false
    };
  };

  let intervalId: ReturnType<typeof setInterval>;

  onMount(() => {
    // Initial calculation
    setTimeRemaining(calculateTimeRemaining());
    
    // Update every second
    intervalId = setInterval(() => {
      const newTime = calculateTimeRemaining();
      setTimeRemaining(newTime);
      
      // Call onComplete callback if countdown finished
      if (newTime.isExpired && props.onComplete) {
        props.onComplete();
      }
    }, 1000);
  });

  onCleanup(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const getTimeUnitLabel = (value: number, singular: string, plural: string): string => {
    return value === 1 ? singular : plural;
  };

  return (
    <div class={`countdown-timer ${props.className || ''}`}>
      {props.title && (
        <div class="text-lg font-semibold text-white mb-2 text-center">
          {props.title}
        </div>
      )}
      
      {props.subtitle && (
        <div class="text-sm text-white/70 mb-4 text-center">
          {props.subtitle}
        </div>
      )}

      {timeRemaining().isExpired ? (
        <div class="text-center">
          <div class="text-2xl font-bold text-green-400 mb-2">
            🎉 OUT NOW! 🎉
          </div>
          <div class="text-sm text-white/70">
            The wait is over!
          </div>
        </div>
      ) : (
        <>
          <div class="flex justify-center gap-4 mb-3">
            <div class="countdown-unit text-center">
              <div class="countdown-number text-3xl font-bold text-white bg-white/10 rounded-lg px-3 py-2 min-w-[60px] border border-white/20">
                {formatNumber(timeRemaining().days)}
              </div>
              <div class="countdown-label text-xs text-white/60 mt-1">
                {getTimeUnitLabel(timeRemaining().days, 'day', 'days')}
              </div>
            </div>

            <div class="countdown-separator text-2xl text-white/40 flex items-center">
              :
            </div>

            <div class="countdown-unit text-center">
              <div class="countdown-number text-3xl font-bold text-white bg-white/10 rounded-lg px-3 py-2 min-w-[60px] border border-white/20">
                {formatNumber(timeRemaining().hours)}
              </div>
              <div class="countdown-label text-xs text-white/60 mt-1">
                {getTimeUnitLabel(timeRemaining().hours, 'hour', 'hours')}
              </div>
            </div>

            <div class="countdown-separator text-2xl text-white/40 flex items-center">
              :
            </div>

            <div class="countdown-unit text-center">
              <div class="countdown-number text-3xl font-bold text-white bg-white/10 rounded-lg px-3 py-2 min-w-[60px] border border-white/20">
                {formatNumber(timeRemaining().minutes)}
              </div>
              <div class="countdown-label text-xs text-white/60 mt-1">
                {getTimeUnitLabel(timeRemaining().minutes, 'min', 'mins')}
              </div>
            </div>

            <div class="countdown-separator text-2xl text-white/40 flex items-center">
              :
            </div>

            <div class="countdown-unit text-center">
              <div class="countdown-number text-3xl font-bold text-white bg-white/10 rounded-lg px-3 py-2 min-w-[60px] border border-white/20">
                {formatNumber(timeRemaining().seconds)}
              </div>
              <div class="countdown-label text-xs text-white/60 mt-1">
                {getTimeUnitLabel(timeRemaining().seconds, 'sec', 'secs')}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 