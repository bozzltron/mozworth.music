import { createSignal, Show } from "solid-js";

interface LeaveNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  songTitle: string;
}

export default function LeaveNoteModal(props: LeaveNoteModalProps) {
  const [copied, setCopied] = createSignal(false);

  const handleCopyEmail = async () => {
    const email = "mozworth@boz.mozmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
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
    
    window.location.href = `mailto:mozworth@boz.mozmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Show when={props.isOpen}>
      <div class="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={props.onClose}>
        <div class="bg-black/90 border border-teal-500/30 rounded-xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
          <div class="flex justify-between items-start mb-4">
            <h2 class="text-xl font-bold text-teal-400">Leave a Note</h2>
            <button 
              onClick={props.onClose}
              class="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
            >
              ×
            </button>
          </div>
          
          <div class="text-white space-y-4">
            <p>
              I love the idea that the meaning of art isn't fixed by the artist, but it emerges from the audiences collective response. 
              I'm curious to know your reponse to "{props.songTitle}" .
            </p>
            
            <p>
              Share your thoughts, feelings, what this song means to you, or just say hi. Your note could be featured on this page 
              (with your permission, of course).
            </p>

            <div class="bg-teal-900/20 border border-teal-500/30 rounded-lg p-4">
              <h3 class="font-semibold text-teal-300 mb-2">How to share your note:</h3>
              <div class="space-y-3">
                <button
                  onClick={handleMailto}
                  class="w-full px-4 py-2 rounded bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors"
                >
                  Open Email Client
                </button>
                
                <div class="text-center text-gray-400">or</div>
                
                                <button
                  onClick={handleCopyEmail}
                  class="w-full px-4 py-2 rounded bg-transparent text-white font-semibold border border-teal-500 hover:bg-teal-500/20 transition-colors"
                >
                  {copied() ? "Email Copied!" : "Copy Email Address"}
                </button>
              </div>
            </div>

            <div class="text-sm text-gray-400 bg-black/40 p-3 rounded border border-gray-600/30">
              <p class="font-semibold mb-1">Please include in your note:</p>
              <ul class="space-y-1 text-xs">
                <li>• Whether you'd like to be anonymous or attributed</li>
                <li>• If attributed: your name and optionally a link</li>
                <li>• Whether you're okay with your note being shared on this page</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
} 