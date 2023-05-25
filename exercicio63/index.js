let btn = document.getElementById("btn");
let div = document.getElementById("div");

function calcular() {
  let limiteSuperior = parseFloat(document.getElementById("inp1").value);
  let incremento = parseFloat(document.getElementById("inp2").value);
  if (limiteSuperior > 0 && incremento > 0) {
    let n = `<p>`;
    for (let i = 0; i <= limiteSuperior; i += incremento) {
      n += i + " ";
    }
    div.innerHTML += `</p>`;
    div.innerHTML = n;
  } else {
    div.innerHTML = `Insira um número maior que zero`;
  }
}

btn.addEventListener("click", calcular);
