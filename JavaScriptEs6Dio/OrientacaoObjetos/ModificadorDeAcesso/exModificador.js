class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() { 
        return this.#name; 
    }
}

const p = new Person('Gustavo');

console.log(p);

console.log(p.getName());
console.log(p.name); //undefined

p.setName('Gama');
console.log(p.getName());