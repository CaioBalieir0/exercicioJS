let div = document.getElementById("div");
let btn = document.getElementById("btn");
let arr = [];

function enviar() {
  let n = parseFloat(document.getElementById("n").value);

  arr.push(n);

  div.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    div.innerHTML += `O numerro digitado foi: ${arr[i]}, Sua metade é: ${
      arr[i] / 2
    }<br>`;
  }
  console.log(arr);

  limpando();
}

function limpando() {
  document.getElementById("n").value = "";
  document.getElementById("n").focus();
}

let k = document.getElementById("n");

function press() {
  if (event.key == "Enter") {
    enviar();
  }
}

btn.addEventListener("click", enviar);
k.addEventListener("keydown", press);
