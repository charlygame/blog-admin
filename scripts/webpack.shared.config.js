let helpers = require('./node.helpers.js');
let Webpack = require('webpack');
let PluginCopy = require('copy-webpack-plugin');
let PluginHTML = require('html-webpack-plugin');
// let PluginForkChecker = require('awesome-typescript-loader').ForkCheckerPlugin;
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    context: helpers.root('src'),
    entry: {
        // 'polyfills': [

        // ],
        // 'vendor': [

        // ],
        // 'styles': [
        //     './styles/**/*.less'
        // ],
        'app' : './main.js'
    },
    output: {
        path: helpers.root('www'),
        publicPath: ''
    },
    resolve: {
        extensions: ['.vue','.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {

                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.html/,
                loader: 'html-loader',
                include: [ helpers.root('src')]
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader'],
                include: [helpers.root('src')]
            },
            {
                test: /\.jpg|jpeg|png|svg|woff|woff2|eot|ttf(\?.*$|$)/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: '[path][name].[ext]',
                    outputPath: ''
                },
                include: [helpers.root('src'), helpers.root('node_modules')]
            }
        ]
    },
    plugins: [
        // new Webpack.optimize.DedupePlugin(),
        // new Webpack.optimize.CommonsChunkPlugin({
        //     names: [],
        //     minChunks: Infinity
        // }),
        // new PluginCopy([
        //     {
        //         from: helpers.root('src/assets'),
        //         to: 'asset'
        //     }
        // ]),
        new VueLoaderPlugin(),
        new PluginHTML({                               // 定制app.html
            filename: helpers.root('www/index.html'),
            title: 'blog-admin',
            template: helpers.root('public/index.html'),
            favicon: helpers.root('public/favicon.ico'),
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}

