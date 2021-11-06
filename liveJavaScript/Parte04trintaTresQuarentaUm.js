var carros = ['Ford', 'Chevrolet', 'Honda'];

console.log("Retorna Index:");
for(carro in carros) { //retorna index
    console.log(carro);
}

console.log("\nRetorna Propriedade:");
for(carro in carros) { //retorna propriedade
    console.log(carros[carro]);
}

console.log("\nRetorna Propriedade e index:");
carros.forEach(function meuFor(item, index){
    console.log(item, index); //retorna propriedade e index
})

console.log("\nFunciona igual o forEach");
const _ = {
    forEach(array, callback) {
        for(i=0; i < carros.length; i++) {
            callback(carros[i], i);
        }
    }
}

_.forEach(carros, (item, index) => {
    console.log(item, index)
})

console.log("Faz o mesmo que o método acima");
carros.forEach((item, index) => {
    console.log(item, index)
})