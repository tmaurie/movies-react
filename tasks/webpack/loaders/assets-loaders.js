const { src } = require('../../build-config');

module.exports = {
  test: src.imagesTypes,
  include: src.images,
  type: 'asset/resource',
  generator: {
    filename: 'images/[name][ext]',
  },
};
