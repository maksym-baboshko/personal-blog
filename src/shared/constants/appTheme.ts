export enum AppTheme {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
  APRIKOT = 'aprikot-theme'
}

export const lightTheme = {
  value: AppTheme.LIGHT,
  title: 'Light',
  color: '#e9ecef',
  icon: 'circle'
}

export const darkTheme = {
  value: AppTheme.DARK,
  title: 'Dark',
  color: '#212529',
  icon: 'circle'
}

export const aprikotTheme = {
  value: AppTheme.APRIKOT,
  title: 'Aprikot',
  color: '#f8cb9b',
  icon: 'circle'
}

export const appThemes = [lightTheme, darkTheme, aprikotTheme]
export const defaultAppTheme = darkTheme
