let parte = ['ombros', 'joelho'];
let musica = ['cabeca', ...parte, 'pe'];

console.log(musica);


function argumentoSpread (x, y, z) {
    return x + y + z;
}

let parametros = [1, 3, 6];

console.log(argumentoSpread(...parametros));