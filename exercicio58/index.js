let div = document.getElementById("div");
let n = 300;

while (n > 30) {
  if (n % 5 == 0 && n % 3 == 0) {
    div.innerHTML += n + "<br>";
  }
  n--;
}
