const modal = document.getElementById("modal");
const form = document.getElementById("form");

const REQUIRED = "Este campo é obrigatório!";

const showMessage = (input, message, className) => {
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
  input.classList.remove("success");
  input.classList.remove("error");
  input.classList.add(className);
  return className === "success";
};

const hasValue = (input, message) => {
  if (input.value.trim() === "") {
    return showMessage(input, message, "error");
  } else {
    return showMessage(input, "", "success");
  }
};

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.elements["name"];
  const cpf = form.elements["cpf"];
  const email = form.elements["email"];
  const password = form.elements["password"];

  const nameValid = hasValue(name, REQUIRED);
  const cpfValid = hasValue(cpf, REQUIRED);
  const emailValid = hasValue(email, REQUIRED);
  const passwordValid = hasValue(password, REQUIRED);

  if (nameValid && cpfValid && emailValid && passwordValid) {
    const nameValue = name.value;
    const emailValue = email.value;

    document.getElementById("modal-name").innerHTML = nameValue;
    document.getElementById("modal-email").innerHTML = emailValue;

    openModal();
    
  } else {

    closeModal();

  }
});

function formatCPF(cpf) {
  // Remove todos os caracteres que não são dígitos
  cpf = cpf.replace(/\D/g, "");

  // Aplica a formatação adicionando os pontos e o traço
  cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  return cpf;
}

const cpfInput = form.elements["cpf"];
cpfInput.addEventListener("input", (event) => {
  const rawValue = event.target.value;
  const formattedCPF = formatCPF(rawValue);
  cpfInput.value = formattedCPF;
});
