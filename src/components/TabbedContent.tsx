import { createSignal, For, JSX, onMount, onCleanup, createEffect } from "solid-js";

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
  const [isInitialized, setIsInitialized] = createSignal(false);

  // Handle initial load and browser back/forward navigation
  onMount(() => {
    if (typeof window === 'undefined') return;

    // Check hash on mount (handles hard refresh with hash)
    const hash = window.location.hash.slice(1);
    if (hash) {
      const matchedTab = findTabBySlug(props.tabs, hash);
      if (matchedTab) {
        setActiveTab(matchedTab.label);
      }
    }
    setIsInitialized(true);

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const matchedTab = findTabBySlug(props.tabs, hash);
        if (matchedTab) {
          setActiveTab(matchedTab.label);
        }
      } else {
        // If hash is removed, go back to default
        setActiveTab(getDefaultTab());
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    onCleanup(() => {
      window.removeEventListener('hashchange', handleHashChange);
    });
  });

  // Update hash when active tab changes (but only after initialization)
  createEffect(() => {
    const tab = activeTab();
    if (typeof window !== 'undefined' && tab && isInitialized()) {
      const slug = slugify(tab);
      const newHash = `#${slug}`;
      
      // Only update if different to avoid unnecessary history entries
      if (window.location.hash !== newHash) {
        history.replaceState(null, '', newHash);
      }
    }
  });

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    
    // Smooth scroll to top of content on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      const tabPanel = document.querySelector(`[data-tab="${slugify(label)}"]`);
      if (tabPanel) {
        tabPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Desktop: tab switching */}
      <div class="hidden sm:flex tabs gap-4 md:gap-8 mb-4 md:mb-6 mt-2 md:mt-4">
        <For each={props.tabs}>{t => {
          const activeColor = props.activeTabColor || "text-teal-400";
          const inactiveColor = props.inactiveTabColor || "text-gray-400";
          const borderColor = activeTab() === t.label ? activeColor.replace("text-", "border-") : "border-transparent";
          return (
            <button
              type="button"
              class={`tab text-lg pb-1 border-b-2 transition-colors ${activeTab() === t.label ? `${activeColor} ${borderColor}` : `${inactiveColor} border-transparent`}`}
              onClick={() => handleTabClick(t.label)}
            >
              {t.label}
            </button>
          );
        }}</For>
      </div>
      {/* Unified tab content: only one render, CSS controls visibility */}
      <For each={props.tabs}>{(t, i) => (
        <div
          class={`tab-panel mb-8 ${activeTab() === t.label ? 'sm:block' : 'sm:hidden'} block`}
          style={{ order: i() }}
          data-tab={slugify(t.label)}
        >
          {/* Tab heading for mobile only */}
          <div class={`tab-heading text-lg font-bold mb-2 mt-4 ${props.activeTabColor || "text-teal-400"} block sm:hidden`}>{t.label}</div>
          <div>{t.content}</div>
        </div>
      )}</For>
    </>
  );
} 