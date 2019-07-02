const fs = require('fs')

// const remFile = fs.readFileSync('./rem.html')
// console.log(remFile.toString());

// fs.stat('./rem.html', function (err, stats) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log(stats);
//   console.log("读取文件信息成功！");

//   // 检测文件类型
//   console.log("是否为文件(isFile) ? " + stats.isFile());
//   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
//   console.log("是否为目录(isDirectory) ? " + stats.size);
// });
// buf = Buffer.alloc(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }

// console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,5));   // 输出: abcde
// console.log( buf.toString('utf8',0,5));    // 输出: abcde
// console.log( buf.toString(undefined,0,5));
// return

//创建一个长度为10000，初始值为0的数组
let arr = new Array(1000000)
arr.fill(0)

let str = ''
arr.map(()=>{
  str += 'hello node js ' + new Date() + '\r\n'
})

fs.writeFile('./writeByNodejs.txt', str , {flags:'r+'}, function (err, fd) {
  console.log('done');
})

// fs.open('./writeByNodejs.txt', 'r+', function (err, fd) {
//   fs.write(fd, str, { flag: 'a' }, function () {
//     console.log('finished');
//   });
//   fs.close(fd, function (err) {
//     if (err) {
//       console.log(err);
//     }
//     console.log("文件关闭成功！");
//   });
// })