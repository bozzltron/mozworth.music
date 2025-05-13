import { createEffect, For, JSX, Setter } from "solid-js";
import { useLocation } from "@solidjs/router";

interface Tab {
  label: string;
  content: JSX.Element;
}

interface TabbedContentProps {
  tabs: Tab[];
  defaultTab: string;
  tab: string;
  setTab: Setter<string>;
}

export default function TabbedContent(props: TabbedContentProps) {
  const location = useLocation();

  // Ensure the selected tab is always valid
  createEffect(() => {
    if (!props.tabs.some(t => t.label === props.tab)) {
      props.setTab(props.defaultTab);
    }
  });

  const activeTab = () => props.tabs.find(t => t.label === props.tab) || props.tabs[0];

  // Debug log
  console.log('TabbedContent props.tabs:', props.tabs.map(t => t.label), 'Current tab:', props.tab);
  console.log('activeTab:', activeTab());

  return (
    <>
      {/* Desktop: tab switching */}
      <div class="hidden sm:flex tabs gap-4 md:gap-8 mb-4 md:mb-6 mt-2 md:mt-4">
        <For each={props.tabs}>{t => (
          <button
            type="button"
            class={`tab text-lg pb-1 border-b-2 transition-colors ${props.tab === t.label ? "text-teal-400 border-teal-400" : "text-gray-400 border-transparent"}`}
            onClick={() => props.setTab(t.label)}
          >
            {t.label}
          </button>
        )}</For>
      </div>
      <section class="hidden sm:block tab-content mb-8">
        {activeTab().content}
      </section>
      {/* Mobile: show all tabs as sections with headings */}
      <div class="block sm:hidden w-full">
        <For each={props.tabs}>{t => (
          <div class="mb-8">
            <div class="tab-heading text-lg font-bold mb-2 mt-4 text-teal-400">{t.label}</div>
            <div>{t.content}</div>
          </div>
        )}</For>
      </div>
    </>
  );
} 