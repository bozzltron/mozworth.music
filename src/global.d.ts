/// <reference types="@solidjs/start/env" />

// Unified gtag declaration — single source of truth for analytics
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export {};
