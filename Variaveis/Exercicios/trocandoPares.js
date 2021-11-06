//Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

function substituiPares(array) {
    //verificando se array existe = null
    if(!array) {
        return -1;
    }
    //verificando array vazio
    if(!array.length) {
        return -1;
    }

    //Verificando numeros PARES e ZERO
    for(i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("Já é zero!");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr2 = [];

console.log(substituiPares(arr));
console.log(substituiPares(arr2));

