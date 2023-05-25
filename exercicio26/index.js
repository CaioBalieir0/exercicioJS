let input = document.getElementById("input");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  let parouimpar = input.value % 2 == 0 ? "Par" : "Impar";

  if (input.value > 0) {
    conteudo.innerHTML = `O número digitado é ${parouimpar}`;
  } else {
    alert("error");
  }
}

btn.addEventListener("click", enviar);
