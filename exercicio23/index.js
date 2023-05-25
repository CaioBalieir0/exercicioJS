let numero = document.getElementById("numero");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function parouimpar() {
  let impar = numero.value % 2 == 0 ? "Par" : "Impar";
  console.log();
  conteudo.innerHTML = impar;
}

btn.addEventListener("click", parouimpar);
