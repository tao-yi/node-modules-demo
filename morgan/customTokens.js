const express = require('express');
const morgan = require('morgan');
const uuid = require('node-uuid');

morgan.token('id', function getId(req) {
  return req.id;
});

function assignId(req, res, next) {
  req.id = uuid.v4();
  next();
}

const app = express();
app.use(assignId);
app.use(morgan(':id :method :url :response-time'));

app.get('/', (req, res) => {
  res.send('hello, world!');
});

app.listen(3000, () => console.log('started'));
