/* Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

-Crie uma função que recebe um array e um número
-Realize as seguintes validações:
    .Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    .Se o array não for do tipo 'object', lance um erro do tipo TypeError
    .Se o número não for do tipo 'number', lance um erro do tipo TypeError
    .Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
-Utilize a declaração try...catch
-Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */


function validacaoArray(array, num) {
    try {
        if (!array && !num) throw new ReferenceError("Envie um array válido!");

        if (typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object!");
        if (typeof num !== 'number') throw new TypeError("Array precisa ser do tipo number!");

        if (array.length !== num) throw new RangeError("Tamanho de array inválido!");

        return array;

    } catch (e) {

        if(e instanceof RangeError){
            console.error(`RangeError: ${e.message}`);

        } else if(e instanceof TypeError){
            console.error(`TypeError: ${e.message}`);

        } else if(e instanceof ReferenceError){
            console.error(`RangeError: ${e.message}`);

        } else {
            console.error(`Erro não esperado: ${e}`);
        }
    }
}
console.log(validacaoArray()); //ReferenceError
console.log(validacaoArray(2, 2)); //TypeError object
console.log(validacaoArray([], 'a')); //TypeError number
console.log(validacaoArray([], 3)); //RangeError
console.log(validacaoArray([1,2,3,4], 3)); //RangeError
console.log(validacaoArray([1, 2, 3], 3));// Chamada correta