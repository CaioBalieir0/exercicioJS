let inp = document.getElementById("input");
let btn = document.getElementById("btn");
let conteudo = document.getElementById("conteudo");

function enviar() {
  let quarta = Math.pow(inp.value, 4);

  if (quarta % 5 == 0) {
    conteudo.innerHTML = `O seu número digitado foi ${inp.value}<br>`;
    conteudo.innerHTML += `Seu valor ao quadrado é ${Math.pow(
      inp.value,
      2
    )}<br>`;
    conteudo.innerHTML += `Seu valor ao cubo é ${Math.pow(inp.value, 3)}<br>`;
    conteudo.innerHTML += `Seu valor à sétima é ${Math.pow(inp.value, 7)}<br>`;
  } else {
    conteudo.innerHTML += `O seu número digitado foi ${inp.value}<br>`;
    conteudo.innerHTML += `Sua raíz quadrada é ${Math.sqrt(inp.value)}<br>`;
    conteudo.innerHTML += `Sua raíz cúbica é ${Math.cbrt(inp.value)}<br>`;
    conteudo.innerHTML += `Sua raíz à sétima é ${Math.pow(
      inp.value,
      1 / 7
    )}<br>`;
  }
}

btn.addEventListener("click", enviar);
