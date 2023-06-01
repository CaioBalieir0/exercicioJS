let arr = [];

function imprimir() {
  let inp = document.getElementById("inp").value;
  let n = inp * 2;
  document.getElementById("res").innerHTML = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      arr.push(i);
      document.getElementById("res").innerHTML = arr.join(" - ");
    }
  }
}
