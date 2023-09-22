import { ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildPluginsFunc } from './types/config';

export const buildPlugins: BuildPluginsFunc = ({ paths }) => [
  new ProgressPlugin(),
  new HtmlWebpackPlugin({ template: paths.html }),
  new MiniCssExtractPlugin({
    filename: 'css/style.[contenthash:8].css',
    chunkFilename: 'css/style.[contenthash:8].css'
  })
];
