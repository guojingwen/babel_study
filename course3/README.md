### babel/polyfill

npx babel src/1_promise.js --out-dir lib

Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
 
useBuiltIns 为 entry打包 整体导入补丁
npx babel src/2_app_promise_entry.js --out-file lib/2_app_promise_entry_compiled.js  --config-file=./babel.config.app.js

useBuiltIns 为 usage 打包 按需导入补丁
npx babel src/2_app_promise_usage.js --out-file lib/2_app_promise_usage_compiled.js  --config-file=./babel.config.app.js


需要安装 core-js@2 或者 core-js@3
cnpm i -S core-js@3

### 使用提案
npx babel src/3_app_stage.js --out-file lib/3_app_stage.js  --config-file=./babel.config.app.js
// copy编译后到代码到浏览器然而并不能运行

npx babel src/3_app_stage.js --out-file lib/3_app_stage_compiled.js  --config-file=./babel.config.app.stage.js

### 类库的babel配置

core-js or @babel/polyfill 修改原型链，会污染全局变量，如果我们开发的也是一个类库供其他开发者使用，这种情况就会变得非常不可控。
所以有了 @babel/runtime 这个东西 为您的代码创建一个沙盒环境

cnpm i -D @babel/plugin-transform-runtime
cnpm i -S @babel/runtime-corejs3

npx babel src/4_lib_array_from.js --out-file lib/4_lib_array_from_compiled.js  --config-file=./babel.config.lib.js


