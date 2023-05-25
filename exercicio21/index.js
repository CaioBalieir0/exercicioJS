let a = prompt("Digite a nota A do aluno:");
let b = prompt("Digite a nota B do aluno:");
let c = prompt("Digite a nota C do aluno:");
let d = prompt("Digite a nota D do aluno:");
let div = document.getElementById("conteudo");
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
d = parseFloat(d);

document.write(
  `As notas tiradas pelo aluno foram : <br> Prova A = ${a} <br> Prova B = ${b} <br> Prova C = ${c} <br> Prova D = ${d} <br>`
);

a *= 3;
b *= 5;
c *= 6;
d *= 6;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

m = a + b + c + d;

soma = 3 + 5 + 6 + 6;

m /= soma;

document.write(`Sua média ponderada é: ${m} <br>`);

if (m >= 7.5) {
  document.write("Aprovado");
} else {
  document.write("Reprovado");
}
