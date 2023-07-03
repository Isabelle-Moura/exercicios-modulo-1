//Fatorial de um número natural é a multiplicação dos naturais menores ou igual a ele. 5! = 5x4x3x2x1. Faça um programa que receba do usuário um número n calcule seu fatorial.

const io = require("../io");

//f = n * 

io.write("Defina o valor de n é o programa irá dizer qual o seu fatorial.");

io.write("Digite o valor de n: ");
let numero = io.readInt();

let fatorial = 1;
let contador = 2;

while (contador <= numero) {
  fatorial *= contador;
  io.write("O fatorial de n é: " + fatorial);
  contador++;
}







//Aqui eu fiz um calculo que funcionou, que multiplica um número por ele mesmo. Não foi isso que foi pedido, mas funcionou e eu AMEI!
// let count = 0
// let resultado = 0

// while (count <= n){
//   resultadp = n * count
//   count++
//   io.write("O resultadp de n é: " + resultadp)
// }

/* resolução da Jéssica (Mentira, do chatGPT) */

/**
 * function calcularFatorial(n) {
  let fatorial = 1;
  for (let i = 1; i <= n; i++) {
    fatorial *= i;
  }
  return fatorial;
}

const numero = parseInt(prompt("Digite um número:"));
const fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${fatorial}`);

 */
