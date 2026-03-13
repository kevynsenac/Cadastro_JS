// Captura o formulário de cadastro e adiciona um evento de submissão
const formulario = document.getElementById("form-cadastro");

formulario.addEventListener("submit", (event) => {
  // Evita que o formulário seja submetido e a página seja recarregada
  event.preventDefault();

  // Captura os valores dos campos de formulário
  const nome = document.getElementById("input-nome").value;
  const email = document.getElementById("input-email").value;
  const senha = document.getElementById("input-senha").value;

  // Cria um objeto com os valores capturados
  const novoUsuario = { nome, email, senha };

  // Captura a lista de usuários salvas no localStorage
  const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Adiciona o novo usuário à lista
  listaUsuarios.push(novoUsuario);

  // Salva a lista de usuários no localStorage
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

  // Exibe uma mensagem de sucesso ao usuário
  alert(`Olá, ${nome}! Cadastro realizado com sucesso.`);

  // Limpa os campos do formulário
  event.target.reset();
});

