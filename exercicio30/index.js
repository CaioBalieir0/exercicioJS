let c = document.getElementById("inp");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  let f = c.value * (9 / 5) + 32;
  conteudo.innerHTML = `A temperatura é ${f}°F`;
}

btn.addEventListener("click", enviar);
