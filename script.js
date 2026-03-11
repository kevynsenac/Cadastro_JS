const formulario = document.getElementById("form-cadastro");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("input-nome").value;
  alert(`Olá, ${nome}! Seu cadastro foi realizado com sucesso.`);
  event.target.reset();
});
