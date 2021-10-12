//a lista de nomes deve ser exportada, devido a isso, não vamos declarar a lista pelo 'let', será 'exports'
exports.nomes = ["Jose Carlos", "Daniela", "Marcos", "Bernardo", "Ana Paula"];

//objeto chamado empresa: apresenta os dados de uma empresa // dejtro das {}, vão as propriedades do objeto
exports.empresa = {
    razaoSocial: "Coop - Cooperativa de Consumo",
    endereco: {
        logradouro: "Rua conselheiro Justino",
        numero: 56,
        cidade: "Santo André"
    },
    funcionarios: this.nomes //this faz referencia ao próprio módulo
}

//lista de objetos - lista de cursos, onde cada curso é um objeto // ':' indica o detalhe das propriedades
exports.cursos = [
    {descricao: "Psicologia",          ch: 4800, periodo: "MANHÃ",    status: true}, 
    {descricao: "Análise de sistemas", ch: 2800, periodo: "NOITE",    status: true}, 
    {descricao: "Turismo",             ch: 3200, periodo: "INTEGRAL", status: false} //cada elemento é um objeto
];