let div = document.getElementById("div");

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    div.innerHTML += i + "*<br>";
  } else {
    div.innerHTML += i + "@@<br>";
  }
}
