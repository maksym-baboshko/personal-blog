import type { Preview } from '@storybook/react'

import { sbBackgrounds, sbDefaultBg } from '@shared/lib/storybook'

import { decorators, globalTypes } from './lib'

import '@app/styles/index.scss'

const preview: Preview = {
  decorators,
  globalTypes,
  parameters: { backgrounds: { default: sbDefaultBg.name, values: sbBackgrounds } }
}

export default preview
