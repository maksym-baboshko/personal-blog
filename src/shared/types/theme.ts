import { type AppTheme } from '@shared/constants/theme'

export interface ThemeConfig {
  name: string
  key: AppTheme
  color: string
  contrastColor: string
  backgroundColor: string
  default?: boolean
}
