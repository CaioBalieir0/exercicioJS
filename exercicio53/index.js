let btn = document.getElementById("btn");
let div = document.getElementById("div");

function enviar() {
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let select = document.getElementById("select").value;

  let notas = [nota1, nota2, nota3];
  let peso = [3, 3, 4];

  if (select == 1) {
    let media = 0;
    for (let i = 0; i < notas.length; i++) {
      media += notas[i];
    }
    div.innerHTML = `A média aritimética é: ${(media / 3).toFixed(2)}`;
  } else {
    let medP = 0;
    let divisao = 0;

    for (let i = 0; i < notas.length; i++) {
      medP += notas[i] * peso[i];
    }

    for (let i = 0; i < peso.length; i++) {
      divisao += peso[i];
    }

    div.innerHTML = `A média ponderada é: ${(medP / divisao).toFixed(2)}`;
  }
}

btn.addEventListener("click", enviar);
