# React && Redux

该库是 react 和 redux 的骨架库,用来减少前期搭建 React/Redux 耗费的时间和精力。

另外,这里还借助 webpack 编译工具,用来将 React 编译为正常使用的 js 代码,采用热更新机制,并且编译结果,根据不同 \
命令,会将结果编译到内存或者,编译为实际文件。

## 基本使用

```
// 内存编译
npm start

// 编译为文件
npm compile
```

编译目录的话,是根据 config/webpack.config.js 文件选择具体位置。目前设置的是 ./dist/
