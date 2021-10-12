let fn = require("./funcoes/callbacks");

let res1 = fn.executar(function(item){
    return item.length;
});
console.log("res1: " + res1);


let res2 = fn.executar(function(item){
    return item == 'impacta';
});
console.log("res2: " + res2);

let res3 = fn.executar(function(item){
    return item.toUpperCase();
});
console.log("res3: " + res3);

let res4 = fn.executar(function(item){
    return [item.length, item == 'impacta', item.toUpperCase()];
});
console.log('res4: ' + res4);



//função buscar
let nomes = ["Jonas", "João", "Denis", "Daniela", "Ana Paula", "Luciana"];

let res5 = fn.buscar(nomes, function(item){
    return item.endsWith("s");
});
console.log("res5(subLista): "+ res5);

let res6 = fn.buscar(nomes, item => item.length == 4);
console.log("res66 (sublista): " + res6);