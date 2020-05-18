module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // 推荐使用 .browserslistrc文件，因为该文件已被生态系统中的许多工具所使用，例如autoprefixer，stylelint，eslint-plugin-compat等
        // 这里写在babe配置里，方便演示

        // "targets": "> 0.25%, not dead" // 仅包括浏览器市场份额超过0.25％的用户所需的polyfill和代码转换（忽略没有安全更新的浏览器，如IE 10和BlackBerry）

        "targets": { // 有这么多选项 chrome，opera，edge，firefox，safari，ie，ios，android，node，electron
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        }, // 如果未指定目标，则默认转换所有ECMAScript 2015+代码

        // 还可以写在package.json文件里面 "browserslist": "> 0.25%, not dead"


        // useBuiltIns false-不引入polyfill(默认值) entry-入口引入（整体引入） usage-按需引入
        "useBuiltIns": "usage",
        "corejs": 3 // useBuiltIns为entry或usage的情况下需要配置这个选项
      }
    ]
  ]
}
