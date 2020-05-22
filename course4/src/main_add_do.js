import {say} from './moduleA'
console.log('main.js')
say()

const speak = () => {
  console.log('I can speck Chinese')
}
speak()

// syntax示例 do语句提案
function f () {
  console.log('f')
  return 2
}
let x = do {
  console.log('do x 运行了')
  let t = f();
  t * t + 1;
};
console.log('x', x)
