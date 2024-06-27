// 1. Pergunte um número para base;
// 2. Pergunte também o expoente.
// 3. Calcule a potência apenas utilizando do operador matemático + (soma)
let resultado;
const prompt = require("prompt-sync")();
let numero = +prompt("Digite um número ");
let expoente = +prompt("Digite o expoente ");
for (let i = 0; i < expoente; i++) {
  resultado = numero ** expoente;
}
console.log(resultado);
