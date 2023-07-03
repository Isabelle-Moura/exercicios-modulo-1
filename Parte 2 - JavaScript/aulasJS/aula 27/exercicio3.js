//Faça um programa que receba o nome, time e salário de 5 jogadores de futebol. Depois faça uma função que receberá a lista de jogadores e retornará apenas os jogadores que possuem um salário acima de R$100.000,00

const io = require("../io")

// const jogadores = [];

// const receberDadosJogadores = () => {
//   for (let i = 1; i <= 2; i++) {
//     io.write(`Digite o nome do ${i}º jogador de futebol:`);
//     const nome = io.read();

//     io.write(`Digite o time do ${i}º jogador de futebol:`);
//     const time = io.read();

//     io.write(`Digite o salário do ${i}º jogador de futebol:`);
//     const salario = io.readFloat();

//     const jogador = {
//       nome: nome,
//       time: time,
//       salario: salario,
//     };
//     jogadores.push(jogador);
//   }
// };

// receberDadosJogadores();

// const jogadoresComSalarioAcima = jogadores.filter((jogador) => {
//   return jogador.salario > 100000;
// });

// jogadoresComSalarioAcima.forEach((jogador) => {
//   console.log(`Nome: ${jogador.nome}, Time: ${jogador.time}, Salário: R$${jogador.salario}`);
// });

const jogadores = [];

const receberDadosJogadores = () => {
  for (let i = 1; i <= 2; i++) {
    io.write(`Digite o nome do ${i}º jogador de futebol:`);
    const nome = io.read();

    io.write(`Digite o time do ${i}º jogador de futebol:`);
    const time = io.read();

    io.write(`Digite o salário do ${i}º jogador de futebol:`);
    const salario = io.readFloat();

    const jogador = {
      nome: nome,
      time: time,
      salario: salario,
    };
    jogadores.push(jogador);
  }
};

receberDadosJogadores();

const jogadoresComSalarioAcima = jogadores.filter((jogador) => {
  return jogador.salario > 100000;
});

console.log("Jogadores com salário acima de R$100.000,00:");
jogadoresComSalarioAcima.forEach((jogador) => {
  console.log(`Nome: ${jogador.nome}, Time: ${jogador.time}, Salário: R$${jogador.salario.toFixed(2)}`);
});