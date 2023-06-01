let cadastrar = document.getElementById("cadastrar");
let pesquisar = document.getElementById("pesquisar");
let p = document.getElementById("p");
let tabela = document.getElementById("table");
let arr = [];
let arrM = [];
let arrF = [];

function cadastrarF() {
  let nome = document.getElementById("inpNome").value;
  let idade = document.getElementById("inpIdade").value;
  let sexo = document.getElementById("select").value;

  let obj = {
    nome: nome,
    idade: idade,
    sexo: sexo,
  };

  arr.push(obj);

  if (sexo == "M") {
    arrM.push(obj);
  }
  if (sexo == "F") {
    arrF.push(obj);
  }

  criarTabelaF();
}

function criarTabelaF() {
  tabela.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    tabela.innerHTML += `
    <tr>
        <td>${arr[i].nome}</td>
        <td>${arr[i].idade}</td>
        <td>${arr[i].sexo}</td>
    </tr>
    `;
  }

  p.innerHTML = arr.length;
}

function filtroF() {
  let sexoFiltrado = document.getElementById("selectFiltro").value;
  tabela.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    if (sexoFiltrado == 0) {
      tabela.innerHTML += `
        <tr>
            <td>${arr[i].nome}</td>
            <td>${arr[i].idade}</td>
            <td>${arr[i].sexo}</td>
        </tr>
        `;

      p.innerHTML = arr.length;
    } else if (sexoFiltrado == 1) {
      tabela.innerHTML += `
        <tr>
            <td>${arrM[i].nome}</td>
            <td>${arrM[i].idade}</td>
            <td>${arrM[i].sexo}</td>
        </tr>
        `;

      p.innerHTML = arrM.length;
    } else if (sexoFiltrado == 2) {
      tabela.innerHTML += `
          <tr>
              <td>${arrF[i].nome}</td>
              <td>${arrF[i].idade}</td>
              <td>${arrF[i].sexo}</td>
          </tr>
          `;

      p.innerHTML = arrF.length;
    }
  }
}

cadastrar.addEventListener("click", cadastrarF);
pesquisar.addEventListener("click", filtroF);
