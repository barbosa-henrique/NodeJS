//usaremos as funcoes definidas no módulo apiFuncoes.js
let fn = require("./funcoes/apiFuncoes");

let soma1 = fn.somar(3 , 5);
console.log("Soma: "+soma1);

//let soma2 = fn.somar("Três", "Cinco"); //essa linha vai dar erro, pq os parâmetros devem ser númericos para excutar a função 'somar'
//console.log(soma2);

let maior = fn.buscarMaior(3, 5);
console.log("Maior valor: "+maior);

maior = fn.buscarMaior(3); //só se declara a variável uma única vez com o 'let', se o usar o 'let' novamente, está se redeclarando a variável
//o primeiro parâmetro nunca pode ser opcional, tudo o que for obrigatório primeiro e os opcionais por último
console.log("Maior valor: "+maior);

let tamanho = fn.calcularTamanho("Texto cujo tamanho deve ser calculado");
console.log("Tamanho: '" + tamanho);