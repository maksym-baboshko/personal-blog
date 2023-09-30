import path from 'path'
import { DefinePlugin, type Configuration, type RuleSetRule } from 'webpack'

import { type BuildOptions } from '../build/types'
import { buildAlias, buildSVGLoader } from '../build/lib'

export default ({ config }: { config: Configuration }): Configuration => {
  const rootDir = path.resolve(__dirname, '..', '..')

  const options: BuildOptions = {
    paths: {
      src: path.resolve(rootDir, 'src'),
      dist: path.resolve(rootDir, 'dist'),
      entry: path.resolve(rootDir, 'src', 'main.tsx'),
      html: path.resolve(rootDir, 'public', 'index.html')
    },
    mode: 'development',
    isDev: true,
    port: 3000
  }

  const globalConstants = {
    __IS_DEV__: JSON.stringify(options.isDev),
    __API__: JSON.stringify('https://testapi.com'),
    __PROJECT__: JSON.stringify('storybook')
  }

  if (config.resolve !== undefined) {
    config.resolve.alias = { ...config.resolve.alias, ...buildAlias(options) }
  }

  if (config.plugins !== undefined) {
    config.plugins.push(new DefinePlugin(globalConstants))
  }

  if (config.module?.rules !== undefined) {
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      // eslint-disable-next-line @typescript-eslint/prefer-includes
      if (/svg/.test(rule.test as string)) return { ...rule, exclude: /\.svg$/i }
      else return rule
    })

    config.module.rules.push(buildSVGLoader())
  }

  return config
}
