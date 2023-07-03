//Um programa para receber 10 números do usuário e acusar qual deles é o maior número.

const io = require("../io")

let maiorNumero = 0

for(let i = 0; i < 10; i++){
    io.write("Digite 10 números de sua escolha:")
    let numero = io.readInt()

  if (numero > maiorNumero){
    maiorNumero = numero
   }  
} 
io.write("O maior número dos que foram informados é " +  maiorNumero)