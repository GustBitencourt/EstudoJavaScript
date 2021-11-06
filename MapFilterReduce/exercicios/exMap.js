/* Map
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele. */

const banana = {
    value: 3
}

const manga = {
    value: 5
}


function mapThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const numArray = [1, 2];

console.log('this banana', mapThis(numArray, banana));
console.log('this manga', mapThis(numArray, manga));


console.log('\n=========EXEMPLO2===========');

function dobrandoMap(array) {
    return array.map((item) => item *2);
}

const numeros = [5, 6, 8, 9, 99, 1000];

console.log(dobrandoMap(numeros));
