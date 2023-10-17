import { createContext } from 'react'

import { AppTheme } from '@shared/constants/theme'

interface ThemeContextProps {
  theme: AppTheme
  setTheme: (theme: AppTheme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: AppTheme.LIGHT,
  setTheme: () => {}
})
