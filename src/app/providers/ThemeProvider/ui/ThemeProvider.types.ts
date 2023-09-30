import { type FC, type ReactNode } from 'react'

import { type AppTheme } from '@shared/constants/appTheme'

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: AppTheme
}

export type ThemeProviderFC = FC<ThemeProviderProps>
