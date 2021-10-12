const express = require("express");

module.exports = function(server){
    
    //URL base para todas as rotas
    const router = express.Router();
    server.use("/api",router);

    //rotas relacionadas aos models
    const Eventos = require("../ws/eventos/eventosService");

    Eventos.register(router, "/eventos");
}