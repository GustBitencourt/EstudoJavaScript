/* 
-Crie uma função que recebe o array alunos e um número que irá representar a média final;
-Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
-Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno. */

//Array de objetos
const alunos = [
    {
        nome: "Gustavo",
        nota: 2,        
    },
    {
        nome: "João",
        nota: 7,        
    },
    {
        nome: "Isabelle",
        nota: 10,        
    },
    {
        nome: "Victor",
        nota: 8,        
    },
    {
        nome: "José",
        nota: 5,        
    },
    {
        nome: "Pedro Henrique",
        nota: 1,        
    },
    {
        nome: "Julia",
        nota: 10,        
    }
]


function alunosAprovados(arr, media) {
    let aprovados = [];
    let reprovados = [];

    for(i = 0; i < arr.length; i++) {
        //DESCTRUTURING
        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome)
        } else {
            reprovados.push(nome)
        }
    }

    return `Os alunos aprovados são: ${aprovados},\nOs reprovados são: ${reprovados}`;
}

console.log(alunosAprovados(alunos, 5))