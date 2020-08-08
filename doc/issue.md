### 整理遇到的问题
1. 路由整体不渲染，忘记了加<router-view/> 标签。
2. 路由只渲染根目录， 是由于webpack-dev-server 的 historyApiFallback 属性没有设置的问题。
3. 刷新网页后出现  regeneratorRuntime is not defined 的报错
   解决办法：在 main.js   中加入  import "@babel/polyfill"

   