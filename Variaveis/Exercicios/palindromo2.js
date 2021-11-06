//Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
//Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

function verificaPalindromo(string) {
    if (!string) return "Insira uma palavra";

    //verificação ocorre até a metade na verificação de palindromo
    for(i=0; i<string.length / 2; i++) {
        
        //Comparando se as letras são iguais ex annnna 
        if(string[i] !== string[string.length -1 - i]) {
            return false;
        }

        return true;
    }
}

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("obbbbbbo"));
console.log(verificaPalindromo("obbbbbbo"));