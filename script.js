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

    // Aqui você pode adicionar lógica de autenticação
    // ...

    // Exemplo de verificação simples (substitua por lógica real de autenticação)
    if (username === "usuario@email.com" && password === "senha") {
      alert("Login bem-sucedido!");
      // Adicione redirecionamento ou outras ações após o login bem-sucedido
    } else {
      alert("Login falhou. Verifique seu email e senha.");
    }
  });

// Função para validar se o "username" é um email válido
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Adicione este trecho ao seu arquivo script.js ou inclua no script existente
function onSignInCustom() {
  // Lógica personalizada para processar o login com o botão personalizado
  console.log("Processando login com botão personalizado");
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // ID do Google
  console.log("Nome: " + profile.getName()); // Nome completo
  console.log("E-mail: " + profile.getEmail()); // E-mail
  // Adicione lógica para autenticar o usuário no seu sistema
}
