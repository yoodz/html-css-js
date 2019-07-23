const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('./2019-6-1.log')
});

rl.on('line', (line) => {
    const arr = line.split(' ');
    console.log(arr.toString());
    console.log('访问时间：%s %s', arr[0], arr[1]);
});