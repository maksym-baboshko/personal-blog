import { type RuleSetRule } from 'webpack'

export const buildSVGLoader = (): RuleSetRule => ({
  test: /\.svg$/,
  use: ['@svgr/webpack']
})
