import { createSignal, For, JSX, onMount, onCleanup } from "solid-js";

interface Tab {
  label: string;
  content: JSX.Element;
}

interface TabbedContentProps {
  tabs: Tab[];
  defaultTab: string;
  key?: string;
  inactiveTabColor?: string; // optional text color for inactive tabs
  activeTabColor?: string; // optional text color for active tabs
}

// Convert tab label to URL-friendly slug
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
    .trim();
}

// Find tab by slug or label
function findTabBySlug(tabs: Tab[], slug: string): Tab | undefined {
  return tabs.find(t => slugify(t.label) === slug) || tabs.find(t => t.label.toLowerCase() === slug);
}

export default function TabbedContent(props: TabbedContentProps) {
  // Initialize with default tab (will be updated in onMount if hash exists)
  const getDefaultTab = () => {
    return props.tabs.find(t => t.label === props.defaultTab)?.label || props.tabs[0]?.label;
  };

  const [activeTab, setActiveTab] = createSignal(getDefaultTab());

  // Sync activeTab with hash - let browser handle hash navigation naturally
  const syncTabFromHash = () => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.slice(1);
    if (hash) {
      const matchedTab = findTabBySlug(props.tabs, hash);
      if (matchedTab) {
        setActiveTab(matchedTab.label);
        return;
      }
    }
    // If no hash or no match, use default
    setActiveTab(getDefaultTab());
  };

  // Handle tab click - update state immediately, browser handles hash via anchor
  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };

  // Handle initial load and browser back/forward navigation
  onMount(() => {
    if (typeof window === 'undefined') return;

    // Check hash on mount (handles hard refresh with hash)
    syncTabFromHash();

    // Listen for hash changes (browser back/forward, direct URL navigation)
    const handleHashChange = () => {
      syncTabFromHash();
    };

    window.addEventListener('hashchange', handleHashChange);
    
    onCleanup(() => {
      window.removeEventListener('hashchange', handleHashChange);
    });
  });


  // Keyboard navigation for accessibility (ARIA best practices)
  const handleKeyDown = (e: KeyboardEvent, currentIndex: number) => {
    const tabs = props.tabs;
    let newIndex = currentIndex;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        e.preventDefault();
        newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = tabs.length - 1;
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        // Activate tab - click the anchor to trigger hash navigation
        const tab = tabs[currentIndex];
        const slug = slugify(tab.label);
        const tabElement = document.querySelector(`[href="#${slug}"]`) as HTMLAnchorElement;
        tabElement?.click();
        return;
      default:
        return; // Let other keys work normally
    }

    // Focus the new tab
    const newTabSlug = slugify(tabs[newIndex].label);
    const newTabElement = document.querySelector(`[href="#${newTabSlug}"]`) as HTMLElement;
    newTabElement?.focus();
  };

  return (
    <>
      {/* Desktop: tab switching with ARIA */}
      <div 
        role="tablist" 
        aria-label="Song content sections"
        class="hidden sm:flex tabs gap-4 md:gap-8 mb-4 md:mb-6 mt-2 md:mt-4"
      >
        <For each={props.tabs}>{(t, i) => {
          const isActive = () => activeTab() === t.label;
          const activeColor = props.activeTabColor || "text-teal-400";
          const inactiveColor = props.inactiveTabColor || "text-gray-400";
          const slug = slugify(t.label);
          const tabId = `tab-${slug}`;
          const panelId = `panel-${slug}`;
          const borderColor = isActive() ? activeColor.replace("text-", "border-") : "border-transparent";
          
          return (
            <a
              id={tabId}
              href={`#${slug}`}
              role="tab"
              aria-selected={isActive()}
              aria-controls={panelId}
              tabIndex={isActive() ? 0 : -1}
              class={`tab text-lg pb-1 border-b-2 transition-colors ${isActive() ? `${activeColor} ${borderColor}` : `${inactiveColor} border-transparent`}`}
              onClick={() => handleTabClick(t.label)}
              onKeyDown={(e) => handleKeyDown(e, i())}
            >
              {t.label}
            </a>
          );
        }}</For>
      </div>
      
      {/* Mobile: sticky tab navigation bar with ARIA */}
      <div 
        role="tablist" 
        aria-label="Song content sections"
        class="mobile-tab-nav sm:hidden sticky top-0 z-40 backdrop-blur-sm border-b border-white/10 mb-4 -mx-4 px-4 pb-2 pt-2"
      >
        <div class="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          <For each={props.tabs}>{(t, i) => {
            const isActive = () => activeTab() === t.label;
            const activeColor = props.activeTabColor || "text-teal-400";
            const inactiveColor = props.inactiveTabColor || "text-gray-400";
            const slug = slugify(t.label);
            const tabId = `tab-mobile-${slug}`;
            const panelId = `panel-${slug}`;
            const borderColor = isActive() ? activeColor.replace("text-", "border-") : "border-transparent";
            
            return (
              <a
                id={tabId}
                href={`#${slug}`}
                role="tab"
                aria-selected={isActive()}
                aria-controls={panelId}
                tabIndex={isActive() ? 0 : -1}
                class={`mobile-tab-btn px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors border-2 ${
                  isActive() 
                    ? `${activeColor} ${borderColor}` 
                    : `${inactiveColor} border-transparent`
                }`}
                onClick={() => handleTabClick(t.label)}
                onKeyDown={(e) => handleKeyDown(e, i())}
              >
                {t.label}
              </a>
            );
          }}</For>
        </div>
      </div>
      
      {/* Unified tab content: only one render, CSS controls visibility */}
      <For each={props.tabs}>{(t, i) => {
        const isActive = () => activeTab() === t.label;
        const slug = slugify(t.label);
        const panelId = `panel-${slug}`;
        const tabId = typeof window !== 'undefined' && window.innerWidth >= 640 
          ? `tab-${slug}` 
          : `tab-mobile-${slug}`;
        
        return (
          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            aria-hidden={!isActive()}
            class={`tab-panel mb-8 ${isActive() ? 'sm:block' : 'sm:hidden'} block`}
            style={{ order: i() }}
            data-tab={slug}
          >
            {/* Tab heading for mobile only - this is the ID anchor at top of section */}
            <h2 
              id={slug}
              class={`tab-heading text-lg font-bold mb-2 mt-4 ${props.activeTabColor || "text-teal-400"} block sm:hidden scroll-mt-20`}
            >
              {t.label}
            </h2>
            <div>{t.content}</div>
          </div>
        );
      }}</For>
      
      <style>{`
        /* Hide scrollbar for mobile tab nav */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Scroll margin for hash navigation - accounts for sticky nav */
        .scroll-mt-20 {
          scroll-margin-top: 4.5rem;
        }
        
        /* Ensure smooth scrolling works with hash links */
        :target {
          scroll-margin-top: 4.5rem;
        }
        
        /* Sticky nav backdrop blur */
        .mobile-tab-nav {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </>
  );
} 