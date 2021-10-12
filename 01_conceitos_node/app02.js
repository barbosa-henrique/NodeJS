//neste app, vamos usar as listas definidas no arquivo listaDados.js
let colecoes = require("./listas/listaDados"); //toda variável declarada dentro de um módulo, é uma propriedade
//colecoes acessa o módulo 'listaDados.js'
console.log(colecoes.nomes);
console.log(colecoes.empresa);
console.log(colecoes.cursos);