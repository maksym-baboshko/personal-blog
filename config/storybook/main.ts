import type { StorybookConfig } from '@storybook/react-webpack5'

import { buildCssLoader } from '../build/lib'

const config: StorybookConfig = {
  framework: { name: '@storybook/react-webpack5', options: {} },
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    { name: '@storybook/addon-styling', options: { cssBuildRule: buildCssLoader(true) } }
  ],
  docs: { autodocs: 'tag', defaultName: 'Brief' }
}

export default config
