const students = [
    {
        name: 'John',
        grade: 2
    },
    {
        name: 'Marta',
        grade: 7
    },
    {
        name: 'Bruce',
        grade: 3
    },
    {
        name: 'Ana',
        grade: 9
    },
];

function getApproved(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

function getReproved(studentsList) {
    return studentsList.filter(student => student.grade < 7);
}

console.log('Aprovados:');
console.table(getApproved(students));

console.log('\nReprovados:');
console.table(getReproved(students));