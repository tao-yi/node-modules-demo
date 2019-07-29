const morgan = require('morgan');
// Create a new morgan logger middleware function using the given format and options.
// The format argument may be a string of a predefined name (see below for the names),
// a string of a format string, or a function that will produce a log entry.

const express = require('express');
const fs = require('fs');
const FileStreamRotator = require('file-stream-rotator');
const path = require('path');
const app = express();

// 设置日志文件目录
const logDir = path.join(__dirname, '/logs');
// 确保日志文件目录存在，没有则创建
fs.existsSync(logDir) || fs.mkdirSync(logDir);

// 创建一个写入流
const accessLogStream = FileStreamRotator.getStream({
  filename: logDir + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false
});

// app.use(morgan('dev'));
// 将日志写入文件
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3000, (req, res) => console.log('started'));
