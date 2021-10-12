const port = 3200;

const bodyParser = require("body-parser");
const express = require("express");
const allowCors = require("./cors");

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function(){
    console.log(`Servico no ar, na porta ${port}`);
});

module.exports = server;