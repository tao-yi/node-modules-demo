const request = require('request-promise')

const options = {
  uri: 'https://api.github.com/user/repos',
  qs: {
    access_token: 'a00d9eea673de917d132ff4173745d94e9d8feb6'
  },
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true // automatically parses the JSON string in the response
}

request(options)
  .then(repos => console.log(repos.length))
  .catch(err => console.log(err))

request({
  method: 'POST',
  uri: 'http://api.posttestserver.com/post',
  body: {
    some: 'payload'
  },
  json: true // Automatically stringifies the body to JSON
})
  .then(function (parsedBody) {
    console.log(parsedBody)
  })
  .catch(function (err) {
    console.log(err)
  })
