import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'winter',
  toggleTheme: () => console.error('no theme provider')
} as IThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>('winter');

  const toggleTheme = useCallback(() => {
    const updatedTheme = theme === 'winter' ? 'night' : 'winter';
    setTheme(updatedTheme);
    window.localStorage.setItem('theme', updatedTheme);
  }, [theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const providerValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext<IThemeContext>(ThemeContext);
