//Faça um programa para imprimir em ordem inversa a sequência de Fibonacci. O número de elementos na sequência deverá ser informado pelo usuário.

const io = require("../io")

let sequenciaFibo = []

io.write("Digite o número de elementos da sequência Fibonacci: ")
let numElementos = io.readInt()

for (let i = 0; i < numElementos; i++){
    if (i <= 1){
        sequenciaFibo[i + 1] = i        
    } else {
        sequenciaFibo[i + 1] = sequenciaFibo[i] + sequenciaFibo[i - 1]
    }   
}
for (let j = numElementos - 1; j >= 0; j--){
    io.write(sequenciaFibo[j])
}