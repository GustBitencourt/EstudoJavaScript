//funções com pausa e recomeço -necessario adicionar asterisco
//necessario guardar a funcao num it
function* hello() {
    console.log("Hello");
    yield;

    console.log("From");
    yield 2;

    console.log("Funciton");
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());


//Exemplo2

function* naturalNumbers() {
    let number = 0;
    while(true) {
        yield number;
        number ++;
    }
}

const it2 = naturalNumbers();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());


//Generator em objeto iteravel
const objetos = {
    values: [11, 22, 33, 44],
    *[Symbol.iterator]() {
        for(let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}

for(let value of objetos) {
    console.log(value);
}