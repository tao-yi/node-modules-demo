/**
debug exposes a function; 
simply pass this function the name of your module, 
and it will return a decorated version of console.error 
for you to pass debug statements to. 
This will allow you to toggle the debug output for different parts of your module 
as well as the module as a whole.
 */

// 可以使用DEBUG环境变量来控制输出的日志
// DEBUG=http node index.js
// DEBUG=worker:a node index.js
// DEBUG=worker:b node index.js
// DEBUG=worker:a,http node index.js
// DEBUG=worker:* node index.js

const debug = require('debug')('http');
const http = require('http');
const name = 'My App';

// fake app
debug('booting %o', name);

http
  .createServer((req, res) => {
    debug(req.method + ' ' + req.url);
    res.end('hello\n');
  })
  .listen(3000, function() {
    debug('listening');
  });

// fake worker of some kind
require('./worker');
