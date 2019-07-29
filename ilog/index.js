/**
 * https://www.npmjs.com/package/ilog
 */
const ilog = require('ilog');

ilog('hello', { a: 1, b: 2 }, { a: { b: { c: 1 } } });
ilog.error();
ilog.error(null);

// 设置日志登记
ilog.level = 3;

/**
ilog.emerg(error) [level 0]
ilog.alert(error) [level 1]
ilog.crit(error) [level 2]
ilog.error(error) [level 3]
ilog.warning(error) [level 4]
 */

ilog.error(new Error('test error'));
// 输出:[2015-11-02T14:07:52.368Z] ERROR {"message":"test error","name":"Error","stack":"Error: test error\n at..."}

ilog.warning(new Error('test warning'));
// [2019-07-23T10:31:23.434Z] WARNING {"name":"Error","message":"test warning","stack":"Error: test warning\n at...
// 但是 Nothing, because log level is lower than warning level[level 4]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newarr = arr.slice(0, 5);

console.log(newarr);
