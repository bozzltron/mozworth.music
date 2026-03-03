/**
 * Artist profile / follow links for mozworth.
 * All links go to the artist profile page on each service (not song-specific).
 * Used by FollowButton component.
 */

export interface FollowLink {
  href: string;
  label: string;
  iconSrc: string;
  ariaLabel: string;
}

/** Streaming platforms - artist profile pages for following */
const streaming: FollowLink[] = [
  { href: "https://open.spotify.com/artist/19yvsMNCISApooxkEt0aMO", label: "Spotify", iconSrc: "/spotify.svg", ariaLabel: "Follow mozworth on Spotify" },
  { href: "https://music.apple.com/us/artist/mozworth/1761894108", label: "Apple Music", iconSrc: "/apple-music.svg", ariaLabel: "Follow mozworth on Apple Music" },
  { href: "https://mozworth.bandcamp.com", label: "Bandcamp", iconSrc: "/bandcamp.svg", ariaLabel: "Follow mozworth on Bandcamp" },
  { href: "https://soundcloud.com/mozworth", label: "SoundCloud", iconSrc: "/soundcloud.svg", ariaLabel: "Follow mozworth on SoundCloud" },
  { href: "https://tidal.com/browse/artist/49656537", label: "Tidal", iconSrc: "/tidal.svg", ariaLabel: "Follow mozworth on Tidal" },
  { href: "https://music.amazon.com/artists/B0DCMD1NQ7/mozworth", label: "Amazon Music", iconSrc: "/amazon-music.svg", ariaLabel: "Follow mozworth on Amazon Music" },
  { href: "https://www.deezer.com/us/artist/277222071", label: "Deezer", iconSrc: "/deezer.svg", ariaLabel: "Follow mozworth on Deezer" },
  { href: "https://www.pandora.com/artist/mozworth/AR5hqjlxV7wvwdg", label: "Pandora", iconSrc: "/pandora.svg", ariaLabel: "Follow mozworth on Pandora" },
  { href: "https://www.youtube.com/@mozworthmusic", label: "YouTube", iconSrc: "/youtube.svg", ariaLabel: "Subscribe to mozworth on YouTube" },
];

/** Social platforms - artist profile pages */
const social: FollowLink[] = [
  { href: "https://www.instagram.com/mozworthmusic/", label: "Instagram", iconSrc: "/instagram.svg", ariaLabel: "Follow mozworth on Instagram" },
  { href: "https://www.tiktok.com/@mozworthmusic", label: "TikTok", iconSrc: "/tiktok.svg", ariaLabel: "Follow mozworth on TikTok" },
  { href: "https://bsky.app/profile/mozworth.music", label: "Bluesky", iconSrc: "/bluesky.svg", ariaLabel: "Follow mozworth on Bluesky" },
  { href: "https://www.threads.net/@mozworthmusic", label: "Threads", iconSrc: "/threads.svg", ariaLabel: "Follow mozworth on Threads" },
  { href: "https://www.facebook.com/mozworth", label: "Facebook", iconSrc: "/facebook.svg", ariaLabel: "Follow mozworth on Facebook" },
  { href: "https://www.bandsintown.com/a/15561057-mozworth", label: "Bandsintown", iconSrc: "/bandsintown.svg", ariaLabel: "Follow mozworth on Bandsintown for tour updates" },
  { href: "https://www.reddit.com/user/mozworth", label: "Reddit", iconSrc: "/reddit.svg", ariaLabel: "Follow mozworth on Reddit" },
];

/** Newsletter signup - Beehiiv */
const newsletter: FollowLink[] = [
  {
    href: "https://mozworth.beehiiv.com/subscribe",
    label: "Newsletter",
    iconSrc: "/email.svg",
    ariaLabel: "Subscribe to mozworth newsletter",
  },
];

export const followLinks = {
  streaming,
  social,
  newsletter,
};

export const allFollowLinks = [...streaming, ...social, ...newsletter];
