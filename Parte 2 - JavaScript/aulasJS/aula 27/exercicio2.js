//Faça uma função que receba números e que retorna outro array que contém apenas os números pares.

const io = require("../io")

const numeros = [];
const numerosPares = [];

for (let i = 1; i <= 10; i++){
    io.write(`Digite o ${i}º número:`);
    const numero = io.readInt();
    numeros.push(numero);
}
console.log("Os números digitados são:")
console.log(numeros);

numeros.filter((numero) => {
    if (numero % 2 === 0){
        numerosPares.push(numero);
    }
});

console.log("Os números digitados que são pares são:");
console.log(numerosPares);
