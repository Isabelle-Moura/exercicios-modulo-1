// Faça um programa de computador que receba um número natural e acuse se é primo ou não. Números primos são os naturais maiores que 1 e que possuem somente 2 divisores.

const io = require("../io")

io.write("Digite um número para saber se ele é primo: ")
let numero = io.readInt()

let count = 0

if (numero < 1){
    io.write("Esse número não é primo.")
  } 
  for (let i = 1; i <= numero; i++){
      if (numero % i === 0){
        
        io.write(i)
        count = count + 1
    }
 }
    if (count == 2){
        io.write ("Esse número é primo!")
    } 
    else {
        io.write ("Esse número não é primo.")
    }