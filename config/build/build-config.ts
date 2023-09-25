import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';
import { buildResolvers } from './build-resolvers';
import { BuildConfigFunc } from './types/config';
import { buildServer } from './build-server';

export const buildConfig: BuildConfigFunc = (options) => {
  const { mode, paths, isDev } = options;

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
  };
};
