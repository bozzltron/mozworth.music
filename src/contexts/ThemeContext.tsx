import { createContext, useContext, createSignal, onMount, onCleanup, type ParentProps } from "solid-js";

const THEME_KEY = "mozworth-theme";
export type Theme = "dark" | "light";

type ThemeContextType = {
  theme: () => Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider(props: ParentProps) {
  const [theme, setThemeSignal] = createSignal<Theme>("dark");

  const setTheme = (t: Theme) => {
    setThemeSignal(t);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", t);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", t === "light" ? "#fafafa" : "#000000");
    }
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(THEME_KEY, t);
    }
  };

  const toggleTheme = () => {
    setTheme(theme() === "dark" ? "light" : "dark");
  };

  onMount(() => {
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    const initial = (stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia?.("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark") as Theme;
    setThemeSignal(initial);
    document.documentElement.setAttribute("data-theme", initial);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", initial === "light" ? "#fafafa" : "#000000");
    if (stored !== "light" && stored !== "dark") {
      const mq = window.matchMedia?.("(prefers-color-scheme: light)");
      const handleChange = () => {
        if (localStorage.getItem(THEME_KEY)) return;
        const next = mq.matches ? "light" : "dark";
        setThemeSignal(next);
        document.documentElement.setAttribute("data-theme", next);
        const metaEl = document.querySelector('meta[name="theme-color"]');
        if (metaEl) metaEl.setAttribute("content", next === "light" ? "#fafafa" : "#000000");
      };
      mq?.addEventListener?.("change", handleChange);
      onCleanup(() => mq?.removeEventListener?.("change", handleChange));
    }
  });

  const value: ThemeContextType = {
    theme: theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
