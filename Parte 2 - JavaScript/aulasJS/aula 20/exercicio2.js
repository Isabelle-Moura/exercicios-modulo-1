//Faça um programa que receba do usuário 20 números e imprima a média aritmética desses números.

const io = require("../io")

io.write("Digite 20 números diferentes e o programa irá dizer a média aritmética deles.")

let count = 1
let soma = 0

while (count <= 20){
    io.write(`Digite o ${count}º número:`)
    let numero = io.readInt()
    soma += numero
    count++
}
const media = (soma / 20)

io.write ("A média aritmética entre os números é: "+ media)

// io.write("Digite o 1° número: ")
// let n1 = io.readInt()

// io.write("Digite o 2° número: ")
// let n2 = io.readInt()

// io.write("Digite o 3° número: ")
// let n3 = io.readInt()

// io.write("Digite o 4° número: ")
// let n4 = io.readInt()

// io.write("Digite o 5° número: ")
// let n5 = io.readInt()

// io.write("Digite o 6° número: ")
// let n6 = io.readInt()

// io.write("Digite o 7° número: ")
// let n7 = io.readInt()

// io.write("Digite o 8° número: ")
// let n8 = io.readInt()

// io.write("Digite o 9° número: ")
// let n9 = io.readInt()

// io.write("Digite o 10° número: ")
// let n10 = io.readInt()
