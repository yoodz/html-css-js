var path = require("path");
var fs = require("fs");

var url = path.resolve('./');
let dirs = fs.readdirSync('./')
dirs.forEach((item)=> {
  let created = fs.readdirSync('./createByNode')
  // item.split('.')[1]
  if (item.indexOf('.') !== -1) {
    let end = item.split('.')[1]
    if (!created.includes(end)) {
      console.log('不存在目录' + end)
      fs.mkdirSync('./createByNode/' + end);
    }
  }
})
