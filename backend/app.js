const express = require('express');
const server = express();

//Configs
server.set('port',8080);
server.set('host','localhost');

//Middlewares
server.use(express.json());

//Routes
server.get('/', function (req, res) {
   res.send('<h1> Hola mundo con Express </h1>')
});

module.exports = server;
