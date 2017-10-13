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
        modules: ['node_modules', path.resolve(__dirname, 'scr')]
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
    rules: [{
        use: [
            {
                loader: "react-hot"
            },
            {
                loader: 'babel-loader'

            },
            {
                loader: 'babel-polyfill'
            }
        ]
    }]
};

