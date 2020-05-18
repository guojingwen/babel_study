## babel配置文件
```json
{
   "babel": {
      "presets": [], 
      "plugins": []
   }
}
```
### presets与plugins
- plugins babel的插件具体翻译某一块功能
- preset babel插件集合的预设，包含某一部分的插件plugin
- plugins 会运行在 Presets 之前。
- plugins 会从前到后顺序执行。
- presets 的顺序则 刚好相反(从后向前)。 逆向顺序是因为大多数用户的编写顺序是 ['es2015', 'stage-2'] 。

### 案例1 编译module
cnpm install --save-dev @babel/core @babel/cli @babel/preset-env
npx babel src/module --out-dir lib/module
- 编译后的文件不能在浏览器使用
- 可以在node环境使用 node lib/module/1_module.js
除此之外还可以

##  配置文件种类
- 在package.json中设置babel字段
- .babelrc 
- .babelrc.json
- .babelrc.js
- babel6 可以在.babelrc引用 .babelrc.js, babel7不允许
- babel.config.json 或者 babel.config.js    Babel 7.x 新增的

通过 priority 与 babel6 的demo 可以得出一下结论
总结
1. .babelrc 与.babelrc.json 及 .babelrc.js 不能同时使用，但babel6中可以在.babelrc引入.babelrc.js
1. 同样babel.config.json 与 babel.config.js 也不能同时使用
1. .babelrc.js 与 babel.config.js 可以共存，.babelrc会merge到babel.config.js的配置中
1. 如果在babel配置写在webpack文件中（module.rules[x].use.options）此外有配置了babel.config.js同样会进行merge 

### 多个配置文件共存
cd priority
cnpm install --save-dev @babel/core @babel/cli @babel/plugin-transform-for-of @babel/plugin-transform-block-scoping
npx babel main.js --out-file main.compiled.js

优先级顺序
cnpm i 
1. webpack.config.js中babel-loader中options配置  
1. babel.config.json
1. babel.config.js
1. .babelrc
1. .babelrc.js

#### 项目根目录新增一个 .babelrc 配置 "plugins": ["@babel/plugin-transform-block-scoping"]
npx babel src/module --out-dir lib/module 


#### 案例2 动态编辑
使用babel.transform程序动态编译
node src/transform/2_demo.js

### 比较 .babelrc 文件特性
npx babel son_package/main.js --out-file lib/son_package/main_compiled.js
npx babel son_package/grandson_package/main.js --out-file lib/son_package/main_compiled2.js





