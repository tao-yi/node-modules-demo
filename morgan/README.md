### Introduction

HTTP request logger middleware for node.js

### Create a new morgan logger middleware function

---

```js
const logger = morgan(format, options);

// predefined format string
const tinyLogger = morgan('tiny');
const devLogger = morgan('dev');
```

### Predefined Formats

There are various pre-defined formats provided:

#### combined

Standard Apache combined log output.

```
:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
```

#### common

Standard Apache common log output.

```
:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]
```

#### dev

Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

```
:method :url :status :response-time ms - :res[content-length]
```

#### short

Shorter than default, also including response time.

```
:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
```

#### tiny

The minimal output.

```
:method :url :status :res[content-length] - :response-time ms
```

### skip

```js
// EXAMPLE: only log error responses
morgan('combined', {
  skip: function(req, res) {
    return res.statusCode < 400;
  }
});
```

### Tokens

`tokens` is an object with all defined tokens, `req` is the HTTP request and `res` is the HTTP response.

### Using format string of predefined tokens

```js
morgan(':method :url :status :res[content-length] - :response-time ms');
```

#### Creating a new tokens

To define a token, simply invoke morgan.token() with the name and a callback function. This callback function is expected to return a string value. The value returned is then available as ":type" in this case:

```js
morgan.token('type', function(req, res) {
  return req.headers['content-type'];
});
```
