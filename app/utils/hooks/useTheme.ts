/*
 * "Implementing Dark Mode In React Apps Using styled-components"
 * by Blessing Krofegha (https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/)
 */
import { useEffect, useState } from 'react';
import { ThemeMode } from  '../themes';

export const getTheme = (): ThemeMode => {
  return window.localStorage.getItem('theme') as ThemeMode;
};

export const useTheme = (): {theme: ThemeMode, toggleTheme: () => void, isMounted: boolean} => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const setMode = (mode: ThemeMode): void => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = (): void => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme: ThemeMode = window.localStorage.getItem('theme') as ThemeMode;
    localTheme && setTheme(localTheme);
    setIsMounted(true);
  }, []);

  return { theme, toggleTheme, isMounted };
};
