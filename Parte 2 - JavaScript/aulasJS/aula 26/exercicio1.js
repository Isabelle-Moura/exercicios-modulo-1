//Faça um programa para receber dados de 10 pessoas (nome, idade e documento) criando um objeto para cada pessoa. Depois mostrar as que são maiores de idade (use o .filter())

const io = require("../io")

const pessoas = [];
const maioresDeIdade = [];

for (let i = 1; i <= 3; i++) {
  io.write(`Digite o nome da ${i + 1}ª pessoa:`);
  const nome = io.read();

  io.write(`Digite a idade da ${i + 1}ª pessoa:`);
  const idade = io.readInt();

  io.write(`Digite o documento da ${i + 1}ª pessoa:`);
  const doc = io.readInt();

  const pessoa = {
    nome: nome,
    idade: idade,
    documento: doc,
  };
  pessoas.push(pessoa);
  
  const maiorIdade = pessoas.filter ((pessoa) => {
  return pessoa.idade >= 18;
  });
  maioresDeIdade.push(pessoa);
}

console.log(pessoas)
console.log(maioresDeIdade);