import { createSignal, For, onMount } from "solid-js";
import { Session } from "@inrupt/solid-client-authn-browser";
import {
  saveFileInContainer,
  getPodUrlAll
} from "@inrupt/solid-client";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";

const INDEX_POD = import.meta.env.VITE_COMMENTS_INDEX_POD;

export default function SongComments(props: { contentId: string }) {
  const [session, setSession] = createSignal<Session | null>(null);
  const [webId, setWebId] = createSignal<string | null>(null);
  const [comment, setComment] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);
  const [comments, setComments] = createSignal<any[]>([]);
  const [mounted, setMounted] = createSignal(false);

  // On mount, restore session if possible
  if (typeof window !== "undefined") {
    import("@inrupt/solid-client-authn-browser").then(({ getDefaultSession, handleIncomingRedirect }) => {
      handleIncomingRedirect({ restorePreviousSession: true }).then(() => {
        const s = getDefaultSession();
        setSession(s);
        setWebId(s.info.webId || null);
        // Clean up ?code=...&state=... from the URL after login
        if (window.location.search.includes("code=")) {
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      });
    });
  }
  onMount(() => {
    setMounted(true);
    fetchComments();
  });

  // Fetch comments: fetch index file, then fetch each comment file
  const fetchComments = async () => {
    setLoading(true);
    setError(null);
    if (!INDEX_POD) {
      setError("No designated pod configured.");
      setComments([]);
      setLoading(false);
      return;
    }
    try {
      // 1. Fetch the index file (JSON array of comment URLs)
      const res = await fetch(INDEX_POD);
      if (res.status === 404) {
        setComments([]);
        setLoading(false);
        return;
      }
      if (!res.ok) throw new Error("Failed to fetch index file");
      const index = await res.json();
      if (!Array.isArray(index)) throw new Error("Index file is not an array");
      // 2. Fetch each comment file
      const commentObjs = await Promise.all(index.map(async (url: string) => {
        try {
          const r = await fetch(url);
          if (!r.ok) return null;
          const data = await r.json();
          return { ...data, url };
        } catch {
          return null;
        }
      }));
      setComments(commentObjs.filter(Boolean));
    } catch (e: any) {
      setError(e.message || "Failed to fetch comments");
      setComments([]);
    }
    setLoading(false);
  };

  // Post comment to Solid pod and update index
  const postSolid = async () => {
    setLoading(true);
    setError(null);
    try {
      const s = getDefaultSession();
      if (!s.info.isLoggedIn || !webId()) throw new Error("Not logged in");
      // 1. Get user's pod root
      const podUrls = await getPodUrlAll(webId()!, { fetch: s.fetch });
      if (!podUrls.length) throw new Error("No pod found for user");
      const podRoot = podUrls[0];
      // 2. Save comment file in user's pod
      const commentsFolder = podRoot + "public/mozworth-comments/";
      const timestamp = Date.now();
      const commentFileName = `${props.contentId}-${timestamp}.json`;
      const commentUrl = commentsFolder + commentFileName;
      const commentData = {
        text: comment(),
        date: new Date().toISOString(),
        author: webId(),
        contentId: props.contentId
      };
      // Ensure folder exists by trying to save file
      const file = new File([JSON.stringify(commentData, null, 2)], commentFileName, { type: "application/json" });
      await saveFileInContainer(commentsFolder, file, { slug: commentFileName, contentType: "application/json", fetch: s.fetch });
      // 3. Update index file in designated pod
      // Fetch index
      let indexArr: string[] = [];
      try {
        const res = await fetch(INDEX_POD);
        if (res.ok) indexArr = await res.json();
      } catch {}
      if (!Array.isArray(indexArr)) indexArr = [];
      indexArr.push(commentUrl);
      // Save updated index
      await fetch(INDEX_POD, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(indexArr, null, 2),
        credentials: "include"
      });
      setComment("");
      await fetchComments();
    } catch (e: any) {
      setError(e.message || "Failed to post comment to Solid pod.");
    }
    setLoading(false);
  };

  // Login handler (always use solidcommunity.net)
  const login = async () => {
    const session = getDefaultSession();
    session.login({
      oidcIssuer: "https://solidcommunity.net",
      redirectUrl: window.location.href,
      clientName: "mozworth.music"
    });
  };

  // Logout handler
  const logout = async () => {
    const session = getDefaultSession();
    await session.logout();
    setSession(null);
    setWebId(null);
  };

  return (
    <>
      <div class="bg-black/30 rounded-xl p-6 mb-6">
        <h3 class="text-xl font-bold mb-2 text-teal-400">Comments</h3>
        {mounted() && (
          <>
            {webId() ? (
              <div class="mb-4">
                <div class="mb-2 text-green-300">Logged in as <span class="font-mono">{webId()}</span></div>
                <button class="px-4 py-2 rounded bg-teal-500 text-white font-semibold hover:bg-teal-400 transition mr-2" onClick={logout}>Log out</button>
              </div>
            ) : (
              <div class="mb-4">
                <button class="px-4 py-2 rounded bg-teal-500 text-white font-semibold hover:bg-teal-400 transition mr-2" onClick={login}>Log in with Solid Pod</button>
              </div>
            )}
            {webId() && (
              <div class="mb-4">
                <textarea
                  class="w-full rounded bg-black/60 text-white p-2 mb-2 border border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  rows={3}
                  placeholder="Write a comment..."
                  value={comment()}
                  onInput={e => setComment(e.currentTarget.value)}
                  disabled={loading()}
                />
                <div class="flex gap-2">
                  <button
                    class="px-4 py-2 rounded bg-teal-500 text-white font-semibold hover:bg-teal-400 transition disabled:opacity-50"
                    onClick={postSolid}
                    disabled={loading() || !comment().trim()}
                  >
                    Post (Solid Pod)
                  </button>
                </div>
                {error() && <div class="text-red-400 mt-2">{error()}</div>}
              </div>
            )}
            <div class="mb-4">
              <h4 class="text-lg font-semibold mb-2 text-teal-300">All Comments</h4>
              {loading() && <div class="text-gray-400">Loading comments...</div>}
              {!loading() && comments().length === 0 && <div class="text-gray-500">No comments yet. Be the first!</div>}
              <For each={comments()}>{c => (
                <div class="mb-3 p-3 rounded bg-black/40 border border-teal-900/30">
                  <div class="text-sm text-gray-300 mb-1">{c.author} <span class="text-gray-500">{new Date(c.date).toLocaleString()}</span></div>
                  <div class="text-white whitespace-pre-line">{c.text}</div>
                </div>
              )}</For>
            </div>
          </>
        )}
        <div class="text-xs text-gray-400">
          <a href="https://solidproject.org/about" target="_blank" rel="noopener" class="underline hover:text-teal-300">Learn more about Solid</a>
        </div>
      </div>
    </>
  );
} 