console.log("=============EXEMPLO NO OBJETO COMO MÉTODO===================");


const pessoa = {
    firstName: "Gustavo",
    lastName: "Gama",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

console.log(pessoa.fullName());
console.log(pessoa.getId());


console.log("=============EXEMPLO OBJETO GLOBAL NAVEGADOR===================");
//retorna tudo na janela do navegador
console.log(this);


console.log("=============EXEMPLO NA FUNÇÃO===================");
(function() {
    console.log(this);
})();