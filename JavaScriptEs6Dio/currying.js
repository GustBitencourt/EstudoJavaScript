function soma(a, b) {
    return a + b;
}

console.log(2, 7);
console.log(2, 5);
console.log(2, 8);

console.log('\n Com o currying fica:')

function somaCurrying(a) {
    return function(b) {
        return a + b;
    }
}

const soma3 = somaCurrying(3);

console.log(soma3(5));
console.log(soma3(2));
console.log(soma3(0));
console.log(soma3(7));