//Faça um programa de computador para receber 10 números e depois imprimir os números classificados como primos.

const io = require("../io")

let primos = [];

for (let i = 1; i <= 10; i++) {
  io.write(`Digite o ${i}º número: `);
  let numero = io.readInt();
  let isPrimo = true;

  if (numero <= 1) {
    isPrimo = false;
  } else {
    for (let j = 2; j < numero; j++) {
      if (numero % j === 0) {
        isPrimo = false;
        break;
      }
    }
  }

  if (isPrimo) {
    primos.push(numero);
  }
}

io.write("Números primos: " + primos.join(", "));