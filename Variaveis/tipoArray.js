let array = [];
array.push(3); //Adiciona ao último elemento
array.push(2);
console.log(array);
console.log(array.length); //retorna tamanho
array.pop(); //retira o último elemento
console.log(array);
array.push(4);
array.push(5);
array.push(6);
console.log(array);
array.shift(); //retira o primeiro elemento
console.log(array);
array.unshift(7); //adicionale ao primeiro elemento
console.log(array);
console.log(array.reverse());

console.log("\nRetorna booleano")
console.log(array.includes(4));
console.log(array.every(item => item === 5)); //se todo item é igual a 5
console.log(array.some(item => item === 5)); //se algum item é igual a 5



console.log("\nExemplo iterabilidade:");
for (i = 0; i<array.length; i++) {
    console.log(array[i]);
}