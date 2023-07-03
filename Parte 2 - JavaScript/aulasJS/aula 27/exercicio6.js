//Faça uma função que recebe do usuário um array de números e retorna a média aritmética desses números.

const io = require("../io")

const calculoMedia = () => {
    
const numeros = []

    for (let i = 1; i <= 5; i++) {
        io.write(`Digite o ${i}º número:`)
        const numero = io.readInt()

        numeros.push(numero)
    }

const soma = numeros.reduce ((total, numero) => total + numero, 0)
const media = soma / numeros.length
return media
}

const resultado = calculoMedia();
console.log(`A média dos números é: ${resultado}`)