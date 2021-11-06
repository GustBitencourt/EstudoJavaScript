/*Atividade
-Crie uma função que recebe dois números como parâmetros.
-Confira se os números são iguais.
-Confira se a soma dos números é maior que 10 ou menor que 20.
-Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". */


function compare(numA, numB) {
    if(!numA || !numB)  return `Insira dois números`;

    const comparar = numA === numB ? `${numA} e ${numB} são números IGUAIS.` : `${numA} e ${numB} são números DIFERENTES.`;

    
    const soma = numA + numB;
    let somando = (soma >= 10 && soma <= 20) ? `O resultado da soma é ${soma}, logo É ENCONTRADO entre 10 e 20` : `O resultado da soma é ${soma}, logo  NÃO É ENCONTRADO entre 10 e 20`;

    return (`${comparar + somando}`);
}

console.log(compare(20,20))


