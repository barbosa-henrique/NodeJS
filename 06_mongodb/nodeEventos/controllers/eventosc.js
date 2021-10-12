module.exports = function(app){

    let Usuario = app.models.usuario;
    let Evento = app.models.evento;

    let crypto = require('crypto');


let EventosController = {
    menu: function(request,response){
        let usuario = request.session.sessao_usuario;
            params = {usuariov: usuario}
        response.render('eventos/menu',params);
    },
    
    cadastroUsuario: function(request,response){
        let usuario = request.session.sessao_usuario;
        params = {usuariov: usuario}
    response.render('eventos/cadUsuario',params);
    },
    
    cadastroEvento: function(request,response){
        let usuario = request.session.sessao_usuario;
        params = {usuariov: usuario}
    response.render('eventos/cadEvento',params);
    },
    
    listaEventos: function(request,response){

        Evento.find(function(erro, lista_eventos){
            if(erro){
                response.redirect('/menu');

            } else {
                let usuario = request.session.sessao_usuario;
                params = {
                    usuariov: usuario,
                    eventosv: lista_eventos
                };
                response.render('eventos/listaEventos',params);

            }
        });
    //     let usuario = request.session.sessao_usuario;
    //     params = {usuariov: usuario}
    // response.render('eventos/listaEventos',params);
    },

    novoUsuario: function(request,response){
        let nome = request.body.usuario.nome;
        let senha = request.body.usuario.senha;
        let confirma = request.body.usuario.confirma;

        //verificando as senhas
        if(senha != confirma){
            response.redirect('/cadUsuario');
        } else {
            let novo_usuario = {
                nome: nome,
                senha: crypto.createHash('sha256').update(senha).digest('hex')
            } 

            Usuario.create(novo_usuario, function(erro, usuario){
                if(erro){
                    response.redirect('/cadUsuario');
                } else {
                    response.redirect('/menu')
                }
            });
        }
        
    },
    novoEvento: function(request,response){
        let novo_evento = request.body.evento;

        Evento.create(novo_evento, function(erro, evento){
            if(erro){
                response.redirect('/cadEvento');
                
            } else {
                response.redirect('/menu')
            }
        });
    }
};

return EventosController
}