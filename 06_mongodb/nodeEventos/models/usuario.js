module.exports=function(app){

    let mongoose = require('mongoose');
    let Schema = mongoose.Schema;
    
    let m_usuario = Schema ({
        nome: {type: String, required: true, index: {unique: true}},
        senha: {type: String, required: true}
    });

    return mongoose.model('usuarios',m_usuario);
}