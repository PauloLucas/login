document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obter valores do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar se o "username" é um email válido
    if (!isValidEmail(username)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    if (username === "usuario@email.com" && password === "senha") {
      alert("Login bem-sucedido!");
      //outras ações após o login bem-sucedido
    } else {
      alert("Login falhou. Verifique seu email e senha.");
    }
  });

//validar se o "username" é um email válido
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// script.js ou inclua no script existente
function onSignInCustom() {
  console.log("Processando login com botão personalizado");
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // ID do Google
  console.log("Nome: " + profile.getName()); // Nome completo
  console.log("E-mail: " + profile.getEmail()); // E-mail
}
