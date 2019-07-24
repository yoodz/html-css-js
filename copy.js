const fs = require('fs')

function copyFile(src, dist) {
  let rs = fs.createReadStream(src)
  rs.pipe(fs.createWriteStream(dist));
  rs.on('end', function(){
    console.log('done');
    //删除文件
    fs.unlink('./copy-1.js', function(){
      console.log('done');
    })
  })
}

copyFile('./copy.js', './copy-1.js')
