const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const { src } = require('../../build-config');
const { isProd } = require('../../helpers/env-helper');

module.exports = {
  test: /\.(css|scss)$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: !isProd,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [autoprefixer],
        },
        sourceMap: !isProd,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: !isProd,
        sassOptions: {
          includePaths: [src.mainAppPath],
        },
      },
    },
  ],
};
