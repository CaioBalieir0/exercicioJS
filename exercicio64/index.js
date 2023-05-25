let btn = document.getElementById("btn");
let div = document.getElementById("div");

btn.addEventListener("click", () => {
  let n1 = parseFloat(document.getElementById("inp1").value);
  let n2 = parseFloat(document.getElementById("inp2").value);

  let maior = [];
  let menor = [];

  if (n1 > n2) {
    maior.push(n1);
    menor.push(n2);
  } else {
    maior.push(n2);
    menor.push(n1);
  }

  for (let i = 0; i < menor.length; i++) {
    div.innerHTML = `O menor número é: ${menor[i]}`;
  }
});
