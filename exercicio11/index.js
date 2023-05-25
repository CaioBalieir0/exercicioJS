let n = prompt("Digite um número:");

n = parseFloat(n);

d = Math.pow(n, 2);
t = Math.pow(n, 3);
q = Math.pow(n, 4);
c = Math.pow(n, 5);

console.log(
  `O valor digitado foi: ${n}, ao quadrado é ${d}, ao cubo é ${t}, elevado à quarta é ${q} e elevado á quinta é ${c}.`
);
