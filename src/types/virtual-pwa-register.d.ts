export function registerSW(options?: {
  immediate?: boolean;
  onNeedRefresh?: () => void;
  onOfflineReady?: () => void;
}): ((reloadPage?: boolean) => Promise<void>) | undefined;
