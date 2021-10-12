exports.executar = function (callback) {
    return callback("impacta - Coop");
}

exports.buscar = function (lista, callback) {

    let subLista = [];
    //vamos fazer uma iteração sobre os elementos da lista
    for (let index = 0; index < lista.length; index++) { //index++ é operador de incremento
        if (callback(lista[index])) {
            subLista.push(lista[index]);
        }
    }
    return subLista;
}