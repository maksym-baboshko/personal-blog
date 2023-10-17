import { useEffect, useMemo, useState } from 'react'

import { ThemeContext } from '@shared/context'
import { AppTheme } from '@shared/constants/theme'
import { LS_THEME_KEY } from '@shared/constants/localStorage'

import { type ThemeProviderFC } from './ThemeProvider.types'

const themeFromLS = localStorage.getItem(LS_THEME_KEY) as AppTheme

export const ThemeProvider: ThemeProviderFC = ({ children, initialTheme }) => {
  const defaultTheme = themeFromLS ?? initialTheme ?? AppTheme.DARK
  const [theme, setTheme] = useState<AppTheme>(defaultTheme)

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

  useEffect(() => {
    document.documentElement.className = defaultTheme
  }, [defaultTheme])

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
