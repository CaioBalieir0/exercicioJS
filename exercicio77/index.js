let div = document.getElementById("div");
let btn = document.getElementById("btn");
let arr = [];

btn.addEventListener("click", () => {
  let n1 = parseFloat(document.getElementById("inp1").value);
  let n2 = parseFloat(document.getElementById("inp2").value);

  if (n1 > 0 && n2 > 0 && n1 !== n2) {
    let menor = n1;
    let maior = n2;

    if (n1 > n2) {
      menor = n2;
      maior = n1;
    }

    menor++;
    while (menor < maior) {
      if (menor % 5 == 0) {
        arr.push(menor);
      }
      menor++;
    }

    div.innerHTML = `Os números compreendidos múltiplos de 5 são: ${arr.join(
      " - "
    )}`;

    let n = "Não existem números mútiplos de 5";
    if (arr.length == 0) {
      div.innerHTML = "";
      div.innerHTML = `${n}`;
    }
  } else {
    alert("ERRO - Números inválidos");
  }
});
