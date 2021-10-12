//ECMAScript 6 - ES6 (java script não é o nome real)
let promise = new Promise((resolve, reject) => {
    let x = Math.random(); //gera valor entre 0 e 1
    //Consideraremos os valores acima de 0.5 como aceitáveis, e de 0.5 abaixo, como inaceitáveis
    if (x > 0.5) {
        resolve("Valor calculado: " + x);
    } else {
        reject("Valor inválido - insuficiente!!! " + x);
    }
});

console.log("----- ANTES DO PROMISE -----");

promise //pelo menos uma then e um catch devem existir //then é quando resolve e catch é reject
    .then(s => s.toUpperCase())
    .then(res => console.log(res))
    .catch(console.error);

console.log("----- APÓS O PROMISE -----");