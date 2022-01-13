class Observable {
    constructor() {
        this.observables = [];
    }

    //adiciona novos itens
    subscribe(fn) {
        this.observables.push(fn);
    }

    //recebe um dado e passa pra cada funcao
    notify(data) {
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe1 ${data}`);
const logData2 = data => console.log(`Subscribe2 ${data}`);
const logData3 = data => console.log(`Subscribe3 ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified1');

o.unsubscribe(logData2);

o.notify('notified2');