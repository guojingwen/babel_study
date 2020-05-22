```
├── course3
    ├── lib
        ├── module
            ├── 1_promise.js
            ├── 2_app_promise_entry_compiled.js
            ├── 2_app_promise_usage_compiled.js
            ├── 3_app_stage.js
            ├── 3_app_stage_compiled.js
            ├── 4_lib_array_from_compiled.js
    ├── src
        ├── 1_promise.js
        ├── 2_app_promise_entry.js
        ├── 2_app_promise_usage.js
        ├── 3_app_stage.js
        ├── 3_lib_promise.js
        ├── 4_lib_array_from.js
    ├── babel.config.js
    ├── babel.config.app.js // 应用babel7的推荐配置
    ├── babel.config.app.stage.js // 应用如果引入stage后，babel7的标准推荐配置示例
    ├── babel.config.lib.js // 类库babel7的推荐配置
    ├── package.json
```
### babel/polyfill

`npx babel src/1_promise.js --out-dir lib`

**Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如`Iterator`、`Generator`、`Set`、`Maps`、`Proxy`、`Reflect`、`Symbol`、`Promise`等全局对象，以及一些定义在全局对象上的方法（比如`Object.assign`）都不会转码。**

### `@babel/preset-env` 的 `useBuiltIns` 字段
- `false`-不引入polyfill(默认值)
- `entry` 整体导入补丁
- `usage` 按需导入补丁

通过修改 `useBuiltIns` 的值运行 `npx babel src/2_app_promise_usage.js --out-file lib/2_app_promise_usage_compiled.js  --config-file=./babel.config.app.js` 对比编译后的结果

补充：`useBuiltIns` 为 `entry` 或 `usage` 的时候，需要安装 `core-js@2` 或者 `core-js@3` 

`cnpm i -S core-js@3`


### 使用提案
`npx babel src/3_app_stage.js --out-file lib/3_app_stage.js  --config-file=./babel.config.app.js`

`npx babel src/3_app_stage.js --out-file lib/3_app_stage_compiled.js  --config-file=./babel.config.app.stage.js`

### 类库的babel配置
`core-js` or `@babel/polyfill` 修改原型链，会污染全局变量，如果我们开发的是一个类库供其他开发者使用，这种情况就会变得非常不可控。

所以有了 `@babel/runtime` 这个东西 为您的代码创建一个沙盒环境。

如果有多个文件有多处使用同一个es6的api(如`Array.from`)，为避免代码重复，所以有了`@babel/plugin-transform-runtime`这个东西

需要同时安装这两个包，注意：`corejs` 是生产依赖
- `cnpm i -D @babel/plugin-transform-runtime`
- `cnpm i -S @babel/runtime-corejs3`

- `npx babel src/4_lib_array_from.js --out-file lib/4_lib_array_from_compiled.js  --config-file=./babel.config.lib.js`

查看编译后的文件`4_lib_array_from_compiled.js`发现使用`Array.from`的地方是一个引用，全局只有一份`Array.from`的沙盒实现

### 注意：
- `corejs`也包含stage阶段的polyfill
- `@babel/polyfill` 从Babel 7.4.0开始，不推荐使用此软件包


