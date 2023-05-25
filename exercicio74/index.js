let div = document.getElementById("div");
let arr = [];

let n = 1;

while (n <= 10) {
  arr.push(n);
  n++;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    div.innerHTML += `${arr[i]}<br>`;
    console.log(arr);
  }
}
