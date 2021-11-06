var a = 1;
var b = 2;

console.log(a); //1
if (a===1) {
    var a = 21;
    let b = 30;

    console.log(a); //21
    console.log(b); //30
}

console.log(a); //21
console.log(b); //2