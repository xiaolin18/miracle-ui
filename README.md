Miracle UI

# 项目结构
  - build                   // webpack打包配置文件
  - example                 // 项目示例页
    - App.vue               // 示例页目录树以及路由页
    - main.js               // 示例页入口
  - node_modules            // npm包
  - src                     // 组件源码
    - index.js              // 组件源码入口
  - package.json            // node配置文件

## 学习资料：
  - 项目学习地址： https://github.com/SunInfoFE/vue-sunflower
  - webpack-dev-server使用： https://segmentfault.com/a/1190000006670084
  - webpack学习地址：https://doc.webpack-china.org/configuration/

## 学习总结
  - 注意路由处的语法，页面出不来的原因是因为使用了es6语法编译，但是require并不属于es6;

## 错误汇总
  1. 启动报错
  ```
  Module build failed: Error: ENOENT: no such file or directory, scandir '/Users/zxb/dev/iyunxiao-dashboard/node_modules/node-sass/vendor'
  ```
  解决方法
  ```
  npm rebuild node-sass
  ```
