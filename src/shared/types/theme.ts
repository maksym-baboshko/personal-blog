import { type AppTheme } from '@shared/constants/appTheme'

export interface ThemeConfig {
  name: string
  key: AppTheme
  color: string
  contrastColor: string
  icon: string
  default?: boolean
}
