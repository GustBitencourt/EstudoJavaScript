let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const buttonAdd = document.getElementById('buttonAdd');


function increment() {
    count++;
	CURRENT_NUMBER.innerHTML = count;

    if(count >= 10) {
        buttonAdd.disabled = true
    }

    if(count < 0) {
        CURRENT_NUMBER.style.color = '#f01045'
    } else {
        CURRENT_NUMBER.style.color = 'black';
    }
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;

    if(count < 0) {
        CURRENT_NUMBER.style.color = '#f01045'
    } else {
        CURRENT_NUMBER.style.color = 'black';
    }
}