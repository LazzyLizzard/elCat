/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
// const autoprefixer = require('autoprefixer');
// const precss = require('precss');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'scr'), 'node_modules',]
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
        new NpmInstallPlugin()
    ],
    module: {
        rules: [
            {
                loader: 'react-hot-loader'
            },
            {
                loader: 'babel-loader'

            },
            {
                loader: 'babel-polyfill-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    'css-loader',
                    'postcss-loader']

            }
        ]
    }
};

