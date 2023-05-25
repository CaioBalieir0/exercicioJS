let div = document.getElementById("div");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let n = parseInt(Math.random(11));

  if (n > 9) {
    div.innerHTML = `O nível de risco é ${n}. <strong>O risco é GRAVE</strong>`;
  } else {
    div.innerHTML = `O nível de risco é ${n}. O risco não é grave`;
  }
});
