import { createSignal, createEffect } from "solid-js";
import Modal from "./Modal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global { interface Window { gtag?: (...args: any[]) => void } }

interface LeaveNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  songTitle: string;
}

export default function LeaveNoteModal(props: LeaveNoteModalProps) {
  const [copied, setCopied] = createSignal(false);

  createEffect((prevOpen = false) => {
    const nowOpen = props.isOpen;
    if (nowOpen && !prevOpen && window.gtag) {
      window.gtag("event", "leave_note_modal_open", {
        event_category: "engagement",
        event_label: "Leave a Note",
        song: props.songTitle,
      });
    }
    return nowOpen;
  });

  const handleCopyEmail = async () => {
    const email = "mozworth@mozworth.music";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(`Note about "${props.songTitle}"`);
    const body = encodeURIComponent(`Hi mozworth,

I wanted to share my thoughts about "${props.songTitle}":

[Your note here]

Please include in your note whether you'd like to be:
- Anonymous
- Attributed with your name only
- Attributed with your name and a link (website, social media, etc.)

Also let me know if you're okay with your note being shared on the song page.

Thanks!`);

    window.location.href = `mailto:mozworth@mozworth.music?subject=${subject}&body=${body}`;
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Leave a Note"
      titleId="leave-note-title"
      describedby="leave-note-desc"
      maxWidth="md"
    >
      <div id="leave-note-desc" class="space-y-4">
        <p class="text-gray-700">
          I love the idea that the meaning of art isn't fixed by the artist, but
          it emerges from the audience's collective response. I'm curious to know
          your response to "{props.songTitle}".
        </p>

        <p class="text-gray-700">
          Share your thoughts, feelings, what this song means to you, or just say
          hi. Your note could be featured on this page (with your permission, of
          course).
        </p>

        <div class="rounded-xl border border-teal-200 bg-teal-50/50 p-4">
          <h3 class="mb-3 font-semibold text-teal-700">How to share your note:</h3>
          <div class="space-y-3">
            <button
              onClick={handleMailto}
              class="w-full rounded-lg bg-teal-600 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              Open Email Client
            </button>

            <div class="text-center text-sm text-gray-500">or</div>

            <button
              onClick={handleCopyEmail}
              class="w-full rounded-lg border border-teal-500 bg-transparent px-4 py-2.5 font-semibold text-teal-700 transition-colors hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              {copied() ? "Email Copied!" : "Copy Email Address"}
            </button>
            <div aria-live="polite" aria-atomic="true" class="sr-only">
              {copied() ? "Email address copied to clipboard" : ""}
            </div>
          </div>
        </div>

        <div class="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600">
          <p class="mb-1 font-semibold">Please include in your note:</p>
          <ul class="space-y-1 text-xs">
            <li>• Whether you'd like to be anonymous or attributed</li>
            <li>• If attributed: your name and optionally a link</li>
            <li>• Whether you're okay with your note being shared on this page</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
