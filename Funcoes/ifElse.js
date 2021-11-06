//Maneira 1
console.log("======Exemplo1=======")
function numPositivo(num) {
    let resultado = 0;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

console.log(numPositivo(7));
console.log(numPositivo(-5));

console.log("\n======Exemplo2=======")
//Maneira 2
function numPositivo2(num) {
    let resultado = 0;
    const ehNegativo = num < 0;

    if (ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

console.log(numPositivo2(7));
console.log(numPositivo2(-5));

console.log("\n======Exemplo3=======")
function numPositivo3(num) {
    const ehNegativo = num < 0;

    if (ehNegativo) {
        return false;
    }
    return true;
}

console.log(numPositivo3(7));
console.log(numPositivo3(-5));


console.log("\n======Exemplo4=======")
function numPositivo4(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if (ehNegativo) {
        return "Esse número é negativo";

    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!"
    }
    return "Esse número é positivo!";
}

console.log(numPositivo4(7));
console.log(numPositivo4(-5));
console.log(numPositivo4(50));
