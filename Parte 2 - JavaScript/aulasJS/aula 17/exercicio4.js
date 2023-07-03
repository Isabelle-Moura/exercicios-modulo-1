// Faça um programa que receba o preço de dois produtos e imprima a média desses preços.

const io = require("../io")

io.write('Digite o primeiro valor: ')
const valor1 = io.readFloat()

io.write('Digite o segundo valor: ')
const valor2 = io.readFloat()

const totalValores = valor1 + valor2

const resultado = totalValores / 2

io.write('A média dos 2 valores é: ')
io.write(resultado)
