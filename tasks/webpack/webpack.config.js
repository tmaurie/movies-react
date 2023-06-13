const TerserPlugin = require('terser-webpack-plugin');
const assetsLoaders = require('./loaders/assets-loaders');
const htmlLoaders = require('./loaders/html-loaders');
const ejsLoaders = require('./loaders/ejs-loaders');
const scriptLoaders = require('./loaders/scripts-loaders');
const scssLoaders = require('./loaders/style-loaders');
const plugins = require('./plugins');
const { src, dest, extensions, alias } = require('../build-config');

const { isProd } = require('../helpers/env-helper');

module.exports = () => ({
  mode: isProd ? 'production' : 'development',
  devtool: false,
  entry: src.entryPoint,
  target: ['web', 'es5'],
  output: {
    filename: `[name]${isProd ? '-[contenthash]' : ''}.js`,
    chunkFilename: `[name]${isProd ? '-[contenthash]' : ''}.js`,
    path: dest.distAppPath,
    publicPath: dest.publicPath,
  },
  optimization: {
    chunkIds: 'named',
    moduleIds: 'named',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]|[\\/]assets[\\/]libs[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          keep_classnames: false,
          keep_fnames: false,
        },
      }),
    ],
  },
  module: {
    rules: [scriptLoaders, htmlLoaders, ejsLoaders, scssLoaders, assetsLoaders],
  },
  plugins,
  resolve: {
    extensions,
    alias,
  },
  stats: {
    colors: true,
    assets: false,
    cachedModules: false,
    runtimeModules: false,
    orphanModules: false,
    modules: false,
    warnings: false,
    entrypoints: true,
    chunkGroupMaxAssets: 15,
  },
});
