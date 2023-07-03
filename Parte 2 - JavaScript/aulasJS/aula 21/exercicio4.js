//Um programa para escrever de 1 a n, sendo n fornecido pelo usuário.

const io = require("../io")

io.write("Digite um número qualquer e o programa irá contar, de forma crescente, até este número.")

io.write("Digite um número: ")
let n = io.readInt()

for (let i = 1; i <= n; i++){
    io.write(i)
}
