# babel 学习

Babel 是一个 JavaScript 编译器 

Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

本文主要以babel7来讲解babel，这里提供一个demo，包含文中所有案例，我偷个懒，示例代码将下文中贴出，你可以把这个demo下载，按照本文的步骤验证一下。

另外补充一句：初学babel一定要把它跟webpack区分开来，否则你可能会迷惑哪些是babel做的哪些是webpack做的。

## course1 [使用babel-cli](./course1/README.md)

## course2 [解读配置文件](./course2/README.md)

## course3 [polyfill及推荐几个babel7参考配置示例](./course3/README.md)

## course4 [在webpack中使用babel](./course4/README.md)

## babel6 与 babel7主要变更点
1. 从 babel7 开始，所有的官方插件和主要模块，都放在了 @babel 的命名空间下。从而可以避免在 npm 仓库中 babel 相关名称被抢注的问题。
    - babel7软件包 `@babel/node` `@babel/core` `@babel/cli` `@babel/preset-env`
    - 对应babel6软件包 `babel-node` `babel-core` `babel-cli` `babel-preset-env`

1. polyfill变更
    - babel6 `babel-polyfill` 对应 babel7的`@babel/polyfill`，但是babel从7.4.0开始，不推荐使用此软件包，而直接包括`core-js`

1. 新增 `babel.config.js` 配置文件
    - 全局配置 `babel.config.js` 局部配置 `.babelrc`
    - `babel.config.js`可以定义全局配置的作用范围以及局部配置的开启关闭

1. stage(提案)预设变更
    - babel6有 `babel-preset-stage-x` babel7废除了这些预设，需要手动引入plugin，预设语法并不多可以在`node_modules/@babel/preset-stage-0`看一下
    - 提案plugin更名
        - 统一更名为`-proposal`，如`@babel/plugin-transform-function-bind`现在`@babel/plugin-proposal-function-bind`
        - 从包裹名称中删除年份 如`@babel/plugin-transform-es2015-classes`成了`@babel/plugin-transform-classes`
    
1. 反应和流程预设的分离
    ```
    {
    -  "presets": ["@babel/preset-react"]
    +  "presets": ["@babel/preset-react", "@babel/preset-flow"] // parse & remove flow types
    +  "presets": ["@babel/preset-react", "@babel/preset-typescript"] // parse & remove typescript types
    }
    ```
