let lado = prompt("Digite a medida do lado do quadrado:");

lado = parseInt(lado);

area = Math.pow(lado, 2);
perimetro = lado + lado + lado + lado;

console.log("A área do quadrado é: " + area);
console.log("O perímetro do quadrado é: " + perimetro);
