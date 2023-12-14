import type { Preview, Decorator } from '@storybook/react'

import { decorators, globalTypes } from './lib'

import '@app/styles/index.scss'

const preview: Preview = {
  decorators: decorators as Decorator[],
  globalTypes,
  parameters: { backgrounds: { disable: true } }
}

export default preview
