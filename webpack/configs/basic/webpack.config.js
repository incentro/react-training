var webpack = require('webpack');

module.exports = {
    entry: [
        __dirname + '/src/asset/javascript/app.js',
    ],
    output: {
        path: __dirname + '/dist/asset/javascript',
        filename: 'app.js'
    }
}