let num1 = prompt("Digite um número: ");
let num2 = prompt("Digite outro um número: ");

console.log("O número digitado foi: " + num1);
console.log("O número digitado foi: " + num2);

num1 = parseInt(num1);
num2 = parseInt(num2);

soma = num1 + num2;

console.log("A soma dos números digitados é: " + soma);

sub = num1 - num2;

console.log("A subtração dos números digitados é: " + sub);

mult = num1 * num2;

console.log("A multiplicação dos números digitados é: " + mult);

div = num1 / num2;

console.log("A divisão dos números digitados é: " + div);

med = soma / 2;
console.log("A média dos números digitados é: " + med);
