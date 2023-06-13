const path = require('path');

const chunks = {
  app: 'app',
};

const mainAppPath = path.resolve(__dirname, '../app');
const distPath = path.resolve(__dirname, '../dist');
const distAppPath = path.resolve(__dirname, '../dist');
const storybookPath = path.resolve(__dirname, '../.storybook');

module.exports = {
  alias: {
    // Main App
    App: `${mainAppPath}/`,
    storybook: storybookPath,
  },
  chunks,
  dest: {
    distPath,
    distAppPath,
    htmlIndexTemplateOutput: './index.html',
    publicPath: '/',
    reports: 'reports/',
  },
  extensions: ['.js', '.jsx'],
  src: {
    mainAppPath,
    ejsIndexTemplateEntry: './app/templates/index.ejs',
    entryPoint: {
      [chunks.app]: './app/index.js',
    },
    favicon: './app/assets/favicon.ico',
    images: [
      path.resolve(__dirname, '../app/assets'),
      path.resolve(__dirname, '../node_modules'),
    ],
    imagesTypes: /\.(jpg|png|svg|gif)$/,
  },
};
