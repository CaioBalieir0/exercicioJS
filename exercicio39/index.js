let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  conteudo.innerHTML = `O salário é ${inp.value} reais<br>`;
  conteudo.innerHTML += `Seu salário com aumento é ${inp.value * 1.25} reais`;
}
btn.addEventListener("click", enviar);
