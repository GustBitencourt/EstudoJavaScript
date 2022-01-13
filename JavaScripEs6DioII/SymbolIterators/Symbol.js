//Symbol é um identificador unico que adiciona meta propriedades
const uniqueId = Symbol();

console.log(uniqueId)


const privateKey = Symbol('Hello');
const obj = {
    [privateKey]: 'Hello'
}

console.log(obj);
console.log(Object.getOwnPropertySymbols(obj));


//Well know symbols
const exSymbol = Symbol('BBMP');

const arr = [10, 20, 30, 40];
const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//igual a 
for (let value of arr) {
    console.log(value);
}


//Exemplo 2

const arr2 = [11, 22, 33, 44];
const str = 'Vai Corinthians!';

//transformando o objeto em algo iteravel
const objetos = {
    values: [11, 22, 33, 44],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

for (let value of objetos) {
    console.log(value);
}

//fazendo spread
const arrSpread = [...objetos];
console.log(arrSpread);
