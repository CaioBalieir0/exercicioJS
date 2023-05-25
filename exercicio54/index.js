let numero = 0;
let soma = 0;
let arr = [];

while (arr.length <= 50) {
  if (numero % 2 == 0) {
    arr.push(numero);
    soma += numero;
  }
  numero++;
}
console.log(`soma:${soma}`);
console.log(`${arr.join(" - ")}`);
