var log4js = require('log4js');

const date = new Date()
let today = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()
log4js.configure({
  appenders: { first: { type: 'file', filename: today + '.log' } },
  categories: { default: { appenders: ['first'], level: 'error' } }
});

console.log( )
const logger = log4js.getLogger('first');

logger.trace('Entering first testing');
logger.debug('Got first.');
logger.info('first is Comté.');
logger.warn('first is quite smelly.');
logger.error('first is too ripe!');
logger.fatal('first was breeding ground for listeria.');
