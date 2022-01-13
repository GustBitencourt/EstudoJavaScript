let arr = ['Apple', 'Orange', 'Banana', ['Tomato']];

let apple = arr[0];
let orange = arr[1];
let banana = arr[2];
let tomato = arr[3][0];

//Destructuring Assignment
let [apple2, orange2, banana2, [tomato2]] = ['Apple', 'Orange', 'Banana', ['Tomato']];

//Exemplo objetos
let obj = {
    name: 'Gustavo',
    props: {
        age: 26,
        favoriteClubs: ['Bahia', 'Corinthians']
    }
}

//let name = obj.name;
//let club1 = obj.props.favoriteClubs[0];

//Destructuring - necessario ter o mesmo nome da propriedade
// necessario desestruturar duas vezes caso tenha outro objeto
let { name } = obj;
let { props: { age, favoriteClubs: [club1, club2] }} = obj;

console.log(name);
console.log(age);
console.log(club1);


//Exemplo 2

let arr2 = [
    {
        nameFruit: 'Banana',
        type: 'fruit'
    }
]

//let fruit1 = arr2[0].name;

let [ {nameFruit} ] = arr2;
console.log(nameFruit);


//Functions
function soma([a, b]) {
    return a + b
}

console.log(soma([4, 6]));