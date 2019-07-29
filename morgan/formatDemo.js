const morgan = require('morgan');
const express = require('express');
const app = express();

app.get('/tiny', morgan('tiny'), (req, res) => {
  res.send('tiny');
});

app.get('/dev', morgan('dev'), (req, res) => {
  res.send('dev');
});

app.get('/combined', morgan('combined'), (req, res) => {
  res.send('combined');
});

app.get('/short', morgan('short'), (req, res) => {
  res.send('short');
});

app.get('/common', morgan('common'), (req, res) => {
  res.send('common');
});

app.get(
  '/custom-token',
  morgan('HTTP method: :method Url: :url Status: :status :res[content-length]'),
  (req, res) => {
    res.send('custom token');
  }
);

app.get(
  '/custom-token-function',
  morgan(function(tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      tokens['response-time'](req, res),
      'ms'
    ].join(' ');
  }),
  (req, res) => {
    res.send('custom-token-function');
  }
);

app.listen(3000, (req, res) => console.log('started'));
