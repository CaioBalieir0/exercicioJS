let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  let degraus = inp2.value / inp1.value;
  conteudo.innerHTML = `O cliente terá que subir ${degraus} degraus`;
}

btn.addEventListener("click", enviar);
