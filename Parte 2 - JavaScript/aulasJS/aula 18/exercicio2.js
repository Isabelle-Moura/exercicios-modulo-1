//Faça um programa de computador que receba do usuário 2 números, calcule o produto entre eles e acuse se o produto é maior que 10.

const io = require("../io")

io.write('Digite o 1° número: ')
const numero1 = io.readInt()

io.write('Digite o 2° número: ')
const numero2 = io.readInt()

const produto = numero1 * numero2

if (produto > 10){
  io.write ('O resultado é maior que 10!')
} else {
  io.write ('O resultado é: '+ produto)
}
io.write('Fim do programa.')