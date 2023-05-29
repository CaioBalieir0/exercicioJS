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

    while (maior >= menor) {
      if (maior % 3 == 0 && maior % 7 == 0) {
        arr.push(maior);
      }
      maior--;
    }

    let n = "Não existem números múltiplos de 3 e 7";
    if (arr.length == 0) {
      div.innerHTML = `${n}`;
    } else {
      div.innerHTML = `Os números múltiplos compreendidos entre 3 e 7 são: ${arr.join(
        " - "
      )}`;
    }
  } else {
    alert("Erro");
  }
});
