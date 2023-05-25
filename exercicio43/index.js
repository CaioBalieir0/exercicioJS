let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");
let div = document.getElementById("div");

function enviar() {
  let soma = 0
  while (inp1.value <= inp2.value) {
    soma = soma + parseFloat(inp1.value) 
    inp1.value++
  }
  console.log(soma);
}

btn.addEventListener("click", enviar);
