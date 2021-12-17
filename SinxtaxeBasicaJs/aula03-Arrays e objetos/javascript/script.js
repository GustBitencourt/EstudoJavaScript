let vetor = ['string', 1, null, [1, 4], ['maçã', 'laranja'], 'Corinthians', false, true];
console.log(vetor);


//forEach
/* vetor.forEach(function (item, index) {
    console.log(item, index);
}) */

//remove o último item do array (true)
console.log(vetor.pop());

//adiciona item ao final do array
console.log(vetor.push('Brasil'));

//remove o primeiro item do array ('string')
console.log(vetor.shift());

//adiciona item no inicio do array
console.log(vetor.unshift('Bahia'));

//localiza um item no array retornando seu items
console.log(vetor.indexOf('Corinthians'));

//remove um trecho selecionado do array
console.log(vetor.splice(0, 2));

//seleciona um treco do array
console.log(vetor.slice(0, 2));

let exObjeto = {
    nome: 'Gustavo',
    idade: 25,
    ehMaior: true
}

console.log(exObjeto);
console.log(exObjeto.idade);
console.log(exObjeto.nome);

let nome = exObjeto.nome;
console.log(nome)


