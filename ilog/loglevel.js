const ilog = require('ilog');

ilog.level = 7;

/**
只有ilog.level高于指定的level才会打印出对应的日志
0 emerge
1 alert
2 crit
3 error
4 warning
5 notice
6 info
7 debug
 */

// ilog.error(new Error('new error'));
// ilog.error('test error2');

ilog.warning(new Error('new warning'));
ilog.info('{a: 1, b: 2}');
ilog.debug('Hello, %s', [1, 2, 3], { a: 1, b: 2 });

// auto

ilog.auto(new Error('some error'), { a: 1, b: 2 });
// Output: [2015-11-02T14:13:24.409Z] ERROR {"message":"some error","name":"Error","stack":"Error: some error\n ..."}
ilog.auto(null, { a: 1, b: 2 });
// Output: [2015-11-02T14:14:18.483Z] INFO {"a":1,"b":2}
ilog.auto({ a: 1, b: 2 });
// Output: [2015-11-02T14:14:53.412Z] INFO {"a":1,"b":2}
ilog.auto(null, { a: 1, b: 2 }, [1, 2, 3]);
// Output: [2015-11-02T14:15:16.933Z] DEBUG { a: 1, b: 2 } [ 1, 2, 3 ]
ilog.auto({ a: 1, b: 2 }, [1, 2, 3]);
// Output: [2015-11-02T14:15:41.398Z] DEBUG { a: 1, b: 2 } [ 1, 2, 3 ]
