const webpack = require('webpack');
const sourceMapDevToolPlugin = require('./source-map-plugin');
const miniCssExtractPlugin = require('./mini-css-extract-plugin');
const htmlWebpackPlugin = require('./html-webpack-plugin');
const { isProd } = require('../../helpers/env-helper');

module.exports = [
  miniCssExtractPlugin,
  new webpack.DefinePlugin({
    __isBrowser__: 'true',
  }),
  sourceMapDevToolPlugin,
  htmlWebpackPlugin,
  new webpack.DefinePlugin({
    'process.env.BUILD_FLAG_IS_DEV': JSON.stringify(!isProd),
  }),
];
