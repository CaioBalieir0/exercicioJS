let btn = document.getElementById("btn");
let todos = document.getElementById("todos");
let menor = document.getElementById("menor");
let maior = document.getElementById("maior");
let arr = [];

btn.addEventListener("click", () => {
  let n = parseFloat(document.getElementById("inp").value);
  arr.push(n);

  let maiorN = arr[0];
  let menorN = arr[0];

  let aux = "";
  for (let i = 0; i < arr.length; i++) {
    aux += arr[i] + " ";

    if (maiorN < arr[i]) {
      maiorN = arr[i];
    }

    if (menorN > arr[i]) {
      menorN = arr[i];
    }
  }

  todos.innerHTML = `<strong>Todos: </strong> ${aux}`;
  maior.innerHTML = `<strong>Maiores: </strong> ${maiorN}`;
  menor.innerHTML = `<strong>Menores: </strong> ${menorN}`;
});
