//parametro pré definido
function exponencial(array, num = 1) {
    const resultado = [];

    for(i = 0; i < array.length; i++) {
        resultado.push(array[i] ** num);
    }

    return resultado;
}

console.log("O expoente será igual a um já que não está declarado");
console.log(exponencial([1, 2, 3, 4])); 

console.log("Com o exponencial declarado: ")
console.log(exponencial([1, 2, 3, 4], 2));
console.log(exponencial([1, 2, 3, 4], 3));
console.log(exponencial([1, 2, 3, 4], 4));