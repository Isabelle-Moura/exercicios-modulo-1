//Um programa para escrever seu nome 100 vezes.

const io = require("../io")

io.write("Informe o seu nome e o programa irá repetir ele 100 vezes.")

io.write("Digite o seu nome:")
let nome = io.read()

for (let i = 1; i <= 100; i ++){
    io.write(i + nome)
}



