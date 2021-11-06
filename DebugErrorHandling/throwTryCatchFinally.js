
function verificaPalindromo(string) {
    if(!string) throw "String Inválida";
    
    return string === string.split('').reverse().join('');
}

function tryCatchExample(string) {
    try {
        verificaPalindromo(string);

    } catch (e) {
        console.log(e);
        throw e;
    } finally {
        console.log(`A string enviada foi: ${string}`);
    }
}

tryCatchExample('ala'); 