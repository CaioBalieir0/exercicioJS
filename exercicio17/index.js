let b = prompt("Digite a base do prisma:");
let h = prompt("Digite a altura do prisma:");

b = parseFloat(b);
h = parseFloat(h);

console.log("Volume = área da base * altura");
console.log("Área da base = (b * h) /2");

ab = (b * h) / 2;

document.write(`O volume do prisma é ${ab * h}.`);
