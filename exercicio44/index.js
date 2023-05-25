let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");
let div = document.getElementById("div");

let aux1 = inp1.value;
let aux2 = inp2.value;

function enviar() {
  let aux1 = inp1.value;
  let aux2 = inp2.value;
  while (aux1 <= aux2) {
    if (aux1 % 2 == 0) {
      console.log(aux1);
    }
    aux1++;
  }
}

btn.addEventListener("click", enviar);
