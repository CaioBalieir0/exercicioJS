let div = document.getElementById("div");
let arr = [];

for (let i = 1; i <= 20; i++) {
  arr.push(i);
}

let aux = "";
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  aux += Math.pow(arr[i], 2) + " ";
  div.innerHTML = `${aux}  `;
}
