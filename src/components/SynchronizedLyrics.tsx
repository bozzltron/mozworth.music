import { createSignal, onMount, onCleanup, createEffect } from "solid-js";

interface LyricLine {
  time: number; // Time in seconds
  text: string;
  duration?: number; // Optional duration for word-level sync
}

interface SynchronizedLyricsProps {
  lrcData: string; // LRC format lyrics
  audioElement?: HTMLAudioElement | null;
  width?: number;
  height?: number;
  className?: string;
  style?: Record<string, string>;
  theme?: {
    backgroundColor?: string;
    currentLineColor?: string;
    nextLineColor?: string;
    previousLineColor?: string;
    fontFamily?: string;
    fontSize?: number;
    lineHeight?: number;
    shadowColor?: string;
    highlightColor?: string;
  };
  animationStyle?: 'fade' | 'slide' | 'highlight' | 'typewriter' | 'glow';
}

export default function SynchronizedLyrics(props: SynchronizedLyricsProps) {
  const [canvas, setCanvas] = createSignal<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = createSignal<CanvasRenderingContext2D | null>(null);
  const [lyrics, setLyrics] = createSignal<LyricLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = createSignal(-1);
  const [animationFrame, setAnimationFrame] = createSignal<number | null>(null);
  const [isPlaying, setIsPlaying] = createSignal(false);

  // Default theme
  const theme = () => ({
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    currentLineColor: '#14b8a6', // Teal
    nextLineColor: '#9ca3af', // Gray-400
    previousLineColor: '#6b7280', // Gray-500
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 24,
    lineHeight: 1.6,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    highlightColor: '#fbbf24', // Yellow-400
    ...props.theme
  });

  // Parse LRC format lyrics
  const parseLRC = (lrcContent: string): LyricLine[] => {
    const lines = lrcContent.split('\n');
    const parsedLines: LyricLine[] = [];
    
    for (const line of lines) {
      const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2})\](.*)/);
      if (match) {
        const minutes = parseInt(match[1]);
        const seconds = parseInt(match[2]);
        const centiseconds = parseInt(match[3]);
        const text = match[4].trim();
        
        if (text) { // Only add non-empty lines
          parsedLines.push({
            time: minutes * 60 + seconds + centiseconds / 100,
            text
          });
        }
      }
    }
    
    return parsedLines.sort((a, b) => a.time - b.time);
  };

  // Initialize canvas and parse lyrics
  onMount(() => {
    const canvasEl = canvas();
    if (!canvasEl) return;

    const context = canvasEl.getContext('2d');
    if (!context) return;

    setCtx(context);
    
    // Parse LRC data
    const parsedLyrics = parseLRC(props.lrcData);
    setLyrics(parsedLyrics);

    // Set up canvas properties
    const dpr = window.devicePixelRatio || 1;
    const rect = canvasEl.getBoundingClientRect();
    
    canvasEl.width = (props.width || rect.width) * dpr;
    canvasEl.height = (props.height || rect.height) * dpr;
    
    context.scale(dpr, dpr);
    canvasEl.style.width = `${props.width || rect.width}px`;
    canvasEl.style.height = `${props.height || rect.height}px`;

    // Start animation loop
    startAnimation();
  });

  // Audio event listeners
  createEffect(() => {
    const audio = props.audioElement;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleSeeked = () => updateCurrentLine();

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('seeked', handleSeeked);

    onCleanup(() => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('seeked', handleSeeked);
    });
  });

  // Update current line based on audio time
  const updateCurrentLine = () => {
    const audio = props.audioElement;
    if (!audio) return;

    const currentTime = audio.currentTime;
    const lyricsData = lyrics();
    
    let newIndex = -1;
    for (let i = 0; i < lyricsData.length; i++) {
      if (currentTime >= lyricsData[i].time) {
        newIndex = i;
      } else {
        break;
      }
    }
    
    setCurrentLineIndex(newIndex);
  };

  // Animation loop
  const startAnimation = () => {
    const animate = () => {
      if (isPlaying()) {
        updateCurrentLine();
      }
      
      drawLyrics();
      
      const frameId = requestAnimationFrame(animate);
      setAnimationFrame(frameId);
    };
    
    animate();
  };

  // Main drawing function
  const drawLyrics = () => {
    const context = ctx();
    const canvasEl = canvas();
    if (!context || !canvasEl) return;

    const t = theme();
    const lyricsData = lyrics();
    const currentIndex = currentLineIndex();
    
    // Clear canvas
    context.fillStyle = t.backgroundColor;
    context.fillRect(0, 0, canvasEl.width, canvasEl.height);
    
    if (lyricsData.length === 0) return;

    // Set font properties
    context.font = `${t.fontSize}px ${t.fontFamily}`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    
    const centerX = canvasEl.width / 2;
    const centerY = canvasEl.height / 2;
    const lineHeight = t.fontSize * t.lineHeight;
    
    // Calculate visible lines (show current + 2 before + 2 after)
    const visibleLines = 5;
    const startIndex = Math.max(0, currentIndex - 2);
    const endIndex = Math.min(lyricsData.length, startIndex + visibleLines);
    
    // Draw lyrics
    for (let i = startIndex; i < endIndex; i++) {
      const line = lyricsData[i];
      const relativeIndex = i - currentIndex;
      const y = centerY + relativeIndex * lineHeight;
      
      // Skip lines outside canvas
      if (y < -lineHeight || y > canvasEl.height + lineHeight) continue;
      
      // Determine color and effects based on line position
      let color = t.nextLineColor;
      let alpha = 0.6;
      let scale = 0.9;
      
      if (i === currentIndex) {
        color = t.currentLineColor;
        alpha = 1.0;
        scale = 1.1;
        
        // Add animation effects for current line
        if (props.animationStyle === 'glow') {
          drawGlowEffect(context, line.text, centerX, y, t);
        }
      } else if (i < currentIndex) {
        color = t.previousLineColor;
        alpha = 0.4;
        scale = 0.8;
      }
      
      // Apply animation transforms
      context.save();
      context.translate(centerX, y);
      context.scale(scale, scale);
      context.globalAlpha = alpha;
      
      // Draw text shadow
      if (t.shadowColor) {
        context.fillStyle = t.shadowColor;
        context.fillText(line.text, 2, 2);
      }
      
      // Draw main text
      context.fillStyle = color;
      context.fillText(line.text, 0, 0);
      
      // Apply specific animation styles
      if (i === currentIndex) {
        applyAnimationStyle(context, line.text, props.animationStyle || 'fade');
      }
      
      context.restore();
    }
  };

  // Glow effect for current line
  const drawGlowEffect = (context: CanvasRenderingContext2D, text: string, x: number, y: number, t: any) => {
    const time = Date.now() * 0.005;
    const glowIntensity = (Math.sin(time) + 1) * 0.5; // Pulsing glow
    
    context.save();
    context.shadowColor = t.highlightColor;
    context.shadowBlur = 10 + glowIntensity * 10;
    context.fillStyle = t.currentLineColor;
    context.fillText(text, x, y);
    context.restore();
  };

  // Apply different animation styles
  const applyAnimationStyle = (context: CanvasRenderingContext2D, text: string, style: string) => {
    switch (style) {
      case 'highlight':
        // Add underline or background highlight
        const metrics = context.measureText(text);
        context.fillStyle = theme().highlightColor;
        context.globalAlpha = 0.3;
        context.fillRect(-metrics.width / 2, 10, metrics.width, 4);
        break;
      
      case 'typewriter':
        // Could implement character-by-character reveal
        // This would require more complex timing logic
        break;
      
      case 'slide':
        // Slide animation could be implemented with position interpolation
        break;
    }
  };

  // Cleanup
  onCleanup(() => {
    const frameId = animationFrame();
    if (frameId) {
      cancelAnimationFrame(frameId);
    }
  });

  return (
    <canvas
      ref={setCanvas}
      width={props.width || 800}
      height={props.height || 400}
      class={`synchronized-lyrics ${props.className || ''}`}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        backgroundColor: theme().backgroundColor,
        ...props.style
      }}
    />
  );
}
