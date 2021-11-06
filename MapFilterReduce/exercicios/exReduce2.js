/* Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */

const listaDeCompras = [
    { 
        name: 'Açucar',
        preco: 10
    },
    { 
        name: 'Picanha',
        preco: 70
    },
    { 
        name: 'Cerveja',
        preco: 30
    },
    { 
        name: 'Abacate',
        preco: 5
    }
];

const saldoAtual = 100;

function calculaSaldo(saldoAtual, array) {
    return array.reduce((valorAnterior, proxValor) => {
        return valorAnterior - proxValor.preco
    }, saldoAtual);
}

console.log(calculaSaldo(saldoAtual, listaDeCompras));
