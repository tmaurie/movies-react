const Webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack/webpack.config');

function getDevServerConfig() {
  const devServerOptions = {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, '../../dist'),
    },
    client: {
      overlay: false,
    },
    historyApiFallback: true,
    allowedHosts: 'all',
    proxy: [
      {
        context: ['TO DEFINE'],
        target: 'https://api.themoviedb.org/3/',
        changeOrigin: true,
        secure: false,
      },
    ],
  };
  return devServerOptions;
}

function getWebpackDevConfig(config) {
  const configWebpack = config;
  configWebpack.plugins = configWebpack.plugins.concat([new Webpack.HotModuleReplacementPlugin()]);
  return configWebpack;
}

async function serve(done) {
  const webpackConfigDev = getWebpackDevConfig(webpackConfig());
  const compiler = Webpack(webpackConfigDev);
  const devServerOptions = getDevServerConfig();
  const server = new WebpackDevServer(devServerOptions, compiler);
  await server.start();
  done();
}

module.exports = serve;
