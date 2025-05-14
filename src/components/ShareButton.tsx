import { createSignal } from "solid-js";

interface ShareButtonProps {
  url: string;
  title: string;
  text?: string;
}

export default function ShareButton(props: ShareButtonProps) {
  const [copied, setCopied] = createSignal(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: props.title,
          text: props.text,
          url: props.url,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      try {
        await navigator.clipboard.writeText(props.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        alert("Could not copy link to clipboard");
      }
    }
  };

  return (
    <button
      class="inline-block px-5 py-2 rounded bg-transparent text-white font-semibold border border-white shadow-sm hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full mt-2 text-left"
      type="button"
      onClick={handleShare}
      aria-label="Share"
    >
      {copied() ? "Link copied!" : "Share"}
    </button>
  );
} 