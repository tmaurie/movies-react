const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.config');

function bundle(done) {
    return webpack(webpackConfig(), (err, stats) => {
        if (err) {
            process.stderr.write('A global error occured : ', err);
        }
        if (stats?.errors) {
            stats.errors.array.forEach((error) => {
                process.stderr.write('Error : ', error);
            });
        }
        done();
    });
}

module.exports = bundle;
