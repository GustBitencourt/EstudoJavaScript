'use strict';

class Animal {
    constructor(qtdPatas) {
        this.qtdPatas = 0;
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.morde = morde;
    }

    latir() {
        console.log('au au')
    }
}

const jake = new Cachorro(false);
const pitMula = new Cachorro(true);

console.log(jake);
console.log(pitMula);
