console.log("Welcome To IT122 - server started")
'use strict'
import express from 'express';
import exphbs from "express-handlebars"


const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.engine("handlebars", exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

// This create server is replaced by above ^
// http.createServer((req,res) => {
//     var path = req.url.toLowerCase();
//     let url = req.url.split("?");
//     let query = parse(url[1]);

// No longer using switches - need to use express syntax found below this
//     console.log(path)
//     switch(path) {
//         case '/':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end(JSON.stringify(getAll()));
//             break;
//         case '/about':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('About page');
//             break;
//         case '/detail':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end(JSON.stringify(getItem('Gem Lake')));
//             break;
//         default:
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.end('Not found');
//             break;
//     }
// }).listen(process.env.PORT || 3000);

// Must go in order of most detailed, to least detailed
// send static file as response
app.get('/', (req,res) => {
    res.render('home', {trails : trails.getAll()});
   });

// send plain text response
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
    });

app.get('/detail', (req,res) => {
    res.type('text/html');
    res.sendFile('./public/home.html');
    });

// MUST COME LAST, or will always execute 
app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
    });

// Start a web server
app.listen(app.get('port'), () => {
    console.log('Express started');
    });

// import * as data from './data.js';
import { getAll, getItem } from './data.js';
