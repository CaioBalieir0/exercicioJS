let div = document.getElementById("div");

function calcular() {
  let inp1 = parseFloat(document.getElementById("inp1").value);
  let inp2 = parseFloat(document.getElementById("inp2").value);

  let menor = inp1;
  let maior = inp2;

  if (menor > maior) {
    maior = inp1;
    menor = inp2;
  }

  while (menor < maior) {
    if (menor % 2 == 0 && menor % 7 == 0) {
      div.innerHTML += menor + "<br>";
    }
    menor++;
  }
}
