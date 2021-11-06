const retornaNome = function () {
    return this.nome
}

let gustavo = retornaNome.bind({nome: "Gustavo"});

console.log(gustavo());