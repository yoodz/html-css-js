const fs = require('fs')

function copyFile(src, dist) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dist));
}

copyFile('./copy.js', './copy-1.js')
