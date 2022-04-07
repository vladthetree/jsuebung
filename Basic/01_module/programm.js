var http = require('http');
var dt = require('./myfirstmodule'); // ./ -> die File ist im selben Ordner wie die main

http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Hello World!');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently : " + dt.myDateTime());
    res.end();
}).listen(8080);


console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
