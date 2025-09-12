const form = document.getElementById("form-contato");
const tabela = document.getElementById("tabela-contatos");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;

  // Cria uma nova linha na tabela
  const linha = document.createElement("tr");

  const colunaNome = document.createElement("td");
  colunaNome.textContent = nome;

  const colunaTelefone = document.createElement("td");
  colunaTelefone.textContent = telefone;

  linha.appendChild(colunaNome);
  linha.appendChild(colunaTelefone);

  tabela.appendChild(linha);

  // Limpar os campos do formulário
  form.reset();
});

