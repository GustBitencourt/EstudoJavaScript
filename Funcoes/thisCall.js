const pessoa = {
    name: "Gustavo"
}

const animal = {
    name: "Sanji"
}

function getAlgo(){
    console.log(this.name);
}

console.log("Call 'chama' o this");
getAlgo.call(pessoa);
getAlgo.call(animal);

console.log("\n======================EXEMPLO 2==========================")
const myObj = {
    num1: 5,
    num2: 3
}

function soma(numA, numB) {
    console.log(this.num1 + this.num2 + numA + numB);
}
//SOma os números do objeto e aqueles passado como parametros
soma.call(myObj, 2, 5);