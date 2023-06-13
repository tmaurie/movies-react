const { src, dest, chunks } = require('../../build-config');
const htmlWebpackPluginFactory = require('./utils/html-webpack-plugin-factory');

module.exports = htmlWebpackPluginFactory({
  template: src.ejsIndexTemplateEntry,
  chunks: [chunks.app, chunks.legacy],
  filename: dest.htmlIndexTemplateOutput,
});
