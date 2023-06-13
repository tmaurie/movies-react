const { src } = require('../../build-config');
const { isProd } = require('../../helpers/env-helper');

module.exports = {
  test: /\.(js|jsx)$/,
  include: [src.mainAppPath],
  use: [
    'thread-loader',
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        sourceMap: !isProd,
      },
    },
  ],
};
