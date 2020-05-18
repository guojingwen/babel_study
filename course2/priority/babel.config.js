module.exports = {
  "plugins": [
    "@babel/plugin-transform-block-scoping",
    [
      "@babel/plugin-transform-for-of",
      {
        "assumeArray": false // defaults to false
      }
    ],
    // "@babel/plugin-transform-for-of",
  ]
}
