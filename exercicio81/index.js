const key = document.querySelector(".form-control");
let tr = document.getElementById("tr");
let menor = document.getElementById("menor");
let btn = document.getElementById("btn");
let arr = [];
let arrM = [];

function cadastrat() {
  let nome = document.getElementById("inpNome").value;
  let idade = parseInt(document.getElementById("inpIdade").value);
  let peso = parseInt(document.getElementById("inpPeso").value);
  let altura = parseInt(document.getElementById("inpAltura").value);

  obj = {
    nome: nome,
    idade: idade,
    peso: peso,
    altura: altura,
  };

  arr.push(obj);
  criarTabela();
  menorF();
}

function criarTabela() {
  let idade = parseInt(document.getElementById("inpIdade").value);

  tr.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    tr.innerHTML += `
    <tr>
      <td>${arr[i].nome}</td>
      <td>${arr[i].idade}</td>
      <td>${arr[i].peso}</td>
      <td>${arr[i].altura}</td>
    </tr>
    `;
  }
}

function menorF() {
  let idade = parseInt(document.getElementById("inpIdade").value);

  if (idade >= 18) {
    arrM.push(idade);
    console.log(arrM);

    menor.innerHTML = "";
    for (let m = 0; m < arrM.length; m++) {
      menor.innerHTML = `
        <tr>
          <th>Total de maiores de 18:</th>
          <td colspan="3">${arrM.length}</td>
        </tr>
      `;
    }
  }
}

function press() {
  if (event.key == "Enter") {
    cadastrat();
  }
}

key.addEventListener("keydown", press);
btn.addEventListener("click", cadastrat);
