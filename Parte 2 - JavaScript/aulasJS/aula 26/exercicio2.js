//Faça um programa para receber os dados de 10 alunos (nome, matrícula e nota) criando um objeto para cada aluno. Depois aumentar em 10% as notas dos alunos com matrícula maior que 1000 e mostrar a lista de alunos atualizada.

const io = require("../io")

const alunos = [];
const alunosComNotaAumentada = [];

for (let i = 1; i <= 3; i++) {
  io.write(`Digite o nome do ${i}º aluno:`);
  const nome = io.read();

  io.write(`Digite a matrícula do ${i}º aluno:`);
  const matricula = io.readInt();

  io.write(`Digite a nota do ${i}º aluno:`);
  const nota = io.readInt();

  const aluno = {
    nome: nome,
    matricula: matricula,
    nota: nota,
  };
  
  alunos.push(aluno);

  if (matricula >= 1000) {
    const aumentoNota = nota * 1.1;
    const alunoComNotaAumentada = {
      nome: nome,
      matricula: matricula,
      nota: aumentoNota,
    };
    alunosComNotaAumentada.push(alunoComNotaAumentada);
  }
}

console.log("Alunos:");
console.log(alunos);

console.log("Alunos com nota aumentada:");
console.log(alunosComNotaAumentada);