// Escreva uma função que recebe como parâmetro um array de números. Dado este array, a função deverá:

// Deixar no array somente os números ímpares (utilize filter).

// Somar todos os números restantes (utilize reduce).

// Escrever a string "Javascript é muito bom" no console um número x de vezes, sendo x a soma dos números restantes do array.

const io = require("../io");

const listaNumeros = (numeros) => {
  impares = numeros.filter((elemento) => {
    return elemento % 2 !== 0;
  });

  console.log(impares);
  const reduce = numeros.reduce((elemento, count) => {
    return count + elemento;
  }, 0);

  console.log(reduce);

  for (let i = 1; i <= reduce; i++) {
    console.log(`${i} - JavaScript é muito bom! `)
  }
};
listaNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
