module.exports=function(app){

    let mongoose = require('mongoose');
    let Schema = mongoose.Schema;
    
    let m_evento = Schema ({
        descricao: {type: String, required: true},
        data: {type: Date, required: true},
        preco: {type: Number}
    });

    return mongoose.model('eventos',m_evento);
}