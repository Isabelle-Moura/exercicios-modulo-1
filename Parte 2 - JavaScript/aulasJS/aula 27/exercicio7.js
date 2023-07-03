//Faça uma função que recebe do usuário um array e retorna outro vetor com os valores em ordem invertida.

const io = require("../io")

const inverterArray = () => {
    const array = [];
  
    for (let i = 1; i <= 5; i++) {
      io.write(`Digite o ${i}º valor:`);
      const valor = io.read();
      array.push(valor);
    }
  
    const arrayInvertido = array.reverse();
    return arrayInvertido;
  };
  
  const resultado = inverterArray();
  console.log(`Array invertido: ${resultado}`);