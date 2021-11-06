const botao = document.getElementById('mode-selector');
botao.addEventListener('click', mudarTema);

const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function mudarTema() {
    trocarClasse();
    trocarTextos();
}

function trocarTextos() {
    if(body.classList.contains('dark-mode')) {
        botao.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return;
    }

    botao.innerHTML = "Dark Mode";
    h1.innerHTML = "Light Mode ON";
}

function trocarClasse() {
    botao.classList.toggle('dark-mode')
    h1.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}