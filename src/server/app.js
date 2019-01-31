const http = require('http');

var hostname = '127.0.0.1';
var port = 1337;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-type': 'text/plain' });
    response.end('Hello World\n');
}).listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});