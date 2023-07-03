//Faça um programa de computador que receba do usuário 2 números e acuse qual é o maior.

const io = require("../io")

io.write('Digite o 1° número: ')
const numero1 = io.readInt()

io.write('Digite o 2° número: ')
const numero2 = io.readInt()

if (numero1 > numero2) {
  io.write ('O 1° número é maior!')
} else {
  io.write ('O 2° número é maior!')
}