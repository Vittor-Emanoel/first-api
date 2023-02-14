const http = require('http')
const { text } = require('stream/consumers')

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.end('<h1>Hello World</h1>')
})

server.listen(3333, () =>
  console.log('server started at http://localhost:3333')
)
