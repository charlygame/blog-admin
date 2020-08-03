/**
 * 通过环境变量进行参数切换
 */
console.log(process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
    case 'production': 
    case 'prod': 
        console.log('>>>> 执行 prod >>>');
        module.exports = require('./webpack.prod.config');
        break;
    case 'development':
    case 'dev':
    default:
        console.log('>>>> 执行 dev >>>>');
        module.exports = require('./webpack.dev.config');
        console.log(module.exports);
        break;
};