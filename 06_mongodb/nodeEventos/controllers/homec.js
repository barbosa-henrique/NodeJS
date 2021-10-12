module.exports= function(app){

    let Usuario = app.models.usuario;

    let crypto = require('crypto');

    let homeController = {
        auth:function(request,response){
            response.render('home/auth');
        },

        login: function(request,response){
            //obtendo valores de campos de entrada
            let nome = request.body.usuario.nome;
            let senha = request.body.usuario.senha;

            let query = { 'nome': nome, 'senha': crypto.createHash('sha256').update(senha).digest('hex')
        
        };

            Usuario.findOne(query).exec(function(erro, usuario){
                if(erro){
                    response.redirect('/');

                } else {
                    let user = usuario;
                    request.session.sessao_usuario = user;
                    response.redirect('/menu');   
                }

            });

            //comparando valores lidos
            // if(nome == 'admin' && senha == 'admin'){
            //     //armazenamos o usuario sessão
            //     let user = request.body.usuario;
            //     request.session.sessao_usuario = user;

            //     response.redirect('/menu');

            // } else {
            //     response.redirect('/');
            // }
        },
        logout: function(request,response){
            request.session.destroy();
            response.redirect('/');
        }
    };
    return homeController
}