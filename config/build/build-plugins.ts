import HtmlWebpackPlugin from 'html-webpack-plugin'
import { DefinePlugin, ProgressPlugin } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { type BuildPluginsFunc } from './types/config'

export const buildPlugins: BuildPluginsFunc = ({ paths, isDev }) => {
  const plugins = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash:8].css',
      chunkFilename: 'css/style.[contenthash:8].css'
    }),
    new DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev)
    })
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  return plugins
}
