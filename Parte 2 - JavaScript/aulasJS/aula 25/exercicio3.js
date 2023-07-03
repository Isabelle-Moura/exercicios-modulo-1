// Escreva uma função que transforme todos os membros de um array qualquer em texto. Dica: todas as variáveis javascript possuem uma função .toString()

const io = require("../io")

const arrayParaTexto = (numeros) => {

    const arrayString = numeros.map ( (numeros) => {
      return numeros.toString()
    })
      return arrayString
}
const arrayAntiga = [2, 4, 6, 8, 10]
const arrayNova = arrayParaTexto(arrayAntiga)

console.log (arrayNova)