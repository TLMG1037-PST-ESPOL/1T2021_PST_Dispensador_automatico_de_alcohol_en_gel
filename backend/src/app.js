const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');

//Configs
server.set('port', process.env.PORT || 8082);
server.set('host','localhost');

//Middlewares
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'build')));

//Routes
server.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
server.use('/usuarios',require('./routes/usuarios.js'))
server.use('/dispensador',require('./routes/dispensador.js'))

server.get('*', (req, res) => {
   res.status(404).sendFile(path.join(__dirname, 'build', 'index.html'))
})


module.exports = server;

