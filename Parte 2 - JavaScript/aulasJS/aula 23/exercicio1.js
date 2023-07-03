// Faça um programa de computador para receber 10 números inteiros e depois imprimir seus sucessores.

const io = require("../io")

let numeros = [];
let sucessores = [];

for (let i = 1; i <= 10; i++) {
  io.write(`Digite o ${i}º número`);
  let numero = io.readInt();
  numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
  let sucessor = numeros[i] + 1;
  sucessores.push(sucessor);
}

io.write("Os sucessores dos números digitados são:");
io.write(sucessores);