import type { Preview } from '@storybook/react'

import { decorators, globalTypes } from './lib'

import '@app/styles/index.scss'

const preview: Preview = {
  decorators,
  globalTypes,
  parameters: {
    backgrounds: { disable: true }
  }
}

export default preview
