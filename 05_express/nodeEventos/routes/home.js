module.exports = function(app){
    
    let valida = require('./../middlewares/valida');

    let homec = app.controllers.homec;
    let eventosc = app.controllers.eventosc;
    
    //rotas para o controler homec
    app.get('/',homec.auth);
    app.post('/login', homec.login);
    app.get('/logout', homec.logout);

    //rota para o controller eventoc
    app.get('/menu',valida, eventosc.menu);

    app.get('/cadEvento',valida, eventosc.cadastroEvento);
    app.get('/cadUsuario',valida, eventosc.cadastroUsuario);
    app.get('/listaEventos',valida, eventosc.listaEventos);

}