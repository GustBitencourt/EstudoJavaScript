var variavel = {
    escopo: "global e local",
    redeclarase: "SIM",
    reatribui: "SIM",
    hoisting: "SIM"
}

let variavel2 = {
    escopo: "bloco",
    redeclarase: "não",
    reatribui: "SIM",
    hoisting: "não"
}

const constante = {
    escopo: "bloco",
    redeclarase: "não",
    reatribui: "não",
    hoisting: "não"
}

console.table(variavel);
console.table(variavel2);
console.table(constante);