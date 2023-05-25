let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let div = document.getElementById("cont");

function enviar() {
  if (inp.value >= 0) {
    div.innerHTML = `O número digitado foi ${
      inp.value
    } e sua raíz quadrada é ${Math.sqrt(inp.value)}`;
  } else {
    div.innerHTML = `O número digitado foi ${
      inp.value
    } e seu valor ao quadrado é ${Math.pow(inp.value, 2)}`;
  }
}

btn.addEventListener("click", enviar);
