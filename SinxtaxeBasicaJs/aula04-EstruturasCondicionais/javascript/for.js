let arrayClubes = ['Manchester United', 'Corinthians', 'Bahia'];

for(i = 0; i <arrayClubes.length; i++) {
    console.log(arrayClubes[i]);
}

let exObjeto = {
    nome: 'Gustavo',
    idade: 25,
    clube: 'Corinthians'
};

console.log('\n================== For In =============')

for(let i in arrayClubes) {
    console.log(arrayClubes[i]);
}

for(i in exObjeto) {
    console.log(i);
}

console.log('\n================== For Of =============')

for(let i of arrayClubes) {
    console.log(arrayClubes[i]);
}