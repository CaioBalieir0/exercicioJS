let btn = document.getElementById("btn");
let div = document.getElementById("div");

btn.addEventListener("click", () => {
  let inp1 = parseFloat(document.getElementById("inp1").value);
  let inp2 = parseFloat(document.getElementById("inp2").value);

  let A = [];
  let B = [];
  let C = [];

  A.push(inp1);
  B.push(inp2);

  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0 || B[i] < 0) {
      alert("erro");
    } else if (A[i] == B[i]) {
      C.push(A[i] + B[i]);
      div.innerHTML = `A=${A[i]}, B=${B[i]} e C = ${C[i]} `;
    } else {
      C.push(A[i] * B[i]);
      div.innerHTML = `A=${A[i]}, B=${B[i]} e C = ${C[i]} `;
    }
  }
});
