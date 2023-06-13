const minimist = require('minimist');

const options = minimist(process.argv.slice(2));
const env = options.env || 'dev';
const isProd = env === 'prod';

module.exports = {
    isProd,
    env,
    options,
};
