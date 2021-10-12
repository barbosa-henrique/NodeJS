//funcao que recebe dois parametros numericos e retorna sua soma
//funcao nomeada
function calcularSoma(valor1, valor2){

    if(typeof(valor1)!= "number" || typeof(valor2)!= "number"){ //typeof checar o tipo da variável/parâmetro // paipe paipe || é OU
        throw new Error("Os parâmetros devem ser numéricos!");
    }

    return valor1 + valor2;
}
exports.somar = calcularSoma; //criamos a propriedade 'somar', que aponta para a funcao calcularSoma

//função anônima
//neste exemplo, a função recebe dois parâmetros numéricos e retorna o maior deles
exports.buscarMaior = function (a, b = 0) { //b = 0, deixa o segundo parâmetro opcional

    if(typeof(a)!= "number" || typeof(b)!= "number"){ //typeof checar o tipo da variável/parâmetro // paipe paipe || é OU
        throw new Error("Os parâmetros devem ser numéricos!");
    }

    return a > b ? a : b; //IF operador ternário
}

//arrow function
//o parâmetro 's' deve ser uma string ou uma lista, pois somente estes podem executar a length
exports.calcularTamanho = (s) => {
    return s.length; //length retorna o tamanho da lista ou o tamanho da string
}