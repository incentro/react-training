var webpack = require('webpack');

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
    ]
}



