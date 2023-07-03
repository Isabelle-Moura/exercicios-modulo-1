const form = document.getElementById('subscribe')

const REQUIRED = 'Campo obrigatório'

const showMessage = (input, message, className) => {
  const msg = input.parentNode.querySelector('small')
  msg.innerText = message
  input.classList.remove('success')
  input.classList.remove('error')
  input.classList.add(className)
  return className === 'success'
}

const hasValue = (input, message) => {
  if (input.value.trim() === '') {
    return showMessage(input, message, 'error')
  }
  return showMessage(input, '', 'success')
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  console.log(form.elements)
  const codigoInput = form.elements['codigo']
  const nomeInput = form.elements['nome']
  const categoriaInput = form.elements['categoria']
  const precoInput = form.elements['preco']
  const quantidadeInput = form.elements['quantidade']

  const codigoValid = hasValue(codigoInput, REQUIRED)
  const nomeValid = hasValue(nomeInput, REQUIRED)
  const categoriaValid = hasValue(categoriaInput, REQUIRED)
  const precoValid = hasValue(precoInput, REQUIRED)
  const quantidadeValid = hasValue(quantidadeInput, REQUIRED)
 
  if (codigoValid && nomeValid && categoriaValid && precoValid && quantidadeValid) {
    const total = parseInt(precoInput.value) * parseInt(quantidadeInput.value)
    
    const card = document.querySelector('.card')
    const cardNome = document.querySelector('.card-nome')
    const cardCategoria = document.querySelector('.card-categoria')
    const cardPreco = document.querySelector('.card-preco')
    const cardQuantidade = document.querySelector('.card-quantidade')
    const cardTotal = document.querySelector('.card-total')

    cardNome.innerHTML = `#${codigoInput.value} - ${nomeInput.value}`
    cardCategoria.innerHTML = `${categoriaInput.value}`
    cardPreco.innerHTML = `R$ ${precoInput.value}`
    cardQuantidade.innerHTML = `${quantidadeInput.value}`
    cardTotal.innerHTML = `R$ ${total}`
    card.classList.add('block')
  }
})

////Código que menina Jéssica fez que eu AMEI!!! <3 De boa, minha irmã é boa demais!!!

// const inputCode = document.getElementById("codeProduct");
// const smallCode = document.getElementById("codeError");

// inputCode.addEventListener("input", () => {
//   if (inputCode.value === "") {
//     inputCode.classList.add("error");
//     smallCode.style.display = "block";
//   } else {
//     inputCode.classList.remove("error");
//     inputCode.classList.add("sucess");
//     smallCode.style.display = "none";
//   }
// });

// const inputName = document.getElementById("nameProduct");
// const smallName = document.getElementById("nameError");

// inputName.addEventListener("input", () => {
//   if (inputName.value === "") {
//     inputName.classList.add("error");
//     smallName.style.display = "block";
//   } else {
//     inputName.classList.remove("error");
//     inputName.classList.add("sucess");
//     smallName.style.display = "none";
//   }
// });

// const selectInput = document.getElementById("selectProduct");
// const selectError = document.getElementById("selectError");

// selectInput.addEventListener("input", () => {
//   if (selectInput.value === "Selecione uma opção") {
//     selectInput.classList.remove("select-success");
//     selectInput.classList.add("select-error");
//     selectError.style.display = "block";
//   } else {
//     selectInput.classList.remove("select-error");
//     selectInput.classList.add("select-success");
//     selectError.style.display = "none";
//   }
// });

// const inputPrice = document.getElementById("priceProduct");
// const smallPrice = document.getElementById("priceError");

// inputPrice.addEventListener("input", () => {
//   if (inputPrice.value === "") {
//     inputPrice.classList.add("error");
//     smallPrice.style.display = "block";
//   } else {
//     inputPrice.classList.remove("error");
//     inputPrice.classList.add("sucess");
//     smallPrice.style.display = "none";
//   }
// });

// const inputQuantity = document.getElementById("quantityProduct");
// const smallQuantity = document.getElementById("quantityError");

// inputQuantity.addEventListener("input", () => {
//   if (inputQuantity.value === "") {
//     inputQuantity.classList.add("error");
//     smallQuantity.style.display = "block";
//   } else {
//     inputQuantity.classList.remove("error");
//     inputQuantity.classList.add("sucess");
//     smallQuantity.style.display = "none";
//   }
// });