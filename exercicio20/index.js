let r = prompt("Informe o raio da esfera:");

r = parseFloat(r);

a = 4 * Math.PI * Math.pow(r, 2);
v = (4 * Math.PI * Math.pow(r, 3)) / 3;

document.write(`O volume da esfera é ${v}`);
