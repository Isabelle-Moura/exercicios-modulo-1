// Faça um programa que receba 5 números. Após digitar cada número, o usuário deve receber imediatamente a informação se o número é par ou ímpar. Faça uma função para receber este número e retornar true se for par e false se for ímpar.

const io = require("../io")

function parOuImpar(numero) {
    if (numero % 2 === 0) {
      return "true - par";
    } else {
      return "false - ímpar";
    }
  }
  
  for (let i = 0; i < 5; i++) {
    io.write(`Digite o ${i + 1}º número: `);
    let numero = io.readInt();
  
    let verificador = parOuImpar(numero);
  
    io.write(`O número ${numero} é ${verificador}.`);
  }