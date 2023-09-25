import { useContext } from 'react';

import { LS_THEME_KEY } from '@shared/constants/localStorage';
import { Theme, ThemeContext } from '@app/lib/context/ThemeContext';

interface Result {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): Result => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(newTheme);
    localStorage.setItem(LS_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
