//java script não requer ';' para encerrar o comando, mas é uma boa prática
//declarando variáveis
let nome = "Henrique Douglas Barbosa";
let curso = "Node.js";
let ch = 32;
let status = true; //o curso está ativo

console.log("Nome do aluno: " + nome);
console.log(`Nome do curso: ${curso}`); //crase `` = interpolação; é mais eficiente do que a concatenação, economiza memória
console.log("Carga horária: " + ch + " horas");
//console.log(status); //colocado no IF a seguir;

//let texto = `Meu texto 
//
//                               preferência` //cuidado com a interpolação, ela mantém todo o mesmo espaço

//IF Clássico
if (status == true){
    console.log("O curso está ativo");
} else {
    console.log("O curso está inativo");
}

//IF operador ternário 
status == true ? console.log("O curso está ativo") : console.log("O curso está inativo");

//IF operador ternário  resumido
console.log(status ? "O curso está ativo" : "O curso está inativo")