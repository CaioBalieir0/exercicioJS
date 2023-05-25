let num = prompt("Digite um número:");

num = parseFloat(num);

document.write(
  `O número digitado foi ${num}.<br> Sua raíz quadrada é ${Math.sqrt(
    num
  )}. <br> Sua raíz cúbica é ${Math.cbrt(num)}.`
);
console.log(
  `O número digitado foi ${num}, sua raíz quadrada é ${Math.sqrt(
    num
  )}, sua raíz cúbica é ${Math.cbrt(num)}.`
);
