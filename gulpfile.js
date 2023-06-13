const { series } = require('gulp');

const bundle = require('./tasks/gulp/bundle');
const clean = require('./tasks/gulp/clean');
const serve = require('./tasks/gulp/serve');

// Simple task
exports.clean = clean;

// Series tasks
exports.build = series(clean, bundle);
exports.serve = series(clean, serve);
