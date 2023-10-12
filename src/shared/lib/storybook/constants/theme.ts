import { type ClassNameStrategyConfiguration } from '@storybook/addon-themes'

import { appThemes } from '@shared/constants/appTheme'

export const sbThemeConfig: ClassNameStrategyConfiguration = {
  themes: appThemes.reduce<Record<string, string>>((acc, theme) => {
    acc[theme.name] = theme.key
    return acc
  }, {}),
  defaultTheme: appThemes.find((t) => t?.default)?.name ?? appThemes[1].name
}
