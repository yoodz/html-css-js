var dayjs = require('dayjs');
// var moment = require('moment');

// console.log(moment(new Date()));
// console.log(dayjs('2018-08-08').date());
// console.log(dayjs().add(1, 'year').toJSON());
// console.log(dayjs().isBefore(dayjs('2022-08-08')));
console.log(dayjs().minute());
console.log(dayjs(1318781876406).format("YYYY-MM-DD"));
console.log(dayjs().set('month', 3).month());

// let interval = setInterval(()=> {
//   console.log(dayjs().millisecond());
// }, 1)

// setTimeout(() => {
//   clearInterval(interval)
// }, 3000);
