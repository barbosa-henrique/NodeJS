let colecoes = require("./listas/listaDados");

console.log(colecoes.nomes);

//aplicar um filtro à lista de nomes. O filtro é uma função callback
//let lista = colecoes.nomes.filter(item => item.endsWith("s"));
//let lista = colecoes.nomes.filter(item => item.startsWith("s"));

//obtendo valores do console --começam com:
let input = process.argv[2];
let lista = colecoes.nomes.filter(item => item.startsWith(input));
console.log("Os nomes que começam com a letra: "+input, "são: " + lista);

//obtendo valores do console --contém:  ESSE NÃO PEGUEI LEGAL COMO FAZER KKKKKKKKKK
//let input = process.argv[2];
//let lista = colecoes.nomes.filter(item => item.includes(input));
//console.log("Os nomes que começam com a letra: "+input, "são: " + lista);

//alterar os elementos na exibição (map)
let dados =colecoes.nomes.map((valor, indice) => { //funcao map tem como parâmetro default, colocar como primeiro parâmetro o VALOR da lista e depois o INDICE, representa a posicao do elemento
    console.log(indice + ": " + valor);
    return indice + ": " + valor;
});
console.log(dados);