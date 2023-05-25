let n = 0;
let soma = 0;

while (n < 100) {
  n++;
  if (n % 2 == 0 && n % 5 == 0 && n % 7 == 0) {
    console.log(n);
    soma += n;
  }
}
console.log(`Soma: ${soma}`);
