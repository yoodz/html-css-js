let a = {
  'one': 'one',
  'two': 'two',
  'three': {
    'one': 1
  }
}

// 深拷贝
let b = JSON.parse(JSON.stringify(a))

// 浅拷贝
let c = Object.assign({}, a)
console.log(c);
a.three.one = 2
// console.log(a)
// console.log(b);
console.log(c);
