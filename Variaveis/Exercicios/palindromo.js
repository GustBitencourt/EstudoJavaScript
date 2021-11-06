//Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
//Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
function verificaPalindromo(string) {
    if (!string) return "Insira uma palavra";

    //separar letra por letra, reverte e agrupa.
    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("ana"));
console.log(verificaPalindromo("ama"));
console.log(verificaPalindromo("gato"));