//Some todos os números de um array

function somaTudo(array) {
    return array.reduce((valorAnterior, valorAtual) => {
        return valorAnterior + valorAtual;
    })
}

const numeros = [1, 2]
const numeros2 = [1, 2, 3, 4];
const numeros3= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(somaTudo(numeros));
console.log(somaTudo(numeros2));
console.log(somaTudo(numeros3));