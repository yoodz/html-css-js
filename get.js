
var http = require('http');

//get 请求外网

n = 0
while (n < 100000) {
  n = n + 1
  http.get('http://hao.dh923.com/?00526', function (req, res) {
  var html = '';
  req.on('data', function (data) {
    html += data;
  });
  req.on('end', function () {
    console.info(1);
  });

})
console.info(n);

}