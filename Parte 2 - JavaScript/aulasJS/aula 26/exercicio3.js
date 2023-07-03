//Faça um programa para receber nome e idade de 10 funcionários (nome, matrícula, cargo e salário). Depois faça um método que aumente o salário de cada um em 10%. Mostre a soma dos salários antes e depois do aumento (use o método de array .reduce() para somar)

const io = require("../io")

const funcionarios = [];
const funcComSalarioAumentado = [];

for (let i = 1; i <= 3; i++) {
  io.write(`Digite o nome do ${i}º funcionário:`);
  const nome = io.read();

  io.write(`Digite a matrícula do ${i}º funcionário:`);
  const matricula = io.readInt();

  io.write(`Digite o cargo do ${i}º funcionário:`);
  const cargo = io.read();

  io.write(`Digite o salário do ${i}º funcionário:`);
  const salario = io.readFloat();

  const funcionario = {
    nome: nome,
    matricula: matricula,
    cargo: cargo,
    salario: salario,
  };

  funcionarios.push(funcionario);
}

const somaSalariosAntes = funcionarios.reduce((total, funcionario) => {
  return total + funcionario.salario;
}, 0);

funcionarios.forEach((funcionario) => {
  funcionario.salario *= 1.1; // Aumento de 10% no salário
  funcComSalarioAumentado.push(funcionario);
});

const somaSalariosDepois = funcComSalarioAumentado.reduce((total, funcionario) => {
  return total + funcionario.salario;
}, 0);

 console.log(`Soma dos salários antes do aumento: ${somaSalariosAntes}`)
 console.log(`Soma dos salários depois do aumento: ${somaSalariosDepois}`)