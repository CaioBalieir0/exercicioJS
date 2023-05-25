let btn = document.getElementById("btn");
let div = document.getElementById("div");

btn.addEventListener("click", () => {
  let n = parseFloat(document.getElementById("n").value);
  let arr = [];
  arr.push(n);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] += 5;
      div.innerHTML = `${arr[i]}`;
    } else {
      arr[i] += 8;
      div.innerHTML = `${arr[i]}`;
    }
  }
});
