const http = require('http')
const url = require('url')
const fs = require('fs')

const app = require('./app')

const hostname = "127.0.0.1"
const port = 3030

const server = http.createServer(app)

server.listen(port, hostname, () => console.log("Server listening on port " + port))