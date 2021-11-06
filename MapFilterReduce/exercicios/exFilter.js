/* Filtre e retorne todos os números pares de um array. */

const numeros = [11, 22, 33, 44, 55, 66, 77, 88, 99, 666];

function filtraPares(array) {
    return array.filter((item) => item % 2 === 0);
}

console.log(filtraPares(numeros));