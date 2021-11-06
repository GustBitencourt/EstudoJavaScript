function multiplicaPorDois(arr) {
    let multiplicados = [];

    //pegar cada elemento e multiplicar por dois
    for (let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumero = [2, 10, 25, 66, 1, 222];

console.log(multiplicaPorDois(meusNumero));