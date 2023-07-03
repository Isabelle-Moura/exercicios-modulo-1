//Um programa para pedir 10 nomes de pessoas ao usuário e acusar quantas se chamam “Maria”.

const io = require("../io")

let count = 1

for(let i = 1; i <= 10; i++){
    io.write("Digite o número de 10 pessoas.")
    let nome = io.read()

  if (nome === "Maria" || nome === "maria") 
    count ++
    io.write("O nome Maria apareceu!")
} 
io.write("O nome Maria apareceu " + count + " vezes")


