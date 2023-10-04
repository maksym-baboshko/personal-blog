import { useMemo, useState } from 'react'

import { AppTheme } from '@shared/constants/appTheme'
import { ThemeContext } from '@app/lib/context/ThemeContext'
import { LS_THEME_KEY } from '@shared/constants/localStorage'

import { type ThemeProviderFC } from './ThemeProvider.types'

const themeFromLS = localStorage.getItem(LS_THEME_KEY) as AppTheme

export const ThemeProvider: ThemeProviderFC = ({ children, initialTheme }) => {
  const defaultTheme = themeFromLS ?? initialTheme ?? AppTheme.DARK
  const [theme, setTheme] = useState<AppTheme>(defaultTheme)

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
