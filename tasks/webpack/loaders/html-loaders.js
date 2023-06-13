const { isProd } = require('../../helpers/env-helper');

module.exports = {
  test: /\.html$/,
  loader: 'html-loader',
  options: {
    minimize: !isProd,
  },
};
