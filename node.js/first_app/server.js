let http = require('http');
let fs = require('fs');

let server = http.createServer();

server.on('request', (request, response) => {

    fs.readFile('index.html', (err, data) => {

        if (err) {
            response.writeHead(404, {
                'Content-Type': 'text/html; charset=utf8'
            });
            response.end('This file does not exists');
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf8'
            });
            response.end(data);
        }

    });

});

server.listen(8080);