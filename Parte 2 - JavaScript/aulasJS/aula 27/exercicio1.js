//Faça uma função que receba do usuário 3 segmentos de reta e retorne se estes segmentos formam um triângulo ou não.

const io = require("../io")

const verificaSegmento = ( )=> {

const segmentos = []

for (let i = 1; i <= 3; i++){
    io.write(`Digite o ${i}º segmento de reta:`)
    const segmento = io.readInt()
    segmentos.push(segmento)
}
const [a, b, c] = segmentos

    if (a + b > c && b + c > a && a + c > b){
       console.log("É um triângulo!") 
    } else {
       console.log("Não é um triângulo.") 
    }
}
verificaSegmento()