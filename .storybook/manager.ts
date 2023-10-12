import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'dark',

    brandTitle: 'exyflare',
    brandUrl: 'http://localhost:6006',
    brandImage: 'logo.svg',
    brandTarget: '_self',

    appBg: '#171920',
    barBg: '#171920',
    appContentBg: '#171920',
    appBorderColor: '#313345',
    colorSecondary: '#E0A524',
    appBorderRadius: 0,

    inputBg: '#313345'
  })
})
