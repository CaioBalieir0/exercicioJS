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
    let cont = menor;
    while (cont < maior) {
      console.log(cont);
      cont++;
    }
  } else {
    alert("Erro");
  }
});
