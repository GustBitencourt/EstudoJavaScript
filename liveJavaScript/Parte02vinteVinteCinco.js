//Acesso Objetos

var pessoa = {
    nome: 'Gustavo',
    idade: 25,
    computador: {
        modelo: 'Dell',
        ano: 2018
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa['computador']);
console.log(pessoa['computador']['modelo']);