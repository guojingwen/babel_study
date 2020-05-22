```
├── course1
    ├── lib
        ├── 1_compiled_arrow.js
        ├── 1_compiled_arrow_block.js
        ├── 1_test.js
    ├── src
        ├── 1_test.js
    ├── package.json
```

## 使用babel-cli
1. `npm init -y` #创建`package.json`
1. `cnpm install --save-dev @babel/core @babel/cli`
1. `npx babel src --out-dir lib`
    - 查看编译后的文件与源文件一模一样，这是因为我们还未对babel做任何配置.
    - 下面让我们来翻译箭头函数
1. `cnpm i -D @babel/plugin-transform-arrow-functions`
1. `npx babel src/1_test.js --out-file lib/1_compiled_arrow.js --plugins=@babel/plugin-transform-arrow-functions`
    - 查看`lib/1_compiled_arrow.js`发现箭头函数已经被翻译
    - 我们再翻译一下 块级作用域吧， `let` `const`
1. `cnpm i -D @babel/plugin-transform-block-scoping`
1. `npx babel src/1_test.js --out-file lib/1_compiled_arrow_block.js --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping`
    - 查看`lib/1_compiled_arrow_block.js` 发现`const`已经变成`var`


### 关于babel-cli参数 请参阅 [官方cli文档](https://www.babeljs.cn/docs/babel-cli)
