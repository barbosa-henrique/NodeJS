module.exports= function(app){
    let homeController = {
        auth:function(request,response){
            response.render('home/auth');
        },

        login: function(request,response){
            //obtendo valores de campos de entrada
            let nome = request.body.usuario.nome;
            let senha = request.body.usuario.senha;
            //comparando valores lidos
            if(nome == 'admin' && senha == 'admin'){
                //armazenamos o usuario sessão
                let user = request.body.usuario;
                request.session.sessao_usuario = user;

                response.redirect('/menu');

            } else {
                response.redirect('/');
            }
        },
        logout: function(request,response){
            request.session.destroy();
            response.redirect('/');
        }
    };
    return homeController
}