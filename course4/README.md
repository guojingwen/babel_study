```
├── course4
    ├── dist
        ├── index.html
        ├── bundle.js
    ├── dist1
        ├── index.html
        ├── bundle.js
    ├── lib
        ├── index.html
        ├── main.js
        ├── moduleA.js    
    ├── src
        ├── main.js
        |── main_add_do.js
        ├── moduleA.js
    ├── package.json
    ├── babel.config.js
    ├── webpack.config.js
    ├── webpack.babel.config.js
```
## webpack中使用babel

- `cnpm install -D @babel/core @babel/cli @babel/preset-env`
- `cnpm i -S core-js@3`
- `npx babel src --out-dir lib`

手动建一个`index.html`去引入lib下面的两个js，发现在浏览器上不能运行

对babel编译后的文件在用webpack处理下
- `cnpm install -D webpack webpack-cli html-webpack-plugin`
- `npx webpack`

打开dist目录下的`index.html`在浏览器可以访问量

也可以直接在webpack中写入babel配置
- `cnpm i -D @babel/plugin-proposal-do-expressions`
- `npx webpack --config webpack.babel.config.js`

如果项目根目录下还有配置文件如babel.config.js会把配置项merge到配置文件里

