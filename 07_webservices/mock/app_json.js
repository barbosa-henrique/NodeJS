let axios = require('axios');
let fs = require('fs');
 
let descricao = process.argv[2];
let preco = parseFloat(process.argv[3]);
 
let produto = { "descricao": descricao, "preco": preco };
 
//adicionando o produto
 
axios.post("http://localhost:3200/produtos", produto)
    .then(resposta => {
        console.log(resposta.data);
        console.log('Produto incluido');
 
    })
 
axios.get('http://localhost:3200/produtos')
    .then(resposta => {
        lista = resposta.data;
 
        //a partir desta variavel podemos gerar arquivos, armzenar em outros bancos e etc console.log(resposta);
        mostrarProdutos(lista);
        console.log(resposta.data);
    });
 
function mostrarProdutos(lista){
 
    let texto = ""
    for (let i = 0; i < lista.length; i++) {
        texto += "Descrição: " + lista[i].descricao +
                 "\nPreço: " + lista[i].preco + '\n';
    }
 
    //console.log(texto);
    fs.writeFile("./dados.txt", texto, function(erro){
        if(erro){
        console.log('Ocorreu um erro');
        } else {
            console.log('Arquivo gerado com sucesso')
        }
    })
}