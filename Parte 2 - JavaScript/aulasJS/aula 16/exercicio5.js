// Faça um programa que escreva a raiz cúbica de 13 (dizer “raiz cúbica de 13” é a mesma coisa de dizer “13 elevado à ⅓”. No JS, use ** para a operação de potência).

const io = require("../io")

let calculo
calculo = 13 ** (1/3) //quando coloquei parenteses no 1/3, o valor deu diferente. Pq?

console.log(calculo)