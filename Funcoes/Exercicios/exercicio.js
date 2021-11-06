//Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!



function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Gustavo",
    idade: 25
}

const pessoa2 = {
    nome: "Priscilla",
    idade: 30
}

const pessoa3 = {
    nome: "Rafaella",
    idade: 28
}

const pessoa4 = {
    nome: "Elua",
    idade: 52
}

const pessoa5 = {
    nome: "Alfredo",
    idade: 59
}

console.log(pessoa1.nome);
console.log(calculaIdade.call(pessoa1, 20));
console.log(calculaIdade.apply(pessoa1, [20]));

console.log('\n'+pessoa2.nome);
console.log(calculaIdade.call(pessoa2, 13));
console.log(calculaIdade.apply(pessoa2, [13]));

console.log('\n'+pessoa3.nome);
console.log(calculaIdade.call(pessoa3, 23));
console.log(calculaIdade.apply(pessoa3, [23]));

console.log('\n'+pessoa4.nome);
console.log(calculaIdade.call(pessoa4, 12));
console.log(calculaIdade.apply(pessoa4, [12]));

console.log('\n'+pessoa5.nome);
console.log(calculaIdade.call(pessoa5, 51));
console.log(calculaIdade.apply(pessoa5, [51]));