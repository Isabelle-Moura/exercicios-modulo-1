//Faça um programa de computador que solicite login e senha para um usuário. Caso o login e senha estejam corretos, exiba na tela a mensagem "Bem vindo ao sistema", caso contrário exiba a mensagem "Dados inválidos". Os valores de login e senha corretos devem ser definidos em variáveis pelo programador.

const io = require("../io")

io.write("Por favor, digite seu login e senha.")

io.write("Digite seu login:")
let login = io.read()

io.write("Digite sua senha:")
let senha = io.readInt()

if (login == "Johnny Bravo" && senha == "123456"){
  io.write("Bem-vindo ao sistema!")
} else {
  io.write("Dados inválidos. Tente novamente.")
}