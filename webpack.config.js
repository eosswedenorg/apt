const path = require('path');

module.exports = {
    mode: 'production',
    entry: './_scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'scripts.js',
    }
};
