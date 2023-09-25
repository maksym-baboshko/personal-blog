import { type FC, type ReactNode } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export type ThemeProviderFC = FC<ThemeProviderProps>
