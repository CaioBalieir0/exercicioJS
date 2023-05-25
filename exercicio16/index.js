let B = prompt("Informe a base do trapézio:");
let b = prompt("Informe a base do trapézio:");
let h = prompt("Informe a altura do trapézio:");

B = parseFloat(B);
b = parseFloat(B);
h = parseFloat(B);

console.log("Área = ((b + B) * h) /2");

document.write(`A área do trapézio é: ${((b + B) * h) / 2}`);
