
function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

// 用法
async function one2FiveInAsync() {
  for(let i = 1; i <= 5; i++) {
    console.log(i);
    await sleep(1000);
  }
}

one2FiveInAsync();
return
// const returnPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('3s after')
//     resolve('finish')
//   }, 3000)
// })
function returnPromise1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('3s after')
      resolve('finish')
    }, 3000)
  })

}
// returnPromise.then(function (value) {
//   console.log(value)
// })
async function main() {
  await returnPromise1()
  console.log('running..')
}

main()

