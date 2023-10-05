import { appThemes, type AppTheme, defaultAppTheme } from '@shared/constants/appTheme'

export const sbBackgrounds = appThemes.map(({ title, color }) => ({ name: title, value: color }))

export const sbDefaultBg =
  sbBackgrounds.find(({ name }) => name === defaultAppTheme.title) ?? sbBackgrounds[1]

export const getSbBackground = (theme: AppTheme): string => {
  return appThemes.find(({ value }) => value === theme)?.color ?? defaultAppTheme.color
}
