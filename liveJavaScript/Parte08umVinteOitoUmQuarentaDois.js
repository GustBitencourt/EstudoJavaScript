function retornarObj() {
    return {
        name: "Gustavo",
        age: 25,
        roupa: "blusa"
    }
}

const {name, age, roupa = "pelado"} = retornarObj();

console.log(name, age, roupa);


console.log("\nParte 2: Desestruturação");

function retornarObj2({nome, idade}) {
    return {
        name: nome,
        age: idade,
    }
}

console.log(retornarObj2({nome: "Luiz", idade: 20}));


console.log("\nParte 3: Desestruturação Exemplo API");

function retornarObj2({repository: repositorio, age: idade}) {
    return {
        repositorio,
        idade
    }
}

console.log(retornarObj2({repository: "facebook"}));



console.log("\nParte 4: Desestruturação ARRAYS");

const carros = ["Honda", "Toyota"];

const [carro1, carro2] = carros;

console.log(carro1, carro2);