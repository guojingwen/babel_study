module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // targets 如果未指定目标，则默认转换所有ECMAScript 2015+代码
        "useBuiltIns": "usage",
        "corejs": {
          version: 3,
          proposals: true // 默认值是false, 对stage阶段的全局对象上的方法打补丁
        }
      }
    ],

    // 从 v7.0.0-beta.55 开始废弃了，需要用户自己配置plugins
    // 废弃原因 不稳定 理由是 https://segmentfault.com/a/1190000018358854
    // "@babel/preset-stage-1"
  ],
  // babel7 提案句法 转换需要自己手动配置，可在 node_modules/@babel/preset-stage-0 查看一下 内容不多
  plugins: [
    "@babel/plugin-proposal-do-expressions"
  ]
}
