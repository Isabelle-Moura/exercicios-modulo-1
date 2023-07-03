// Faça um programa de computador que leia números reais maiores que zero. Quando for digitado o número zero, o programa deverá apresentar quantos números foram entrados e a média destes.

const io = require("../io");

let quantidadeNumeros = 0;
let somaNumeros = 0;
let media = 0;

for (let i = 1; i <= 100; i++) {
  io.write(`Digite o número ${i}:`);
  let numero = io.readInt();

  if (numero > 0) {
    quantidadeNumeros++;
    somaNumeros += numero;
    media = somaNumeros / quantidadeNumeros;
  }
  if (numero == 0) {
    io.write("Quantidade de números inseridos: "+ quantidadeNumeros);
    io.write("Média dos números:"+ media);
    break
  }
}
