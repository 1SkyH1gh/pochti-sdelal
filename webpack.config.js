var webpack = require('webpack');
var path = require('path');

var isProduction = process.argv.indexOf('-p') >= 0;
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './dist');

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

if (isProduction) {
    module.exports = require('./webpack.config.prod');
} else {
    module.exports = {
        context: sourcePath,
        entry: {
            main: './main.tsx',
            icons: './icons.tsx'
        },
        output: {
            path: outPath,
            filename: '[name].js'
        },
        target: 'web',
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
            mainFields: ['module', 'browser', 'main'],
            alias: {
                'app': path.resolve(__dirname, 'src/app/')
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: isProduction
                        ? 'ts-loader'
                        : [{
                            loader: 'babel-loader?plugins=react-hot-loader/babel',
                            options: {
                                plugins: ['react-hot-loader/babel']
                            }
                        }, {
                            loader: 'ts-loader'
                        }]
                },
                {
                    test: /\.module\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: [
                                        require('postcss-import')({ addDependencyTo: webpack }),
                                        require('postcss-url')(),
                                        require('postcss-cssnext')(),
                                        require('postcss-reporter')(),
                                        require('postcss-browser-reporter')({
                                            disabled: isProduction
                                        })
                                    ]
                                }
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                    })
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: [
                                        require('postcss-import')({ addDependencyTo: webpack }),
                                        require('postcss-url')(),
                                        require('postcss-cssnext')(),
                                        require('postcss-reporter')(),
                                        require('postcss-browser-reporter')({
                                            disabled: isProduction
                                        })
                                    ]
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: filePath => filePath.split(path.sep + 'svg' + path.sep)[1].replace(path.sep, '/'),
                        publicPath: '/'
                    }
                },
                // static assets
                { test: /\.html$/, use: 'html-loader' },
                { test: /\.png$/, use: 'url-loader?limit=10000' },
                { test: /\.jpg$/, use: 'file-loader' }
            ]
        },
        optimization: {
            splitChunks: {
                name: true,
                cacheGroups: {
                    commons: {
                        chunks: 'initial',
                        minChunks: 2
                    },
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        priority: -10
                    }
                }
            },
            runtimeChunk: true
        },
        plugins: [
            new WebpackCleanupPlugin(),
            new ExtractTextPlugin({
                filename: 'styles.css',
                disable: !isProduction
            }),
            new SpriteLoaderPlugin({ plainSprite: true }),
            new HtmlWebpackPlugin({
                excludeChunks: ['main'],
                filename: 'icons',
                template: 'assets/icons.html'
            }),
            new HtmlWebpackPlugin({
                excludeChunks: ['icons'],
                filename: 'index.html',
                template: 'assets/index.html'
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
        devServer: {
            host: require('os').hostname().toLowerCase()
        },
        devtool: 'cheap-module-eval-source-map',
    };

}
