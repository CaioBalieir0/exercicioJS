let div = document.getElementById("div");

let aux = "";
for (let i = 1; i <= 600; i++) {
  if (i % 2 == 0) {
    aux += i + "<br>";
    div.innerHTML = aux;
  }
}
