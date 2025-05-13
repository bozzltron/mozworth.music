import { createSignal, createEffect, For, JSX } from "solid-js";
import { useLocation } from "@solidjs/router";

interface Tab {
  label: string;
  content: JSX.Element;
}

interface TabbedContentProps {
  tabs: Tab[];
  defaultTab: string;
  key?: string;
}

export default function TabbedContent(props: TabbedContentProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = createSignal(
    props.tabs.find(t => t.label === props.defaultTab)?.label || props.tabs[0]?.label
  );

  // Remove all createEffects that try to sync or reset the tab
  // Always use currentTab() to fall back to the first tab if the current is invalid
  const currentTab = () => props.tabs.find(t => t.label === activeTab()) || props.tabs[0];

  // Debug log
  console.log('TabbedContent props.tabs:', props.tabs.map(t => t.label), 'Current tab:', activeTab());
  console.log('currentTab:', currentTab());
  console.log('[TabbedContent] MOUNT: props.tabs:', props.tabs.map(t => t.label), 'props.defaultTab:', props.defaultTab);
  const tabToRender = currentTab();
  console.log('[TabbedContent] tabToRender:', tabToRender);

  return (
    <>
      {/* Desktop: tab switching */}
      <div class="hidden sm:flex tabs gap-4 md:gap-8 mb-4 md:mb-6 mt-2 md:mt-4">
        <For each={props.tabs}>{t => (
          <button
            type="button"
            class={`tab text-lg pb-1 border-b-2 transition-colors ${activeTab() === t.label ? "text-teal-400 border-teal-400" : "text-gray-400 border-transparent"}`}
            onClick={() => setActiveTab(t.label)}
          >
            {t.label}
          </button>
        )}</For>
      </div>
      {/* Unified tab content: only one render, CSS controls visibility */}
      <For each={props.tabs}>{(t, i) => (
        <div
          class={`tab-panel mb-8 ${activeTab() === t.label ? 'sm:block' : 'sm:hidden'} block`}
          style={{ order: i() }}
        >
          {/* Tab heading for mobile only */}
          <div class="tab-heading text-lg font-bold mb-2 mt-4 text-teal-400 block sm:hidden">{t.label}</div>
          <div>{t.content}</div>
        </div>
      )}</For>
    </>
  );
} 