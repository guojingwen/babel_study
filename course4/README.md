## babel 与 webpack

@babel/core @babel/cli @babel/preset-env
cnpm install -D cnpm i -S core-js@3

npx babel src --out-dir lib
手动建一个index.html去引入lib下面的两个js，发现在浏览器上不能运行

对babel编译后的文件在用webpack处理下
cnpm install -D webpack webpack-cli html-webpack-plugin 
npx webpack
打开dist目录下的index.html在浏览器可以访问量

npx webpack --config webpack.babel.config.js
