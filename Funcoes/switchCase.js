function getAnimal(id) {
    switch(id) {
        case 1:
            return "Cão"
        case 2:
            return "Gato"
        case 3:
            return "Passáro"
        default:
            return "Peixe"
    }
}

console.log(getAnimal(1));
console.log(getAnimal(3));
console.log(getAnimal("2"));
console.log(getAnimal());