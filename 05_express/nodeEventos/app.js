let express = require('express');
let load = require ('express-load');

let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let expressSession = require('express-session');
let error = require('./middlewares/error')

app = express();

//configurações do objeto app
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.use(cookieParser('nodeEventos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//usando o express load
load('models')
  .then('controllers')
  .then('routes')
  .into(app);


//middlewares

app.use(error.notfound);
app.use(error.serverError);
app.listen(3000,function(){
  console.log('Aplicado no ar');
});