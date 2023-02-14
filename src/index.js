const http = require('http')

const users = require('./mocks/users')

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  if (request.url === '/users' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(users))
  }
  //   response.writeHead(200, { 'Content-Type': 'text/html' })
  // response.end('<h1>Hello World</h1>')
})

server.listen(3333, () =>
  console.log('server started at http://localhost:3333')
)
