import { withThemeByClassName } from '@storybook/addon-themes'

import { sbThemeConfig, withStore } from '@shared/lib/storybook'

import { withI18next } from './decorators/with-i18next'
import { withAppTheme } from './decorators/with-app-theme'

export { globalTypes } from './preview/globalTypes'

export const decorators = [
  withI18next,
  withAppTheme,
  withStore(),
  withThemeByClassName(sbThemeConfig)
]
