// Faça um programa de computador que recebe do usuário 10 números e depois imprime os pares e depois os ímpares.

const io = require("../io")

let numeros = []

for (let i = 1; i <= 10; i++){
   io.write(`Digite o ${i}º número:`)
   let numero = io.readInt()
   numeros.push(numero)
}
let numerosPares = []
let numerosImpares = []

for (i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
    numerosPares.push(numeros[i])
   } else{
    numerosImpares.push(numeros[i])
   }
}  
io.write("Dos números que foram digitados, os que são números pares:")
io.write(numerosPares)
io.write("Dos números que foram digitados, os que são números ímpares:")
io.write(numerosImpares)