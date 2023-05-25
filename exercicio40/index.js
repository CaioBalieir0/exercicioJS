let num = 1;
let div = document.getElementById("conteudo");

while (num <= 100) {
  div.innerHTML += `${num} ->`;
  if (num % 10 == 0) {
    div.innerHTML += `<br>`;
  }
  num++;
}
