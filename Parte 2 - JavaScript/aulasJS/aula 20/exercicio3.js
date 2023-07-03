//Faça um programa para imprimir os números pares menores que 100. Não use comando de decisão.

const io = require("../io")

// Programa "Imprima todos os números pares que são menores que 100.")

let contador = 2

while(contador <= 100){
  io.write(" Número par: " + contador)
  contador = contador + 2
}

// let contador = 0

// while(contador <= 100){
//   if(contador % 2 == 0){
//     io.write(" Número par: " + contador)
//   } 
//   contador++
// }