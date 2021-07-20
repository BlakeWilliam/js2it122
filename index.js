console.log("Welcome To IT122 - server started")

// import http from 'http'; now works - needed to add "type":"module" to package.json

// const http = require("http");

import http from 'http';
import { parse } from "querystring";
// This command starts a HTTP server 
http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    let url = req.url.split("?");
    let query = parse(url[1]);

    console.log(path)
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(getAll()));
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page');
            break;
        case '/detail':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(getItem('Gem Lake')));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);

// import * as data from './data.js';
import { getAll, getItem } from './data.js';
