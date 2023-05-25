let a = prompt("Digite a nota A do aluno:");
let b = prompt("Digite a nota B do aluno:");
let c = prompt("Digite a nota C do aluno:");

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

document.write(
  `As notas tiradas pelo aluno foram : <br> Prova A = ${a} <br> Prova B = ${b} <br> Prova C = ${c} <br>`
);

m = (a + b + c) / 3;

document.write(`Sua média é: ${m} <br>`);

if ((m >= 7.5)) {
  document.write("Aprovado");
} else {
  document.write("Reprovado");
}
