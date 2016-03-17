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
    devtool: 'cheap-module-source-map',
    module: {
        preLoaders: [
            {   
                test: /\.js$/, 
                loader: "eslint-loader", 
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets: ["react", "es2015"],
                    env: {
                        development:
                        {
                            plugins: 
                            [
                                ["react-transform", 
                                    {
                                        transforms:[
                                            {
                                                transform: "react-transform-hmr",
                                                imports: ["react"],
                                                locals: ["module"]
                                            }
                                        ]
                                    }
                                ]
                            ]
                        }
                    }
                }
            },
            {
                test: /\.less$/,
                loader: 'style!css!less-loader!postcss-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
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
        port: 1337,
        proxy: {
            '/Pulse_AQPC*': {
                target: 'http://0.0.0.0:6666/www.anwb.nl:443',
                secure: false
            }
        }
    },
    eslint: {
        configFile: '.eslintrc'
    }
}