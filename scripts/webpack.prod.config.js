let helpers = require('./node.helpers.js');
let sharedConfig = require('./webpack.shared.config.js');
let Webpack = require('webpack');
let {merge} = require('webpack-merge');
let PluginMD5Hash = require('webpack-md5-hash');
let Git = require('git-rev-sync');
let Visualizer = require('webpack-visualizer-plugin');
const PluginExtractText = require('extract-text-webpack-plugin');

// 分离css 文件
const extractCSS = new ExtractTextPlugin('stylesheets/[name].global.css');
// // 分离less 文件
// const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');

// 丑化JS 配置
let uglifyConfig = (helpers.hasFlag('--debug')) ? {
        beautify: true,
        mangle: false,
        dead_code: false,
        unused: false,
        deadCode: false,
        compress: {
            screw_ie8: true,
            keep_fnames: true,
            drop_debugger: false,
            dead_code: false,
            unused: false
        },
        comments: true
    }: {
        beautify: false,
        mangle: {
            screw_ie8: true,
            warnings: false
        },
        compress: {
            screw_ie8: true,
            warnings: false
        },
        comments: false
    };

module.exports = merge(sharedConfig, {
    output: {

    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: extractCSS.extract('style-loader', 'css-loader!resolve-url!less-loader?sourceMap'),
                include: [helpers.root('src/styles'), helpers.root('node_modules')]
            }
        ]
    },
    plugins: [
        extractCSS,                                            // 分离css文件
        new Webpack.NoErrorsPlugin(),                        
        new PluginMD5Hash(),                                   // 生成Hash 值
        new Webpack.optimize.UglifyJsPlugin(uglifyConfig),     // 丑化JS 代码
        new Webpack.DefinePlugin({                             // 定义常量

            SERVER_URL: JSON.stringify('http://localhost:9000')  // 定义服务器地址
        }),
        new Visualizer({                                       // 可视化依赖库
            'filename': '../doc/stats.html'
        })
    ]
})