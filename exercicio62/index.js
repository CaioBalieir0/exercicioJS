let table = document.getElementById("table");
let btn = document.getElementById("btn");

function calcular() {
  let arrC = [];
  let arrP = [];

  let pol = 1;
  while (pol <= 20) {
    arrP.push(pol);
    pol++;
  }

  for (let i = 0; i < arrP.length; i++) {
    arrC[i] = arrP[i] * 2.54;
    table.innerHTML += `
  <tbody>
    <tr>
      <td>${arrC[i]}</td>
      <td>${arrP[i]}</td>
    </tr>
  </tbody>`;
  }
}
