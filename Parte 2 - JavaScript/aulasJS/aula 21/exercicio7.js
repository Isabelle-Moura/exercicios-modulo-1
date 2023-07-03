//Um programa para receber 10 números do usuário e acusar qual deles é o menor número.

const io = require("../io")

let menorNumero;

for (let i = 1; i <= 5; i++) {
  io.write(`Digite o número ${i}:`);
  const numero = io.readInt()

  if (i === 1 || numero < menorNumero) {
    menorNumero = numero;
  }
}
io.write(`O menor número é: ${menorNumero}`);