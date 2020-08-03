let path = require('path');

let projectRoot = path.resolve(__dirname, '..');

module.exports = {
    /**
     * 进行封装防止处处拼接路径
     * @param {*} relpath 
     */
    root: function (relpath) {
        if (relpath) {
            return path.resolve(projectRoot, relpath);
        } else {
            return projectRoot;
        }
    },
    /**
     * 判断运行参数里是否含有某个标志
     * @param {*} flag 
     */
    hasFlag(flag) {
        return process.argv.join('').indexOf(flag) > -1;
    }
    
}