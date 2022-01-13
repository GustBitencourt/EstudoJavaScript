//rest é um array logo podemos usar seus metodos
function soma(...args) {
    return args.reduce((acumulador, value) => acumulador + value, 0);
}
console.log(soma(7, 3, 10, 6, 8, 15));

const multiply = (...args) => {
    return args.reduce((acc, value) => acc * value, 1);
}
console.log(multiply(7, 3, 12, 1, 19, 4));



//spread - string - arrays - object e objetos iteraveis

const str = 'Vai Corinthians';

function logArgs(...args) {
    console.log(args);
}
//quebra a string e transforma em um array
logArgs(...str)


const arr = [1, 2, 3, 4];
function logArrray(a, b, c, d) {
    console.log(a, b, c, d);
}
//quebra o array e transforma em um parametro
logArrray(...arr);

//combinar arrays
const arr2 = [...arr, 5, 6, 7];
console.log(arr2);


//objetos
//spread clona propriedades de objetos
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);