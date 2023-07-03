//Faça um programa de computador que receba do usuário três tamanhos de segmentos de reta e acuse se estes segmentos formam ou não os lados de um triângulo. Para formar um triângulo o maior segmento deve ser menor que a soma dos outros dois. Suponha que o maior lado sempre será digitado primeiro.

const io = require('../io')

io.write('Informe 3 tamanhos de segmentos de reta. Lembre que o primeiro tem que ser maior que a soma dos 2 números subsequentes. ')

io.write('Informe o primeiro tamanho: ')
const tamanho1 = io.readInt()

io.write('Informe o segundo tamanho: ')
const tamanho2 = io.readInt()

io.write('Informe o terceiro tamanho: ')
const tamanho3 = io.readInt()

if (tamanho1 > (tamanho2 + tamanho3)){
  io.write('É um triângulo!')
} else {
  io.write('Não é um triângulo!')
}