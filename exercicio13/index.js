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

a *= 1;
b *= 2;
c *= 3;
d *= 4;

m = a + b + c + d;

soma = 1 + 2 + 3 + 4;

m /= soma;

document.write(`Sua média ponderada é: ${m} <br>`);