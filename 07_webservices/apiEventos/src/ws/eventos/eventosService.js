const Evento = require("./evento");

//metodos de acesso (verbos HTTP)
Evento.methods(["get", "post", "put", "delete"]);

Evento.updateOptions({new: true, runValidators: true});

module.exports = Evento;

