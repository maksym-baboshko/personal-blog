import { type ReactNode, type FC } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export type ThemeProviderFC = FC<ThemeProviderProps>
