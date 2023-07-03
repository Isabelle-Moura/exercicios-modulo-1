// Uma loja utiliza o código V para transação à vista e P para transação a prazo. Faça um programa que receba código e valor de 15 transações usando laços de repetição. Calcule e mostre:

// O valor total das compras à vista.

// O valor total das compras à prazo.

// O valor total das compras efetuadas.

const io = require("../io")

io.write("Digite V ou P para transações à vista ou à prazo.")
const codigo = io.read()

if (codigo != "V" && codigo != "P"){
    io.write("Código inválido. Tente novamente, parça.")
} else {
    let total = 0
    for (let i = 1; i <= 5; i++){
        io.write (`Digite o valor da ${i}º transação:`)
        let valor = io.readFloat()
        total = total + valor
    } if (codigo === "V"){
        io.write (`O valor total à vista das compras foi de R$ ${total}.`)
    } if (codigo === "P"){
        let parcelas = total / 5
        io.write (`O valor totatl das compras é de R$${total}`)
        io.write (`O valor das parcelas da compra à prazo é de R$${parcelas}.`)
    }
}