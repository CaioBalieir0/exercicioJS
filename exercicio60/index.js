let n = parseInt(0);
let soma = parseInt(0);
while (n < 200) {
  if (n % 2 == 1) {
    soma = soma + n;
    console.log(n);
  }
  n++;
}
console.log(soma);
