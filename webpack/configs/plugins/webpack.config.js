var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// Add environment specific plugins
var envPlugins = [];

if (process.env.GIT_BRANCH !== undefined) {
    if (process.env.GIT_BRANCH === 'origin/master') {
        // Add uglifyjs for minimizing and beautyfing javascripts 
        // in production and acceptation builds.
        envPlugins.push(new webpack.optimize.UglifyJsPlugin());
    }
}


module.exports = {
    entry: [
        __dirname + '/src/asset/javascript/app.js',
    ],
    output: {
        path: __dirname + '/dist/asset/javascript',
        filename: 'app.js'
    },
    loaders: [
    	{
			test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
    	},
    	{
        	test: /\.less$/,
            loader: 'style!css!less-loader!postcss-loader'
        }
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:1337'
        })
    ].concat(envPlugins),
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



