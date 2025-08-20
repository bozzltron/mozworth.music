import { createSignal, onCleanup, onMount, JSX } from "solid-js";

interface CountdownTimerProps {
  releaseDate: Date;
  title?: string;
  subtitle?: string;
  class?: string;
  onComplete?: () => void;
  confettiImageUrl?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  isInCelebrationWindow: boolean;
}

export default function CountdownTimer(props: CountdownTimerProps): JSX.Element {
  const [timeRemaining, setTimeRemaining] = createSignal<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
    isInCelebrationWindow: false
  });

  const calculateTimeRemaining = (): TimeRemaining => {
    const now = new Date().getTime();
    const targetTime = props.releaseDate.getTime();
    const difference = targetTime - now;

    // Check if we're in the 24-hour celebration window after release
    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const isInCelebrationWindow = difference <= 0 && Math.abs(difference) <= dayInMilliseconds;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
        isInCelebrationWindow
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
      isExpired: false,
      isInCelebrationWindow: false
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
    <>
      <style>
        {`
          .confetti-fullscreen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
          }
          
          .confetti-piece {
            position: absolute;
            width: 24px;
            height: 24px;
            background-image: url('${props.confettiImageUrl || '/mozworth-debut.webp'}');
            background-size: cover;
            background-position: center;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            top: -100px;
          }
          
          /* Using proven nth-child pattern for better randomization */
          .confetti-piece:nth-child(1) { left: 3%; animation: confetti-fall 4.2s linear infinite; animation-delay: 0s; }
          .confetti-piece:nth-child(2) { left: 8%; animation: confetti-fall 3.8s linear infinite; animation-delay: 0.5s; }
          .confetti-piece:nth-child(3) { left: 13%; animation: confetti-fall 4.6s linear infinite; animation-delay: 1.2s; }
          .confetti-piece:nth-child(4) { left: 18%; animation: confetti-fall 3.4s linear infinite; animation-delay: 0.8s; }
          .confetti-piece:nth-child(5) { left: 23%; animation: confetti-fall 4.1s linear infinite; animation-delay: 1.8s; }
          .confetti-piece:nth-child(6) { left: 28%; animation: confetti-fall 3.7s linear infinite; animation-delay: 0.3s; }
          .confetti-piece:nth-child(7) { left: 33%; animation: confetti-fall 4.4s linear infinite; animation-delay: 1.5s; }
          .confetti-piece:nth-child(8) { left: 38%; animation: confetti-fall 3.9s linear infinite; animation-delay: 0.7s; }
          .confetti-piece:nth-child(9) { left: 43%; animation: confetti-fall 4.0s linear infinite; animation-delay: 2.1s; }
          .confetti-piece:nth-child(10) { left: 48%; animation: confetti-fall 3.6s linear infinite; animation-delay: 1.0s; }
          .confetti-piece:nth-child(11) { left: 53%; animation: confetti-fall 4.3s linear infinite; animation-delay: 0.4s; }
          .confetti-piece:nth-child(12) { left: 58%; animation: confetti-fall 3.5s linear infinite; animation-delay: 1.7s; }
          .confetti-piece:nth-child(13) { left: 63%; animation: confetti-fall 4.5s linear infinite; animation-delay: 0.9s; }
          .confetti-piece:nth-child(14) { left: 68%; animation: confetti-fall 3.3s linear infinite; animation-delay: 2.4s; }
          .confetti-piece:nth-child(15) { left: 73%; animation: confetti-fall 4.7s linear infinite; animation-delay: 0.6s; }
          .confetti-piece:nth-child(16) { left: 78%; animation: confetti-fall 3.2s linear infinite; animation-delay: 1.9s; }
          .confetti-piece:nth-child(17) { left: 83%; animation: confetti-fall 4.8s linear infinite; animation-delay: 1.1s; }
          .confetti-piece:nth-child(18) { left: 88%; animation: confetti-fall 3.1s linear infinite; animation-delay: 2.7s; }
          .confetti-piece:nth-child(19) { left: 93%; animation: confetti-fall 4.9s linear infinite; animation-delay: 0.2s; }
          .confetti-piece:nth-child(20) { left: 98%; animation: confetti-fall 3.0s linear infinite; animation-delay: 1.6s; }
          
          /* Additional pieces for fuller effect */
          .confetti-piece:nth-child(21) { left: 5%; animation: confetti-fall 3.8s linear infinite; animation-delay: 1.3s; }
          .confetti-piece:nth-child(22) { left: 15%; animation: confetti-fall 4.2s linear infinite; animation-delay: 2.0s; }
          .confetti-piece:nth-child(23) { left: 25%; animation: confetti-fall 3.6s linear infinite; animation-delay: 0.1s; }
          .confetti-piece:nth-child(24) { left: 35%; animation: confetti-fall 4.4s linear infinite; animation-delay: 2.3s; }
          .confetti-piece:nth-child(25) { left: 45%; animation: confetti-fall 3.4s linear infinite; animation-delay: 1.4s; }
          .confetti-piece:nth-child(26) { left: 55%; animation: confetti-fall 4.6s linear infinite; animation-delay: 0.7s; }
          .confetti-piece:nth-child(27) { left: 65%; animation: confetti-fall 3.2s linear infinite; animation-delay: 2.6s; }
          .confetti-piece:nth-child(28) { left: 75%; animation: confetti-fall 4.0s linear infinite; animation-delay: 1.8s; }
          .confetti-piece:nth-child(29) { left: 85%; animation: confetti-fall 3.7s linear infinite; animation-delay: 0.9s; }
          .confetti-piece:nth-child(30) { left: 95%; animation: confetti-fall 4.1s linear infinite; animation-delay: 2.2s; }
          
          /* Single, reliable falling animation with gentle sway */
          @keyframes confetti-fall {
            0% {
              transform: translateY(-100px) translateX(0) rotate(0deg);
              opacity: 1;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(calc(100vh + 100px)) translateX(50px) rotate(360deg);
              opacity: 0;
            }
          }
          
          /* Alternating sway pattern for odd/even pieces */
          .confetti-piece:nth-child(even) {
            animation-name: confetti-fall-reverse;
          }
          
          @keyframes confetti-fall-reverse {
            0% {
              transform: translateY(-100px) translateX(0) rotate(0deg);
              opacity: 1;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(calc(100vh + 100px)) translateX(-50px) rotate(-360deg);
              opacity: 0;
            }
          }
        `}
      </style>
      <div class={`countdown-timer ${props.class || ''}`}>
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
        <div class="text-center relative">
          {timeRemaining().isInCelebrationWindow && (
            <div class="confetti-fullscreen z-40">
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
              <div class="confetti-piece" />
            </div>
          )}
          <div class="text-2xl font-bold text-green-400 mb-2 relative z-50">
            OUT NOW! 
          </div>
          <div class="text-sm text-white/70 relative z-50">
            Released
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
    </>
  );
} 