const calculo = function (operation, num1, num2) {
    return operation(num1,num2);
}

const soma = function (num1, num2) {
    return num1 + num2;
}

const subtracao = function (num1, num2) {
    return num1 - num2;
}

const resultadoSoma = calculo(soma, 10, 5);
const resultadoSubtracao = calculo(subtracao, 10, 3);

console.log(resultadoSoma);
console.log(resultadoSubtracao);