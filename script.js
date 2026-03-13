const formulario = document.getElementById("form-cadastro");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("input-nome").value;
  const email = document.getElementById("input-email").value;
  const senha = document.getElementById("input-senha").value;

  const novoUsuario = { nome, email, senha };

  const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  listaUsuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

  alert(`Olá, ${nome}! Cadastro realizado com sucesso.`);

  event.target.reset();
});

