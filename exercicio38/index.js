let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  let soma = parseFloat(inp1.value) + parseFloat(inp2.value);
  if (soma > 10) {
    conteudo.innerHTML = `Os número digitados foram ${inp1.value} e ${
      inp2.value
    }, sua soma é ${soma} e sua raíz cúbica é ${Math.cbrt(soma)}`;
  }
}

btn.addEventListener("click", enviar);
