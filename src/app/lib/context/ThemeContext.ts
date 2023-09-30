import { createContext } from 'react'

import { AppTheme } from '@shared/constants/appTheme'

export interface ThemeContextProps {
  theme: AppTheme
  setTheme: (theme: AppTheme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: AppTheme.LIGHT,
  setTheme: () => {}
})
