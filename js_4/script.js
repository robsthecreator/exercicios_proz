num1 = 4;
num2 = 5;

function valores() {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;

    return console.log(`
    o valor da sua soma é: ${soma}
    o valor da sua subtração é: ${subtracao}
    o valor da sua multiplicação é: ${multiplicacao}
    o valor da sua divisão é: ${divisao}
    `)
};

valores(num1, num2);