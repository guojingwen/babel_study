## 关于babel
- 官网 中文  https://www.babeljs.cn/docs/usage
- Babel 是一个 JavaScript 编译器
- Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

- 初学babel一定要把它跟webpack区分开来，否则你可能会迷惑那些是babel做的那些是webpack做的

## 
npm init -y #创建package.json
cnpm install --save-dev @babel/core @babel/cli

npx babel src --out-dir lib # 输出文件与源文件一模一样

翻译箭头函数
cnpm i -D @babel/plugin-transform-arrow-functions
npx babel src/1_test.js --out-file lib/1_compiled_arrow.js --plugins=@babel/plugin-transform-arrow-functions

再翻译一下 块级作用域 let const
cnpm i -D @babel/plugin-transform-block-scoping
npx babel src/1_test.js --out-file lib/1_compiled_arrow_block.js --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping

更多babel cli 参数 [官方cli文档](https://www.babeljs.cn/docs/babel-cli)

