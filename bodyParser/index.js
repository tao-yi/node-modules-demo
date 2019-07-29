const express = require('express');
/**
 * body-parser is a piece of express middleware 
 * that reads a form's input and stores it as a javascript object 
 * accessible through `req.body`
 * 
 * body-parser extract the entire body portion of 
 * an incoming request stream and exposes it on `req.body`.
 */
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

/**
1. bodyParser.json(options): 解析json数据
2. bodyParser.raw(options): 解析二进制格式(Buffer流数据)
3. bodyParser.text(options): 解析文本数据
4. bodyParser.urlencoded(options): 解析UTF-8的编码的数据。
*/

/**
POST提交的四种Content-Type
1. application/x-www-form-urlencoded:提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。
2. multipart/form-data:使用表单上传文件时，必须让 <form> 表单的 enctype 等于 multipart/form-data
3. application/json: 用来告诉服务端消息主体是序列化后的 JSON 字符串。
4. text/xml: 它是一种使用 HTTP 作为传输协议，XML 作为编码方式的远程调用规范。
*/

// 创建 application/json 解析，通过Content-Type是否等于application/json判断
const jsonParser = bodyParser.json();

// 创建 application/x-www-form-urlencoded 解析
// 返回的req.body对象会包含 key-value pairs, where the value can be a string or array (when extended is false)
// or any type (when extended is true).
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get(['/', '/index'], (req,res)=>{
  // 绝对路径 /Users/tao/NodeProjects/npm-modules-demo/bodyParser/index.html
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

// POST /login 获取URL编码的请求体
app.post('/login', urlencodedParser, (req,res)=>{
  // 必须判断具体的键值，内容为空时 req.body 会是 {}
  if (!req.body.username) {
    // 返回400状态同时express会返回默认的http消息Bad Request
    return res.sendStatus(400)
  }
  res.send('welcome, '+req.body.username);
});

// POST /api/users 获取JSON编码的请求体
app.post('/api/users', jsonParser, (req,res)=>{
  if(!req.body.username) return res.sendStatus(400);
  // create user in req.body
  res.send(req.body);
});

app.listen(3000);
