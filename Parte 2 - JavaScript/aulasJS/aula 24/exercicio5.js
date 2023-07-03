// Faça uma função que leia um número não determinado de valores positivos e retorna a média aritmética dos mesmos. (Utilize o número -1 como critério de parada da repetição).

const io = require("../io")

function calculoMedia() {
    let numeros = [];
    let soma = 0;
    let count = 0;
  
    for (;;) {
      io.write("Digite um número positivo e, caso queira parar, digite -1: ");
      let numero = io.readInt();
  
      if (numero === -1) {
        break;
      }
  
      if (numero >= 0) {
        numeros.push(numero);
        soma += numero;
        count++;
      }
    }
  
    let media = soma / count;
    return media;
  }
  
  let valorTotal = calculoMedia();
  io.write("O cálculo da média total dos números digitados é " + valorTotal);  