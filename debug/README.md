## 快速使用
```js
const debug = require('debug');

const a = debug('a');
const b = debug('b');

a('logging msg for a');
b('logging msg for b');

```

使用DEBUG环境变量开启node进程来控制输出的日志：

```shell
$ DEBUG=* node test.js
$ DEBUG=a node test.js
$ DEBUG=b node test.js
```


```js
const debug = require('debug')('http');
```

可以使用DEBUG环境变量来控制输出的日志
```shell
$ DEBUG=http node index.js
$ DEBUG=worker:a node index.js
$ DEBUG=worker:b node index.js
$ DEBUG=worker:a,http node index.js
$ DEBUG=worker:* node index.js
```

```js
const a = require('debug')('worker:a');
const b = require('debug')('worker:b');

function work() {
  a('doing lots of uninteresting work');
  setTimeout(work, Math.random() * 1000);
}

work();

function workb() {
  b('doing some work');
  setTimeout(workb, Math.random() * 2000);
}

workb();
```

