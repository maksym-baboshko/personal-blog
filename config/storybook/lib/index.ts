import { withThemeByClassName } from '@storybook/addon-themes'
import { type Decorator } from '@storybook/react'

import { sbThemeConfig } from '@shared/lib/storybook'

import { withRouter } from './decorators/with-router'
import { withI18next } from './decorators/with-i18next'
import { withAppTheme } from './decorators/with-app-theme'

export { globalTypes } from './preview/globalTypes'

export const decorators: Decorator[] = [
  withRouter,
  withI18next,
  withAppTheme,
  withThemeByClassName(sbThemeConfig)
]
