//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const exArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

//passar valores do array pro set
function valoresUnicos(arr) {
    const mySet = new Set(arr);

    //Soread operator para formar um novo array, caso contrarário será colocado um set no array
    return [...mySet];
}

console.log(valoresUnicos(exArray));