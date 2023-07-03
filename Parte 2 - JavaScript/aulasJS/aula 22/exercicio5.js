// Faça um programa de computador para contar e imprimir a quantidade de divisores que um número natural possui. Este número deverá ser fornecido pelo usuário.

//b é divisor de a se o número b for múltiplo de a, ou seja, a divisão entre b e a é exata (deve deixar resto 0)

const io = require("../io")

io.write("Digite um número de sua escolha: ")
let numero = io.readInt()

let count = 0

for (let i = 0; i <= numero; i++){
     if (numero % i === 0){
        io.write(i)
        count++
    }
}
io.write("O número "+ numero +" possui "+ count + " divisores.")