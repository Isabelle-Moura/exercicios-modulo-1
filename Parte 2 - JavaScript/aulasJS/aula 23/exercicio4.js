// Faça um programa de computador para receber 10 nomes de alunos e suas respectivas notas e depois imprimir as notas e nomes daqueles que obtiveram notas maiores que 7.

const io = require("../io")

let nomes = [];
let notas = [];

for (let i = 1; i <= 10; i++) {
   io.write(`Digite o ${i}º nome:`);
   let nome = io.read();
   
   io.write(`Digite a nota do(a) ${i}º aluno(a):`);
   let nota = io.readFloat();
   
   nomes.push(nome);    
   notas.push(nota);
}

let nomesAprovados = [];

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
        nomesAprovados.push(nomes[i]);
    }
}

io.write("Parabéns a todos! Os alunos aprovados são:");

for (let i = 0; i < nomesAprovados.length; i++) {
   io.write(`Nome: ${nomesAprovados[i]} - Nota: ${notas[i]}`);
}
