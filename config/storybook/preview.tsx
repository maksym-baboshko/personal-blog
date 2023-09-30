import type { Preview } from '@storybook/react'

import { sbBackgrounds, sbDefaultBg } from '@shared/lib/storybook'

import { decorators, globalTypes } from './lib'

import '@app/styles/index.scss'

const preview: Preview = {
  decorators,
  globalTypes,
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: { default: sbDefaultBg.title, values: sbBackgrounds }
  }
}

export default preview
