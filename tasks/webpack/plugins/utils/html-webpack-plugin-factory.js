const HtmlWebpackPlugin = require('html-webpack-plugin');
const { src } = require('../../../build-config');
const { isProd } = require('../../../helpers/env-helper');

module.exports = ({ template, chunks, filename }) =>
  new HtmlWebpackPlugin({
    template,
    ...(chunks && { chunks }),
    filename,
    hash: true,
    favicon: src.favicon,
    minify: {
      removeComments: isProd,
      collapseWhitespace: isProd,
      collapseBooleanAttributes: isProd,
      removeCommentsFromCDATA: isProd,
      removeEmptyAttributes: false,
      removeEmptyElements: false,
      minifyJS: isProd,
    },
  });
