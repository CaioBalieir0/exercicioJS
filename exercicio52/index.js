let btn = document.getElementById("btn");
let div = document.getElementById("div");

btn.addEventListener("click", () => {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  if (peso <= 0 || altura <= 0) {
    alert("erro");
  } else {
    let imc = peso / Math.pow(altura, 2);

    valor = {
      Abaixo17: "Muito abaixo do peso",
      Entre17: "Abaixo do peso",
      Entre18: "Peso normal",
      Entre25: "Acima do peso",
      Entre30: "Obesidade I",
      Entre35: "Obesidade II(severa)",
      Entre40: "Obesidade III(mórbida)",
    };

    if (imc < 17) {
      console.log(valor.Abaixo17);
    } else if (imc >= 17 && imc <= 18.49) {
      console.log(valor.Entre17);
    } else if (imc >= 18.5 && imc <= 24.9) {
      console.log(valor.Entre18);
    } else if (imc >= 25 && imc <= 29.9) {
      console.log(valor.Entre25);
    } else if (imc >= 30 && imc <= 34.9) {
      console.log(valor.Entre30);
    } else if (imc >= 35 && imc <= 39.9) {
      console.log(valor.Entre35);
    } else if (imc >= 40) {
      console.log(valor.Entre40);
    }
  }
});
