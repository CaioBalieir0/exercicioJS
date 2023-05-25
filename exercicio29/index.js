let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  let adicacao = parseFloat(input1.value) + parseFloat(input2.value);
  if (adicacao > 10) {
    conteudo.innerHTML = `Os números digitado foram ${input1.value} e ${
      input2.value
    }, sua adição é ${adicacao} e a raíz cúbica da adição é ${Math.cbrt(
      adicacao
    )}`;
  } else {
    conteudo.innerHTML = `Os números digitado foram ${input1.value} e ${input2.value} e sua adição é ${adicacao}`;
  }
}

btn.addEventListener("click", enviar);
