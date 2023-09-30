import HtmlWebpackPlugin from 'html-webpack-plugin'
import { DefinePlugin, ProgressPlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { type BuildPluginsFunc } from './types'

export const buildPlugins: BuildPluginsFunc = ({ paths, isDev }) => {
  const plugins = [
    new ProgressPlugin(),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash:8].css',
      chunkFilename: 'css/style.[contenthash:8].css'
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin({}))
  }

  return plugins
}
