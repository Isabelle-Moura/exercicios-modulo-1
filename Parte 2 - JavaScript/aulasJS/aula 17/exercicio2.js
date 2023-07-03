//Faça um programa de computador para escrever o produto de dois números que o usuário digitar.

const io = require("../io")

io.write('Digite um número:')
let numero1 
numero1 = io.readInt()

io.write('Digite outro número:')
let numero2
numero2 = io.readInt()

let produto
produto = numero1 * numero2

io.write('O produto dos 2 números é: ')
io.write(produto)