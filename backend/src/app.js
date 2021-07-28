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
server.use('/usuarios',require('./routes/usuarios.js'))

server.get('*', (req, res) => {
   res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada</h2>")
})

module.exports = server;

