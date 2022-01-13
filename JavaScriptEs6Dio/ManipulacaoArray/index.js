//Array Of
const listaPessoas = Array.of('Jhon', 'Gust', 'JP', 'PH');

console.log(listaPessoas);

const arr = Array(5);
const arr2 = Array(5, 2);

console.log('\n',arr);
console.log(arr2);


const numbers = [10, 20, 30, 40, 50];

numbers.forEach((value, i) => {
    console.log(`Index ${i} valor ${value}`);
})

const numbersMap = numbers.map(value => value * 2);
console.log(numbersMap);

const exFlat = [1, 3, [5, 7, [10]]];
//desce apenas um nivel
console.log(exFlat.flat());
//especifica a quantidade de niveis
console.log(exFlat.flat(2));

