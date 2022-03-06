const http = require('http');

const routes = require('./routes');

const server = http.createServer (routes.handeler);

server.listen(3000);