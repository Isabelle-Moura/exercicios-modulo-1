const colocarEstilo = () => {
    console.log("O Body foi carregado, vacilão!")

    const body = document.getElementById('body')
    body.classList.add('content')
    
    const titulo = document.getElementById('title')
    titulo.classList.add('titulo')

    const secao = document.getElementById('section')
    secao.classList.add('secao')

    const paragrafos = document.getElementsByTagName('p')
    console.log(paragrafos)

    const paragrafosArray = Array.from(paragrafos)

    paragrafosArray.forEach ((paragrafo) => {
        paragrafo.classList.add('p')
    })
}