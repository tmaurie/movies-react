const del = require('del');
const { dest } = require('../build-config');

function clean(done) {
    const dirs = [dest.distPath];
    del(dirs);
    done();
}

module.exports = clean;