let colecoes = require("./listas/listaDados");

console.log(colecoes.cursos);

//criar uma lista dos cursos ativos (status = true)
let ativos = colecoes.cursos.filter(item => item.status == true); //'item' é o nome que vc atribui, pode ser qualquer palavra
console.log(ativos);


//gerar uma nova lista de cursos, com base na lista original
let novosCursos = colecoes.cursos.map((elemento, posicao) => {
    return { chave: posicao, curso: elemento.descricao, ativo: (elemento.status?"Sim": "Não")}
}); //nome do parâmetro vc coloca o que quiser, o mais importante é a posição
console.log(novosCursos);
