// Faça uma função que recebe a idade de um nadador por parâmetro e retorna a categoria desse nadador de acordo com a tabela abaixo:

   // 5 - 7 anos = Infantil A
   // 8 - 10 anos = Infantil B
   // 11 - 13 anos = Juvenil A
   // 14 - 17 anos = Juvenil B

const io = require("../io")

function idadeNadador (idade){
   if (idade >= 5 && idade <= 7){
      return "Infantil A"
   }
   else if (idade >= 8 && idade <= 10){
      return "Infantil B"
   }
   else if (idade >= 11 && idade <= 13){
      return "Juvenil A"
   }
   else if (idade >= 14 && idade <= 17){
      return "Juvenil B"
   }
   else {
      return "Idade não corresponde a nenhuma categoria específica."
   }
}

io.write("Diga a sua idade e o programa dirá para qual categoria você vai.")
let idade = io.readInt()

let categoria = idadeNadador(idade)

io.write("Você vai para a categoria " + categoria + "!")

