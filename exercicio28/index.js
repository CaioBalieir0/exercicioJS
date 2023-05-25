let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  if (inp1.value < 0) {
    conteudo.innerHTML = `O primeiro número é negativo<br>`;
  } else if (inp1.value == 0) {
    conteudo.innerHTML += `O primeiro número é nulo<br>`;
  } else if (inp1.value > 0) {
    conteudo.innerHTML += `O primeiro número é positivo<br>`;
  }

  if (inp2.value < 0) {
    conteudo.innerHTML += `O segundo número é negativo<br>`;
  } else if (inp2.value == 0) {
    conteudo.innerHTML += `O segundo número é nulo<br>`;
  } else if (inp2.value > 0) {
    conteudo.innerHTML += `O segundo número é positivo<br>`;
  }

  if (inp3.value < 0) {
    conteudo.innerHTML += `O terceiro número é negativo<br>`;
  } else if (inp3.value == 0) {
    conteudo.innerHTML += `O terceiro número é nulo<br>`;
  } else if (inp3.value > 0) {
    conteudo.innerHTML += `O terceiro número é positivo<br>`;
  }
}
btn.addEventListener("click", enviar);
