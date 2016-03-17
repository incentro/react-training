var webpack = require('webpack');

module.exports = {
    entry: [
        __dirname + '/src/asset/javascript/app.js',
    ],
    output: {
        path: __dirname + '/dist/asset/javascript',
        filename: 'app.js'
    },
    devServer: {
        contentBase: "./dist",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: '0.0.0.0',
        port: 1337
    }
}