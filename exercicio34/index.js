let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  if (inp1.value <= 0 || inp2.value <= 0) {
    alert("Valores inválidos");
  } else {
    let a = (inp1.value * inp2.value) / 2;
    conteudo.innerHTML = `A área do losango é ${a}`;
  }
}

btn.addEventListener("click", enviar);
