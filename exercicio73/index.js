let div = document.getElementById("div");
let btn = document.getElementById("btn");
let arr = [];

btn.addEventListener("click", () => {
  let n = parseFloat(document.getElementById("inp").value);

  arr.push(n);

  let aux = "";
  let q = 0;
  for (let i = 0; i < arr.length; i++) {
    q = Math.pow(arr[i], 2) + aux + " ";
  }
  div.innerHTML += `${q}`;
});
