// Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar um valor booleano.

const io = require("../io")

function par(numero){
    if (numero % 2 === 0){
    return "verdade"
  } else {
    return "falso"
  }
} 
io.write("Digite um número qualquer")
let numero = io.readInt()

let verificador = par(numero)

io.write(`É ${verificador} que o número ${numero} é par.`)