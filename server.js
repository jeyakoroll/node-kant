const http = require('http');
const handler =require('./modules/handler');

const server = new http.Server();

const emit = server.emit;

server.on('request', handler);

server.emit = (...args) => {
    console.log(args[0]);
    emit.apply(server, args);
}

server.listen(8000);