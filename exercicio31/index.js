let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  let soma =
    Math.pow(inp1.value, 2) + Math.pow(inp2.value, 2) + Math.pow(inp3.value, 2);
  conteudo.innerHTML = `Resultado final: ${soma}<br>`;
  if (soma % 2 == 0) {
    conteudo.innerHTML = `Par`;
  } else {
    conteudo.innerHTML = `Ímpar`;
  }
}

btn.addEventListener("click", enviar);
