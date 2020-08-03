let helpers = require('./node.helpers.js');
let sharedConfig = require('./webpack.shared.config');
let Webpack = require('webpack');
const {merge} = require('webpack-merge');

module.exports = merge(sharedConfig, {

    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map',
        chunkFilename: '[id].chunk.js'
    },
    devtool: 'cheap-module-eval-source-map',
    mode: "development",
    plugins: [
        new Webpack.DefinePlugin({
            // 'app.mode': '\'development\'',
            // ''
        })
    ],
    devServer: {
        contentBase: helpers.root('www'),
        hot: true,
        compress: true,
        port: 9000
    }

});