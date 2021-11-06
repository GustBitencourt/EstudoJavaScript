(
    function() {
        let name = "Digital Innovation One"
        return console.log(name);
    }
)();

//Exemplo com parametros
(
    function(num1, num2) {
        return console.log(num1 + num2);
    }
)(3,4)

//Exemplo Armazenando
const soma3 = (
    function(num1, num2) {
        return num1 + num2;
    }
)(1, 2)

console.log(soma3);