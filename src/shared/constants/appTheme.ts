import { type ThemeConfig } from '@shared/types'

export enum AppTheme {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
  APRIKOT = 'aprikot-theme'
}

export const lightTheme = {
  name: 'Light',
  key: AppTheme.LIGHT,
  color: '#f7f6f6',
  contrastColor: '#191b22',
  icon: 'circlehollow'
}

export const darkTheme = {
  name: 'Dark',
  key: AppTheme.DARK,
  color: '#191b22',
  contrastColor: '#f7f6f6',
  icon: 'circlehollow',
  default: true
}

export const aprikotTheme = {
  name: 'Aprikot',
  key: AppTheme.APRIKOT,
  color: '#ffd8b1',
  contrastColor: '#523006',
  icon: 'circlehollow'
}

export const appThemes: ThemeConfig[] = [lightTheme, darkTheme, aprikotTheme]
