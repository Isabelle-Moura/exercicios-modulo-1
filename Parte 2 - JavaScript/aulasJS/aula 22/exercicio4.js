// Faça um programa que peça ao usuário um número natural e imprima seus divisores.

const io = require("../io")

io.write("Digite um número de sua escolha: ")
let numero = io.readInt()

let count = 0

for (let i = 0; i <= numero; i++){
    if (numero % i === 0){
        count++
    }
}
    io.write("O número possui "+ count + " divisores.")