import { type BuildLoadersFunc } from './types'
import { buildCssLoader, buildSVGLoader } from './lib'

export const buildLoaders: BuildLoadersFunc = ({ isDev }) => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|ttf|woff|woff2)$/i,
    type: 'asset/resource'
  }

  return [fileLoader, buildSVGLoader(), buildCssLoader(isDev), typescriptLoader]
}
