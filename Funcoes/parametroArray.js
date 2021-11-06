//spread operator separa os elementos do array de maneira independente para serem usados como parametros

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));


console.log("============EXEMPLO2====================");
//rest combina os elementos em um array

function confereTamanho(...args) {
    return console.log(`O tamanho dos parametros passados é de ${args.length}`);
}

confereTamanho();
confereTamanho(1,2);
confereTamanho(10,20,30,40);