let btn = document.getElementById("btn");
let div = document.getElementById("div");

btn.addEventListener("click", () => {
  let n1 = document.getElementById("inp1").value;
  let n2 = document.getElementById("inp2").value;

  let arr = [];
  let menor = n1;
  let maior = n2;
  if (menor > maior) {
    menor = n2;
    maior = n1;
  }
  while (menor <= maior) {
    arr.push(menor);
    menor++;
  }
  div.innerHTML = `Os números compreendidos são`;
  for (i = 0; i < arr.length; i++) {
    div.innerHTML += ` ${arr[i]}`;
  }
});
