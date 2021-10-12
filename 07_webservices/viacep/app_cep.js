let fetch = require('node-fetch');
 
//o componente fech utiliza Promises para exceutar suas tarefas
let endereco = {};
 
let url = 'https://emiliocelso.com.br/api/android/';
 
fetch(url)
    .then(res=> {
let x = res.json();
return x;
    })
    .then(saida=> {
lista = saida;
 
for (let i = 0; i <lista.length; i++){
console.log('\nNome: ' + lista[i].Nome);
console.log('Telefone: ' + lista[i].Telefone);
 
        }
// console.log('Logradouro: ' + endereco.logradouro);
// console.log('Bairro: ' + endereco.bairro);
// console.log('Cidade: ' + endereco.localidade);
    });