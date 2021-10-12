const restful = require('node-restful');
const mongoose = restful.mongoose;

const m_evento = new mongoose.Schema ({
    descricao: {type: String, required: true},
    data: {type: Date, required: true},
    preco: {type: Number}
});

module.exports = restful.model('eventos', m_evento);