//Encontra o maior número passado como parametro
function findMax() {
    //garante numeros positivos e negativos
    let max = -Infinity;

    for (i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

console.log(findMax(1 ,5,5,4,3,2,7,50))


console.log("\n==============EXEMPLO2==================")

function showArgs() {
    return arguments;
}

console.log(showArgs(1, 2, 5, "string", ["array", 6, 7]));