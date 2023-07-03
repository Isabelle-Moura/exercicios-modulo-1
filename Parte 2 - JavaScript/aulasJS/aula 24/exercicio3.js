// Escreva uma função que recebe, por parâmetro, dois valores X e Z e calcula e retorna Xz (X elevado à Z). (sem utilizar funções ou operadores de potência prontos)

const io = require("../io")

function potencia (X, Z){
    let count = 1

    for (let i = 0; i < Z; i++){
      count *= X
    }
    return count
}

io.write("Digite o valor da base da potência:")
let X = io.readInt()

io.write("Digite a quantidade de vezes que a base vai se repetir.")
let Z = io.readInt()

let count = potencia(X, Z)

io.write(`O número ${X} elevado a ${Z} tem o total de ${count}.`)