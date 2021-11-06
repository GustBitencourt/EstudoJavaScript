console.log("================EXEMPLO1===================");
function letras(palavra) {
    for(letra of palavra) {
        console.log(letra)
    }
}

const palavra = "otorrinolaringologista";

letras(palavra);


console.log("\n================EXEMPLO2===================");
function logNumeros(nums) {
    for(num of nums) {
        console.log(num)
    }
}

const numero = [2,3,5,7,8,99,112,333];

logNumeros(numero);