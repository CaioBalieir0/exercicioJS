let btn = document.getElementById("btn");
let div = document.getElementById("div");
let arr = [];
let cont = 1;

btn.addEventListener("click", () => {
  let n = parseFloat(document.getElementById("inp").value);

  arr.push(n);

  if (n >= 10) {
    for (let i = 0; i < arr.length; i++) {
      while (cont <= arr[i]) {
        div.innerHTML += `${cont} <br>`;
        cont++;
      }
    }
  } else {
    alert("Digite um número maior que dez");
  }
});
