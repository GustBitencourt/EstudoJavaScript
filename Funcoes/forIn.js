console.log("=============EXEMPLO em CHAVES do objeto===================");
function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

const meuObj = {
    nome: "João",
    idade: 23,
    cidade: "Salvador"
}

forInExemplo(meuObj);

console.log("=============EXEMPLO em VALORES do objeto===================");
function forInExemplo2(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObj2 = {
    nome: "João",
    idade: 23,
    cidade: "Salvador"
}

forInExemplo2(meuObj2);