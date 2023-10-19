export enum AppTheme {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
  APRIKOT = 'aprikot-theme'
}

export const lightTheme = {
  name: 'Light',
  key: AppTheme.LIGHT,
  color: '#f7f6f6',
  backgroundColor: '#dddddd',
  contrastColor: '#191b22',
  default: false
}

export const darkTheme = {
  name: 'Dark',
  key: AppTheme.DARK,
  color: '#191b22',
  backgroundColor: '#0e0f14',
  contrastColor: '#f7f6f6',
  default: true
}

export const aprikotTheme = {
  name: 'Aprikot',
  key: AppTheme.APRIKOT,
  color: '#ffd8b1',
  backgroundColor: '#f5c288',
  contrastColor: '#523006',
  default: false
}

export const appThemes = [lightTheme, darkTheme, aprikotTheme]
