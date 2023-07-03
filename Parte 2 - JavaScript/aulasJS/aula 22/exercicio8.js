// A sequência de Fibonacci é a sequência de números naturais que começa onde os dois primeiros são 1 e o próximo é a soma dos dois anteriores. Faça um programa que imprime os 50 primeiros termos dessa sequência.

const io = require("../io")

let num1 = 0;
let num2 = 1;

for (let i = 3; i <= 50; i++) {
  let total = num1 + num2;
  io.write(total + ' ');

  num1 = num2;
  num2 = total;
}