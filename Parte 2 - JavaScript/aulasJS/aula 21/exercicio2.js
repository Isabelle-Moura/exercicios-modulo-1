//Um programa para escrever um nome n vezes, sendo n fornecido pelo usuário.

const io = require("../io")

io.write("Digite seu nome:")
let nome = io.read()

io.write("Digite quantas vezes ele será repetido: ")
let n = io.readInt()

for (let i = 1; i <= n; i++){
    io.write(nome)
}
