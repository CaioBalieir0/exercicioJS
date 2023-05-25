let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let div = document.getElementById("conteudo");

function enviar() {
  let num = parseFloat(inp.value);
  div.innerHTML += `<br>`;
  if (inp.value < 0) {
    window.alert("Erro");
  } else {
    while (num >= 0) {
      div.innerHTML += `${num} -> `;

      num--;
    }
  }
}
btn.addEventListener("click", enviar);
