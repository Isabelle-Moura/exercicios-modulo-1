// Dado um array qualquer, escreva uma função que multiplica todos os números desse array por 3 quando o número for ímpar e por 4 quando o número for par. E depois filtre deste array os números menores que 100.

const io = require("../io")

const listaNumeros = (numeros) => {

    const multiplicaNumeros = numeros.map((elemento) => {
       if (elemento % 2 === 0) {
        return elemento * 4;
       } else {
        return elemento * 3;
       }
    });
    console.log(multiplicaNumeros);

    const filtro = numeros.filter((elemento) => {
        return elemento < 100;
    });
    console.log(filtro);
};
listaNumeros([25, 70, 160, 237, 15, 18, 79, 471, 1163, 57]);