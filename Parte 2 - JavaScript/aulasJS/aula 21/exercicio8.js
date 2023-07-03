//Um programa que leia a idade e a altura de 5 pessoas. Ao final, o programa deverá acusar a maior idade e a média das alturas.

const io = require("../io")

let maiorIdade = 0
let mediaAlturas = 0

io.write("Informe a idade e a altura de 5 pessoas e no final o programa irá dizer qual a maior idade e a média das alturas.")

for(let i = 1; i <= 5; i++){
    io.write("Digite uma idade:")
    let idades = io.readInt()
    
    io.write("Digite uma altura:")
    let alturas = io.readFloat()

    if(idades > maiorIdade){
       maiorIdade = idades
    }

    mediaAlturas = mediaAlturas + alturas
}
io.write("A maior idade das que foram informadas é "+ maiorIdade)
io.write("A média entres as idades informadas é " + mediaAlturas)