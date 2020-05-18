//  配合 "useBuiltIns": "entry" 使用
import "core-js";

function createPromise ({
  ms = 1000,
  isReject= false,
  val
} = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      (isReject ? reject : resolve)(val)
    }, ms)
  })
}

createPromise({ val: 'My name is guoguo' })
.then(console.log)
