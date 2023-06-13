const webpack = require('webpack');

module.exports = new webpack.SourceMapDevToolPlugin({
    test: [/\.js$/],
    columns: false,
    exclude: /vendors/,
});
