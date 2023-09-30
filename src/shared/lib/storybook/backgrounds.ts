import { appThemes, type AppTheme, defaultAppTheme } from '@shared/constants/appTheme'

export const sbBackgrounds = appThemes.map(({ title, color }) => ({ name: title, value: color }))
export const sbDefaultBg = defaultAppTheme

export const getSbBackground = (theme: AppTheme): string => {
  return appThemes.find(({ value }) => value === theme)?.color ?? defaultAppTheme.color
}
