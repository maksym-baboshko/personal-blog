import { useMemo, useState } from 'react';

import { LS_THEME_KEY } from '@shared/constants/localStorage';
import { Theme, ThemeContext } from '@app/lib/context/ThemeContext';

import { Props } from './ThemeProvider.props';

const themeFromLS = localStorage.getItem(LS_THEME_KEY) as Theme;
const defaultTheme = themeFromLS || Theme.LIGHT;

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
