//Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

const io = require('../io')

io.write("Informe quantos dias, meses e anos você tem e diremos a sua idade em dias.")

io.write("Informe quantos anos:")
const anos = io.readInt()

io.write("Informe quantos meses:")
const meses = io.readInt()

io.write("Informe quantos dias:")
const dias = io.readInt()

const resultado = (anos * 365) + (meses * 30) + dias

io.write("A idade em dias é: ")
io.write(resultado)



//Esse programa que eu fiz calcula quantos dias, meses e anos a pessoa tem. Foi sem querer mas eu AMEI!!!

// io.write("Informe ao programa quantos anos você tem e ele dirá quantos dias, meses e anos você tem de vida.")

// io.write("Quantos anos você tem?")
// const idade = io.readInt()

// let anos
// let meses
// let dias

// dias = idade * 365
// meses = dias / 12
// anos = meses / 30

// io.write("Parabéns! Você está vivo há:")
// io.write(dias + "dias.")
// io.write(meses + "meses.")
// io.write(anos + "anos.")

// io.write("Fim do programa.")