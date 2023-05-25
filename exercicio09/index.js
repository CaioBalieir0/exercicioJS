let b = prompt("Digite o valor da base do retângulo: ");
let h = prompt("Digite o valor da altura do retângulo: ");

b = parseInt(b);
h = parseInt(h);

a = b * h;
p = 2 * (b + h);

console.log("A área do retângulo é: " + a, "e seu perímetro é: " + p);
