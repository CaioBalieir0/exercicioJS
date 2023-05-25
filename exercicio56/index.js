let n = 0;
let soma = 0;

while (n < 1000) {
  n++;
  if (n % 3 == 0 && n % 5 == 0) {
    console.log(n);
    soma += n;
  }
}
document.write(`Soma: ${soma}`);
