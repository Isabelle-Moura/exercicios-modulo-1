//Um programa para imprimir os números pares menores que um número fornecido pelo usuário.

const io = require("../io")

io.write("Digite um número aleatório e o programa irá informar quais são pares.")

io.write("Digite um número aleatório: ")
let n = io.readInt()

for (let i = 0; i <= n; i = i + 2){
    io.write(i)
}