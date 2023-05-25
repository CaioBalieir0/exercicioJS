let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  let n = parseFloat(inp.value);
  conteudo.innerHTML = `<br>`;
  if (n > 10) {
    window.alert("Erro");
  } else {
    while (n <= 20) {
      conteudo.innerHTML += `${n} -> `;
      n++;
    }
  }
}

btn.addEventListener("click", enviar);
