// Faça um programa de computador para receber preços de 10  produtos e depois imprimir os preços que estão acima da média.

const io = require("../io")

let precos = []

for (let i = 1; i <= 10; i++) {
    io.write(`Digite o ${i}º número`);
    let numero = io.readFloat();
    precos.push(numero);
  }

  let somaPrecos = 0

  for (let i = 0; i < precos.length; i++) {
      somaPrecos += precos[i]
    }

  let mediaPrecos = somaPrecos / precos.length

  let precosAcimaDaMedia = [];
   for (let i = 0; i < precos.length; i++) {
     if (precos[i] > mediaPrecos) {
     precosAcimaDaMedia.push(precos[i]);
     }
   }
   io.write("Os preços que estão acima da media são: ")
   io.write(precosAcimaDaMedia)