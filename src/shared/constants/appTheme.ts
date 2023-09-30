export enum AppTheme {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
  APRIKOT = 'aprikot-theme'
}

export const lightTheme = {
  value: AppTheme.LIGHT,
  title: 'Light',
  color: '#f7f6f6',
  icon: 'circle'
}

export const darkTheme = {
  value: AppTheme.DARK,
  title: 'Dark',
  color: '#171920',
  icon: 'circle'
}

export const aprikotTheme = {
  value: AppTheme.APRIKOT,
  title: 'Aprikot',
  color: '#ffd8b1',
  icon: 'circle'
}

export const appThemes = [lightTheme, darkTheme, aprikotTheme]
export const defaultAppTheme = darkTheme
