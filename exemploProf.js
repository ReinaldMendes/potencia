let resultado = 0;
const prompt = require("prompt-sync")();
let numero = +prompt("Digite um número ");
let expoente = +prompt("Digite o expoente ");
let base_aux = 1;
for (let j = 0; j < expoente; j++) {
  resultado = 0;
  for (let i = 0; i < numero; i++) {
    resultado += base_aux;
  }
  base_aux = resultado;
}
console.log(resultado);
