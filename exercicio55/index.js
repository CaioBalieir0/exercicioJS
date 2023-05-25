let btn = document.getElementById("btn");
let Divtodos = document.getElementById("todos");
let Divsoma = document.getElementById("soma");
let Divqtd = document.getElementById("qtd");
let Divmedia = document.getElementById("media");
let Divpar = document.getElementById("par");
let arr = [];

btn.addEventListener("click", adicionar);

function adicionar() {
  let numero = parseFloat(document.getElementById("numero").value);
  arr.push(numero);

  Divqtd.innerHTML = `<strong>Quantidade de números: </strong> ${arr.length}`;

  todosNumeros();
  somar();
  mediaPar();
}

function todosNumeros() {
  let aux = "";
  for (let i = 0; i < arr.length; i++) {
    aux += arr[i] + " ";
  }
  Divtodos.innerHTML = `<strong>Todos números digitados: </strong> ${aux}`;
}

function somar() {
  let mais = 0;
  let qntdpar = 0;

  for (let i = 0; i < arr.length; i++) {
    mais += arr[i];
    qntdpar++;
  }
  Divsoma.innerHTML =
    qntdpar > 0 ? `<strong>Soma dos números digitados: </strong> ${mais}` : "";

  mediaNumeros(arr.length, mais);
}

function mediaNumeros(qtd, valor) {
  Divmedia.innerHTML = `<strong>Média dos números digitados: </strong> ${(
    valor / qtd
  ).toFixed(2)}`;
}

function mediaPar() {
  let qtdPar = 0;
  let SomaPar = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      SomaPar += arr[i];
      qtdPar++;
    }
  }
  Divpar.innerHTML =
    qtdPar > 0
      ? `<strong>Média dos números pares: </strong>${(SomaPar / qtdPar).toFixed(
          2
        )}`
      : "";
}
