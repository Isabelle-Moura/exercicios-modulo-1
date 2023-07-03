//Faça um programa para receber nome, preço e ano de lançamento de 10 carros utilizando de uma classe Carro. Depois inclua na classe um método que aumente o preço do carro em R$5.000. Chame o método para cada carro e mostre os dados atualizados.

const io = require("../io");

class Carro {
  constructor(nome, preco, anoLancamento) {
    this.nome = nome;
    this.preco = preco;
    this.anoLancamento = anoLancamento;
  }
  aumentarPreco() {
    this.preco += 5000;
  }
}

const carros = [];

for (let i = 1; i <= 2; i++) {
  io.write(`Digite o nome do ${i}º carro: `);
  const nome = io.read();

  io.write(`Digite o preço do ${i}º carro: `);
  const preco = io.readFloat();

  io.write(`Digite o ano de lançamento do ${i}º carro: `);
  const anoLancamento = io.readInt();

  const carro = new Carro(nome, preco, anoLancamento);
  carros.push(carro);
}

console.log("Carros antes do aumento de preço:");
carros.forEach((carro) => {
  console.log(`Nome: ${carro.nome}, Preço: R$${carro.preco.toFixed(2)}, Ano de lançamento: ${carro.anoLancamento}`);
  carro.aumentarPreco();
});

console.log("////////////////////////////")

console.log("Carros depois do aumento de preço:");
carros.forEach((carro) => {
  console.log(`Nome: ${carro.nome}, Preço: R$${carro.preco.toFixed(2)}, Ano de lançamento: ${carro.anoLancamento}`);
});