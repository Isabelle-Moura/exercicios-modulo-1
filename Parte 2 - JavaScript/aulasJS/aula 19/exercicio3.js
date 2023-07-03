//Faça um programa de computador que receba do usuário três tamanhos de segmentos de reta em ordem aleatória e acuse se estes segmentos formam ou não os lados de um triângulo. Para isso, um lado deve ser sempre menor que a soma dos outros dois lados.

const io = require('../io')

io.write("Informe ao programa 3 segemntos de reta e ele dirá se forma um triângulo ou não.")

io.write('Informe o tamanho do 1º segmento de reta:')
const a = io.readInt()

io.write('Informe o tamanho do 2º segmento de reta:')
const b = io.readInt()

io.write('Informe o tamanho do 3º segmento de reta:')
const c = io.readInt()

if (a + b > c && b + c > a && c + a > b){
  io.write("É um triângulo.")
} else {
  io.write("Não é um triângulo.")
}

io.write('Fim do programa.')