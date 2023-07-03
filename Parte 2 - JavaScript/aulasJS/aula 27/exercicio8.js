//Faça uma função que recebe dois números inteiros e retorna um array de duas posições, uma  com o quociente e a outra com o resto. Sabe-se que divisão é uma sequência de subtrações, portanto não use os operadores de divisão inteira do JS. 

const io = require("../io")

const dividir = (dividendo, divisor) => {
    let quociente = 0
    let resto = dividendo

    while (resto >= divisor){
        resto = resto - divisor
        quociente++
    }
    return [quociente, resto]
}
const resultado = dividir(15, 4)

console.log(resultado)
console.log(`Quociente: ${resultado[0]}, Resto: ${resultado[1]}`)