//Exclusivo node
//importar modulo events

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data)
    }
}

const users = new Users();

//emitindo evento
users.on('User logged', data => {
    console.log(data)
});

users.userLogged({ user: 'Gustavo Gama' })