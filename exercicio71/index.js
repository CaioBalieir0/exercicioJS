let div = document.getElementById("div");

for (let i = 1; i <= 100; i++) {
  if (i % 4 == 0) {
    div.innerHTML += i + " PI<br>";
  } else {
    div.innerHTML += i + "<br>";
  }
}
