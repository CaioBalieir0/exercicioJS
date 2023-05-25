let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  let desconto = (parseInt(inp.value) * 9) / 100;
  let sub = parseInt(inp.value) - desconto;
  if (inp.value <= 0) {
    window.alert("Erro");
  } else {
    conteudo.innerHTML = `O valor do produto é ${inp.value} reais<br>`;
    conteudo.innerHTML += `O produto com desconto é ${sub} reais`;
  }
}
btn.addEventListener("click", enviar);
