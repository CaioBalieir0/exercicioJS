let btn = document.getElementById("btn");
let div = document.getElementById("div");

btn.addEventListener("click", () => {
  let h = parseFloat(document.getElementById("h").value);
  let sexo = document.getElementById("sexo").value;
  let imc = 0;
  if (sexo == 1) {
    imc += 72.7 * h - 58;
    div.innerHTML = `Seu peso ideal é ${imc.toFixed(2)}kg`;
  } else if (sexo == 2) {
    imc += 63.1 * h - 44.7;
    div.innerHTML = `Seu peso ideal é ${imc.toFixed(2)}kg`;
  }
});
