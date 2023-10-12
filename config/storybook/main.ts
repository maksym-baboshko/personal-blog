import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  framework: { name: '@storybook/react-webpack5', options: {} },
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  docs: { autodocs: 'tag', defaultName: 'Brief' }
}

export default config
