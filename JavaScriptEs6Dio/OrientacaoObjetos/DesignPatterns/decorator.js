let loggedIn = false;

function callIfAuthentication (fn) {
    return !!loggedIn && fn;
}

function soma (a, b) {
    return a + b;
}

console.log(callIfAuthentication(() => soma(2, 8)));
loggedIn = true;
console.log(callIfAuthentication(() => soma(2, 8)));