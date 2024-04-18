/* pegar o relacionamento de cada input para avaliar o que foi digitado */
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirm = document.getElementById("password_confirm");

/* Prevenção do comportamento padrão e chama a função de validação dos campos de entrada checkForm()*/
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

// para retirar a mensagem de erro ao digitar novamente no campo de email
email.addEventListener("blur", () => {
  checkInputEmail();
});

// para retirar a mensagem de erro ao digitar novamente no campo de usuário
username.addEventListener("blur", () => {
  checkInputUsername();
});

// para retirar a mensagem de erro ao digitar novamente no campo de senha
password.addEventListener("blur", () => {
  checkInputPassword();
});

/* função para realizar a validação do nome do usuário: não pode ser vazio */
function checkInputUsername() {
  const usernameValue = username.value;

  // se o username estiver vazio -> erro
  if (usernameValue === "") {
    //mostrar o aviso e mostrar a mensagem de erro...
    errorInput(username, "Campo Usuário obrigatório!");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

/* validação do e-mail */
function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "O e-mail é obrigatório!");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

/* validação da senha digitada */
function checkInputPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "Senha obrigatória!");
  } else if (passwordValue.length < 8) {
    errorInput(password, "Mínimo de 8 caracteres para a senha!");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

/* Validação da confirmação da senha digitada */
function checkInputPasswordConfirm() {
  const passwordValue = password.value;
  const passwordconfirmValue = password_confirm.value;

  if (passwordconfirmValue === "") {
    errorInput(password_confirm, "Confirmação da senha obrigatória!");
  } else if (passwordconfirmValue !== passwordValue) {
    errorInput(password_confirm, "Senhas Diferentes! Digite novamente.");
  } else {
    const formItem = password_confirm.parentElement;
    formItem.className = "form-content";
  }
}

// faz a validação dos dados de entrada usuário, email, senha e confirmação da senha
function checkForm() {
  // verifica cada entrada sequencialmente.
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirm();

  //variável formItens recebe os resultados das funções de verificação acima
  const formItens = form.querySelectorAll(".form-content");

  //transforma o resultado das DIVs em um array de quatro elementos
  //para depois verificar se todos os div-form-content foram válidos (sem "error")
  const IsValid = [...formItens].every((item) => {
    return item.className === "form-content";
  });

  // cria um pop-up alert caso as entradas sejam validadas com sucesso.
  if (IsValid) {
    alert("Usuário cadastrado com sucesso!");
  }
}

// função para gerar a mensagem de erro para cada entrada, caso o erro ocorra.
// a mensagem do erro/instrução para o usuário aparecerá no container de cadastro
// abaixo da respectiva entrada
function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.className = "form-content error";
}
