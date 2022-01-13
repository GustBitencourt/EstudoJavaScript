function Pessoa() {
    if (!Pessoa.instance) {
        return Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const user = Pessoa.call({name: 'Gust'});

console.log(user);