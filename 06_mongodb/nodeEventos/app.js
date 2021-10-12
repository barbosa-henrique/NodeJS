let express = require('express');
let load = require ('express-load');

let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let expressSession = require('express-session');
let error = require('./middlewares/error')

app = express();

//informações para o banco de dados
let mongoose = require("mongoose");

//global.db = mongoose.connect('mongodb://localhost:27017/db_eventos',{
//  useNewUrlParser:true,
//  useUnifiedTopology: true
//});

 global.db = mongoose.connect('mongodb+srv://henrique:14367496@cluster0.9idgy.mongodb.net/henrique?retryWrites=true&w=majority',{
   useNewUrlParser:true,
   useUnifiedTopology: true
 });

mongoose.connection.on('connected',function(){
  console.log('...Conexão estabelecida com sucesso...');
});
mongoose.connection.on('error', function(erro){
  console.log(`...Erro reportado: ${erro}...`);
})
mongoose.connection.on('disconected', function(){
  console.log('...Conexão finalizada...');
})


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