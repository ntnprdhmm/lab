let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer();

server.on('request', (request, response) => {

    fs.readFile('index.html', 'utf8', (err, data) => {

        if (err) {
            response.writeHead(404, {
                'Content-Type': 'text/html; charset=utf8'
            });
            response.end('This file does not exists');
        } else {
            let query = url.parse(request.url, true).query;
            let name = query.name === undefined ? 'dude' : query.name;

            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf8'
            });

            data = data.replace('{{ name }}', name);

            response.end(data);
        }

    });

});

server.listen(8080);