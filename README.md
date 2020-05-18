# babel 学习

## course1 cli

## course2 配置文件

## course3  polyfill

## course4 babel6 与 babel7




@babel/polyfill
babel从7.4.0开始，不推荐使用此软件包，而直接包括core-js/stable

import "core-js/stable";
import "regenerator-runtime/runtime";


### babel6 与 babel7 变化

从 babel7 开始，所有的官方插件和主要模块，都放在了 @babel 的命名空间下。从而可以避免在 npm 仓库中 babel 相关名称被抢注的问题。有必要说一下的，比如 @babel/node @babel/core @babel/clil @babel/preset-env

transform-runtime
以前的 babel-transform-runtime 是包含了 helpers 和 polyfill。而现在的 @babel/runtime 只包含 helper，如果需要 polyfill，则需主动安装 core-js 的 runtime版本 @babel/runtime-corejs2 。并在 @babel/plugin-transform-runtime 的插件中做配置。

全局配置 babel.config.js 局部配置 .babelrc
