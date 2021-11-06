var carros = ['Honda', 'Toyota', 'Hyunday'];

var novosCarros = carros.map((item, index) =>{
    return 1;
})
console.log("\nMap pode retornar algo na função")
console.log(novosCarros);


var novosCarros2 = carros.map((item, index) =>{
    return { //retorna um novo array com array
        marca: item,
        isCarro: true
    };
});

console.log(novosCarros2);

console.log("\nForEach executa função pra cada item")
console.log("\nMap transformar cada item em uma coisa nova")