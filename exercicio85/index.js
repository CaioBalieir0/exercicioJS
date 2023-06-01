let div = document.getElementById("div");
let btn = document.getElementById("btn");
let arr = [];

btn.addEventListener("click", () => {
  let inp = parseFloat(document.getElementById("inp").value);
  let mult = 1;
  for (let n = 1; inp >= n; n++) {
    arr.push(n);
    mult *= n;
  }
  div.innerHTML = arr.join(" - ") + "<br>Produto = " + mult;
});
