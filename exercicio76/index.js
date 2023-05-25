let div = document.getElementById("div");
let btn = document.getElementById("btn");
let arr = [];
let cont = 100;

btn.addEventListener("click", () => {
  let n = parseFloat(document.getElementById("inp").value);
  arr.push(n);

  if (n <= 10 && n > 0) {
    for (let i = 0; i < arr.length; i++) {
      while (cont > arr[i]) {
        div.innerHTML += `${cont} <br>`;
        cont--;
      }
    }
  } else {
    alert("Digite um número menor que 10 e maior que 0");
  }
});
