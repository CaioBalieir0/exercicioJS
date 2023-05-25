let btn = document.getElementById("btn");
let div = document.getElementById("div");

function enviar() {
  let inp1 = parseFloat(document.getElementById("inp1").value);
  let inp2 = parseInt(document.getElementById("inp2").value);

  if (inp1 < 100 || inp1 > 104 || inp2 <= 0) {
    alert("erro");
  } else {
    let item = "";
    let valor = 0;
    if (inp1 == 100) {
      item = "cachorro quente";
      valor = 4.5;
    } else if (inp1 == 101) {
      item = "bauru simples";
      valor = 4.5;
    } else if (inp1 == 102) {
      item = "bauru com ovo";
      valor = 5.5;
    } else if (inp1 == 103) {
      item = "hambúguer";
      valor = 6.5;
    } else {
      item = "refrigerante";
      valor = 3.5;
    }
    div.innerHTML = `<p>Foram pedidos ${inp2} ${item}. O valor é R$ ${(
      valor * inp2
    ).toFixed(2)}</p>`;
  }
}

btn.addEventListener("click", enviar);
