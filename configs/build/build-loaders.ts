import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildLoadersFunc } from './types/config';

export const buildLoaders: BuildLoadersFunc = ({ isDev }) => {
  const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

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
  };

  const cssLoaders = {
    test: /\.s[ac]ss|\.css$/i,
    use: [styleLoader, cssLoader, 'sass-loader']
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  return [typescriptLoader, cssLoaders];
};
