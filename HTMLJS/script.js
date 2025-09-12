document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // impede o envio padrão do formulário

  const campoA = Number(document.getElementById("campoA").value);
  const campoB = Number(document.getElementById("campoB").value);
  const mensagem = document.getElementById("mensagem");

  if (campoB > campoA) {
    mensagem.textContent = "✅ Formulário válido! O número B é maior que o número A.";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "❌ Formulário inválido! O número B deve ser maior que o número A.";
    mensagem.style.color = "red";
  }
});

