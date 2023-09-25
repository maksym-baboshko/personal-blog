import { buildServer } from './build-server'
import { buildPlugins } from './build-plugins'
import { buildLoaders } from './build-loaders'
import { buildResolvers } from './build-resolvers'
import { type BuildConfigFunc } from './types/config'

export const buildConfig: BuildConfigFunc = (options) => {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.dist,
      clean: true
    },
    plugins: buildPlugins(options),
    module: { rules: buildLoaders(options) },
    resolve: buildResolvers(options),
    devServer: isDev ? buildServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined
  }
}
