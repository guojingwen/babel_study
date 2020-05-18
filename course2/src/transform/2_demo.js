/*

// 1. 会计作用域
console.log(require('@babel/core').transform(
  "let x = n => n + 1",
  {
    presets: [],
    plugins: ['@babel/plugin-transform-block-scoping']
  }
).code);
// var x = n => n + 1;
*/


/*
// 2. 箭头函数
console.log(require('@babel/core').transform(
  `
const double = [1,2,3].map((num) => num * 2);
console.log(double)
  `,
  {
    presets: [],
    plugins: ['@babel/plugin-transform-arrow-functions']
  }
).code);
*/

/*
// 3. 翻译 block-scoped-functions
// sorry 我也没弄明白这个
console.log(require('@babel/core').transform(
  `
{
  function name (n) {
    return n;
  }
}

name("Steve");
  `,
  {
    presets: [],
    plugins: ['@babel/plugin-transform-block-scoped-functions']
  }
).code);
*/

/**
// 4. class
console.log(require('@babel/core').transform(
  `
class Test {
  constructor(name) {
    this.name = name;
  }

  logger () {
    console.log("Hello", this.name);
  }
}
new Test().logger()
  `,
  {
    presets: [],
    plugins: ['@babel/plugin-transform-classes']
  }
).code);
*/

/*
// 5. 属性简写，属性名表达式
console.log(require('@babel/core').transform(
  `
var foo = 'FOO'
var obj = {
  ["x" + foo]: "heh",
  foo,
};
  `,
  {
    presets: [],
    plugins: ['@babel/plugin-transform-computed-properties']
  }
).code);
*/

/*
// 6. 解构
console.log(require('@babel/core').transform(
  `
let {x, y} = obj;
let [a, b, ...rest] = arr;
  `,
  {
    presets: [],
    plugins: ['@babel/plugin-transform-destructuring']
  }
).code);
*/


// 6. 重复属性（以后面的属性为准）
console.log(require('@babel/core').transform(
  `
var x = { a: 5, a: 6 };
var y = {
  get a() {},
  set a(x) {},
  a: 3,
};
  `,
  {
    presets: [],
    plugins: ['@babel/plugin-transform-duplicate-keys']
  }
).code);





// require('@babel/plugin-transform-arrow-functions')
