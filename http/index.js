const express = require('express');
const ilog = require('ilog');
const app = express();

app.get('/api', (req, res, next) => {
  let { locale } = req;
  console.log(locale);

  res.send('hello');
});

app.listen(3000);
