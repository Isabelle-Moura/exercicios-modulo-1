// Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.

const io = require("../io")

function idade (anos, meses, dias){
  return (anos * 365) + (meses * 30) + dias
}

io.write("Digite os anos:")
const anos = io.readInt()

io.write("Digite os meses:")
const meses = io.readInt()

io.write("Digite os dias:")
const dias = io.readInt()

const idadeUser = idade (anos, meses, dias)
io.write(`Parabéns! Você está vivo há ${idadeUser} dias!`)