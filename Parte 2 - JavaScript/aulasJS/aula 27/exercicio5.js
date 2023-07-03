//Faça uma função que recebe do usuário um array de números e retorna a soma desses números.

const io = require("../io")

const calcularSoma = () => {
    const numeros = [];
  
    for (let i = 1; i <= 5; i++) {
      io.write(`Digite o ${i}º número:`);
      const numero = io.readFloat();
      numeros.push(numero);
    }
  
    const soma = numeros.reduce( (total, numero) => total + numero, 0);
    return soma;
  };
  
  const resultado = calcularSoma();
  console.log(`A soma dos números é: ${resultado}`);