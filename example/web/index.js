const http = require('http')
http.createServer((req, res) => {
  console.log(req.url)
  res.end('hello')
}).listen(5000)

