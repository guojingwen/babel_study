module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
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
  // babel7 提案句法 转换需要自己配置可在 node_modules下查一下 @babel/preset-stage-0 内容不多
  plugins: [
    "@babel/plugin-proposal-do-expressions"
  ]
}
