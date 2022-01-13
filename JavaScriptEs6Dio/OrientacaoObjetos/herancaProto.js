'use strict';

function Animal() {
    this.qtdPatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
}

const jake = new Cachorro(false);

console.log(jake);