//Faça um programa que receba o nome e nota de 5 alunos e armazene em um array. Faça uma função que receberá a nota de cada aluno e acusará se ele está aprovado (nota a partir de 7) ou reprovado (nota menor 7). De acordo com o retorno desta função, acrescente no aluno a propriedade aprovado com o valor true ou false.

const io = require("../io")

const alunos = []

const recebeNotasAlunos = () => {
    for (let i = 1; i <= 5; i++){
        io.write(`Digite o nome do ${i}º aluno:`)
        const nome = io.read()

        io.write(`Digite a nota do ${i}º aluno:`)
        const nota = io.readInt()

        const aluno = {
        nome: nome,
        nota: nota,
        } 
        alunos.push(aluno)
    }
    
}

const notaMaiorQueSete = (nota) => {
    return nota >= 7
}
recebeNotasAlunos()

alunos.forEach ( (aluno) => {
    const aprovado = notaMaiorQueSete(aluno.nota)
    aluno.aprovado = aprovado
})

console.log ("Resultado dos Alunos:")
alunos.forEach ( (aluno) => {
    console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}, Aprovado: ${aluno.aprovado}`)
})