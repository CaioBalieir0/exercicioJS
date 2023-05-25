let sm = 1000;
let gasto = prompt("Quantos quilowatts foram gastos na sua residência?");
let din = 0.00142857142 * sm;
let valor = din * gasto;
let desconto = (10 / 100) * valor;
let vf = valor - desconto;

sm = parseFloat(sm);
gasto = parseFloat(gasto);

document.write(`O salário mínimo é: ${sm} reais<br>`);
document.write(`O valor de cada  quilowatts é: ${din.toFixed(2)} reais. <br>`);
document.write(`O valor a ser pago será ${valor.toFixed(2)} reais. <br>`);
document.write(`Com 10% de desconto você pagará ${vf.toFixed(2)}.`);
