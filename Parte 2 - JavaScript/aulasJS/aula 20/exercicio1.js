//Faça um programa que recebe do usuário um número inteiro n e uma frase e escreva esta frase n vezes.

const io = require("../io")

io.write(
  "Informe um número inteiro e uma frase de sua escolha. O programa irá digitar automaticamente esta frase de acordo com o número inserido."
)

io.write("Digite um número inteiro: ")
const number = io.readInt()

io.write("Digite uma frase: ")
const frase = io.read()

let contador = 0

io.write("------")
while (contador < number) {
  io.write(frase)
  contador++
}
