function calcular() {
  var inp = document.getElementById("inp").value;

  for (let i = 1; i < inp; i++) {
    if (i % 2 == 1) {
      document.getElementById("res").innerHTML += i + " ";
    }
  }
}
