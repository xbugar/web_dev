import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'auto' | undefined;

export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>(undefined);

  // Helper to determine if dark mode should be active
  const isDarkMode = (t: Theme): boolean => {
    if (t === 'dark') return true;
    if (t === 'light') return false;
    // auto or undefined
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme;
    const finalTheme: Theme =
      stored === 'dark' || stored === 'light' || stored === 'auto' ? stored : undefined;

    setThemeState(finalTheme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (newTheme) {
      localStorage.setItem('theme', newTheme);
    } else {
      localStorage.removeItem('theme');
    }
    document.documentElement.classList.toggle('dark', isDarkMode(newTheme));
  };

  return [theme, setTheme];
}
