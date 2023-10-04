import { useCallback, useContext, useMemo } from 'react'

import { ThemeContext } from '@app/lib/context/ThemeContext'
import { LS_THEME_KEY } from '@shared/constants/localStorage'
import { type AppTheme, appThemes } from '@shared/constants/appTheme'

interface Result {
  theme: AppTheme
  nextThemeIdx: number
  toggleTheme: () => void
}

export const useTheme = (): Result => {
  const { theme, setTheme } = useContext(ThemeContext)

  const getNextTheme = useCallback((): { nextThemeIdx: number; nextTheme: AppTheme } => {
    const currentThemeIdx = appThemes.findIndex(({ value }) => value === theme)
    const nextThemeIdx = (currentThemeIdx + 1) % appThemes.length
    const nextTheme = appThemes[nextThemeIdx].value

    return { nextThemeIdx, nextTheme }
  }, [theme])

  const { nextTheme, nextThemeIdx } = useMemo(getNextTheme, [getNextTheme])

  const toggleTheme = useCallback((): void => {
    setTheme(nextTheme)
    localStorage.setItem(LS_THEME_KEY, nextTheme)
  }, [nextTheme, setTheme])

  return { theme, nextThemeIdx, toggleTheme }
}
