let object = {};
object.name = "Gustavo";
object.age = 25;
console.log(object);
console.log(Object.values(object));
console.log(Object.keys(object));


console.log("\n==============Exemplo2==================");
let person = {
    name: "John",
    age: 25,
    address: "Rua das Corujas"
}

console.log(person.name);
console.log(person.age);
console.log(person.address);

//criando nova chave
person["numberOfSiblings"] = 3;
console.log(person.numberOfSiblings);

//inserindo a chave abaixo
let mom = "nameOfMom";
person[mom] = "Martha";
console.log(person);



