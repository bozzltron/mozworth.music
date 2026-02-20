import { JSX, Show, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { isAnniversaryToday } from "../utils/date";

interface AnniversaryConfettiProps {
  releaseDate: Date;
  enabled?: boolean;
  force?: boolean;
  variant?: 'fullscreen' | 'container';
  imageUrl?: string;
}

export default function AnniversaryConfetti(props: AnniversaryConfettiProps): JSX.Element {
  const [visible, setVisible] = createSignal(false);
  const [stopping, setStopping] = createSignal(false);

  let intervalId: ReturnType<typeof setInterval> | undefined;
  let stopTimeoutId: ReturnType<typeof setTimeout> | undefined;
  let hideTimeoutId: ReturnType<typeof setTimeout> | undefined;

  const check = () => {
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldShow =
      !!props.enabled &&
      !prefersReducedMotion &&
      (props.force === true || isAnniversaryToday(props.releaseDate));
    setVisible(shouldShow);
    
    // If confetti starts showing, set a graceful stop sequence
    if (shouldShow && !stopTimeoutId) {
      // After 3 seconds, stop new confetti from starting (add stopping class)
      stopTimeoutId = setTimeout(() => {
        setStopping(true);
      }, 3_000); // 3 seconds
      
      // After 8 seconds total (3s + 5s for longest animation), hide completely
      hideTimeoutId = setTimeout(() => {
        setVisible(false);
        setStopping(false);
      }, 8_000); // 8 seconds total
    }
  };

  onMount(() => {
    check();
    intervalId = setInterval(check, 60_000);
  });

  onCleanup(() => {
    if (intervalId) clearInterval(intervalId);
    if (stopTimeoutId) clearTimeout(stopTimeoutId);
    if (hideTimeoutId) clearTimeout(hideTimeoutId);
  });

  const variantClass = () => (props.variant === 'container' ? 'confetti-container' : 'confetti-fullscreen');
  const bgUrl = () => props.imageUrl || '/mozworth-debut.webp';

  return (
    <Show when={visible()}>
      <div class={`${variantClass()} z-40 ${stopping() ? 'stopping' : ''}`}>
        {Array.from({ length: 30 }).map(() => <div class="confetti-piece" />)}
      </div>
      <style>
        {`
          .confetti-fullscreen { position: fixed; inset: 0; width: 100%; height: 100%; overflow: hidden; pointer-events: none; }
          .confetti-container { position: absolute; inset: 0; width: 100%; height: 100%; overflow: hidden; pointer-events: none; }
          .confetti-piece { position: absolute; width: 24px; height: 24px; background-image: url('${bgUrl()}'); background-size: cover; background-position: center; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.3); animation-timing-function: linear; animation-iteration-count: infinite; top: -100px; }
          .stopping .confetti-piece { animation-iteration-count: 1; }
          @keyframes confetti-fall { 0% { transform: translateY(-100px) translateX(0) rotate(0deg); opacity: 1; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(calc(100vh + 100px)) translateX(50px) rotate(360deg); opacity: 0; } }
          @keyframes confetti-fall-reverse { 0% { transform: translateY(-100px) translateX(0) rotate(0deg); opacity: 1; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(calc(100vh + 100px)) translateX(-50px) rotate(-360deg); opacity: 0; } }
          .confetti-piece:nth-child(even) { animation-name: confetti-fall-reverse; }
          ${Array.from({ length: 30 }).map((_, i) => {
            const left = 3 + i * (95 / 29);
            const dur = 3.2 + (i % 6) * 0.3;
            const delay = (i % 8) * 0.3;
            return `.confetti-piece:nth-child(${i + 1}) { left: ${left.toFixed(2)}%; animation: confetti-fall ${dur.toFixed(1)}s linear infinite; animation-delay: ${delay.toFixed(1)}s; }`;
          }).join('\n')}
        `}
      </style>
    </Show>
  );
}


