let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");
let div = document.getElementById("div");

function enviar() {
  if (inp2.value > 0 && inp2.value < 4) {
    if (inp2.value == 1) {
      div.innerHTML = `Foram comprados ${inp1.value} do tipo ${
        inp2.value
      } seu preço unitário é R$${1.5} e o preço total é ${
        inp1.value * 1.5
      } reais`;
    } else if (inp2.value == 2) {
      div.innerHTML = `Foram comprados ${inp1.value} do tipo ${
        inp2.value
      } seu preço unitário é R$${2.6} e o preço total é ${
        inp1.value * 2.6
      } reais`;
    } else {
      div.innerHTML = `Foram comprados ${inp1.value} do tipo ${
        inp2.value
      } seu preço unitário é R$${3.75} e o preço total é ${
        inp1.value * 3.75
      } reais`;
    }
  } else {
    window.alert("Erro");
  }
}

btn.addEventListener("click", enviar);
