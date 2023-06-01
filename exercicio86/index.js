let soma = 0;

for (let i = 25; i < 200; i++) {
  if (i % 2 == 0) {
    soma += i;
    console.log(i);
  }
}
console.log(`soma=${soma}`);
