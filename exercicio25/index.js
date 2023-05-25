let co = prompt("Digite o perímetro do cateto oposto:");
let ca = prompt("Digite o perímetro do cateto adjacente:");

ca = parseFloat(ca);
co = parseFloat(co);

a = (ca * co) / 2;

h = Math.pow(ca, 2) + Math.pow(co, 2);
h = Math.sqrt(h);

if ((h, ca, co, a < 0)) {
  alert("erro");
} else {
  document.write(
    `O cateto oposto é: ${co}, o cateto adjacente é ${ca}, sua área é de ${a} e sua hipotenusa é ${h}.`
  );
}
