let r = prompt("Digite do raio de uma circunferência:");

r = parseFloat(r);

console.log("Perímetro = 2 * PI * r");
console.log("Área = PI * raio ao quadrado");

document.write(
  `O raio da circunferência é: ${r}, sua área é ${
    Math.PI * Math.pow(r, 2)
  } e seu perímetro é ${2 * Math.PI * r}.`
);
