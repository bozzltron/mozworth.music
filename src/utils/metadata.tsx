import type { JSX } from "solid-js";

interface MetadataProps {
  // Required
  title: string;
  description: string;
  url: string;
  
  // Optional
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'music' | 'music.song' | 'music.album' | 'music.musician' | 'music.albums';
  keywords?: string;
  author?: string;
  modifiedDate?: string;
  publishDate?: string;
  
  // Music-specific
  isrc?: string;
  
  // Additional structured data
  structuredData?: Record<string, unknown>;
}

/**
 * StandardMetadata - Reusable metadata component for all pages
 * 
 * Includes: Title, Description, Open Graph, Twitter Card, and optional JSON-LD
 * Zero dependencies, fully type-safe
 */
export function StandardMetadata(props: MetadataProps): JSX.Element {
  const image = props.image || 'https://mozworth.music/mozworth-10-11-2025.webp';
  const imageAlt = props.imageAlt || 'mozworth';
  const type = props.type || 'website';
  
  return (
    <>
      {/* Basic Meta */}
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={props.description} />
      {props.keywords && <meta name="keywords" content={props.keywords} />}
      {props.author && <meta name="author" content={props.author} />}
      {props.modifiedDate && <meta name="last-modified" content={props.modifiedDate} />}
      <link rel="canonical" href={props.url} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content="mozworth" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={props.url} />
      {type.startsWith('music') && <meta property="music:musician" content="https://mozworth.music" />}
      {props.isrc && <meta property="music:isrc" content={props.isrc} />}
      {props.publishDate && type.startsWith('music') && <meta property="music:release_date" content={props.publishDate} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mozworthmusic" />
      <meta name="twitter:creator" content="@mozworthmusic" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Structured Data (JSON-LD) */}
      {props.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(props.structuredData).replace(/</g, '\\u003c')}
        </script>
      )}
      
      {/* Apple Mobile Web App */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </>
  );
}

/**
 * Helper to generate band member structured data
 */
export function createBandMembers() {
  return [
    {
      "@type": "Person",
      "name": "Michael Bosworth",
      "roleName": "Vocals, Guitar"
    },
    {
      "@type": "Person",
      "name": "Mark Heaps",
      "roleName": "Guitar"
    },
    {
      "@type": "Person",
      "name": "Jack Schultz",
      "roleName": "Bass"
    },
    {
      "@type": "Person",
      "name": "Mike Hall",
      "roleName": "Drums"
    }
  ];
}

/**
 * Helper to generate standard artist social links
 */
export function createSocialLinks() {
  return [
    "https://open.spotify.com/artist/19yvsMNCISApooxkEt0aMO",
    "https://music.apple.com/us/artist/mozworth/1761894108",
    "https://mozworth.bandcamp.com",
    "https://www.youtube.com/@mozworthmusic",
    "https://soundcloud.com/mozworth",
    "https://www.instagram.com/mozworthmusic/",
    "https://www.tiktok.com/@mozworthmusic",
    "https://bsky.app/profile/mozworth.music",
    "https://www.facebook.com/mozworth"
  ];
}

/**
 * Helper to generate MusicGroup structured data
 */
export function createMusicGroupData(additionalProps?: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "mozworth",
    "url": "https://mozworth.music",
    "image": "https://mozworth.music/mozworth-10-11-2025.webp",
    "description": "Austin-based indie alternative rock artist",
    "genre": ["Indie Rock", "Alternative Rock"],
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "addressCountry": "US"
      }
    },
    "sameAs": createSocialLinks(),
    "member": createBandMembers(),
    ...additionalProps
  };
}

/**
 * Helper to generate MusicRecording structured data
 */
export function createMusicRecordingData(props: {
  name: string;
  albumName: string;
  image: string;
  datePublished: string;
  url: string;
  isrc?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    "name": props.name,
    "byArtist": {
      "@type": "MusicGroup",
      "name": "mozworth"
    },
    "inAlbum": {
      "@type": "MusicAlbum",
      "name": props.albumName
    },
    "image": props.image,
    "datePublished": props.datePublished,
    "url": props.url,
    ...(props.isrc && { "isrcCode": props.isrc })
  };
}

