let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");
let div = document.getElementById("div");

function enviar() {
  let media = (parseFloat(inp1.value) + parseFloat(inp2.value)) / 2;

  if (media <= 10 && media >= 0) {
    div.innerHTML = `As notas tiradas foram ${inp1.value} e ${inp2.value} e sua média é ${media} <br>`;
    if (media > 7) {
      div.innerHTML += `Aprovado`;
    } else if (media < 5) {
      div.innerHTML += `Retido`;
    } else {
      div.innerHTML += `Recupreação`;
    }
  } else {
    window.alert(`Erro`);
  }
}

btn.addEventListener("click", enviar);
