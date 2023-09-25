import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { type BuildLoadersFunc } from './types/config'

export const buildLoaders: BuildLoadersFunc = ({ isDev }) => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader

  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: /.*\.module\..*/,
        localIdentName: isDev
          ? '[path][name]__[local]--[hash:base64:5]'
          : '[hash:base64:8]'
      }
    }
  }

  const cssLoaders = {
    test: /\.s[ac]ss|\.css$/i,
    use: [styleLoader, cssLoader, 'sass-loader']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|ttf|woff|woff2)$/i,
    type: 'asset/resource'
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  return [fileLoader, svgLoader, cssLoaders, typescriptLoader]
}
