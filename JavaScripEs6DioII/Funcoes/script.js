function soma (a, b) {
    return a + b;
}

console.log(soma(3, 5));


let subtracao = (a = 0, b = 0) => {
    return a - b;
}

console.log(subtracao(3, 5));

function randomNumber() {
    return Math.random() * 10;
}

