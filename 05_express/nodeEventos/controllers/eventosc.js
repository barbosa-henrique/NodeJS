module.exports = function(app){

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
        let usuario = request.session.sessao_usuario;
        params = {usuariov: usuario}
    response.render('eventos/listaEventos',params);
    }
    
};

return EventosController
}