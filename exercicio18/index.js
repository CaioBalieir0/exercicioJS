let r = prompt("Digite o raio da circunferêcia menor:");
let R = prompt("Digite o raio da circunferêcia maior:");

r = parseFloat(r);
R = parseFloat(R);

Ar = Math.PI * Math.pow(r, 2);
AR = Math.PI * Math.pow(R, 2);

A = AR - Ar;

document.write(`A área da coroa é ${parseFloat(A).toFixed(2)}`);
