let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  conteudo.innerHTML = `O número digitado foi ${
    inp.value
  } e seu quadrado é ${Math.pow(inp.value, 2)} <br>`;
  if (Math.pow(inp.value, 2) > 10) {
    conteudo.innerHTML += `Sua raíz cúbica é ${Math.cbrt(inp.value)}`;
  }
}
btn.addEventListener("click", enviar);
