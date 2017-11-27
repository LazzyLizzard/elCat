/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
// const NpmInstallPlugin = require('npm-install-webpack-plugin');
// const autoprefixer = require('autoprefixer');
// const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        // modules: [path.resolve(__dirname, 'scr'), 'node_modules'],
        modules: ['src', 'node_modules'],
        alias: {
            localResolve: path.resolve(__dirname, 'src')
        }
    },
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css')
        // new NpmInstallPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.js$/,
                loaders: ['eslint-loader'],
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            // {
            //     loader: 'react-hot-loader'
            // },
            // {
            //     loader: 'babel-polyfill-loader'
            // },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader',
            //         'css-loader',
            //         'postcss-loader']
            //
            // }
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    }
};

