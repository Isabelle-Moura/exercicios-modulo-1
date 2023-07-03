//Faça um programa para imprimir os múltiplos de 5 menores ou igual a n, sendo n fornecido pelos usuários. Não use comando de decisão.

const io = require("../io");

io.write("Digite um número qualquer e o programa mostrará todos os números, menores que o número escolhido, que são múltiplos de 5. ");

io.write("Digite um número: ");
const n1 = io.readInt();

io.write("Os números que são múltiplos de 5 menores que o número digitado são:");

let contador = 5;

while (contador <= n1){
  io.write(contador)
  contador = contador + 5;
}

// io.write(
//   "Digite um número qualquer e o programa mostrará todos os números, menores que o número escolhido, que são múltiplos de 5. "
// );

// io.write("Digite um número: ");
// const n1 = io.readInt();

// let contador = 0;

// io.write(
//   "Os números que são múltiplos de 5 menores que o número digitado são:");

// while (contador <= n1) {
//   if (contador % 5 === 0) {
//     io.write(contador)
//   }
//   contador++;
// }
