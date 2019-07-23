'use strict';

let argv = process.argv.slice(2);
console.log(argv)

const execSync = require('child_process').execSync;

try {
    const str1 = execSync('git status', {encoding: 'utf8'});
    console.log(str1);
    
    const re = str1.match(/^On branch (.+)\s/);
    console.log('你现在所在分支：' + re[1] + '\n');
    const str2 = execSync('git pull origin ' + re[1], {encoding: 'utf8'});

    console.log(str2);

    const str3 = execSync('git add .', {encoding: "utf8"})
    console.log(str3)

    const str4 = execSync('git commit -m update', {encoding: "utf8"})
    console.log(str4)

    const str5 = execSync('git push', {encoding: "utf8"})
    console.log(str5)

} catch (err) {
    console.log('execute error：');
    console.log(err.toString());
}