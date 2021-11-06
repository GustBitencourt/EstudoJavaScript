//pode declarar string vazia
let vazio = " ";

let nome = "Gustavo";
let sobrenome = "Gama"

//cocantena
let nomeInteiro = nome.concat(sobrenome);
console.log(nomeInteiro);
//numero de caracteres
console.log(nomeInteiro.length);
//indice
console.log(nome[3]);

//alterando concatenado
nomeInteiro = `${nome} ${sobrenome}`;
console.log(nomeInteiro);

console.log("\nMétodos")
//Exemplo de Métodos
let frase = "Bora Bahea Minha Porra!!";
console.log(frase.split(""));
console.log(frase.split(" ")); //retorna lista do que tem na frase
//retorna boleano
console.log(frase.includes('Bahea'));
console.log(frase.startsWith("B"));
console.log(frase.endsWith("B"));

let novaFrase = frase.replace("Porra", "Zorra");
console.log(novaFrase);



