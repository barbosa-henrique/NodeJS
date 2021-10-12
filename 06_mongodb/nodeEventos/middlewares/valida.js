module.exports = function(request,response,next){
 if(!request.session.sessao_usuario){
    return response.redirect('/');
 }   
    return next();
}
