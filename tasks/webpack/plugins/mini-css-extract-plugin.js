const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { isProd } = require('../../helpers/env-helper');

module.exports = new MiniCssExtractPlugin({
    filename: `[name]${isProd ? '-[contenthash]' : ''}.css`,
});
